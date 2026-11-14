import { ArrowUpRight, Mail, MapPin } from 'lucide-react'
import { personal } from '../../data/personal.js'
import { socials } from '../../data/socials.js'
import { Section } from '../../components/layout/Section.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { SocialLinks } from '../../components/ui/SocialLinks.jsx'
import { Reveal } from '../../components/motion/Reveal.jsx'
import { getValidHttpLinks } from '../../utils/isValidHttpUrl.js'

function isValidEmail(value) {
  return typeof value === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactSection() {
  const emailReady = isValidEmail(personal.email)
  const locationReady = typeof personal.location === 'string' && personal.location.trim().length > 0
  const validSocials = getValidHttpLinks(socials)
  const hasContactAside = emailReady || locationReady

  return (
    <Section id="contact" className="section-contact">
      <Reveal className={`contact-panel${hasContactAside ? '' : ' contact-panel--single'}`}>
        <div className="contact-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> Get in touch</p>
          <h2>Let&apos;s make<br /><span>something matter.</span></h2>
          <p>{personal.contactNote || 'Contact details will appear here.'}</p>
          <div className="contact-actions">
            {emailReady && <Button href={`mailto:${personal.email}`} size="lg">Start a conversation <ArrowUpRight size={17} aria-hidden="true" /></Button>}
            <SocialLinks links={validSocials} className="social-links--contact" />
          </div>
        </div>
        {hasContactAside && <div className="contact-aside">
          {emailReady && <div className="contact-detail"><span className="contact-detail__icon"><Mail size={17} aria-hidden="true" /></span><div><small>Email</small><a href={`mailto:${personal.email}`}>{personal.email}</a></div></div>}
          {locationReady && <div className="contact-detail"><span className="contact-detail__icon"><MapPin size={17} aria-hidden="true" /></span><div><small>Based in</small><span>{personal.location}</span></div></div>}
        </div>}
      </Reveal>
      <div className="section-marker" aria-hidden="true"><span>08</span><span className="marker-line" /><span>CONTACT</span></div>
    </Section>
  )
}
