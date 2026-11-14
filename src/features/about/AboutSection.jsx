import { ArrowUpRight, MapPin, Sparkles } from 'lucide-react'
import { personal } from '../../data/personal.js'
import { Section } from '../../components/layout/Section.jsx'
import { SectionHeading } from '../../components/ui/SectionHeading.jsx'
import { Reveal } from '../../components/motion/Reveal.jsx'
import { PlaceholderState } from '../../components/ui/PlaceholderState.jsx'

export function AboutSection() {
  return (
    <Section id="about" className="section-about">
      <div className="about-layout">
        <Reveal>
          <SectionHeading eyebrow="A little about me" title="Thoughtful work starts with curiosity." />
        </Reveal>
        <Reveal className="about-copy" delay={0.1}>
          {personal.about?.length ? personal.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>) : <PlaceholderState>Your introduction will appear here.</PlaceholderState>}
          <div className="about-meta">
            <span><MapPin size={15} aria-hidden="true" /> {personal.location}</span>
            <span><Sparkles size={15} aria-hidden="true" /> Add a collaboration preference</span>
          </div>
          <a className="text-link" href="#contact">More about working together <ArrowUpRight size={16} aria-hidden="true" /></a>
        </Reveal>
      </div>
      <div className="about-marker" aria-hidden="true"><span>02</span><span className="marker-line" /><span>ABOUT</span></div>
    </Section>
  )
}
