/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ServicesSection } from './components/ServicesSection';
import { DoorstepSection } from './components/DoorstepSection';
import { OnlineSupportSection } from './components/OnlineSupportSection';
import { BrandsSection } from './components/BrandsSection';
import { OffersSection } from './components/OffersSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { BookingSection, BookingPrefill } from './components/BookingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer, LegalDocType } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { FloatingActions } from './components/FloatingActions';
import { SERVICE_TYPE_OPTIONS } from './data/fixoraData';

export default function App() {
  const [bookingPrefill, setBookingPrefill] = useState<BookingPrefill | null>(null);
  const [legalDoc, setLegalDoc] = useState<LegalDocType | null>(null);

  const navigateToBooking = (
    partial?: Partial<Omit<BookingPrefill, 'timestamp'>>
  ) => {
    if (partial) {
      setBookingPrefill({
        ...partial,
        timestamp: Date.now(),
      });
    }
    const target = document.getElementById('book-appointment');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#172033]">
      <Header
        onBookClick={() =>
          navigateToBooking({
            serviceType: SERVICE_TYPE_OPTIONS[0],
          })
        }
      />

      <main className="flex-1">
        <HeroSection
          onBookHomeService={() =>
            navigateToBooking({
              serviceType: 'Free Home Service – Hyderabad',
            })
          }
        />

        <ServicesSection
          onSelectServiceForBooking={(serviceTitle, isOnline) =>
            navigateToBooking({
              service: serviceTitle,
              serviceType: isOnline
                ? 'Online Support – India'
                : 'Free Home Service – Hyderabad',
            })
          }
        />

        <DoorstepSection
          onScheduleHomeService={() =>
            navigateToBooking({
              serviceType: 'Free Home Service – Hyderabad',
            })
          }
        />

        <OnlineSupportSection
          onGetOnlineAssistance={() =>
            navigateToBooking({
              service: 'Online Support – Software & Setup Assistance',
              serviceType: 'Online Support – India',
            })
          }
        />

        <BrandsSection
          onSelectBrand={(brandName) =>
            navigateToBooking({
              brand: brandName,
            })
          }
        />

        <OffersSection
          onClaimOffer={(offerTitle, serviceType) =>
            navigateToBooking({
              serviceType: serviceType as (typeof SERVICE_TYPE_OPTIONS)[number],
              note: `Interested in offer: ${offerTitle} (subject to eligibility)`,
            })
          }
        />

        <AboutSection />

        <HowItWorksSection />

        <BookingSection prefill={bookingPrefill} />

        <TestimonialsSection />

        <FaqSection />

        <ContactSection />
      </main>

      <Footer onOpenLegal={(doc) => setLegalDoc(doc)} />

      <LegalModal docType={legalDoc} onClose={() => setLegalDoc(null)} />

      <FloatingActions onBookClick={() => navigateToBooking()} />
    </div>
  );
}
