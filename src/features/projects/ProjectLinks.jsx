import { ArrowUpRight, Github } from 'lucide-react'
import { isValidHttpUrl } from '../../utils/isValidHttpUrl.js'

export function ProjectLinks({ project }) {
  const links = [
    { label: 'GitHub', href: project.githubUrl, icon: Github },
    { label: 'Live Demo', href: project.demoUrl, icon: ArrowUpRight },
  ].filter((link) => isValidHttpUrl(link.href))

  if (links.length === 0) return null

  return (
    <div className="project-links">
      {links.map(({ label, href, icon: Icon }) => (
        <a key={label} className="project-link" href={href} target="_blank" rel="noreferrer">
          <Icon size={15} aria-hidden="true" /> {label}
        </a>
      ))}
    </div>
  )
}
