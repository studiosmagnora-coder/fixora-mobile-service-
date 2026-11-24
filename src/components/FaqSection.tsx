import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '../data/fixoraData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string>(FAQ_ITEMS[0].id);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-t border-[#101B35]/8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
            Frequently Asked Questions
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
            Clear Answers Before You Book
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
            Details on Hyderabad doorstep coverage, repair timelines, parts options, and
            pan-India online support.
          </p>
        </div>

        <div className="mt-10 divide-y divide-[#101B35]/10 rounded-2xl border border-[#101B35]/10 bg-[#F5F8FC]/40 overflow-hidden">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-btn-${item.id}`;

            return (
              <div key={item.id} className="bg-white/85">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 hover:bg-[#F5F8FC]/80 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#1677FF]"
                  >
                    <span className="font-display font-semibold text-sm sm:text-base text-[#101B35]">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#1677FF] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="px-5 sm:px-6 pb-5 text-sm text-[#172033]/80 leading-relaxed"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
