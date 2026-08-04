import React from 'react'
import { Link } from 'react-router-dom'
import LocaleToggle from './LocaleToggle'
import ThemeToggle from './ThemeToggle'
import { useI18n } from '../i18n'

export default function Header(){
  const { t } = useI18n()
  return (
    <header className="header">
      <div className="header-inner container">
        <div className="brand">
          <Link to="/">{t('title')}</Link>
        </div>
        <nav>
          <Link to="/">{t('feed')}</Link>
          <Link to="/about">{t('about')}</Link>
          <Link to="/contact">{t('contact')}</Link>
          <LocaleToggle />
          <ThemeToggle />
        </nav>
      </div>
      <div className="banner" aria-hidden="true"></div>
    </header>
  )
}
