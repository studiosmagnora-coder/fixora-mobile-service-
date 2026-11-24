import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Clock,
  Globe2,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../config/siteConfig';

interface ContactFormState {
  name: string;
  phone: string;
  email: string;
  topic: string;
  message: string;
}

const INITIAL_CONTACT: ContactFormState = {
  name: '',
  phone: '',
  email: '',
  topic: 'Doorstep Repair Enquiry – Hyderabad',
  message: '',
};

export const ContactSection: React.FC = () => {
  const [form, setForm] = useState<ContactFormState>(INITIAL_CONTACT);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormState, string>>>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof ContactFormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, ''))) {
      nextErrors.phone = 'Enter a valid 10-digit phone number.';
    }
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email or leave blank.';
    }
    if (!form.message.trim() || form.message.trim().length < 6) {
      nextErrors.message = 'Please enter a short message.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSent(true);
  };

  const contactWhatsAppMessage = `Hello FIXORA MOBILES, I have an enquiry (${form.topic}): ${form.message} — ${form.name} (${form.phone})`;

  const inputClass = (err?: string) =>
    `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#172033] placeholder:text-[#172033]/40 focus:outline-none focus:ring-2 transition-colors ${
      err
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
        : 'border-[#101B35]/15 focus:border-[#1677FF] focus:ring-[#1677FF]/20'
    }`;

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-[#101B35]/8"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
            Contact FIXORA MOBILES
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
            Reach Our Hyderabad Repair Desk &amp; Pan-India Online Team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
            Physical doorstep service is available exclusively in Hyderabad, Telangana. Remote
            online support is available across India.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Business Details & Map Placeholder */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="bg-white rounded-2xl border border-[#101B35]/10 p-6 sm:p-7 space-y-5">
              <div>
                <h3 className="font-display font-bold text-xl text-[#101B35]">
                  {SITE_CONFIG.businessName}
                </h3>
                <p className="mt-1 text-sm text-[#172033]/75">{SITE_CONFIG.city}</p>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">Phone Number</p>
                    <p className="text-[#172033]/80 font-mono text-xs sm:text-sm">
                      {SITE_CONFIG.phoneDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="w-4 h-4 text-[#1677FF] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">WhatsApp Number</p>
                    <p className="text-[#172033]/80 font-mono text-xs sm:text-sm">
                      {SITE_CONFIG.whatsappDisplay}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">Business Email</p>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-[#1677FF] hover:underline break-all"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">
                      Complete Business Address
                    </p>
                    <p className="text-[#172033]/80">{SITE_CONFIG.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe2 className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">Service Coverage</p>
                    <p className="text-[#172033]/80">
                      Physical Doorstep Service: Hyderabad only · Online Support: Across India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#1677FF] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-semibold text-[#101B35]">Support Hours</p>
                    <p className="text-[#172033]/80">{SITE_CONFIG.workingHours}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Call Now + WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#101B35] hover:bg-[#1A2B52] rounded-xl transition-colors whitespace-nowrap"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call Now</span>
                </a>
                <a
                  href={buildWhatsAppUrl(
                    'Hello FIXORA MOBILES, I would like to connect with your support team.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  <span>WhatsApp Contact</span>
                </a>
              </div>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className="bg-white rounded-2xl border border-[#101B35]/10 p-5 flex flex-col justify-between">
              <div className="rounded-xl bg-[#F5F8FC] border border-dashed border-[#101B35]/20 p-6 text-center">
                <div className="w-11 h-11 rounded-xl bg-white border border-[#101B35]/10 flex items-center justify-center mx-auto">
                  <MapPin className="w-5 h-5 text-[#1677FF]" aria-hidden="true" />
                </div>
                <p className="mt-3 font-display font-semibold text-sm text-[#101B35]">
                  Google Maps Location Placeholder – Hyderabad, Telangana
                </p>
                <p className="mt-1 text-xs text-[#172033]/70 max-w-md mx-auto leading-relaxed">
                  Configure your verified Google Business Profile map embed URL in{' '}
                  <span className="font-mono">siteConfig.ts</span> once your physical storefront
                  coordinates are finalized.
                </p>
                <a
                  href={SITE_CONFIG.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold text-[#1677FF] bg-white border border-[#1677FF]/30 rounded-lg hover:bg-[#EEF4FF] transition-colors"
                >
                  <span>View Hyderabad Service Region on Google Maps</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Quick Contact Form */}
          <div className="lg:col-span-6 flex">
            <div className="w-full bg-white rounded-2xl border border-[#101B35]/10 p-6 sm:p-8 flex flex-col justify-between">
              {sent ? (
                <div className="my-auto py-8 text-center space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#1677FF]/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6 text-[#1677FF]" aria-hidden="true" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-[#101B35]">
                    Message Prepared for FIXORA Desk
                  </h3>
                  <p className="text-sm text-[#172033]/75 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{form.name}</strong>. Your message has been recorded for
                    follow-up. For immediate response, send it directly to our WhatsApp desk.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={buildWhatsAppUrl(contactWhatsAppMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 py-2.5 text-sm font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" aria-hidden="true" />
                      <span>Send via WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setSent(false);
                        setForm(INITIAL_CONTACT);
                      }}
                      className="inline-flex items-center justify-center min-h-[44px] px-5 py-2.5 text-sm font-semibold text-[#101B35] border border-[#101B35]/15 rounded-xl hover:bg-[#F5F8FC] cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div>
                    <h3 className="font-display font-bold text-xl text-[#101B35]">
                      Send Us a Message
                    </h3>
                    <p className="mt-1 text-sm text-[#172033]/70">
                      Have a question about parts, Hyderabad locality coverage, or online
                      support? Write to us below.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                      >
                        Your Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={form.name}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, name: e.target.value }));
                          if (errors.name) setErrors((p) => ({ ...p, name: undefined }));
                        }}
                        placeholder="Full name"
                        className={inputClass(errors.name)}
                      />
                      {errors.name && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                      >
                        Phone / WhatsApp <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, phone: e.target.value }));
                          if (errors.phone) setErrors((p) => ({ ...p, phone: undefined }));
                        }}
                        placeholder="10-digit number"
                        className={inputClass(errors.phone)}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                      >
                        Email <span className="text-[#172033]/50 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={form.email}
                        onChange={(e) => {
                          setForm((p) => ({ ...p, email: e.target.value }));
                          if (errors.email) setErrors((p) => ({ ...p, email: undefined }));
                        }}
                        placeholder="name@example.com"
                        className={inputClass(errors.email)}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-topic"
                        className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                      >
                        Enquiry Type
                      </label>
                      <select
                        id="contact-topic"
                        value={form.topic}
                        onChange={(e) => setForm((p) => ({ ...p, topic: e.target.value }))}
                        className={inputClass()}
                      >
                        <option>Doorstep Repair Enquiry – Hyderabad</option>
                        <option>Online Support Enquiry – India</option>
                        <option>Repair Estimate / Spare Parts Query</option>
                        <option>Offers &amp; Referral Query</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                    >
                      Message <span className="text-red-600">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => {
                        setForm((p) => ({ ...p, message: e.target.value }));
                        if (errors.message) setErrors((p) => ({ ...p, message: undefined }));
                      }}
                      placeholder="Share your smartphone brand/model and how we can assist..."
                      className={inputClass(errors.message)}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl transition-colors cursor-pointer"
                    >
                      <Send className="w-4 h-4" aria-hidden="true" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
