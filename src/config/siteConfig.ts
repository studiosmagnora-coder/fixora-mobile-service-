export const SITE_CONFIG = {
  businessName: 'FIXORA MOBILES',
  tagline: 'Your Phone. Our Expertise. Your Convenience.',
  city: 'Hyderabad, Telangana, India',
  physicalCoverage: 'Hyderabad only for physical home pickup and doorstep repair services',
  onlineCoverage: 'Available across India wherever support can be provided remotely',
  // Replace these placeholders with your live business contact details before launch
  phoneDisplay: '+91 90000 00000 (Placeholder)',
  phoneHref: 'tel:+919000000000',
  whatsappNumber: '919000000000', // Digits only with country code (e.g. 9198XXXXXXXX)
  whatsappDisplay: '+91 90000 00000 (WhatsApp Placeholder)',
  email: 'support@fixoramobiles.example',
  address: '[Building / Street Address Placeholder], Hyderabad, Telangana – [PINCODE], India',
  workingHours: 'Monday – Sunday · 9:00 AM – 8:30 PM IST',
  googleMapsUrl: 'https://maps.google.com/?q=Hyderabad,Telangana,India',
  social: {
    instagram: '#instagram-placeholder',
    facebook: '#facebook-placeholder',
    youtube: '#youtube-placeholder',
  },
} as const;

export function buildWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}
