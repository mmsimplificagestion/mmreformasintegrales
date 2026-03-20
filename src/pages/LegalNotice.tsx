import Header from "@/components/Header";
import Footer from "@/components/Footer";

const LegalNotice = () => (
  <>
    <Header />
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
        <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 mt-8">Aviso legal</h1>
        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <h2 className="font-heading text-xl font-bold text-foreground">Datos identificativos</h2>
          <p>En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Titular:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[Nombre fiscal completo]</span></li>
            <li><strong>NIF:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[NIF]</span></li>
            <li><strong>Domicilio:</strong> <span className="bg-sand/60 px-2 py-0.5 rounded text-foreground">[Dirección fiscal completa]</span>, Cervelló 08758, Barcelona</li>
            <li><strong>Teléfono:</strong> +34 652 631 733</li>
            <li><strong>Email:</strong> melgarejo.francisco@hotmail.es</li>
          </ul>

          <h2 className="font-heading text-xl font-bold text-foreground">Objeto</h2>
          <p>El presente aviso legal regula el uso y acceso al sitio web de M&M Reformas Integrales, propiedad de Francisco Melgarejo. El acceso a esta web atribuye la condición de usuario e implica la aceptación plena de las presentes condiciones.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Propiedad intelectual e industrial</h2>
          <p>Todos los contenidos del sitio web, incluyendo textos, fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual del titular o de terceros, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Limitación de responsabilidad</h2>
          <p>El titular no se hace responsable de los daños y perjuicios que pudieran derivarse del uso de la web, incluyendo, sin limitación, daños causados por virus informáticos, acceso no autorizado o errores en la transmisión de datos.</p>

          <h2 className="font-heading text-xl font-bold text-foreground">Legislación aplicable y jurisdicción</h2>
          <p>Para la resolución de cualquier controversia relacionada con esta web, será de aplicación la legislación española, siendo competentes los Juzgados y Tribunales de Barcelona.</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default LegalNotice;
