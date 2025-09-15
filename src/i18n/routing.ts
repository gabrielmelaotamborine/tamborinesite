import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["pt", "en"],

  // Used when no locale matches
  defaultLocale: "pt",
  localePrefix: "as-needed",

  // Pathnames for each locale
  pathnames: {
    "/": "/",
    "/business-credit-card": {
      en: "/business-credit-card",
      pt: "/cartao-de-credito-para-empresas",
    },
  },
});
