import { certifications } from '../../data/certifications.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'
import { CertificationItem } from './CertificationItem.jsx'

export function CertificationsSection() {
  return (
    <Section id="certifications" className={certifications.length ? 'section-certifications' : 'section-certifications section-certifications--empty'}>
      <div className="certification-layout">
        <SectionHeading eyebrow="Recognition" title="Certifications & learning." />
        <div className="certification-list">
          {certifications.length ? certifications.map((item) => <CertificationItem key={item.id} item={item} />) : <PlaceholderState>Certifications will appear here.</PlaceholderState>}
        </div>
      </div>
    </Section>
  )
}
