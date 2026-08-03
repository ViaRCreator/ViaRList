import React from 'react'

export default function SearchFilters({query,onQuery,region,onRegion,regions,sort,onSort}){
  return (
    <div className="filters">
      <input placeholder="Search by name, tag, country..." value={query} onChange={e=>onQuery(e.target.value)} />
      <select value={region} onChange={e=>onRegion(e.target.value)}>
        {regions.map(r=> <option key={r} value={r}>{r}</option>)}
      </select>
      <select value={sort} onChange={e=>onSort(e.target.value)}>
        <option value="newest">Newest first</option>
        <option value="oldest">Oldest first</option>
      </select>
    </div>
  )
}
