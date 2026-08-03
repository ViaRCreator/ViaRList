import React from 'react'

export default function ProfileCard({profile}){
  return (
    <article className="card">
      <img src={profile.photo} alt={profile.name.en} />
      <div className="card-body">
        <h3>{profile.name.en}</h3>
        <p className="muted">{profile.region} · {profile.country}</p>
        <div className="tags">{(profile.tags||[]).slice(0,3).map(t=> <span key={t} className="tag">{t}</span>)}</div>
      </div>
    </article>
  )
}
