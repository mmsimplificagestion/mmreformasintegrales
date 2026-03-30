import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 10000;

const resend = new Resend(process.env.RESEND_API_KEY);

const allowedOrigins = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((item) => item.trim())
  .filter(Boolean);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origen no permitido por CORS"));
    },
  })
);

app.use(express.json({ limit: "1mb" }));

function escapeHtml(value = "") {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email = "") {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.post("/api/contact", async (req, res) => {
  try {
    const {
      name = "",
      phone = "",
      email = "",
      serviceType = "",
      location = "",
      message = "",
      acceptedPrivacy = false,
      website = "",
    } = req.body ?? {};

    if (website) {
      return res.status(200).json({ ok: true });
    }

    if (!name.trim() || !phone.trim() || !email.trim() || !serviceType.trim()) {
      return res.status(400).json({
        ok: false,
        message: "Faltan campos obligatorios.",
      });
    }

    if (!acceptedPrivacy) {
      return res.status(400).json({
        ok: false,
        message: "Debes aceptar la política de privacidad.",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        ok: false,
        message: "El correo electrónico no es válido.",
      });
    }

    const safeName = escapeHtml(name.trim());
    const safePhone = escapeHtml(phone.trim());
    const safeEmail = escapeHtml(email.trim());
    const safeServiceType = escapeHtml(serviceType.trim());
    const safeLocation = escapeHtml(location.trim());
    const safeMessage = escapeHtml(message.trim());

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>Nuevo contacto desde la web</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Teléfono:</strong> ${safePhone}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Servicio:</strong> ${safeServiceType}</p>
        <p><strong>Localidad:</strong> ${safeLocation || "No indicada"}</p>
        <p><strong>Mensaje:</strong><br>${safeMessage || "Sin mensaje"}</p>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `Nuevo contacto web - ${safeName}`,
      replyTo: email.trim(),
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({
        ok: false,
        message: "No se pudo enviar el correo.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "Solicitud enviada correctamente.",
      id: data?.id,
    });
  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor.",
    });
  }
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`API escuchando en puerto ${PORT}`);
});
