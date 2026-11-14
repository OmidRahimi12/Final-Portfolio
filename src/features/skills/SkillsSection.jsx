import { skills } from '../../data/skills.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { SkillGroup } from './SkillGroup.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'

export function SkillsSection() {
  return (
    <Section id="skills" className="section-skills">
      <SectionHeading eyebrow="Tools & strengths" title="The things I use to make things." description="Replace these clearly marked entries with the tools and practices that reflect your experience." />
      {skills.length > 0 ? <div className="skills-grid">{skills.map((group, index) => <SkillGroup key={group.id} group={group} index={index} />)}</div> : <PlaceholderState>Your skills will appear here.</PlaceholderState>}
      <div className="section-marker" aria-hidden="true"><span>03</span><span className="marker-line" /><span>CAPABILITIES</span></div>
    </Section>
  )
}
