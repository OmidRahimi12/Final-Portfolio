import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { PageContainer } from './PageContainer.jsx'
import { BrandLink } from './BrandLink.jsx'
import { Button } from '../ui/Button.jsx'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const menuToggleRef = useRef(null)

  const closeMenu = useCallback(() => setOpen(false), [])
  const handleNavigationClick = useCallback(() => {
    if (open) menuToggleRef.current?.focus()
    closeMenu()
  }, [closeMenu, open])

  useEffect(() => {
    if (!open) return undefined
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        closeMenu()
        menuToggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [closeMenu, open])

  return (
    <header className="site-header">
      <PageContainer className="nav-container">
        <BrandLink onClick={closeMenu} />
        <button
          ref={menuToggleRef}
          className="menu-toggle"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <nav className={`primary-nav${open ? ' primary-nav--open' : ''}`} aria-label="Main navigation" id="primary-navigation">
          {links.map((link) => (
            <a key={link.href} className="nav-link" href={link.href} onClick={handleNavigationClick}>{link.label}</a>
          ))}
          <Button href="#contact" className="nav-contact" size="sm" onClick={handleNavigationClick}>
            Let&apos;s talk <ArrowUpRight size={15} aria-hidden="true" />
          </Button>
        </nav>
      </PageContainer>
    </header>
  )
}
