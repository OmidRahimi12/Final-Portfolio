import { certifications } from '../../data/certifications.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { CertificationItem } from './CertificationItem.jsx'

export function CertificationsSection() {
  if (!certifications.length) return null

  return (
    <Section id="certifications" className="section-certifications">
      <div className="certification-layout">
        <SectionHeading eyebrow="Recognition" title="Certifications & learning." />
        <div className="certification-list">
          {certifications.map((item) => <CertificationItem key={item.id} item={item} />)}
        </div>
      </div>
    </Section>
  )
}
