import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import heroImg from "@/assets/hero-reform.jpg";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroImg} alt="Reforma integral moderna de salón" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-carbon/80 via-carbon/50 to-transparent" />
    </div>

    <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl"
      >
        <span className="inline-block text-terracotta-soft text-sm font-medium tracking-wide uppercase mb-4">
          Reformas, construcción y rehabilitación en Cervelló y Barcelona
        </span>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-card leading-tight mb-6">
          Transformamos tu vivienda o local con reformas integrales a medida
        </h1>
        <p className="text-card/80 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
          En M&M Reformas Integrales te ayudamos a renovar cocinas, baños, comedores y espacios completos con soluciones personalizadas, un diseño actual y una ejecución pensada para adaptarse a tus necesidades.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors text-center"
          >
            Pedir presupuesto
          </Link>
          <a
            href="tel:+34652631733"
            className="flex items-center justify-center gap-2 border border-card/30 text-card px-8 py-4 rounded-lg text-base font-semibold hover:bg-card/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            Llamar ahora
          </a>
        </div>

        <div className="flex flex-wrap gap-x-4 gap-y-1 text-card/60 text-sm">
          <span>Trato cercano</span>
          <span>·</span>
          <span>Soluciones a medida</span>
          <span>·</span>
          <span>Diseño actual</span>
          <span>·</span>
          <span>Presupuesto personalizado</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
