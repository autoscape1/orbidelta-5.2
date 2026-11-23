import { MessageCircle } from 'lucide-react';
import { WHATSAPP_CONTACT } from '../data/agencyData';

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_CONTACT.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Orbidelta no WhatsApp"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 inline-flex items-center gap-2 h-12 px-4 rounded-full bg-[#299B65] hover:bg-[#228254] text-white text-sm font-semibold shadow-lg transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#242424]"
    >
      <MessageCircle className="w-5 h-5 shrink-0" aria-hidden="true" />
      <span className="hidden sm:inline whitespace-nowrap">WhatsApp</span>
    </a>
  );
}
