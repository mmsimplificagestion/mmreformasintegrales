import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "¿Qué tipo de reformas realizáis?", a: "Realizamos reformas integrales, reformas parciales, reformas de cocinas, baños, salones, dormitorios, así como trabajos de construcción, acondicionamiento y rehabilitación de inmuebles completos." },
  { q: "¿También trabajáis cocinas y baños?", a: "Sí, las reformas de cocinas y baños son uno de nuestros servicios principales. Trabajamos tanto renovaciones completas como mejoras parciales adaptadas a cada proyecto." },
  { q: "¿Podéis ayudar con una reforma integral completa?", a: "Por supuesto. Nos encargamos de la reforma integral de viviendas, pisos y locales, coordinando todos los trabajos necesarios para renovar el espacio de manera global." },
  { q: "¿Trabajáis en Cervelló y Barcelona?", a: "Sí, trabajamos en Cervelló, Barcelona y localidades cercanas. Si tienes un proyecto en otra zona, consúltanos y valoraremos la viabilidad." },
  { q: "¿Se puede pedir presupuesto sin compromiso?", a: "Sí, puedes solicitar un presupuesto sin ningún compromiso. Nos ponemos en contacto contigo para conocer tu proyecto y prepararte una propuesta adaptada." },
  { q: "¿También hacéis rehabilitación de inmuebles?", a: "Sí, realizamos trabajos de rehabilitación integral, poniendo al día inmuebles que necesitan una renovación completa tanto a nivel visual como funcional." },
  { q: "¿Podéis adaptar el proyecto al estilo que busco?", a: "Totalmente. Cada proyecto es diferente y nos adaptamos al gusto, estilo y necesidades de cada cliente para conseguir un resultado coherente y personalizado." },
];

const FAQSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Preguntas frecuentes</h2>
      </motion.div>

      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
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

export default FAQSection;
