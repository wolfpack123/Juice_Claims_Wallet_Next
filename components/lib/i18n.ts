"use client";
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage =
  typeof window !== 'undefined'
    ? localStorage.getItem('preferredLanguage')
    : null;

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: savedLanguage || 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
