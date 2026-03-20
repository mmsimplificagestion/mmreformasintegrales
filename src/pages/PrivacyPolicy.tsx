import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 mt-8">Política de privacidad</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <h2 className="font-heading text-xl font-bold text-foreground">Responsable del tratamiento</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Identidad:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[Nombre fiscal completo]</span></li>
            <li><strong>NIF:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[NIF]</span></li>
            <li><strong>Dirección:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[Dirección fiscal completa]</span>, Cervelló 08758, Barcelona</li>
            <li><strong>Email:</strong> melgarejo.francisco@hotmail.es</li>
            <li><strong>Teléfono:</strong> +34 652 631 733</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground">Finalidad del tratamiento</h2>
          <p>Los datos personales recogidos a través de los formularios de esta web serán tratados con la finalidad de gestionar las solicitudes de presupuesto, consultas y comunicaciones comerciales relacionadas con los servicios de M&M Reformas Integrales.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Legitimación</h2>
          <p>La base legal para el tratamiento de los datos es el consentimiento del usuario, otorgado al enviar sus datos a través de los formularios de contacto y solicitud de presupuesto.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Destinatarios</h2>
          <p>Los datos no serán cedidos a terceros salvo obligación legal. No se realizan transferencias internacionales de datos.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Derechos</h2>
          <p>El usuario podrá ejercer sus derechos de acceso, rectificación, supresión, limitación del tratamiento, portabilidad y oposición escribiendo a melgarejo.francisco@hotmail.es, acompañando copia de su documento de identidad.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Conservación de datos</h2>
          <p>Los datos personales se conservarán mientras exista una relación comercial o durante el tiempo necesario para cumplir con las obligaciones legales aplicables.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Seguridad</h2>
          <p>Se han adoptado las medidas técnicas y organizativas adecuadas para garantizar la seguridad de los datos personales y evitar su alteración, pérdida, tratamiento o acceso no autorizado.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default PrivacyPolicy;
