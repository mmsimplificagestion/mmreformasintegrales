import { useState } from "react";
import { Link } from "react-router-dom";

const serviceOptions = [
  "Reformas integrales",
  "Reformas de cocinas",
  "Reformas de baños",
  "Construcción y acondicionamiento",
  "Rehabilitación integral",
  "Mejora y revalorización de inmuebles",
  "Otro",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    servicio: "",
    localidad: "",
    mensaje: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.nombre.trim()) e.nombre = "Introduce tu nombre";
    if (!form.telefono.trim()) e.telefono = "Introduce tu teléfono";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Introduce un email válido";
    if (!form.servicio) e.servicio = "Selecciona un servicio";
    if (!form.privacidad) e.privacidad = "Debes aceptar la política de privacidad";
    return e;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) {
      setErrors(v);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-card rounded-2xl p-8 md:p-12 text-center border border-border">
        <div className="text-4xl mb-4">✓</div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground">
          Gracias por contactar con M&M Reformas Integrales. Te responderemos lo antes posible.
        </p>
      </div>
    );
  }

  const inputClass = "w-full px-4 py-3 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 md:p-12 border border-border space-y-5">
      <p className="text-muted-foreground text-sm mb-2">Cuéntanos tu idea y te responderemos lo antes posible.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <input type="text" placeholder="Nombre *" value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className={inputClass} maxLength={100} />
          {errors.nombre && <p className="text-destructive text-xs mt-1">{errors.nombre}</p>}
        </div>
        <div>
          <input type="tel" placeholder="Teléfono *" value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className={inputClass} maxLength={20} />
          {errors.telefono && <p className="text-destructive text-xs mt-1">{errors.telefono}</p>}
        </div>
      </div>

      <div>
        <input type="email" placeholder="Correo electrónico *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
        {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <select value={form.servicio} onChange={(e) => setForm({ ...form, servicio: e.target.value })} className={inputClass}>
            <option value="">Tipo de servicio *</option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.servicio && <p className="text-destructive text-xs mt-1">{errors.servicio}</p>}
        </div>
        <div>
          <input type="text" placeholder="Localidad" value={form.localidad} onChange={(e) => setForm({ ...form, localidad: e.target.value })} className={inputClass} maxLength={100} />
        </div>
      </div>

      <div>
        <textarea placeholder="Mensaje" rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className={inputClass} maxLength={1000} />
      </div>

      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input type="checkbox" checked={form.privacidad} onChange={(e) => setForm({ ...form, privacidad: e.target.checked })} className="mt-1 accent-primary" />
          <span className="text-xs text-muted-foreground leading-relaxed">
            He leído y acepto la{" "}
            <Link to="/politica-privacidad" className="text-primary underline hover:text-primary/80">
              política de privacidad
            </Link>
            . Consiento el tratamiento de mis datos para gestionar mi solicitud.
          </span>
        </label>
        {errors.privacidad && <p className="text-destructive text-xs mt-1">{errors.privacidad}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors"
      >
        Enviar solicitud
      </button>
    </form>
  );
};

export default ContactForm;
