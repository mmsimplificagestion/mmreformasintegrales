import { useState, useEffect } from "react";
import logoMM from "@/assets/logo-mm.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, Phone, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Lang } from "@/i18n/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lang, setLang, t } = useLanguage();
  const { localePath, homePath } = useLocalizedPath();

  const navLinks = [
    { label: t.nav.home, href: homePath },
    { label: t.nav.services, href: localePath("services") },
    { label: t.nav.projects, href: localePath("projects") },
    { label: t.nav.about, href: localePath("about") },
    { label: t.nav.contact, href: localePath("contact") },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const switchLang = (newLang: Lang) => {
    setLang(newLang);
    // Navigate to the equivalent page in the new language
    const currentPath = location.pathname;
    const pathWithoutLang = currentPath.replace(/^\/(es|ca)/, "");
    navigate(`/${newLang}${pathWithoutLang || "/"}`);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <Link to={homePath} className="flex items-center gap-3 shrink-0">
          <img
            src={logoMM}
            alt="M&M Reformas Integrales"
            className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto object-contain"
          />
          <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-foreground tracking-tight">
            M&M <span className="text-primary">Reformas Integrales</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.href ? "text-primary" : "text-foreground/80"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center gap-1 border border-border rounded-lg px-2 py-1.5">
            <Globe className="w-3.5 h-3.5 text-muted-foreground" />
            <button
              onClick={() => switchLang("es")}
              className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${
                lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ES
            </button>
            <button
              onClick={() => switchLang("ca")}
              className={`text-xs font-medium px-1.5 py-0.5 rounded transition-colors ${
                lang === "ca" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              CA
            </button>
          </div>

          <a
            href="tel:+34652631733"
            className="flex items-center gap-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" />
            652 631 733
          </a>
          <Link
            to={localePath("contact")}
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            {t.nav.requestQuote}
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Menú"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  to={l.href}
                  className={`text-base font-medium py-2 ${
                    location.pathname === l.href ? "text-primary" : "text-foreground/80"
                  }`}
                >
                  {l.label}
                </Link>
              ))}

              {/* Mobile language selector */}
              <div className="flex items-center gap-2 py-2">
                <Globe className="w-4 h-4 text-muted-foreground" />
                <button
                  onClick={() => switchLang("es")}
                  className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors ${
                    lang === "es" ? "bg-primary text-primary-foreground" : "text-muted-foreground border border-border"
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => switchLang("ca")}
                  className={`text-sm font-medium px-3 py-1 rounded-lg transition-colors ${
                    lang === "ca" ? "bg-primary text-primary-foreground" : "text-muted-foreground border border-border"
                  }`}
                >
                  Català
                </button>
              </div>

              <a
                href="tel:+34652631733"
                className="flex items-center gap-2 text-base font-medium text-primary py-2"
              >
                <Phone className="w-4 h-4" />
                {t.nav.callNow}
              </a>
              <Link
                to={localePath("contact")}
                className="bg-primary text-primary-foreground px-5 py-3 rounded-lg text-center font-semibold mt-2"
              >
                {t.nav.requestQuote}
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
