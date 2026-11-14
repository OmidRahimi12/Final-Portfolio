import { ArrowUpRight } from 'lucide-react'

export function IconLink({ href, label, icon: Icon = ArrowUpRight, ...props }) {
  return (
    <a className="icon-link" href={href} aria-label={label} {...props}>
      <span>{label}</span><Icon size={16} aria-hidden="true" />
    </a>
  )
}
