import { skills } from '../../data/skills.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { SkillGroup } from './SkillGroup.jsx'

export function SkillsSection() {
  return (
    <Section id="skills" className="section-skills">
      <SectionHeading eyebrow="Core skills" title="A toolkit for building web applications." description="Frontend development, server-side JavaScript, and relational databases." />
      <div className="skills-grid">{skills.map((group, index) => <SkillGroup key={group.id} group={group} index={index} />)}</div>
      <div className="section-marker" aria-hidden="true"><span>03</span><span className="marker-line" /><span>CAPABILITIES</span></div>
    </Section>
  )
}
