import React from 'react';
import { CalendarPlus, MessageCircle } from 'lucide-react';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface FloatingActionsProps {
  onBookClick: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onBookClick }) => {
  const whatsappUrl = buildWhatsAppUrl(
    'Hello FIXORA MOBILES, I would like to book a smartphone repair or ask a quick question.'
  );

  return (
    <div className="fixed bottom-4 right-4 z-30 flex items-center gap-2.5">
      <button
        type="button"
        onClick={onBookClick}
        className="inline-flex items-center gap-2 h-11 px-4 text-xs sm:text-sm font-semibold text-white bg-[#101B35] hover:bg-[#1A2B52] rounded-xl shadow-lg border border-white/15 transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
      >
        <CalendarPlus className="w-4 h-4 text-[#19D5E8]" aria-hidden="true" />
        <span>Book Appointment</span>
      </button>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with FIXORA MOBILES"
        className="inline-flex items-center justify-center gap-2 h-11 px-3.5 sm:px-4 text-xs sm:text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl shadow-lg transition-transform duration-150 hover:-translate-y-0.5 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B35]"
      >
        <MessageCircle className="w-4 h-4" aria-hidden="true" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
