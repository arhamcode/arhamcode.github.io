import en from './en.json';
import id from './id.json';

export const translations = { en, id };

export type Locale = keyof typeof translations;
export type TranslationKeys = typeof en;

export function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale] || translations.en;
}