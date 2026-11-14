export function isValidHttpUrl(value) {
  if (typeof value !== 'string') return false
  try {
    return ['http:', 'https:'].includes(new URL(value).protocol)
  } catch {
    return false
  }
}

export function getValidHttpLinks(links) {
  return Array.isArray(links) ? links.filter((link) => link && isValidHttpUrl(link.href)) : []
}
