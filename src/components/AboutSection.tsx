import { motion } from "framer-motion";
import { UserCheck, Compass, Lightbulb, MessageSquare, Eye } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [UserCheck, Compass, Lightbulb, MessageSquare, Eye];

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            {t.about.title}
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {t.about.values.map((label, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="w-14 h-14 rounded-2xl bg-sand/60 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-sm font-medium text-foreground/80">{label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
