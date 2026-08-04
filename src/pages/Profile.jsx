import React from 'react'
import { useParams, Link } from 'react-router-dom'
import profilesData from '../../data/profiles.json'
import { useI18n } from '../i18n'

export default function Profile(){
  const { id } = useParams()
  const { lang } = useI18n()
  const profile = profilesData.find(p=>p.id===id)
  if(!profile) return (
    <section className="container">
      <p>Profile not found. <Link to="/">Back to feed</Link></p>
    </section>
  )

  const displayName = profile.name?.[lang] || profile.name?.en
  const bio = profile.bio?.[lang] || profile.bio?.en
  return (
    <section className="container profile">
      <div className="profile-card">
        <img src={profile.photo} alt={displayName} />
        <div>
          <h2>{displayName} {profile.name.es ? ` / ${profile.name.es}` : ''}</h2>
          <p className="muted">{profile.region} — {profile.country}</p>
          <p>{bio}</p>

          <div className="links">
            {profile.links && Object.entries(profile.links).map(([k,v])=> (
              <a key={k} href={v} target="_blank" rel="noreferrer">{k}</a>
            ))}
          </div>

          <p className="meta">First seen: {profile.first_seen} — Last seen: {profile.last_seen}</p>

          <p><Link to="/">← Back to Feed</Link></p>
        </div>
      </div>
    </section>
  )
}
