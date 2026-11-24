import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { BRANDS_WE_REPAIR } from '../data/fixoraData';

interface BrandsSectionProps {
  onSelectBrand: (brandName: string) => void;
}

export const BrandsSection: React.FC<BrandsSectionProps> = ({ onSelectBrand }) => {
  return (
    <section id="brands" className="py-16 sm:py-20 bg-white border-t border-[#101B35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
            Multi-Brand Smartphone Expertise
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
            Brands We Repair &amp; Support
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
            Select your smartphone brand below to jump directly to booking with your device
            brand pre-filled.
          </p>
        </div>

        {/* 10-Brand Architectural Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {BRANDS_WE_REPAIR.map((brand) => (
            <button
              key={brand.name}
              type="button"
              onClick={() => onSelectBrand(brand.name)}
              className="group text-left bg-[#F5F8FC]/70 hover:bg-white rounded-2xl border border-[#101B35]/10 hover:border-[#1677FF]/40 p-5 transition-all duration-150 hover:-translate-y-0.5 hover:shadow-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-display font-bold text-lg sm:text-xl text-[#101B35] tracking-tight group-hover:text-[#1677FF] transition-colors">
                  {brand.shortMark}
                </span>
                <ArrowUpRight
                  className="w-4 h-4 text-[#101B35]/35 group-hover:text-[#1677FF] transition-colors shrink-0"
                  aria-hidden="true"
                />
              </div>
              <p className="mt-2 text-xs font-semibold text-[#172033]">{brand.name}</p>
              <p className="mt-1 text-xs text-[#172033]/65 leading-relaxed">{brand.focus}</p>
            </button>
          ))}
        </div>

        {/* Independent Service Disclaimer */}
        <p className="mt-6 text-xs sm:text-sm text-[#172033]/65 leading-relaxed">
          Independent Service Notice: FIXORA MOBILES is an independent multi-brand smartphone
          repair and support provider. All brand names and trademarks belong to their respective
          owners; listing a brand does not imply official manufacturer authorization.
        </p>
      </div>
    </section>
  );
};
