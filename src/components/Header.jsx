import React from 'react'
import { Link } from 'react-router-dom'
import LocaleToggle from './LocaleToggle'
import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="brand">
          <Link to="/">ViaRList</Link>
        </div>
        <nav>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <LocaleToggle />
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
