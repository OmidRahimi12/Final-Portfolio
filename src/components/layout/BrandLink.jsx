import { personal } from '../../data/personal.js'

export function BrandLink({ onClick, className = '' }) {
  return (
    <a className={`brand-mark ${className}`.trim()} href="#home" onClick={onClick} aria-label={`${personal.name}, home`}>
      <span className="brand-mark__symbol" aria-hidden="true">&lt;/&gt;</span>
      <span>{personal.name}<span className="text-accent">.</span></span>
    </a>
  )
}
