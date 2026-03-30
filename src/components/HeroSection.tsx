import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-reform.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const HeroSection = () => {
  const { t } = useLanguage();
  const { localePath } = useLocalizedPath();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt={t.hero.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-carbon/80 via-carbon/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <span className="inline-block text-terracotta-soft text-sm font-medium tracking-wide uppercase mb-4">
            {t.hero.badge}
          </span>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-card leading-tight mb-6">
            {t.hero.title}
          </h1>
          <p className="text-card/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              to={localePath("contact")}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors text-center"
            >
              {t.hero.cta}
            </Link>
            <a
              href="tel:+34652631733"
              className="flex items-center justify-center gap-2 border border-card/30 text-card px-8 py-4 rounded-lg text-base font-semibold hover:bg-card/10 transition-colors"
            >
              <Phone className="w-5 h-5" />
              {t.hero.callNow}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-4 gap-y-1 text-card/60 text-sm">
            <span>{t.hero.trust1}</span>
            <span>·</span>
            <span>{t.hero.trust2}</span>
            <span>·</span>
            <span>{t.hero.trust3}</span>
            <span>·</span>
            <span>{t.hero.trust4}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
