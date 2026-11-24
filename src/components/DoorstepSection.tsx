import React from 'react';
import { ArrowRight, CheckCircle2, Info } from 'lucide-react';
import { DOORSTEP_HIGHLIGHTS } from '../data/fixoraData';
import { ResilientImage } from './ResilientImage';

interface DoorstepSectionProps {
  onScheduleHomeService: () => void;
}

export const DoorstepSection: React.FC<DoorstepSectionProps> = ({
  onScheduleHomeService,
}) => {
  return (
    <section
      id="doorstep-service"
      className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#101B35]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Photography Column */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-[#101B35]/10 bg-white">
              <ResilientImage
                src="/src/assets/images/doorstep_service_kit_1795505797891.jpg"
                alt="Portable precision smartphone repair toolkit prepared for Hyderabad doorstep visits"
                fallbackTitle="Hyderabad Doorstep Technician Kit"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101B35]/75 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-medium text-[#19D5E8]">
                  Hyderabad Doorstep Operations
                </p>
                <p className="mt-1 font-display font-semibold text-lg leading-snug">
                  Equipped Field Kit &amp; Sealed Component Handling
                </p>
              </div>
            </div>
          </div>

          {/* Right Structured Explanation Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
                Doorstep Convenience in Hyderabad
              </p>
              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
                Why Visit a Repair Shop? We Come to You!
              </h2>
              <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed max-w-2xl">
                Skip waiting rooms and uncertain counter quotes. FIXORA brings trained technical
                care straight to your residence or office across eligible Hyderabad neighborhoods.
              </p>

              {/* 6-Item Highlight Grid */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {DOORSTEP_HIGHLIGHTS.map((item) => (
                  <div
                    key={item.title}
                    className="bg-white rounded-xl border border-[#101B35]/10 p-4 flex items-start gap-3"
                  >
                    <CheckCircle2
                      className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-display font-semibold text-sm text-[#101B35]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparent Eligibility Notice & CTA */}
            <div className="mt-7 space-y-5">
              <div className="rounded-xl bg-white border border-[#101B35]/15 p-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-[#1677FF] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-[#172033]/80 leading-relaxed">
                  <strong className="font-semibold text-[#101B35]">Service Notice:</strong> Free
                  home service is subject to Hyderabad service-area availability. Repair, spare
                  parts, and pickup charges may apply where applicable.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onScheduleHomeService}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl shadow-sm transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B35]"
                >
                  <span>Schedule Home Service</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
