import React from 'react'
import { useI18n } from '../i18n'

export default function LocaleToggle(){
  const { lang, setLang } = useI18n()
  return (
    <select value={lang} onChange={e=>setLang(e.target.value)}>
      <option value="en">EN</option>
      <option value="es">ES</option>
      <option value="ja">JA</option>
    </select>
  )
}
