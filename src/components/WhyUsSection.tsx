import { motion } from "framer-motion";
import { Handshake, Palette, Target, Sparkles, Users, Home } from "lucide-react";

const reasons = [
  { icon: Handshake, label: "Trato directo y cercano" },
  { icon: Users, label: "Proyectos adaptados a cada cliente" },
  { icon: Palette, label: "Diseño actual y funcional" },
  { icon: Sparkles, label: "Mejora estética y práctica del inmueble" },
  { icon: Target, label: "Enfoque orientado al resultado final" },
  { icon: Home, label: "Atención a viviendas, pisos, locales y espacios a reformar" },
];

const WhyUsSection = () => (
  <section className="py-20 md:py-28 bg-sand/40">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegirnos?</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Razones por las que confiar en M&M Reformas Integrales para tu próximo proyecto.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex items-center gap-4 bg-card rounded-xl p-5 border border-border"
          >
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <span className="font-medium text-foreground text-sm">{r.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
