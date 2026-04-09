import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json"; // add more languages as needed

const resources = {
  en: { translation: enTranslation },
  fr: { translation: frTranslation },
  // add "ar", "es", etc.
};

i18n
  .use(LanguageDetector)           // auto-detects browser language
  .use(initReactI18next)           // passes i18n down to React
  .init({
    resources,
    fallbackLng: "en",             // default language
    supportedLngs: ["en", "fr"],   // list your languages here
    interpolation: {
      escapeValue: false,          // React already escapes by default
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],    // remember user's choice
    },
  });

export default i18n;