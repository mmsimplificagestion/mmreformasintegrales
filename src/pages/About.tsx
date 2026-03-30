import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { UserCheck, Compass, Lightbulb, MessageSquare, Eye, Heart } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [UserCheck, Compass, Lightbulb, Heart, Eye, MessageSquare];

const AboutPage = () => {
  const { t } = useLanguage();

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
              className="max-w-3xl mx-auto text-center mb-16"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">{t.aboutPage.title}</h1>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {t.aboutPage.description}
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 md:p-12 border border-border"
              >
                <h2 className="font-heading text-2xl font-bold text-foreground mb-4">{t.aboutPage.howWeWork}</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {t.aboutPage.howWeWorkP1}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {t.aboutPage.howWeWorkP2}
                </p>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {t.aboutPage.values.map((v, i) => {
                const Icon = icons[i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="bg-card rounded-2xl p-6 border border-border"
                  >
                    <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default AboutPage;
