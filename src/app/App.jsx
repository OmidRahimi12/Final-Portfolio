import { Navbar } from '../components/layout/Navbar.jsx'
import { Footer } from '../components/layout/Footer.jsx'
import { AboutSection } from '../features/about/AboutSection.jsx'
import { CertificationsSection } from '../features/certifications/CertificationsSection.jsx'
import { ContactSection } from '../features/contact/ContactSection.jsx'
import { EducationSection } from '../features/education/EducationSection.jsx'
import { ExperienceSection } from '../features/experience/ExperienceSection.jsx'
import { HeroSection } from '../features/hero/HeroSection.jsx'
import { ProjectsSection } from '../features/projects/ProjectsSection.jsx'
import { SkillsSection } from '../features/skills/SkillsSection.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
