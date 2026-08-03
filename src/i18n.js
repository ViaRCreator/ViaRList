import React, { createContext, useContext, useEffect, useState } from 'react'
import en from '../locales/en.json'
import es from '../locales/es.json'
import ja from '../locales/ja.json'

const I18nContext = createContext()

export function I18nProvider({children}){
  const [lang, setLang] = useState(localStorage.getItem('lang') || 'en')
  const [messages] = useState({en,es,ja})
  useEffect(()=> localStorage.setItem('lang', lang), [lang])
  const t = (key)=> messages[lang]?.[key] || messages['en'][key] || key
  return <I18nContext.Provider value={{lang,setLang,t}}>{children}</I18nContext.Provider>
}

export function useI18n(){ return useContext(I18nContext) }
