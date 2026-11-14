import { Image as ImageIcon } from 'lucide-react'

export function ProjectArtworkPlaceholder({ dialog = false }) {
  return (
    <div
      className={`project-media-placeholder${dialog ? ' project-media-placeholder--dialog' : ''}`}
      role="img"
      aria-label="Project screenshot not provided"
    >
      <span className="project-placeholder-icon" aria-hidden="true"><ImageIcon size={28} strokeWidth={1.4} /></span>
      <span className="project-media-label" aria-hidden="true">SCREENSHOT NOT PROVIDED</span>
    </div>
  )
}
