import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Feed from './pages/Feed'
import Profile from './pages/Profile'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './components/Header'
import { I18nProvider } from './i18n'

export default function App(){
  return (
    <I18nProvider>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Feed/>} />
            <Route path="/profile/:id" element={<Profile/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </main>
        <footer className="footer">ViaRList — Maintained manually</footer>
      </div>
    </I18nProvider>
  )
}
