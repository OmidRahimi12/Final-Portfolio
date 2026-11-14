import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { ProjectLinks } from './ProjectLinks.jsx'
import { ResponsiveImage } from '../../components/ui/ResponsiveImage.jsx'
import { TagList } from '../../components/ui/TagList.jsx'
import { ProjectArtworkPlaceholder } from './ProjectArtworkPlaceholder.jsx'

export function ProjectDetailsDialog({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const previousFocus = useRef(document.activeElement)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    const oldOverflow = document.body.style.overflow
    const appRoot = document.getElementById('root')
    const previousInert = appRoot?.inert ?? false
    document.body.style.overflow = 'hidden'
    if (appRoot) appRoot.inert = true
    closeRef.current?.focus()
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
      }
      if (event.key !== 'Tab') return
      const focusable = dialogRef.current?.querySelectorAll('button:not([disabled]), a[href]')
      if (!focusable?.length) { event.preventDefault(); dialogRef.current?.focus(); return }
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      const focusIsOutside = !dialogRef.current?.contains(document.activeElement)
      if (event.shiftKey && (document.activeElement === first || focusIsOutside)) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && (document.activeElement === last || focusIsOutside)) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = oldOverflow
      if (appRoot) appRoot.inert = previousInert
      previousFocus.current?.focus?.()
    }
  }, [onClose])

  return createPortal((
      <motion.div
        className="dialog-backdrop"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
        onClick={(event) => event.target === event.currentTarget && onClose()}
      >
        <motion.section
          className="project-dialog"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-dialog-title"
          aria-describedby="project-dialog-description"
          tabIndex={-1}
          initial={reduceMotion ? false : { opacity: 0, y: 24, scale: .98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={reduceMotion ? {} : { opacity: 0, y: 16, scale: .98 }}
          transition={{ duration: .22 }}
        >
          <button ref={closeRef} className="dialog-close" type="button" onClick={onClose} aria-label="Close project details"><X size={19} aria-hidden="true" /></button>
          {project.category && <p className="project-category">{project.category}</p>}
          <h2 id="project-dialog-title">{project.title}</h2>
          <p id="project-dialog-description" className="dialog-summary">{project.description || project.summary}</p>
          <ResponsiveImage
            className="dialog-image"
            src={project.image}
            alt={project.imageAlt || `${project.title} screenshot`}
            fallback={<ProjectArtworkPlaceholder dialog />}
          />
          {project.technologies?.length > 0 && <div className="dialog-technologies"><h3>Built with</h3><TagList items={project.technologies} /></div>}
          <ProjectLinks project={project} />
          <a className="dialog-back-link" href="#projects" onClick={onClose}>Back to all projects <ArrowUpRight size={15} aria-hidden="true" /></a>
        </motion.section>
      </motion.div>
  ), document.body)
}
