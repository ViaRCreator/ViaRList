import React from 'react'
import { useParams, Link } from 'react-router-dom'
import profilesData from '../../data/profiles.json'

export default function Profile(){
  const { id } = useParams()
  const profile = profilesData.find(p=>p.id===id)
  if(!profile) return (
    <section className="container">
      <p>Profile not found. <Link to="/">Back to feed</Link></p>
    </section>
  )

  return (
    <section className="container profile">
      <div className="profile-card">
        <img src={profile.photo} alt={profile.name.en} />
        <div>
          <h2>{profile.name.en} {profile.name.es ? ` / ${profile.name.es}` : ''}</h2>
          <p className="muted">{profile.region} — {profile.country}</p>
          <p>{profile.bio.en}</p>

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
