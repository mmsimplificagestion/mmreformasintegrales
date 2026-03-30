import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/i18n/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">{t.faq.title}</h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-background border border-border rounded-xl px-6">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground text-sm py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
