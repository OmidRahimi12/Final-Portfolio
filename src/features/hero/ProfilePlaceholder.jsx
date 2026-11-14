import { personal } from '../../data/personal.js'
import { ResponsiveImage } from '../../components/ui/ResponsiveImage.jsx'

export function ProfilePlaceholder() {
  return (
    <div className="profile-visual">
      <ResponsiveImage
        className="profile-photo"
        src={personal.profileImage}
        alt={`${personal.name} portrait`}
        loading="eager"
        fetchPriority="high"
        fallback={(
          <div className="profile-placeholder" role="img" aria-label="Profile photo placeholder">
            <span className="profile-placeholder__initials" aria-hidden="true">OR</span>
            <span className="profile-placeholder__label" aria-hidden="true">Your photo here</span>
          </div>
        )}
      />
      <span className="profile-orbit profile-orbit--one" aria-hidden="true" />
      <span className="profile-orbit profile-orbit--two" aria-hidden="true" />
      <span className="profile-tag">{personal.role}</span>
    </div>
  )
}
