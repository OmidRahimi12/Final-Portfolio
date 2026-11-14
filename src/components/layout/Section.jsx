import { PageContainer } from './PageContainer.jsx'

export function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`content-section ${className}`.trim()}>
      <PageContainer>{children}</PageContainer>
    </section>
  )
}
