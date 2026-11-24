import React, { useEffect, useState } from 'react';
import {
  AlertCircle,
  Calendar,
  CheckCircle2,
  Clock,
  MessageCircle,
  RotateCcw,
} from 'lucide-react';
import {
  BRANDS_WE_REPAIR,
  PREFERRED_TIME_SLOTS,
  SERVICE_DROPDOWN_OPTIONS,
  SERVICE_TYPE_OPTIONS,
} from '../data/fixoraData';
import { buildWhatsAppUrl } from '../config/siteConfig';

export interface BookingPrefill {
  brand?: string;
  service?: string;
  serviceType?: (typeof SERVICE_TYPE_OPTIONS)[number];
  note?: string;
  timestamp: number;
}

interface BookingSectionProps {
  prefill: BookingPrefill | null;
}

interface BookingFormState {
  fullName: string;
  mobileNumber: string;
  whatsappNumber: string;
  sameAsMobile: boolean;
  email: string;
  brand: string;
  model: string;
  repairService: string;
  problemDescription: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  fullAddress: string;
  areaPincode: string;
  additionalNotes: string;
  consent: boolean;
}

interface SubmittedBooking {
  referenceId: string;
  data: BookingFormState;
  submittedAt: string;
}

function getTodayIso(): string {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, '0');
  const d = String(now.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

function generateBookingRef(): string {
  const randomDigits = Math.floor(100000 + Math.random() * 900000);
  return `FXR-${randomDigits}`;
}

function normalizeIndianPhone(value: string): string {
  return value.replace(/\D/g, '').replace(/^91(?=\d{10}$)/, '');
}

const INITIAL_FORM: BookingFormState = {
  fullName: '',
  mobileNumber: '',
  whatsappNumber: '',
  sameAsMobile: false,
  email: '',
  brand: '',
  model: '',
  repairService: '',
  problemDescription: '',
  serviceType: 'Free Home Service – Hyderabad',
  preferredDate: '',
  preferredTime: '',
  fullAddress: '',
  areaPincode: '',
  additionalNotes: '',
  consent: false,
};

export const BookingSection: React.FC<BookingSectionProps> = ({ prefill }) => {
  const [form, setForm] = useState<BookingFormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof BookingFormState, string>>>({});
  const [submitted, setSubmitted] = useState<SubmittedBooking | null>(null);

  useEffect(() => {
    if (!prefill) return;
    setSubmitted(null);
    setForm((prev) => ({
      ...prev,
      brand: prefill.brand ?? prev.brand,
      repairService: prefill.service ?? prev.repairService,
      serviceType: prefill.serviceType ?? prev.serviceType,
      additionalNotes: prefill.note ?? prev.additionalNotes,
    }));
  }, [prefill]);

  const isHyderabadPhysical =
    form.serviceType === 'Free Home Service – Hyderabad' ||
    form.serviceType === 'Pickup & Drop-off – Hyderabad';

  const updateField = <K extends keyof BookingFormState>(
    field: K,
    value: BookingFormState[K]
  ) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      if (field === 'mobileNumber' && prev.sameAsMobile) {
        next.whatsappNumber = String(value);
      }
      return next;
    });
    if (errors[field]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSameAsMobileToggle = (checked: boolean) => {
    setForm((prev) => ({
      ...prev,
      sameAsMobile: checked,
      whatsappNumber: checked ? prev.mobileNumber : prev.whatsappNumber,
    }));
    if (checked && errors.whatsappNumber) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy.whatsappNumber;
        return copy;
      });
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof BookingFormState, string>> = {};

    if (!form.fullName.trim() || form.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }

    const cleanMobile = normalizeIndianPhone(form.mobileNumber);
    if (!/^[6-9]\d{9}$/.test(cleanMobile)) {
      newErrors.mobileNumber = 'Enter a valid 10-digit Indian mobile number.';
    }

    const cleanWhatsApp = normalizeIndianPhone(form.whatsappNumber);
    if (!/^[6-9]\d{9}$/.test(cleanWhatsApp)) {
      newErrors.whatsappNumber = 'Enter a valid 10-digit WhatsApp number.';
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = 'Please enter a valid email address or leave blank.';
    }

    if (!form.brand.trim()) {
      newErrors.brand = 'Please select your smartphone brand.';
    }

    if (!form.model.trim()) {
      newErrors.model = 'Please enter your smartphone model (e.g., iPhone 14, Galaxy S23).';
    }

    if (!form.repairService.trim()) {
      newErrors.repairService = 'Please select a repair or support service.';
    }

    if (!form.problemDescription.trim() || form.problemDescription.trim().length < 8) {
      newErrors.problemDescription = 'Please briefly describe the issue with your device.';
    }

    if (!form.serviceType.trim()) {
      newErrors.serviceType = 'Please choose a service type.';
    }

    if (!form.preferredDate) {
      newErrors.preferredDate = 'Please select a preferred date.';
    }

    if (!form.preferredTime) {
      newErrors.preferredTime = 'Please select a preferred time window.';
    }

    if (isHyderabadPhysical && (!form.fullAddress.trim() || form.fullAddress.trim().length < 8)) {
      newErrors.fullAddress = 'Full Hyderabad address is required for home service or pickup.';
    }

    if (!form.areaPincode.trim()) {
      newErrors.areaPincode = isHyderabadPhysical
        ? 'Please enter your Hyderabad area and 6-digit pincode.'
        : 'Please enter your city / area & pincode.';
    }

    if (!form.consent) {
      newErrors.consent = 'Please confirm your consent so we can process your request.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const referenceId = generateBookingRef();
    const submittedAt = new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    setSubmitted({
      referenceId,
      data: { ...form },
      submittedAt,
    });
  };

  const buildBookingWhatsAppText = (booking: SubmittedBooking): string => {
    const { data, referenceId } = booking;
    return [
      `Hello FIXORA MOBILES, I have submitted an appointment request.`,
      ``,
      `Booking Reference: ${referenceId}`,
      `Name: ${data.fullName}`,
      `Mobile: ${data.mobileNumber}`,
      `WhatsApp: ${data.whatsappNumber}`,
      data.email ? `Email: ${data.email}` : null,
      `Device: ${data.brand} ${data.model}`,
      `Service: ${data.repairService}`,
      `Service Type: ${data.serviceType}`,
      `Preferred Slot: ${data.preferredDate} (${data.preferredTime})`,
      `Area / Pincode: ${data.areaPincode}`,
      data.fullAddress ? `Address: ${data.fullAddress}` : null,
      `Issue: ${data.problemDescription}`,
      data.additionalNotes ? `Notes: ${data.additionalNotes}` : null,
      ``,
      `Please confirm slot availability.`,
    ]
      .filter(Boolean)
      .join('\n');
  };

  const inputBaseClass = (hasError?: string) =>
    `w-full rounded-xl border bg-white px-3.5 py-2.5 text-sm text-[#172033] placeholder:text-[#172033]/40 focus:outline-none focus:ring-2 transition-colors ${
      hasError
        ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20'
        : 'border-[#101B35]/15 focus:border-[#1677FF] focus:ring-[#1677FF]/20'
    }`;

  return (
    <section
      id="book-appointment"
      className="py-16 sm:py-20 bg-white border-t border-[#101B35]/8"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs sm:text-sm font-semibold text-[#1677FF] tracking-wide">
            Schedule Service or Online Consultation
          </p>
          <h2 className="mt-2 font-display font-bold text-2xl sm:text-3xl lg:text-4xl text-[#101B35] tracking-tight text-balance">
            Book an Appointment with FIXORA MOBILES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#172033]/75 leading-relaxed">
            Request a Hyderabad doorstep visit, pickup slot, or pan-India remote support session.
            Receive a booking reference immediately and share via WhatsApp for confirmation.
          </p>
        </div>

        <div className="mt-10 rounded-2xl bg-[#F5F8FC] border border-[#101B35]/12 p-5 sm:p-8 lg:p-10">
          {submitted ? (
            <div className="bg-white rounded-2xl border border-[#101B35]/10 p-6 sm:p-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#1677FF]/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#1677FF]" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#1677FF] tracking-wide">
                    Request Recorded · Pending Team Acceptance
                  </p>
                  <h3 className="mt-1 font-display font-bold text-xl sm:text-2xl text-[#101B35]">
                    Booking Request Received
                  </h3>
                  <p className="mt-2 text-sm text-[#172033]/80 leading-relaxed">
                    Thank you, <strong>{submitted.data.fullName}</strong>. Your request has been
                    logged with reference{' '}
                    <span className="font-mono font-semibold text-[#101B35] tabular-nums bg-[#F5F8FC] px-2 py-0.5 rounded border border-[#101B35]/10">
                      {submitted.referenceId}
                    </span>
                    . Please note that your appointment is <strong>pending confirmation</strong>{' '}
                    until our FIXORA MOBILES coordinator verifies technician availability and
                    accepts your requested slot.
                  </p>
                </div>
              </div>

              {/* Summary Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 rounded-xl bg-[#F5F8FC] border border-[#101B35]/10 p-5 text-sm">
                <div>
                  <p className="text-xs text-[#172033]/60">Device &amp; Service</p>
                  <p className="mt-0.5 font-semibold text-[#101B35]">
                    {submitted.data.brand} {submitted.data.model}
                  </p>
                  <p className="text-xs text-[#172033]/80">{submitted.data.repairService}</p>
                </div>
                <div>
                  <p className="text-xs text-[#172033]/60">Service Type &amp; Preferred Slot</p>
                  <p className="mt-0.5 font-semibold text-[#101B35]">
                    {submitted.data.serviceType}
                  </p>
                  <p className="text-xs text-[#172033]/80 tabular-nums">
                    {submitted.data.preferredDate} · {submitted.data.preferredTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#172033]/60">Contact Numbers</p>
                  <p className="mt-0.5 font-mono text-xs sm:text-sm text-[#101B35] tabular-nums">
                    Mobile: {submitted.data.mobileNumber} · WA: {submitted.data.whatsappNumber}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#172033]/60">Location / Area</p>
                  <p className="mt-0.5 text-xs sm:text-sm text-[#101B35]">
                    {submitted.data.areaPincode}
                  </p>
                </div>
              </div>

              {/* WhatsApp Send Action */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <a
                  href={buildWhatsAppUrl(buildBookingWhatsAppText(submitted))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-3 text-sm sm:text-base font-semibold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl shadow-xs transition-colors whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Send Booking Details on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(null);
                    setForm(INITIAL_FORM);
                  }}
                  className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 py-3 text-sm font-semibold text-[#101B35] bg-white border border-[#101B35]/15 hover:bg-[#F5F8FC] rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-4 h-4" aria-hidden="true" />
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              {/* Row 1: Contact Identity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-full-name"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Customer Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="booking-full-name"
                    type="text"
                    value={form.fullName}
                    onChange={(e) => updateField('fullName', e.target.value)}
                    placeholder="e.g., Sai Kiran Reddy"
                    className={inputBaseClass(errors.fullName)}
                    aria-invalid={Boolean(errors.fullName)}
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-email"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Email <span className="text-[#172033]/50 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="booking-email"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    placeholder="name@example.com"
                    className={inputBaseClass(errors.email)}
                    aria-invalid={Boolean(errors.email)}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Phone & WhatsApp */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="booking-mobile"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="booking-mobile"
                    type="tel"
                    inputMode="numeric"
                    value={form.mobileNumber}
                    onChange={(e) => updateField('mobileNumber', e.target.value)}
                    placeholder="10-digit mobile number"
                    className={inputBaseClass(errors.mobileNumber)}
                    aria-invalid={Boolean(errors.mobileNumber)}
                  />
                  {errors.mobileNumber && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.mobileNumber}</span>
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <label
                      htmlFor="booking-whatsapp"
                      className="block text-xs sm:text-sm font-semibold text-[#101B35]"
                    >
                      WhatsApp Number <span className="text-red-600">*</span>
                    </label>
                    <label className="inline-flex items-center gap-1.5 text-xs text-[#1677FF] font-medium cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={form.sameAsMobile}
                        onChange={(e) => handleSameAsMobileToggle(e.target.checked)}
                        className="rounded border-[#101B35]/25 text-[#1677FF] focus:ring-[#1677FF]"
                      />
                      <span>Same as mobile</span>
                    </label>
                  </div>
                  <input
                    id="booking-whatsapp"
                    type="tel"
                    inputMode="numeric"
                    value={form.whatsappNumber}
                    onChange={(e) => updateField('whatsappNumber', e.target.value)}
                    disabled={form.sameAsMobile}
                    placeholder="10-digit WhatsApp number"
                    className={`${inputBaseClass(errors.whatsappNumber)} ${
                      form.sameAsMobile ? 'bg-slate-50 text-[#172033]/70' : ''
                    }`}
                    aria-invalid={Boolean(errors.whatsappNumber)}
                  />
                  {errors.whatsappNumber && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.whatsappNumber}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Device & Service */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="booking-brand"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Smartphone Brand <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="booking-brand"
                    value={form.brand}
                    onChange={(e) => updateField('brand', e.target.value)}
                    className={inputBaseClass(errors.brand)}
                    aria-invalid={Boolean(errors.brand)}
                  >
                    <option value="">Select Brand</option>
                    {BRANDS_WE_REPAIR.map((b) => (
                      <option key={b.name} value={b.name}>
                        {b.name}
                      </option>
                    ))}
                    <option value="Other Brand">Other Brand</option>
                  </select>
                  {errors.brand && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.brand}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-model"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Smartphone Model <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="booking-model"
                    type="text"
                    value={form.model}
                    onChange={(e) => updateField('model', e.target.value)}
                    placeholder="e.g., iPhone 15 / OnePlus 12"
                    className={inputBaseClass(errors.model)}
                    aria-invalid={Boolean(errors.model)}
                  />
                  {errors.model && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.model}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-service"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Select Repair Service <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="booking-service"
                    value={form.repairService}
                    onChange={(e) => updateField('repairService', e.target.value)}
                    className={inputBaseClass(errors.repairService)}
                    aria-invalid={Boolean(errors.repairService)}
                  >
                    <option value="">Select Service</option>
                    {SERVICE_DROPDOWN_OPTIONS.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.repairService && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.repairService}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 4: Service Type & Date / Time */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label
                    htmlFor="booking-service-type"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Select Service Type <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="booking-service-type"
                    value={form.serviceType}
                    onChange={(e) => updateField('serviceType', e.target.value)}
                    className={inputBaseClass(errors.serviceType)}
                    aria-invalid={Boolean(errors.serviceType)}
                  >
                    {SERVICE_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.serviceType}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-date"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Select Preferred Date <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="booking-date"
                      type="date"
                      min={getTodayIso()}
                      value={form.preferredDate}
                      onChange={(e) => updateField('preferredDate', e.target.value)}
                      className={inputBaseClass(errors.preferredDate)}
                      aria-invalid={Boolean(errors.preferredDate)}
                    />
                  </div>
                  {errors.preferredDate && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.preferredDate}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-time"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Select Preferred Time <span className="text-red-600">*</span>
                  </label>
                  <select
                    id="booking-time"
                    value={form.preferredTime}
                    onChange={(e) => updateField('preferredTime', e.target.value)}
                    className={inputBaseClass(errors.preferredTime)}
                    aria-invalid={Boolean(errors.preferredTime)}
                  >
                    <option value="">Select Time Slot</option>
                    {PREFERRED_TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                  {errors.preferredTime && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.preferredTime}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 5: Problem Description */}
              <div>
                <label
                  htmlFor="booking-problem"
                  className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                >
                  Describe Your Problem <span className="text-red-600">*</span>
                </label>
                <textarea
                  id="booking-problem"
                  rows={3}
                  value={form.problemDescription}
                  onChange={(e) => updateField('problemDescription', e.target.value)}
                  placeholder="Share symptoms such as cracked glass, touch freeze, liquid spill, battery draining fast, or software error..."
                  className={inputBaseClass(errors.problemDescription)}
                  aria-invalid={Boolean(errors.problemDescription)}
                />
                {errors.problemDescription && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.problemDescription}</span>
                  </p>
                )}
              </div>

              {/* Row 6: Address & Area / Pincode */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                  <label
                    htmlFor="booking-address"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Full Address{' '}
                    {isHyderabadPhysical ? (
                      <span className="text-red-600">* (Required for Hyderabad service)</span>
                    ) : (
                      <span className="text-[#172033]/50 font-normal">
                        (Optional for Online Support)
                      </span>
                    )}
                  </label>
                  <input
                    id="booking-address"
                    type="text"
                    value={form.fullAddress}
                    onChange={(e) => updateField('fullAddress', e.target.value)}
                    placeholder={
                      isHyderabadPhysical
                        ? 'Flat/House No., Building, Street, Landmark in Hyderabad'
                        : 'City & State (for Pan-India Online Support)'
                    }
                    className={inputBaseClass(errors.fullAddress)}
                    aria-invalid={Boolean(errors.fullAddress)}
                  />
                  {errors.fullAddress && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.fullAddress}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="booking-pincode"
                    className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                  >
                    Area / Pincode <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="booking-pincode"
                    type="text"
                    value={form.areaPincode}
                    onChange={(e) => updateField('areaPincode', e.target.value)}
                    placeholder={
                      isHyderabadPhysical ? 'e.g., Madhapur, 500081' : 'e.g., Bengaluru, 560001'
                    }
                    className={inputBaseClass(errors.areaPincode)}
                    aria-invalid={Boolean(errors.areaPincode)}
                  />
                  {errors.areaPincode && (
                    <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                      <span>{errors.areaPincode}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Row 7: Additional Notes */}
              <div>
                <label
                  htmlFor="booking-notes"
                  className="block text-xs sm:text-sm font-semibold text-[#101B35] mb-1.5"
                >
                  Additional Notes{' '}
                  <span className="text-[#172033]/50 font-normal">(Optional)</span>
                </label>
                <input
                  id="booking-notes"
                  type="text"
                  value={form.additionalNotes}
                  onChange={(e) => updateField('additionalNotes', e.target.value)}
                  placeholder="Mention referral name, offer eligibility question, or landmark instructions"
                  className={inputBaseClass()}
                />
              </div>

              {/* Consent Checkbox */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => updateField('consent', e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-[#101B35]/25 text-[#1677FF] focus:ring-[#1677FF]"
                  />
                  <span className="text-xs sm:text-sm text-[#172033]/80 leading-relaxed">
                    I agree to be contacted by FIXORA MOBILES via phone or WhatsApp regarding
                    this service request. I understand that physical doorstep service is limited
                    to Hyderabad, free home visit eligibility depends on area availability, and my
                    appointment is confirmed only after FIXORA MOBILES accepts the slot.
                  </span>
                </label>
                {errors.consent && (
                  <p className="mt-1.5 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                    <span>{errors.consent}</span>
                  </p>
                )}
              </div>

              {/* Submit Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-[#101B35]/10">
                <div className="flex items-center gap-4 text-xs text-[#172033]/65">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-[#1677FF]" aria-hidden="true" />
                    <span>7 Days a Week</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#1677FF]" aria-hidden="true" />
                    <span>Upfront Estimate Before Repair</span>
                  </span>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center min-h-[48px] px-7 py-3 text-sm sm:text-base font-bold text-white bg-[#1677FF] hover:bg-[#105FD9] rounded-xl shadow-sm transition-colors cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#101B35]"
                >
                  CONFIRM MY BOOKING
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
