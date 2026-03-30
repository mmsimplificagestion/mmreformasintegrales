import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppButton = () => {
  const { t } = useLanguage();
  const msg = encodeURIComponent(t.whatsapp.message);
  const url = `https://wa.me/34652631733?text=${msg}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-card p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label={t.whatsapp.ariaLabel}
    >
      <MessageCircle className="w-6 h-6" />
    </a>
  );
};

export default WhatsAppButton;
