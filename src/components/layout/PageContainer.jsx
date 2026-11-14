export function PageContainer({ className = '', children, ...props }) {
  return (
    <div className={`page-container ${className}`.trim()} {...props}>
      {children}
    </div>
  )
}
