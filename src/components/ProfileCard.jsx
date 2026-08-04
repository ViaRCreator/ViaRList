import React from 'react'
import { useI18n } from '../i18n'

export default function ProfileCard({profile}){
  const { lang } = useI18n()
  const displayName = profile.name?.[lang] || profile.name?.en || profile.id
  return (
    <article className="card">
      <img src={profile.photo} alt={displayName} />
      <div className="card-body">
        <h3>{displayName}</h3>
        <p className="muted">{profile.region} · {profile.country}</p>
        <div className="tags">{(profile.tags||[]).slice(0,3).map(t=> <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </article>
  )
}
