import { education } from '../../data/education.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'
import { EducationItem } from './EducationItem.jsx'

export function EducationSection() {
  return (
    <Section id="education" className={education.length ? 'section-education' : 'section-education section-education--empty'}>
      <SectionHeading eyebrow="Learning" title="Education & foundations." />
      <div className="resume-list resume-list--compact">
        {education.length ? education.map((item) => <EducationItem key={item.id} item={item} />) : <PlaceholderState>Education details will appear here.</PlaceholderState>}
      </div>
    </Section>
  )
}
