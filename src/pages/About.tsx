import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { UserCheck, Compass, Lightbulb, MessageSquare, Eye, Heart } from "lucide-react";

const values = [
  { icon: UserCheck, title: "Cercanía", desc: "Trabajamos codo a codo con cada cliente para entender sus necesidades reales." },
  { icon: Compass, title: "Personalización", desc: "Cada proyecto es diferente y lo tratamos como tal, adaptando cada detalle." },
  { icon: Lightbulb, title: "Visión práctica", desc: "Soluciones pensadas para el uso real del espacio, no solo para la estética." },
  { icon: Heart, title: "Gusto por los acabados", desc: "Cuidamos cada material y cada detalle para un resultado actual y duradero." },
  { icon: Eye, title: "Orientación al cliente", desc: "Tú decides el estilo y nosotros lo hacemos posible con un resultado coherente." },
  { icon: MessageSquare, title: "Comunicación clara", desc: "Te mantenemos informado en cada fase del proyecto sin sorpresas." },
];

const AboutPage = () => (
  <>
    <Header />
    <main className="pt-24">
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">Sobre nosotros</h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              M&M Reformas Integrales es un servicio de reformas, construcción y rehabilitación dirigido por Francisco Melgarejo, con base en Cervelló (Barcelona). Nuestro trabajo se centra en transformar viviendas, pisos, locales y todo tipo de inmuebles con un enfoque práctico, estético y adaptado a cada persona.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-card rounded-2xl p-8 md:p-12 border border-border"
            >
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Nuestra forma de trabajar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Creemos en un servicio cercano, transparente y totalmente orientado a conseguir que cada espacio mejore de forma real. No trabajamos con fórmulas genéricas: cada reforma, cada rehabilitación y cada proyecto de construcción se aborda desde las necesidades concretas del cliente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestro compromiso es ofrecer soluciones funcionales, con un diseño actual y unos acabados pensados para durar. Desde la primera conversación hasta la entrega del espacio renovado, buscamos que la experiencia sea clara, fluida y con un resultado que marque la diferencia.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default AboutPage;
