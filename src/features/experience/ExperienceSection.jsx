import { experience } from '../../data/experience.js'
import { Reveal } from '../../components/motion/Reveal.jsx'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'
import { ExperienceItem } from './ExperienceItem.jsx'

export function ExperienceSection() {
  return (
    <Section id="experience" className={experience.length ? 'section-resume' : 'section-resume section-resume--empty'}>
      <div className="resume-layout">
        <Reveal><SectionHeading eyebrow="Where I have worked" title="Experience, shaped by doing." /></Reveal>
        <div className="resume-list">
          {experience.length ? experience.map((item) => <ExperienceItem key={item.id} item={item} />) : <PlaceholderState>Professional experience will appear here.</PlaceholderState>}
        </div>
      </div>
      <div className="section-marker" aria-hidden="true"><span>05</span><span className="marker-line" /><span>EXPERIENCE</span></div>
    </Section>
  )
}
