import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useParams,
  useLocation,
  Outlet,
} from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import { LanguageProvider, Lang } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ServicesPage from "./pages/Services";
import ProjectsPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import LegalNotice from "./pages/LegalNotice";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const HashRedirect = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash && location.hash.startsWith("#/")) {
      const newPath = location.hash.slice(1);
      window.history.replaceState(null, "", newPath);
      window.location.reload();
    }
  }, [location.hash]);

  return null;
};

const DefaultRedirect = () => {
  const stored = localStorage.getItem("lang") as Lang | null;
  const lang = stored === "ca" ? "ca" : "es";

  return <Navigate to={`/${lang}`} replace />;
};

const LangLayout = () => {
  const { lang } = useParams<{ lang: string }>();
  const validLang: Lang = lang === "ca" ? "ca" : "es";

  return (
    <LanguageProvider initialLang={validLang}>
      <ScrollToTop />
      <Outlet />
    </LanguageProvider>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <HashRedirect />
        <Routes>
          <Route path="/" element={<DefaultRedirect />} />

          <Route path="/:lang" element={<LangLayout />}>
            <Route index element={<Index />} />
            <Route path="servicios" element={<ServicesPage />} />
            <Route path="serveis" element={<ServicesPage />} />
            <Route path="proyectos" element={<ProjectsPage />} />
            <Route path="projectes" element={<ProjectsPage />} />
            <Route path="sobre-nosotros" element={<AboutPage />} />
            <Route path="sobre-nosaltres" element={<AboutPage />} />
            <Route path="contacto" element={<ContactPage />} />
            <Route path="contacte" element={<ContactPage />} />
            <Route path="aviso-legal" element={<LegalNotice />} />
            <Route path="avis-legal" element={<LegalNotice />} />
            <Route path="politica-privacidad" element={<PrivacyPolicy />} />
            <Route path="politica-privacitat" element={<PrivacyPolicy />} />
            <Route path="politica-cookies" element={<CookiePolicy />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
