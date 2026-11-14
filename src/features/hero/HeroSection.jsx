import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { personal } from '../../data/personal.js'
import { PageContainer } from '../../components/layout/PageContainer.jsx'
import { Button } from '../../components/ui/Button.jsx'
import { Reveal } from '../../components/motion/Reveal.jsx'
import { ProfilePlaceholder } from './ProfilePlaceholder.jsx'

function isLocalPdfPath(path) {
  if (typeof path !== 'string') return false
  const pathname = path.split(/[?#]/, 1)[0]
  return pathname.startsWith('/') && !pathname.startsWith('//') && !pathname.split('/').includes('..') && /\.pdf$/i.test(pathname)
}

export function HeroSection() {
  const [cvAvailable, setCvAvailable] = useState(false)

  useEffect(() => {
    const path = personal.cvPath
    if (!isLocalPdfPath(path)) {
      setCvAvailable(false)
      return undefined
    }

    const controller = new AbortController()
    fetch(path, { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        const contentType = response.headers.get('content-type')?.toLowerCase() ?? ''
        const isPdf = contentType.includes('application/pdf') || contentType.includes('application/octet-stream')
        setCvAvailable(response.ok && isPdf)
      })
      .catch(() => {
        if (!controller.signal.aborted) setCvAvailable(false)
      })

    return () => controller.abort()
  }, [personal.cvPath])

  return (
    <section className="hero-section" id="home" aria-labelledby="hero-title">
      <PageContainer className="hero-layout">
        <Reveal className="hero-copy">
          <p className="eyebrow"><span className="eyebrow-line" /> {personal.role} <span className="eyebrow-separator">/</span> Portfolio</p>
          <h1 id="hero-title">{personal.headline}{personal.headlineAccent && <> <span>{personal.headlineAccent}</span></>}</h1>
          {personal.introduction && <p className="hero-intro">{personal.introduction}</p>}
          <div className="hero-actions">
            <Button href="#projects" size="lg">Explore selected work <ArrowUpRight size={17} aria-hidden="true" /></Button>
            {cvAvailable && <Button href={personal.cvPath} download variant="outline" size="lg" aria-label="Download CV">
              <Download size={16} aria-hidden="true" /> Download CV
            </Button>}
          </div>
          <a className="hero-scroll-link" href="#about"><span>Scroll to explore</span><ArrowDown size={15} aria-hidden="true" /></a>
        </Reveal>
        <Reveal className="hero-visual" delay={0.12}>
          <ProfilePlaceholder />
          <div className="hero-index"><span>01</span><span className="hero-index__line" /><span>INTRODUCTION</span></div>
        </Reveal>
      </PageContainer>
      <div className="hero-bottom-rule" aria-hidden="true" />
    </section>
  )
}
