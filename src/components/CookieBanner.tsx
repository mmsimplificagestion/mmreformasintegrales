import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) setVisible(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie_consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <div className="container mx-auto max-w-4xl bg-card border border-border rounded-2xl shadow-xl p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <p className="text-sm text-foreground/70 flex-1">
          Utilizamos cookies propias y de terceros para mejorar tu experiencia de navegación.
          Puedes aceptar, rechazar o configurar las cookies.{" "}
          <Link to="/politica-cookies" className="text-primary underline hover:text-primary/80">
            Más información
          </Link>
        </p>
        <div className="flex gap-2 shrink-0">
          <button
            onClick={handleReject}
            className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors border border-border rounded-lg"
          >
            Rechazar
          </button>
          <Link
            to="/politica-cookies"
            className="px-4 py-2 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors border border-border rounded-lg"
          >
            Configurar
          </Link>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
