import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CookiePolicy = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 mt-8">Política de cookies</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <h2 className="font-heading text-xl font-bold text-foreground">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Permiten que la web recuerde tus acciones y preferencias durante un periodo de tiempo.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">¿Qué cookies utilizamos?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento básico del sitio web. No requieren consentimiento.</li>
            <li><strong>Cookies de preferencia:</strong> Permiten recordar las opciones seleccionadas por el usuario, como el consentimiento de cookies.</li>
            <li><strong>Cookies analíticas:</strong> Utilizadas para analizar el comportamiento de los usuarios en la web de forma anónima y mejorar la experiencia.</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground">Gestión de cookies</h2>
          <p>Puedes aceptar, rechazar o configurar las cookies a través del banner que se muestra al acceder a la web. También puedes gestionar las cookies desde la configuración de tu navegador.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Desactivación de cookies</h2>
          <p>Si desactivas las cookies, es posible que algunas funcionalidades de la web no estén disponibles o no funcionen correctamente.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Más información</h2>
          <p>Para cualquier consulta sobre el uso de cookies en esta web, puedes contactarnos en melgarejo.francisco@hotmail.es.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default CookiePolicy;
