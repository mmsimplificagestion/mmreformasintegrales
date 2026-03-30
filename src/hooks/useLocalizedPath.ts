import { useLanguage } from "@/i18n/LanguageContext";

const routeMap: Record<string, Record<string, string>> = {
  es: {
    services: "/servicios",
    projects: "/proyectos",
    about: "/sobre-nosotros",
    contact: "/contacto",
    legalNotice: "/aviso-legal",
    privacyPolicy: "/politica-privacidad",
    cookiePolicy: "/politica-cookies",
  },
  ca: {
    services: "/serveis",
    projects: "/projectes",
    about: "/sobre-nosaltres",
    contact: "/contacte",
    legalNotice: "/avis-legal",
    privacyPolicy: "/politica-privacitat",
    cookiePolicy: "/politica-cookies",
  },
};

export const useLocalizedPath = () => {
  const { lang } = useLanguage();
  
  const localePath = (key: string) => `/${lang}${routeMap[lang][key] || ""}`;
  const homePath = `/${lang}`;

  return { localePath, homePath, lang };
};
