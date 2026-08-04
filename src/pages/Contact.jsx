import React from 'react'
import { useI18n } from '../i18n'

export default function Contact(){
  const { t } = useI18n()
  return (
    <section className="container">
      <h1>{t('contact')}</h1>
      <p>{t('contact_text') || t('how_to_contribute_steps')}</p>
      <p>Or if you prefer, contact the maintainer(ViaRCreator on X/Twitter).</p>
    </section>
  )
}
