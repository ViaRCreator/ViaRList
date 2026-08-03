import React from 'react'

export default function About(){
  return (
    <section className="container">
      <h1>About ViaRList</h1>
      <p>ViaRList is a manually maintained list of VTubers. Profiles are added and edited directly in the repository data files.</p>
      <h2>How to contribute</h2>
      <ol>
        <li>Edit <code>data/profiles.json</code> and add your profile object.</li>
        <li>Open a pull request — or if you prefer, contact the maintainer.</li>
      </ol>
    </section>
  )
}
