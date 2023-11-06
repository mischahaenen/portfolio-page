//Source: https://docs.astro.build/en/recipes/i18n/#translate-ui-strings
export const languages = {
  en: "English",
  de: "Deutsch",
  ch: "Schwizerdütsh",
};
export const defaultLang = "en";
export const ui = {
  en: {
    "nav.home": "Home",
    "nav.contact": "Contact",
  },
  de: {
    "nav.home": "Zuhause",
    "nav.contact": "Kontakt",
  },
  ch: {
    "nav.home": "Dehei",
    "nav.contact": "Schrib mir",
  },
} as const;
