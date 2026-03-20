import { motion } from "framer-motion";
import { UserCheck, Compass, Lightbulb, MessageSquare, Eye } from "lucide-react";

const values = [
  { icon: UserCheck, label: "Atención personalizada" },
  { icon: Compass, label: "Proyectos a medida" },
  { icon: Lightbulb, label: "Soluciones funcionales y estéticas" },
  { icon: MessageSquare, label: "Comunicación clara durante el proceso" },
  { icon: Eye, label: "Enfoque en calidad visual y comodidad" },
];

const AboutSection = () => (
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
          Un servicio cercano para transformar tu espacio
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          En M&M Reformas Integrales trabajamos para dar forma a proyectos de reforma, construcción y rehabilitación con una visión práctica, estética y totalmente adaptada al cliente. Nuestro objetivo es ayudarte a mejorar tu vivienda, tu local o tu inmueble con soluciones funcionales, modernas y pensadas para el día a día.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {values.map((v, i) => (
          <motion.div
            key={v.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="w-14 h-14 rounded-2xl bg-sand/60 flex items-center justify-center">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <span className="text-sm font-medium text-foreground/80">{v.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
