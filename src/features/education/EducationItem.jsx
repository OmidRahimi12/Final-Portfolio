import { GraduationCap } from 'lucide-react'

export function EducationItem({ item }) {
  const dateRange = [item.startDate, item.graduationDate].filter(Boolean).join(' – ')

  return (
    <article className="resume-item">
      <span className="resume-item__icon"><GraduationCap size={18} aria-hidden="true" /></span>
      <div className="resume-item__main">
        <div className="resume-item__heading">
          <div><h3>{item.degree || item.program}</h3><p>{item.institution}</p></div>
          {dateRange && <div className="resume-item__meta"><span>{dateRange}</span></div>}
        </div>
        {item.fieldOfStudy && <p className="resume-item__field">{item.fieldOfStudy}</p>}
        {item.description && <p className="resume-item__description">{item.description}</p>}
      </div>
    </article>
  )
}
