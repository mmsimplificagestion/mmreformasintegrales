import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Hammer, CheckCircle2 } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Hablamos contigo", desc: "Escuchamos tu idea, tus necesidades y el tipo de resultado que buscas." },
  { icon: ClipboardList, title: "Definimos la propuesta", desc: "Organizamos una solución adaptada al espacio, al estilo deseado y al objetivo del proyecto." },
  { icon: Hammer, title: "Ejecutamos la reforma", desc: "Llevamos a cabo los trabajos con una visión práctica, cuidando el resultado final y la coherencia del conjunto." },
  { icon: CheckCircle2, title: "Entregamos el espacio renovado", desc: "El objetivo es que disfrutes de un espacio más funcional, más actual y más alineado con lo que necesitas." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Cómo trabajamos</h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto">
          Un proceso claro y organizado para que tu reforma sea una experiencia sencilla.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
            className="text-center"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <s.icon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-xs font-bold text-primary/60 uppercase tracking-widest mb-2">Paso {i + 1}</div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
