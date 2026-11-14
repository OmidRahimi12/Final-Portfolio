import { motion, useReducedMotion } from 'framer-motion'

export function Reveal({ children, className = '', delay = 0, hoverLift = false, as = 'div' }) {
  const reduceMotion = useReducedMotion()
  const Component = motion[as] ?? motion.div

  return (
    <Component
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      whileHover={hoverLift && !reduceMotion ? { y: -4, transition: { duration: 0.18, ease: 'easeOut' } } : undefined}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  )
}
