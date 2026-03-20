import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-reform.jpg";
import bathroomImg from "@/assets/bathroom-reform.jpg";
import livingImg from "@/assets/living-reform.jpg";
import integralImg from "@/assets/integral-reform.jpg";
import rehabImg from "@/assets/rehab-reform.jpg";
import heroImg from "@/assets/hero-reform.jpg";

const projects = [
  { img: livingImg, label: "Comedores modernos", alt: "Reforma moderna de comedor y salón" },
  { img: bathroomImg, label: "Baños contemporáneos", alt: "Reforma moderna de baño" },
  { img: kitchenImg, label: "Cocinas actuales", alt: "Reforma moderna de cocina" },
  { img: integralImg, label: "Reformas integrales", alt: "Reforma integral de vivienda" },
  { img: heroImg, label: "Espacios renovados con estilo", alt: "Salón renovado con estilo moderno" },
  { img: rehabImg, label: "Rehabilitación y mejora", alt: "Rehabilitación integral de inmueble" },
];

const ProjectsSection = () => (
  <section className="py-20 md:py-28 bg-card">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Proyectos</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Cada espacio tiene su propio potencial. Por eso apostamos por soluciones que combinen funcionalidad, estética y una mejora real del inmueble.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <motion.div
            key={p.label}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
          >
            <img
              src={p.img}
              alt={p.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <span className="font-heading font-semibold text-card text-lg">{p.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
