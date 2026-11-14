export function TagList({ items = [], label = 'Technologies' }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <ul className="technology-list" aria-label={label}>
      {items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)}
    </ul>
  )
}
