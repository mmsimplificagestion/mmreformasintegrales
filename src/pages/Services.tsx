import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, CookingPot, Bath, Building2, Hammer, TrendingUp } from "lucide-react";
import kitchenImg from "@/assets/kitchen-reform.jpg";
import bathroomImg from "@/assets/bathroom-reform.jpg";
import livingImg from "@/assets/living-reform.jpg";
import integralImg from "@/assets/integral-reform.jpg";
import rehabImg from "@/assets/rehab-reform.jpg";
import heroImg from "@/assets/hero-reform.jpg";
import { useLanguage } from "@/i18n/LanguageContext";
import { useLocalizedPath } from "@/hooks/useLocalizedPath";

const icons = [Home, CookingPot, Bath, Building2, Hammer, TrendingUp];
const images = [heroImg, kitchenImg, bathroomImg, integralImg, rehabImg, livingImg];

const ServicesPage = () => {
  const { t } = useLanguage();
  const { localePath } = useLocalizedPath();

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">{t.services.title}</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t.services.subtitlePage}
              </p>
            </motion.div>

            <div className="space-y-16">
              {t.services.items.map((s, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
                  >
                    <div className="lg:w-1/2">
                      <img src={images[i]} alt={s.title} className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
                    </div>
                    <div className="lg:w-1/2 space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                      <p className="text-muted-foreground leading-relaxed">{s.long}</p>
                      <Link to={localePath("contact")} className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors mt-2">
                        {t.services.requestQuote}
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ServicesPage;
