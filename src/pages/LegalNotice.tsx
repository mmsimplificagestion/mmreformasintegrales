import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/i18n/LanguageContext";

const LegalNotice = () => {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8 mt-8">{t.legalNotice.title}</h1>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
            {t.legalNotice.sections.map((s, i) => (
              <div key={i}>
                <h2 className="font-heading text-xl font-bold text-foreground">{s.title}</h2>
                {s.content && <p>{s.content}</p>}
                {s.list && (
                  <ul className="list-disc pl-5 space-y-1">
                    {s.list.map((item, j) => {
                      const [label, ...rest] = item.split(": ");
                      return (
                        <li key={j}>
                          <strong>{label}:</strong> {rest.join(": ")}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalNotice;
