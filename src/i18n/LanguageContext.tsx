import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from "react";
import es from "./es";
import ca from "./ca";

export type Lang = "es" | "ca";
type Translations = typeof es;

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Lang, Translations> = { es, ca };

export const LanguageProvider = ({ children, initialLang }: { children: ReactNode; initialLang?: Lang }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    if (initialLang) return initialLang;
    const stored = localStorage.getItem("lang") as Lang | null;
    return stored === "ca" ? "ca" : "es";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("lang", l);
  };

  useEffect(() => {
    if (initialLang && initialLang !== lang) {
      setLangState(initialLang);
      localStorage.setItem("lang", initialLang);
    }
  }, [initialLang]);

  const t = useMemo(() => translations[lang], [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
