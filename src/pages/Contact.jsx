import React from 'react'
import { useI18n } from '../i18n'

export default function Contact(){
  const { t } = useI18n()
  return (
    <section className="container">
      <h1>{t('contact')}</h1>
      <p>Contact the maintainer(ViaRCreator on X/Twitter).</p>
    </section>
  )
}
