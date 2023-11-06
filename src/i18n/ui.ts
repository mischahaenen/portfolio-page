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
    "form.error.name": "Please enter a username.",
    "form.error.email": "Email is not valid.",
    "form.error.subject": "Please enter a subject.",
    "form.error.messageShort": "Message must be at least 6 characters.",
    "form.error.captcha": "Please verify you are not a robot. 🤖",
    "form.success.title": "Hooray! 🎉",
    "form.success.message":
      "Your message has been sent successfully. Thank you for reaching out, I will get back to you as soon as possible.",
    "form.label.name": "Your Name:",
    "form.label.email": "Your Email:",
    "form.label.subject": "Subject:",
    "form.label.message": "Message:",
    "form.button.submit": "Send!",
  },
  de: {
    "nav.home": "Zuhause",
    "nav.contact": "Kontakt",
    "form.error.name": "Bitte gebe einen Namen an.",
    "form.error.email": "Deine Emailadresse scheint ungültig zu sein.",
    "form.error.subject": "Bitte gebe einen Betreff an.",
    "form.error.messageShort":
      "Deine Nachricht muss mindestens 6 Zeichen enthalten.",
    "form.error.captcha":
      "Bitte überzeuge mich, dass du keinen Roboter bist. 🤖",
    "form.success.title": "Hurra! 🎉",
    "form.success.message":
      "Deine Nachricht wurde erfolgreich versendet. Vielen Dank für deine Nachricht, ich werde mich so schnell wie möglich bei dir melden.",
    "form.label.name": "Dein Name:",
    "form.label.email": "Deine Email:",
    "form.label.subject": "Betreff:",
    "form.label.message": "Nachricht:",
    "form.button.submit": "Senden!",
  },
  ch: {
    "nav.home": "Dehei",
    "nav.contact": "Schrib mir",
    "form.error.name": "Gib bitte ä ächte Name a.",
    "form.error.email": "Dis Email isch äuä nid ganz korrekt",
    "form.error.subject": "Bitte gib doch ä beträff ah.",
    "form.error.messageShort":
      "Mit weniger aus 6 Zeiche chani nid viu ahfah. 🥲",
    "form.error.captcha": "Bisch dr sicher, das de ke Roboter bisch? 🤖",
    "form.success.title": "ÄUÄ! 🎉",
    "form.success.message":
      "Dini Nachricht isch erfougrich versändet wordä. Ich danke dir für dini Nachricht und wirde mi so schnäu wi mügglech bi dir mäudä.",
    "form.label.name": "Di Name:",
    "form.label.email": "Dini Mail:",
    "form.label.subject": "Beträff:",
    "form.label.message": "Nachricht:",
    "form.button.submit": "Ab d poscht!",
  },
} as const;
