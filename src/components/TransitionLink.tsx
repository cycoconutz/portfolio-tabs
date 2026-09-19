import type { MouseEvent, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { useTransition } from '../transitions/transition-context'
import type { TransitionOptions } from '../transitions/transition-context'

interface TransitionLinkProps {
  to: string
  transition: Omit<TransitionOptions, 'origin'>
  className?: string
  children: ReactNode
}

export function TransitionLink({ to, transition, className, children }: TransitionLinkProps) {
  const { transitionTo } = useTransition()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return
    }
    event.preventDefault()
    transitionTo(to, { ...transition, origin: { x: event.clientX, y: event.clientY } })
  }

  return (
    <Link to={to} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
