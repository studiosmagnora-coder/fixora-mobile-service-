import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { FixoraLogo } from './FixoraLogo';
import { buildWhatsAppUrl } from '../config/siteConfig';

interface HeaderProps {
  onBookClick: () => void;
}

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Brands We Repair', href: '#brands' },
  { label: 'Online Services', href: '#online-services' },
  { label: 'Offers', href: '#offers' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC<HeaderProps> = ({ onBookClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappHref = buildWhatsAppUrl(
    'Hello FIXORA MOBILES, I would like to enquire about a smartphone repair or support service.'
  );

  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#101B35]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 lg:h-[72px] flex items-center justify-between gap-4 lg:gap-6">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            aria-label="FIXORA MOBILES Home"
            className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1677FF] rounded-lg shrink-0"
          >
            <FixoraLogo variant="dark" compact />
          </a>

          {/* Zone 2: Clean single-line navigation links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-4 xl:gap-6 text-[13px] xl:text-sm font-medium text-[#172033]/80"
          >
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#1677FF] transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#1677FF] hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1677FF] rounded-sm"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Action Controls */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-semibold text-[#101B35] border border-[#101B35]/15 rounded-lg hover:border-[#1677FF]/40 hover:bg-[#F5F8FC] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
            >
              <MessageCircle className="w-4 h-4 text-[#1677FF]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
            <button
              type="button"
              onClick={onBookClick}
              className="inline-flex items-center justify-center px-4 py-2 text-xs xl:text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-lg shadow-xs transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B35]"
            >
              Book a Repair
            </button>
          </div>

          {/* Mobile Hamburger Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#101B35]/15 text-[#101B35] hover:bg-[#F5F8FC] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1677FF]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="lg:hidden border-t border-[#101B35]/10 bg-white px-4 pt-3 pb-5 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-[#101B35]/8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 text-sm font-medium text-[#172033] hover:text-[#1677FF] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2.5 text-sm font-semibold text-[#101B35] border border-[#101B35]/20 rounded-lg hover:bg-[#F5F8FC] transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 text-[#1677FF]" aria-hidden="true" />
              <span>WhatsApp Us</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onBookClick();
              }}
              className="inline-flex items-center justify-center min-h-[44px] px-4 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              Book a Repair
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
