import React from 'react';
import { Quote } from 'lucide-react';
import { DEMO_TESTIMONIALS } from '../data/fixoraData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#101B35]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
              Customer Experience Preview
            </p>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
              What Customers Expect from FIXORA
            </h2>
          </div>
          <p className="text-xs text-[#172033]/65 max-w-sm">
            Sample Demo Testimonials shown below as representative service scenarios until
            verified customer reviews are published.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {DEMO_TESTIMONIALS.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl border border-[#101B35]/10 p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <Quote className="w-6 h-6 text-[#1677FF]/45" aria-hidden="true" />
                  <span className="text-xs font-medium text-[#172033]/55">
                    Sample Demo Testimonial
                  </span>
                </div>

                <p className="mt-4 text-sm sm:text-base text-[#172033]/85 leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#101B35]/8">
                <p className="font-display font-semibold text-sm text-[#101B35]">
                  {item.customerName}
                </p>
                <div className="mt-0.5 flex flex-wrap items-center gap-1.5 text-xs text-[#172033]/65">
                  <span>{item.location}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-[#1677FF] font-medium">{item.deviceAndService}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
