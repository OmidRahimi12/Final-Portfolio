import { BriefcaseBusiness } from 'lucide-react'
import { TagList } from '../../components/ui/TagList.jsx'

export function ExperienceItem({ item }) {
  const dateRange = [item.startDate, item.endDate].filter(Boolean).join(' – ')

  return (
    <article className="resume-item">
      <span className="resume-item__icon"><BriefcaseBusiness size={17} aria-hidden="true" /></span>
      <div className="resume-item__main">
        <div className="resume-item__heading">
          <div><h3>{item.jobTitle}</h3><p>{item.companyName}</p></div>
          {(item.employmentType || dateRange) && <div className="resume-item__meta">
            {item.employmentType && <span>{item.employmentType}</span>}
            {dateRange && <span>{dateRange}</span>}
          </div>}
        </div>
        {item.description && <p className="resume-item__description">{item.description}</p>}
        <TagList items={item.technologies} label="Technologies used" />
      </div>
    </article>
  )
}
