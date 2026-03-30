import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Hammer, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const icons = [MessageCircle, ClipboardList, Hammer, CheckCircle2];

const ProcessSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{t.process.title}</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {t.process.steps.map((s, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">{t.process.step} {i + 1}</div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
