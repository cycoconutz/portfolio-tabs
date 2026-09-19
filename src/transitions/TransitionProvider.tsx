import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { Curtain } from './Curtain'
import { TransitionContext } from './transition-context'
import type { Phase, TransitionOptions } from './transition-context'
import type { WipeId } from './wipes'

const COVER_MS = 620
const REVEAL_MS = 680

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
}

export function TransitionProvider({ children }: { children: ReactNode }) {
  const navigate = useNavigate()
  const [phase, setPhase] = useState<Phase>('idle')
  const [wipe, setWipe] = useState<WipeId>('bloom')
  const [theme, setTheme] = useState('hub')
  const [label, setLabel] = useState('')
  const [origin, setOrigin] = useState<{ x: number; y: number } | null>(null)
  const busy = useRef(false)
  const timers = useRef<number[]>([])

  useEffect(() => {
    const pending = timers.current
    return () => {
      pending.forEach((timer) => window.clearTimeout(timer))
    }
  }, [])

  const transitionTo = useCallback(
    (to: string, options: TransitionOptions) => {
      if (busy.current) return
      if (prefersReducedMotion()) {
        navigate(to)
        return
      }
      busy.current = true
      setWipe(options.wipe)
      setTheme(options.theme)
      setLabel(options.label)
      setOrigin(options.origin ?? null)
      setPhase('cover')
      timers.current.push(
        window.setTimeout(() => {
          navigate(to)
          setPhase('reveal')
          timers.current.push(
            window.setTimeout(() => {
              setPhase('idle')
              busy.current = false
            }, REVEAL_MS),
          )
        }, COVER_MS),
      )
    },
    [navigate],
  )

  const value = useMemo(() => ({ phase, transitionTo }), [phase, transitionTo])

  return (
    <TransitionContext.Provider value={value}>
      {children}
      <Curtain phase={phase} wipe={wipe} theme={theme} label={label} origin={origin} />
    </TransitionContext.Provider>
  )
}
