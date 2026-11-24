import React, { useState } from 'react';
import {
  ArrowRight,
  BatteryCharging,
  Camera,
  Cpu,
  Database,
  Droplets,
  Gauge,
  Plug,
  Power,
  Settings,
  Smartphone,
  Volume2,
  Wifi,
  X,
} from 'lucide-react';
import { REPAIR_SERVICES, RepairService, ServiceCategory } from '../data/fixoraData';

interface ServicesSectionProps {
  onSelectServiceForBooking: (serviceTitle: string, isOnline?: boolean) => void;
}

type FilterOption = 'all' | ServiceCategory;

function ServiceIcon({ name }: { name: RepairService['iconName'] }) {
  const iconClass = 'w-5 h-5 text-[#1677FF]';
  switch (name) {
    case 'smartphone':
      return <Smartphone className={iconClass} aria-hidden="true" />;
    case 'battery':
      return <BatteryCharging className={iconClass} aria-hidden="true" />;
    case 'plug':
      return <Plug className={iconClass} aria-hidden="true" />;
    case 'volume':
      return <Volume2 className={iconClass} aria-hidden="true" />;
    case 'camera':
      return <Camera className={iconClass} aria-hidden="true" />;
    case 'droplets':
      return <Droplets className={iconClass} aria-hidden="true" />;
    case 'cpu':
      return <Cpu className={iconClass} aria-hidden="true" />;
    case 'settings':
      return <Settings className={iconClass} aria-hidden="true" />;
    case 'gauge':
      return <Gauge className={iconClass} aria-hidden="true" />;
    case 'wifi':
      return <Wifi className={iconClass} aria-hidden="true" />;
    case 'power':
      return <Power className={iconClass} aria-hidden="true" />;
    case 'database':
      return <Database className={iconClass} aria-hidden="true" />;
  }
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking,
}) => {
  const [filter, setFilter] = useState<FilterOption>('all');
  const [activeService, setActiveService] = useState<RepairService | null>(null);

  const visibleServices =
    filter === 'all'
      ? REPAIR_SERVICES
      : REPAIR_SERVICES.filter((service) => service.category === filter);

  const filterButtons: { id: FilterOption; label: string }[] = [
    { id: 'all', label: 'All Services (12)' },
    { id: 'hardware', label: 'Hardware Repair' },
    { id: 'board', label: 'Board & Liquid Care' },
    { id: 'software', label: 'Software & Data' },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 bg-white border-t border-[#101B35]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading + Filter Controls */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
              Complete Smartphone Care
            </p>
            <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
              12 Specialized Mobile Repair &amp; Diagnostic Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
              From precision display replacements in Hyderabad to software optimization and data
              backup assessments, every repair starts with transparent diagnostics.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter repair services by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 bg-[#F5F8FC] rounded-xl border border-[#101B35]/10 self-start lg:self-auto"
          >
            {filterButtons.map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(tab.id)}
                  className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF] ${
                    isActive
                      ? 'bg-[#101B35] text-white shadow-xs'
                      : 'text-[#172033]/75 hover:text-[#101B35]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 12 Service Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleServices.map((service) => (
            <article
              key={service.id}
              className="group bg-[#F5F8FC]/60 hover:bg-white rounded-2xl border border-[#101B35]/10 hover:border-[#1677FF]/35 p-6 flex flex-col justify-between transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-white border border-[#101B35]/10 flex items-center justify-center shrink-0 group-hover:border-[#1677FF]/30 transition-colors">
                    <ServiceIcon name={service.iconName} />
                  </div>
                  <div className="text-xs font-medium text-[#172033]/55 flex items-center gap-1.5">
                    <span className="font-mono tabular-nums">{service.number}</span>
                    <span aria-hidden="true">·</span>
                    <span>{service.categoryLabel}</span>
                  </div>
                </div>

                <h3 className="mt-5 font-display font-semibold text-lg text-[#101B35] tracking-tight leading-snug">
                  {service.title}
                </h3>

                <p className="mt-2.5 text-sm text-[#172033]/75 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#101B35]/8 flex items-center justify-between gap-3">
                <span className="text-xs text-[#172033]/60 truncate">{service.serviceMode}</span>
                <button
                  type="button"
                  onClick={() => setActiveService(service)}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1677FF] hover:text-[#101B35] transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF] rounded"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#101B35]/60 backdrop-blur-xs"
          onClick={() => setActiveService(null)}
        >
          <div
            className="bg-white rounded-2xl border border-[#101B35]/15 max-w-lg w-full p-6 sm:p-7 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-[#F5F8FC] border border-[#101B35]/10 flex items-center justify-center shrink-0">
                  <ServiceIcon name={activeService.iconName} />
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1677FF]">
                    {activeService.number} · {activeService.categoryLabel}
                  </p>
                  <h3
                    id="service-modal-title"
                    className="font-display font-bold text-xl text-[#101B35] leading-snug"
                  >
                    {activeService.title}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveService(null)}
                aria-label="Close service details"
                className="w-9 h-9 rounded-lg border border-[#101B35]/10 flex items-center justify-center text-[#172033]/70 hover:text-[#101B35] hover:bg-[#F5F8FC] cursor-pointer"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[#172033]/80 leading-relaxed">
              <p>{activeService.detailDescription}</p>
              <div className="rounded-xl bg-[#F5F8FC] border border-[#101B35]/10 p-4 space-y-1.5">
                <p className="text-xs font-semibold text-[#101B35]">
                  Service Scope &amp; Coverage
                </p>
                <p className="text-xs sm:text-sm text-[#172033]/75">{activeService.scopeNote}</p>
                <p className="text-xs text-[#1677FF] font-medium pt-1">
                  Mode: {activeService.serviceMode}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setActiveService(null)}
                className="px-4 py-2.5 text-sm font-medium text-[#172033] border border-[#101B35]/15 rounded-xl hover:bg-[#F5F8FC] cursor-pointer"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  const title = activeService.title;
                  setActiveService(null);
                  onSelectServiceForBooking(title, false);
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl transition-colors cursor-pointer"
              >
                <span>Book This Service</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
