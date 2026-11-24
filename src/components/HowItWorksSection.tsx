import React from 'react';
import { CalendarCheck, CheckSquare, ClipboardList, Stethoscope } from 'lucide-react';
import { PROCESS_STEPS } from '../data/fixoraData';

const STEP_ICONS = [CalendarCheck, ClipboardList, Stethoscope, CheckSquare];

export const HowItWorksSection: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#101B35]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
            Simple 4-Step Process
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
            How FIXORA Smartphone Care Works
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
            Clear communication from the moment you submit a booking request to final device
            handover.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PROCESS_STEPS.map((item, idx) => {
            const IconComponent = STEP_ICONS[idx % STEP_ICONS.length];
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl border border-[#101B35]/10 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#EEF4FF] border border-[#1677FF]/20 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#1677FF]" aria-hidden="true" />
                    </div>
                    <span className="font-mono tabular-nums text-sm font-semibold text-[#101B35]/45">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display font-semibold text-lg text-[#101B35] leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#172033]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
