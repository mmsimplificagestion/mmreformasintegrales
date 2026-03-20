import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Home, CookingPot, Bath, Building2, Hammer, TrendingUp } from "lucide-react";

const services = [
  { icon: Home, title: "Reformas integrales", desc: "Renovación completa de viviendas, pisos, locales y estancias para adaptar cada espacio a una nueva forma de vivirlo." },
  { icon: CookingPot, title: "Reformas de cocinas", desc: "Cocinas funcionales, actuales y pensadas para aprovechar mejor el espacio, la luz y el uso diario." },
  { icon: Bath, title: "Reformas de baños", desc: "Baños modernos, cómodos y bien resueltos, con una estética limpia y materiales acordes a cada proyecto." },
  { icon: Building2, title: "Construcción y acondicionamiento", desc: "Soluciones de construcción, redistribución y mejora de espacios para proyectos residenciales o profesionales." },
  { icon: Hammer, title: "Rehabilitación integral", desc: "Puesta al día de inmuebles y espacios que necesitan una renovación completa a nivel visual, funcional y estructural." },
  { icon: TrendingUp, title: "Mejora y revalorización de inmuebles", desc: "Acondicionamiento de viviendas o locales para mejorar su imagen, funcionalidad y potencial de venta o alquiler." },
];

const ServicesSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros servicios</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Soluciones de reforma, construcción y rehabilitación para todo tipo de espacios en Cervelló y Barcelona.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg hover:border-primary/20 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <p className="text-muted-foreground mb-5">Cuéntanos qué necesitas y te ayudamos a dar forma al proyecto.</p>
        <Link to="/contacto" className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-block">
          Solicitar presupuesto
        </Link>
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
