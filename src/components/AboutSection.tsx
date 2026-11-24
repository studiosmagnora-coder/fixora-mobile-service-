import React from 'react';
import {
  Award,
  Globe2,
  HeartHandshake,
  Home,
  Layers,
  ReceiptText,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/fixoraData';
import { ResilientImage } from './ResilientImage';

const FEATURE_ICONS = [
  Award,
  Home,
  ReceiptText,
  Layers,
  HeartHandshake,
  Globe2,
];

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-t border-[#101B35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Us Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-6 flex flex-col justify-center">
            <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
              About FIXORA MOBILES
            </p>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
              Technology Problems? We&apos;ve Got Your Back.
            </h2>

            <div className="mt-5 space-y-4 text-sm sm:text-base text-[#172033]/80 leading-relaxed">
              <p>
                FIXORA MOBILES is a customer-focused smartphone repair and support service based
                in Hyderabad, India. We believe mobile repair should be convenient, transparent
                and reliable.
              </p>
              <p>
                Our goal is to make smartphone care easier through professional repair
                assistance, doorstep convenience and accessible online support.
              </p>
              <p>
                Whether your screen is damaged, battery is draining or your smartphone needs
                technical attention, FIXORA is here to help.
              </p>
            </div>

            <div className="mt-7 pt-6 border-t border-[#101B35]/10 grid grid-cols-2 gap-6">
              <div>
                <p className="font-display font-bold text-lg text-[#101B35]">Hyderabad</p>
                <p className="mt-0.5 text-xs sm:text-sm text-[#172033]/70">
                  Home pickup &amp; doorstep physical service coverage
                </p>
              </div>
              <div>
                <p className="font-display font-bold text-lg text-[#101B35]">Pan-India</p>
                <p className="mt-0.5 text-xs sm:text-sm text-[#172033]/70">
                  Remote software &amp; setup support wherever applicable
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex">
            <div className="relative w-full min-h-[300px] sm:min-h-[380px] lg:min-h-full rounded-2xl overflow-hidden border border-[#101B35]/10 bg-[#101B35]">
              <ResilientImage
                src="/src/assets/images/about_technician_precision_1795505796534.jpg"
                alt="Professional smartphone technician inspecting a logic board and camera module under precision workbench lighting"
                fallbackTitle="FIXORA Technical Care Team"
                className="w-full h-full object-cover object-center"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#101B35]/75 via-transparent to-transparent"
              />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <p className="text-xs font-medium text-[#19D5E8]">Hyderabad Service Desk</p>
                <p className="mt-1 font-display font-semibold text-lg leading-snug">
                  Careful Inspection Before Every Component Decision
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose FIXORA? 6 Feature Cards */}
        <div className="mt-16 pt-14 border-t border-[#101B35]/10">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
              Why Choose FIXORA?
            </p>
            <h3 className="mt-2 font-display font-bold text-2xl sm:text-3xl text-[#101B35] tracking-tight text-balance">
              Built Around Transparency, Convenience &amp; Care
            </h3>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const IconComponent = FEATURE_ICONS[idx % FEATURE_ICONS.length];
              return (
                <div
                  key={item.title}
                  className="bg-[#F5F8FC]/65 rounded-2xl border border-[#101B35]/10 p-6"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#101B35]/10 flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-[#1677FF]" aria-hidden="true" />
                  </div>
                  <h4 className="mt-4 font-display font-semibold text-base sm:text-lg text-[#101B35]">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm text-[#172033]/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
