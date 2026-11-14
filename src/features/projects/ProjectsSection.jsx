import { useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { projects } from '../../data/projects.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { ProjectCard } from './ProjectCard.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'
import { ProjectDetailsDialog } from './ProjectDetailsDialog.jsx'

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null)
  const closeProject = useCallback(() => setActiveProject(null), [])

  return (
    <Section id="projects" className="section-projects">
      <SectionHeading eyebrow="Selected work" title="A closer look at what I make." />
      {projects.length > 0 ? (
        <div className="projects-grid">
          {projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpenDetails={setActiveProject} />)}
        </div>
      ) : <PlaceholderState>Your projects will appear here.</PlaceholderState>}
      <div className="section-marker" aria-hidden="true"><span>04</span><span className="marker-line" /><span>SELECTED WORK</span></div>
      <AnimatePresence>{activeProject && <ProjectDetailsDialog key={activeProject.id} project={activeProject} onClose={closeProject} />}</AnimatePresence>
    </Section>
  )
}
