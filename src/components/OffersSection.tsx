import React from 'react';
import { ArrowRight, Gift, Home, SearchCheck, Sparkles, Users } from 'lucide-react';
import { SPECIAL_OFFERS } from '../data/fixoraData';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface OffersSectionProps {
  onClaimOffer: (offerTitle: string, serviceType: string) => void;
}

function OfferIcon({ id }: { id: string }) {
  const cls = 'w-5 h-5 text-[#1677FF]';
  switch (id) {
    case 'offer-free-home':
      return <Home className={cls} aria-hidden="true" />;
    case 'offer-free-diagnosis':
      return <SearchCheck className={cls} aria-hidden="true" />;
    case 'offer-refer-friend':
      return <Users className={cls} aria-hidden="true" />;
    default:
      return <Gift className={cls} aria-hidden="true" />;
  }
}

export const OffersSection: React.FC<OffersSectionProps> = ({ onClaimOffer }) => {
  return (
    <section
      id="offers"
      className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#101B35]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Limited-Time Banner (no invented discount percentage) */}
        <div className="rounded-2xl bg-[#101B35] text-white p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#1677FF]/25 border border-[#19D5E8]/30 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-[#19D5E8]" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold text-[#19D5E8] tracking-wide">
                Limited-Time Customer Privileges
              </p>
              <h2 className="mt-1 font-display font-bold text-xl sm:text-2xl text-white tracking-tight">
                Special Service Benefits for Hyderabad &amp; First-Time Bookings
              </h2>
              <p className="mt-1.5 text-sm text-slate-300 max-w-2xl">
                Ask our support desk about active seasonal offers, referral savings, and
                eligible Hyderabad free-visit areas when requesting your estimate.
              </p>
            </div>
          </div>

          <a
            href={buildWhatsAppUrl(
              'Hello FIXORA MOBILES, I would like to check current eligibility for your special service offers.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#101B35] bg-[#19D5E8] hover:bg-[#4AE2F2] rounded-xl transition-colors whitespace-nowrap shrink-0 self-start lg:self-auto"
          >
            <span>Check Offer Eligibility</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>

        {/* 4 Special Offer Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SPECIAL_OFFERS.map((offer) => (
            <article
              key={offer.id}
              className="bg-white rounded-2xl border border-[#101B35]/10 p-6 flex flex-col justify-between hover:border-[#1677FF]/35 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#F5F8FC] border border-[#101B35]/10 flex items-center justify-center">
                    <OfferIcon id={offer.id} />
                  </div>
                  <span className="text-xs font-medium text-[#1677FF]">{offer.badge}</span>
                </div>

                <h3 className="mt-5 font-display font-bold text-lg text-[#101B35] tracking-tight">
                  {offer.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#172033]">{offer.description}</p>
                <p className="mt-2 text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                  {offer.eligibility}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#101B35]/8">
                <button
                  type="button"
                  onClick={() => onClaimOffer(offer.title, offer.serviceTypePreselect)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1677FF] hover:text-[#101B35] transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF] rounded"
                >
                  <span>Request with Booking</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
