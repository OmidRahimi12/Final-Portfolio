import { ArrowUpRight } from 'lucide-react'
import { Reveal } from '../../components/motion/Reveal.jsx'
import { ResponsiveImage } from '../../components/ui/ResponsiveImage.jsx'
import { TagList } from '../../components/ui/TagList.jsx'
import { ProjectLinks } from './ProjectLinks.jsx'
import { ProjectArtworkPlaceholder } from './ProjectArtworkPlaceholder.jsx'

export function ProjectCard({ project, index = 0, onOpenDetails }) {
  return (
    <Reveal as="article" className="project-card" delay={(index % 2) * 0.08} hoverLift>
      <div className="project-media">
        <ResponsiveImage
          src={project.image}
          alt={project.imageAlt || `${project.title} screenshot`}
          fallback={<ProjectArtworkPlaceholder />}
        />
        <span className="project-count" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="project-card__body">
        <div className="project-card__heading"><div>{project.category && <p className="project-category">{project.category}</p>}<h3>{project.title}</h3></div>
          <button className="project-open" type="button" onClick={() => onOpenDetails(project)} aria-label={`View details for ${project.title}`}><ArrowUpRight size={19} aria-hidden="true" /></button>
        </div>
        <p className="project-summary">{project.summary}</p>
        <div className="project-card__bottom">
          <TagList items={project.technologies} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  )
}
