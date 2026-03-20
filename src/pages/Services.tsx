import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, CookingPot, Bath, Building2, Hammer, TrendingUp } from "lucide-react";
import kitchenImg from "@/assets/kitchen-reform.jpg";
import bathroomImg from "@/assets/bathroom-reform.jpg";
import livingImg from "@/assets/living-reform.jpg";
import integralImg from "@/assets/integral-reform.jpg";
import rehabImg from "@/assets/rehab-reform.jpg";
import heroImg from "@/assets/hero-reform.jpg";

const services = [
  {
    icon: Home,
    title: "Reformas integrales",
    desc: "Renovación completa de viviendas, pisos, locales y estancias para adaptar cada espacio a una nueva forma de vivirlo.",
    long: "Una reforma integral significa repensar tu vivienda desde cero. Nos encargamos de la redistribución de espacios, la renovación de instalaciones, los acabados y cada detalle para que tu hogar refleje exactamente lo que necesitas. Trabajamos en Cervelló y Barcelona con un enfoque práctico y un resultado cuidado.",
    img: heroImg,
  },
  {
    icon: CookingPot,
    title: "Reformas de cocinas",
    desc: "Cocinas funcionales, actuales y pensadas para aprovechar mejor el espacio, la luz y el uso diario.",
    long: "La cocina es uno de los espacios más importantes de la vivienda. Diseñamos soluciones que combinan funcionalidad y estética, aprovechando al máximo cada metro. Desde la distribución hasta la elección de materiales, te acompañamos en todo el proceso.",
    img: kitchenImg,
  },
  {
    icon: Bath,
    title: "Reformas de baños",
    desc: "Baños modernos, cómodos y bien resueltos, con una estética limpia y materiales acordes a cada proyecto.",
    long: "Un baño bien reformado transforma la experiencia diaria. Trabajamos con materiales de calidad, diseños actuales y soluciones funcionales para conseguir un espacio cómodo, práctico y visualmente atractivo.",
    img: bathroomImg,
  },
  {
    icon: Building2,
    title: "Construcción y acondicionamiento",
    desc: "Soluciones de construcción, redistribución y mejora de espacios para proyectos residenciales o profesionales.",
    long: "Tanto si necesitas levantar tabiques, redistribuir estancias o acondicionar un local, te ofrecemos soluciones constructivas adaptadas a cada situación. Planificamos y ejecutamos los trabajos con criterio técnico y atención al resultado.",
    img: integralImg,
  },
  {
    icon: Hammer,
    title: "Rehabilitación integral",
    desc: "Puesta al día de inmuebles y espacios que necesitan una renovación completa a nivel visual, funcional y estructural.",
    long: "Rehabilitar un inmueble es darle una segunda vida. Actuamos sobre la estructura, las instalaciones y los acabados para devolver al espacio su funcionalidad, su seguridad y una imagen renovada y actual.",
    img: rehabImg,
  },
  {
    icon: TrendingUp,
    title: "Mejora y revalorización de inmuebles",
    desc: "Acondicionamiento de viviendas o locales para mejorar su imagen, funcionalidad y potencial de venta o alquiler.",
    long: "Si quieres vender o alquilar tu inmueble en mejores condiciones, te ayudamos a mejorar su imagen y funcionalidad con intervenciones pensadas para revalorizar el espacio y hacerlo más atractivo para el mercado.",
    img: livingImg,
  },
];

const ServicesPage = () => (
  <>
    <Header />
    <main className="pt-24">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Nuestros servicios</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Soluciones completas de reforma, construcción y rehabilitación adaptadas a cada cliente y espacio en Cervelló y Barcelona.
            </p>
          </motion.div>

          <div className="space-y-16">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-8 items-center`}
              >
                <div className="lg:w-1/2">
                  <img src={s.img} alt={s.title} className="rounded-2xl w-full aspect-[4/3] object-cover" loading="lazy" />
                </div>
                <div className="lg:w-1/2 space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">{s.title}</h2>
                  <p className="text-muted-foreground leading-relaxed">{s.long}</p>
                  <Link to="/contacto" className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors mt-2">
                    Solicitar presupuesto
                  </Link>
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

export default ServicesPage;
