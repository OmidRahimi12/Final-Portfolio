import { ArrowUpRight, Award } from 'lucide-react'
import { isValidHttpUrl } from '../../utils/isValidHttpUrl.js'

export function CertificationItem({ item }) {
  return (
    <article className="certification-item">
      <span className="certification-icon"><Award size={19} aria-hidden="true" /></span>
      <div><h3>{item.certificateName}</h3><p>{item.issuingOrganization}{item.issueDate ? ` · ${item.issueDate}` : ''}</p></div>
      {isValidHttpUrl(item.credentialUrl) && <a className="credential-link" href={item.credentialUrl} target="_blank" rel="noreferrer" aria-label={`View ${item.certificateName} credential`}><ArrowUpRight size={17} aria-hidden="true" /></a>}
    </article>
  )
}
