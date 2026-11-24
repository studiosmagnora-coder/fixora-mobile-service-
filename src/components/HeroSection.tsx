import React from 'react';
import {
  ArrowRight,
  Cpu,
  MapPin,
  ShieldCheck,
  Smartphone,
  Wrench,
  Home,
} from 'lucide-react';
import { ResilientImage } from './ResilientImage';

interface HeroSectionProps {
  onBookHomeService: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onBookHomeService }) => {
  return (
    <section
      id="home"
      className="relative bg-[#F5F8FC] pt-8 pb-14 sm:pt-12 sm:pb-16 lg:pt-14 lg:pb-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Balanced Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 flex flex-col justify-between py-2">
            <div>
              {/* Quiet unboxed regional kicker */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
                <span>Hyderabad Doorstep Service</span>
                <span aria-hidden="true" className="text-[#101B35]/30">
                  ·
                </span>
                <span className="text-[#101B35]/75">Pan-India Online Care</span>
              </div>

              <h1
                className="mt-4 font-display font-bold text-[#101B35] tracking-tight leading-[1.12] text-balance"
                style={{ fontSize: 'clamp(2.25rem, 4vw, 3.65rem)' }}
              >
                Your Smartphone Deserves Expert Care.
              </h1>

              <p className="mt-5 text-base sm:text-lg text-[#172033]/80 leading-relaxed max-w-xl">
                From cracked screens to complex motherboard repairs, FIXORA brings reliable
                mobile repair solutions right to your doorstep in Hyderabad.
              </p>

              {/* Highlight Notice: Free Home Service */}
              <div className="mt-6 rounded-xl bg-white border border-[#1677FF]/25 p-4 flex items-start gap-3.5 max-w-xl">
                <div className="w-10 h-10 rounded-lg bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                  <Home className="w-5 h-5 text-[#1677FF]" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[#101B35] tracking-wide">
                    FREE HOME SERVICE AVAILABLE IN HYDERABAD
                  </p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#172033]/70">
                    Technician visits at your home or workplace in eligible Hyderabad zones.
                  </p>
                </div>
              </div>

              {/* Primary + Secondary CTAs */}
              <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  type="button"
                  onClick={onBookHomeService}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B35]"
                >
                  <span>Book Free Home Service</span>
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-[#101B35] bg-white border border-[#101B35]/15 hover:border-[#1677FF]/40 hover:bg-slate-50 rounded-xl transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
                >
                  <span>Explore Our Services</span>
                </a>
              </div>
            </div>

            {/* Three Trust Indicators (clean unboxed items) */}
            <div className="mt-9 pt-6 border-t border-[#101B35]/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <Wrench className="w-4 h-4 text-[#1677FF] shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-[#101B35]">Expert Technicians</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#1677FF] shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-[#101B35]">
                  Quality Replacement Parts
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#1677FF] shrink-0" aria-hidden="true" />
                <span className="text-sm font-medium text-[#101B35]">
                  Convenient Doorstep Service
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-6 relative flex">
            <div className="relative w-full min-h-[340px] sm:min-h-[420px] lg:min-h-full rounded-2xl overflow-hidden border border-[#101B35]/10 bg-[#101B35]">
              <ResilientImage
                src="/src/assets/images/hero_smartphone_repair_1795505795964.jpg"
                alt="FIXORA MOBILES technician performing precision smartphone display replacement on an ESD workbench"
                fallbackTitle="FIXORA Precision Smartphone Lab"
                className="w-full h-full object-cover object-center"
              />
              {/* Measured gradient scrim for text legibility */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101B35]/85 via-[#101B35]/20 to-transparent"
              />

              {/* Subtle floating service indicator tiles anchored cleanly inside the frame */}
              <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 bg-[#101B35]/85 backdrop-blur-md text-white px-3.5 py-2 rounded-xl border border-white/15">
                <Cpu className="w-4 h-4 text-[#19D5E8]" aria-hidden="true" />
                <span className="text-xs font-medium">ESD-Safe Lab Diagnostics</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div>
                  <p className="text-xs font-medium text-[#19D5E8]">
                    Your Phone. Our Expertise. Your Convenience.
                  </p>
                  <p className="mt-1 font-display font-semibold text-lg sm:text-xl leading-snug">
                    Doorstep Diagnostics &amp; Transparent Estimates
                  </p>
                </div>
                <div className="flex items-center gap-2.5 shrink-0 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/15">
                  <Smartphone className="w-4 h-4 text-[#19D5E8]" aria-hidden="true" />
                  <span className="text-xs font-medium whitespace-nowrap">
                    iOS &amp; Android Care
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width 4-Column Capability Strip below Hero Split */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: 'Hyderabad Doorstep Visits',
              detail: 'Home & office technician slots in eligible Hyderabad areas.',
            },
            {
              title: 'Upfront Cost Clarity',
              detail: 'Clear part & service quote shared for approval before repair.',
            },
            {
              title: 'Micro-Soldering Lab',
              detail: 'Dedicated pickup & drop-off for board and water damage care.',
            },
            {
              title: 'India-Wide Online Desk',
              detail: 'Remote software, setup, and backup assistance across India.',
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl border border-[#101B35]/10 px-5 py-4"
            >
              <p className="font-display font-semibold text-sm text-[#101B35]">{item.title}</p>
              <p className="mt-1 text-xs sm:text-sm text-[#172033]/70 leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
