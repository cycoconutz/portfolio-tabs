import { createContext, useContext } from 'react'
import type { WipeId } from './wipes'

export type Phase = 'idle' | 'cover' | 'reveal'

export interface TransitionOptions {
  wipe: WipeId
  theme: string
  label: string
  origin?: { x: number; y: number }
}

export interface TransitionApi {
  phase: Phase
  transitionTo: (to: string, options: TransitionOptions) => void
}

export const TransitionContext = createContext<TransitionApi | null>(null)

export function useTransition(): TransitionApi {
  const ctx = useContext(TransitionContext)
  if (!ctx) throw new Error('useTransition must be used within a TransitionProvider')
  return ctx
}
