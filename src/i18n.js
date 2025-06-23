// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(HttpBackend) // loads translations from your server
  .use(LanguageDetector) // detects user language
  .use(initReactI18next) // integrates with react-i18next
  .init({
    fallbackLng: 'en', // default language
    lng: 'en', // ensure that 'en' is the initial language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    backend: {
      // path where resources get loaded from
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      // options for language detection
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    }
  });

export default i18n;
