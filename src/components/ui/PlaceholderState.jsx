export function PlaceholderState({ children, className = '' }) {
  return <p className={`placeholder-state ${className}`.trim()}>{children}</p>
}
