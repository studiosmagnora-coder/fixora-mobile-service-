import React from 'react';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { FixoraLogo } from './FixoraLogo';
import { SITE_CONFIG } from '../config/siteConfig';

export type LegalDocType = 'privacy' | 'terms';

interface FooterProps {
  onOpenLegal: (doc: LegalDocType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  return (
    <footer className="bg-[#101B35] text-slate-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <FixoraLogo variant="light" showTagline />
            <p className="text-sm text-slate-300/85 leading-relaxed max-w-sm">
              Customer-focused smartphone repair in Hyderabad and remote mobile software
              assistance across India. Built on transparent pricing and convenient care.
            </p>
            {/* Social Placeholders */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={SITE_CONFIG.social.instagram}
                aria-label="FIXORA MOBILES Instagram (Placeholder)"
                title="Instagram Placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#19D5E8] hover:border-[#19D5E8]/40 transition-colors"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.social.facebook}
                aria-label="FIXORA MOBILES Facebook (Placeholder)"
                title="Facebook Placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#19D5E8] hover:border-[#19D5E8]/40 transition-colors"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={SITE_CONFIG.social.youtube}
                aria-label="FIXORA MOBILES YouTube (Placeholder)"
                title="YouTube Placeholder"
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-[#19D5E8] hover:border-[#19D5E8]/40 transition-colors"
              >
                <Youtube className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-display font-semibold text-sm text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#home" className="hover:text-[#19D5E8] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#19D5E8] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#brands" className="hover:text-[#19D5E8] transition-colors">
                  Brands We Repair
                </a>
              </li>
              <li>
                <a href="#offers" className="hover:text-[#19D5E8] transition-colors">
                  Special Offers
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#19D5E8] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#book-appointment" className="hover:text-[#19D5E8] transition-colors">
                  Book Appointment
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display font-semibold text-sm text-white">
              Repair &amp; Online Support
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#services" className="hover:text-[#19D5E8] transition-colors">
                  Display &amp; Touch Replacement
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#19D5E8] transition-colors">
                  Battery &amp; Charging Port Care
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#19D5E8] transition-colors">
                  Water Damage &amp; Motherboard Lab
                </a>
              </li>
              <li>
                <a href="#doorstep-service" className="hover:text-[#19D5E8] transition-colors">
                  Hyderabad Doorstep Service
                </a>
              </li>
              <li>
                <a href="#online-services" className="hover:text-[#19D5E8] transition-colors">
                  Pan-India Online Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3 text-sm">
            <h3 className="font-display font-semibold text-sm text-white">Contact Details</h3>
            <p className="text-slate-300/85">{SITE_CONFIG.city}</p>
            <p className="text-xs text-slate-400">
              Physical Service: Hyderabad only
              <br />
              Online Support: Across India
            </p>
            <p className="font-mono text-xs text-slate-300">{SITE_CONFIG.phoneDisplay}</p>
            <p className="text-xs text-[#19D5E8] break-all">{SITE_CONFIG.email}</p>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>Copyright © 2026 FIXORA MOBILES. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
