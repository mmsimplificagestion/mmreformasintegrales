import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import kitchenImg from "@/assets/kitchen-reform.jpg";
import bathroomImg from "@/assets/bathroom-reform.jpg";
import livingImg from "@/assets/living-reform.jpg";
import integralImg from "@/assets/integral-reform.jpg";
import rehabImg from "@/assets/rehab-reform.jpg";
import heroImg from "@/assets/hero-reform.jpg";

const categories = ["Todos", "Cocinas", "Baños", "Comedores", "Integrales", "Rehabilitación"];

const projects = [
  { img: kitchenImg, label: "Cocina moderna con acabados en madera natural", cat: "Cocinas", alt: "Reforma de cocina moderna" },
  { img: bathroomImg, label: "Baño contemporáneo con ducha a ras de suelo", cat: "Baños", alt: "Reforma de baño moderno" },
  { img: livingImg, label: "Comedor abierto con luz natural", cat: "Comedores", alt: "Reforma de comedor moderno" },
  { img: integralImg, label: "Reforma integral de vivienda completa", cat: "Integrales", alt: "Reforma integral de piso" },
  { img: heroImg, label: "Salón renovado con diseño actual", cat: "Comedores", alt: "Salón reformado moderno" },
  { img: rehabImg, label: "Rehabilitación completa de dormitorio principal", cat: "Rehabilitación", alt: "Rehabilitación de dormitorio" },
];

const ProjectsPage = () => {
  const [active, setActive] = useState("Todos");
  const filtered = active === "Todos" ? projects : projects.filter((p) => p.cat === active);

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
              className="text-center mb-12"
            >
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Proyectos</h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Cada espacio tiene su propio potencial. Descubre algunos de nuestros trabajos en reformas integrales, cocinas, baños y rehabilitación.
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setActive(c)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                    active === c
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative overflow-hidden rounded-2xl aspect-[4/3]"
                >
                  <img src={p.img} alt={p.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-carbon/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="font-heading font-semibold text-card text-base">{p.label}</span>
                    <span className="block text-card/60 text-xs mt-1">{p.cat}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProjectsPage;
