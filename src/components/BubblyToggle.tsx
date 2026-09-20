interface BubblyToggleProps {
  active: boolean
  onToggle: () => void
}

export function BubblyToggle({ active, onToggle }: BubblyToggleProps) {
  return (
    <button
      type="button"
      className="bubbly-toggle"
      aria-pressed={active}
      onClick={onToggle}
      title="Switch to the bubbly theme"
    >
      <span className="bubble-tag">{active ? 'Bubbly on' : 'Bubbly'}</span>
      <span className="bubble-heart" aria-hidden="true">
        ♥
      </span>
    </button>
  )
}