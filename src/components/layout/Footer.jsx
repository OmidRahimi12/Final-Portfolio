import { ArrowUp, ArrowUpRight } from 'lucide-react'
import { PageContainer } from './PageContainer.jsx'
import { BrandLink } from './BrandLink.jsx'
import { SocialLinks } from '../ui/SocialLinks.jsx'
import { socials } from '../../data/socials.js'
import { personal } from '../../data/personal.js'
import { getValidHttpLinks } from '../../utils/isValidHttpUrl.js'

export function Footer() {
  const validSocials = getValidHttpLinks(socials)

  return (
    <footer className="site-footer">
      <PageContainer className="footer-main">
        <div>
          <BrandLink />
          <p className="footer-note">Software developer portfolio.</p>
        </div>
        <div className="footer-links">
          {validSocials.length > 0 ? <SocialLinks links={validSocials} /> : <p className="text-subtle">Your social links will appear here.</p>}
          <a className="back-to-top" href="#home">Back to top <ArrowUp size={15} aria-hidden="true" /></a>
        </div>
      </PageContainer>
      <PageContainer className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} {personal.name}</p>
        <p>Designed and built with care <ArrowUpRight size={13} aria-hidden="true" /></p>
      </PageContainer>
    </footer>
  )
}
