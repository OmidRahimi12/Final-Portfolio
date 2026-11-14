import { useEffect, useState } from 'react'

export function ResponsiveImage({ src, alt, fallback, className = '', loading = 'lazy', decoding = 'async', fetchPriority }) {
  const [failed, setFailed] = useState(false)

  useEffect(() => setFailed(false), [src])

  if (!src || failed) return fallback

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={() => setFailed(true)}
    />
  )
}
