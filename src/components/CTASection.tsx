import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";

const CTASection = () => (
  <section className="py-20 md:py-28 bg-primary/10">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          ¿Tienes una reforma en mente?
        </h2>
        <p className="text-muted-foreground text-lg mb-8">
          Cuéntanos qué espacio quieres transformar y empecemos a dar forma a una propuesta adaptada a ti.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contacto"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-primary/90 transition-colors"
          >
            Solicitar presupuesto
          </Link>
          <a
            href="tel:+34652631733"
            className="flex items-center justify-center gap-2 border border-foreground/20 text-foreground px-8 py-4 rounded-lg text-base font-semibold hover:bg-card transition-colors"
          >
            <Phone className="w-5 h-5" />
            Llamar al +34 652 631 733
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
