import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import SearchFilters from '../components/SearchFilters'
import profilesData from '../../data/profiles.json'

export default function Feed(){
  const [profiles, setProfiles] = useState([])
  const [query, setQuery] = useState('')
  const [region, setRegion] = useState('All')
  const [sort, setSort] = useState('newest')

  useEffect(()=>{
    setProfiles(profilesData)
  },[])

  const filtered = profiles
    .filter(p=>{
      if(region !== 'All' && p.region !== region) return false
      if(!query) return true
      const q = query.toLowerCase()
      return (
        p.name.en.toLowerCase().includes(q) ||
        (p.tags||[]).some(t=>t.toLowerCase().includes(q)) ||
        p.country.toLowerCase().includes(q)
      )
    })
    .sort((a,b)=>{
      if(sort === 'newest') return new Date(b.first_seen) - new Date(a.first_seen)
      if(sort === 'oldest') return new Date(a.first_seen) - new Date(b.first_seen)
      return 0
    })

  const regions = ['All', ...Array.from(new Set(profiles.map(p=>p.region)))]

  return (
    <section className="container">
      <div className="controls">
        <h1>Feed</h1>
        <SearchFilters
          query={query}
          onQuery={setQuery}
          region={region}
          onRegion={setRegion}
          regions={regions}
          sort={sort}
          onSort={setSort}
        />
      </div>

      <div className="grid">
        {filtered.map(p=> (
          <Link key={p.id} to={`/profile/${p.id}`} className="card-link">
            <ProfileCard profile={p} />
          </Link>
        ))}
        {filtered.length===0 && <p>No profiles match.</p>}
      </div>
    </section>
  )
      }
