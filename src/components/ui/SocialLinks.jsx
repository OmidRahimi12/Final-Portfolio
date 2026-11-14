import { IconLink } from './IconLink.jsx'
import { getValidHttpLinks } from '../../utils/isValidHttpUrl.js'

export function SocialLinks({ links = [], className = '' }) {
  const validLinks = getValidHttpLinks(links)
  if (validLinks.length === 0) return null
  return (
    <ul className={`social-links ${className}`.trim()} aria-label="Social links">
      {validLinks.map(({ label, href, icon }) => (
        <li key={label}>
          <IconLink href={href} label={label} icon={icon} target="_blank" rel="noreferrer" />
        </li>
      ))}
    </ul>
  )
}
