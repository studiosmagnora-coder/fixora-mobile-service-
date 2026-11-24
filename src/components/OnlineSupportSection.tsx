import React from 'react';
import { ArrowRight, Globe2, Laptop, Check } from 'lucide-react';
import { ONLINE_SERVICES } from '../data/fixoraData';
import { ResilientImage } from './ResilientImage';

interface OnlineSupportSectionProps {
  onGetOnlineAssistance: () => void;
}

export const OnlineSupportSection: React.FC<OnlineSupportSectionProps> = ({
  onGetOnlineAssistance,
}) => {
  return (
    <section
      id="online-services"
      className="py-16 sm:py-20 bg-[#101B35] text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#19D5E8] tracking-wide">
                <Globe2 className="w-4 h-4" aria-hidden="true" />
                <span>Remote Software &amp; Setup Assistance Across India</span>
              </div>

              <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight text-balance">
                FIXORA Online Support – Service Across India
              </h2>

              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Outside Hyderabad or facing a software hurdle? Connect with our remote support
                desk from any city in India for guided troubleshooting, device setup, and backup
                assistance.
              </p>

              {/* 7 Online Services Grid */}
              <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {ONLINE_SERVICES.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl bg-white/[0.05] border border-white/10 p-4 flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-md bg-[#1677FF]/25 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-[#19D5E8]" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-white tracking-wide">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Scope Clarification & CTA */}
            <div className="mt-7 space-y-5">
              <div className="rounded-xl bg-white/[0.04] border border-white/15 p-4 flex items-start gap-3">
                <Laptop className="w-5 h-5 text-[#19D5E8] shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  Online assistance is available across India, subject to the nature of the issue.
                  Remote sessions cover software, configuration, and guided troubleshooting only—physical
                  hardware repairs require in-person technician service in Hyderabad.
                </p>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onGetOnlineAssistance}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-[#101B35] bg-[#19D5E8] hover:bg-[#4AE2F2] rounded-xl shadow-sm transition-colors duration-150 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  <span>Get Online Assistance</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Photography Column */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-white/15 bg-[#162547]">
              <ResilientImage
                src="/src/assets/images/online_support_remote_1795505797944.jpg"
                alt="Customer in India receiving guided smartphone software and backup support remotely from FIXORA MOBILES"
                fallbackTitle="Pan-India Online Smartphone Support"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101B35]/85 via-[#101B35]/15 to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-medium text-[#19D5E8]">Pan-India Remote Care</p>
                <p className="mt-1 font-display font-semibold text-lg leading-snug">
                  Guided Android &amp; Smartphone Configuration From Home
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
