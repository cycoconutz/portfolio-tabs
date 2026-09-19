import type { CSSProperties } from 'react'
import type { Phase } from './transition-context'
import type { WipeId } from './wipes'

interface CurtainProps {
  phase: Phase
  wipe: WipeId
  theme: string
  label: string
  origin: { x: number; y: number } | null
}

type CustomProps = CSSProperties & Record<string, string | number>

export function Curtain({ phase, wipe, theme, label, origin }: CurtainProps) {
  const style: CustomProps = {}
  if (origin) {
    style['--ox'] = `${origin.x}px`
    style['--oy'] = `${origin.y}px`
  }

  return (
    <div
      className="curtain"
      data-phase={phase}
      data-wipe={wipe}
      data-theme={theme}
      data-active={phase !== 'idle'}
      aria-hidden="true"
      style={style}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i} className="curtain-panel" style={{ '--i': i } as CustomProps} />
      ))}
      <span className="curtain-pattern" />
      <span className="curtain-label">{label}</span>
    </div>
  )
}
