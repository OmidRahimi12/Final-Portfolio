const variants = {
  primary: 'button--primary',
  outline: 'button--outline',
}

const sizes = {
  sm: 'button--sm',
  md: 'button--md',
  lg: 'button--lg',
}

export function Button({ href, variant = 'primary', size = 'md', className = '', children, disabled = false, type = 'button', ...props }) {
  const Tag = href && !disabled ? 'a' : 'button'
  return (
    <Tag
      className={`button ${variants[variant] ?? variants.primary} ${sizes[size] ?? sizes.md} ${disabled ? 'button--disabled' : ''} ${className}`.trim()}
      {...(href && !disabled ? { href } : {})}
      {...(Tag === 'button' ? { type, disabled } : {})}
      {...props}
    >
      {children}
    </Tag>
  )
}
