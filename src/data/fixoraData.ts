export type ServiceCategory = 'hardware' | 'board' | 'software';

export interface RepairService {
  id: string;
  number: string;
  title: string;
  category: ServiceCategory;
  categoryLabel: string;
  shortDescription: string;
  detailDescription: string;
  scopeNote: string;
  serviceMode: string;
  iconName:
    | 'smartphone'
    | 'battery'
    | 'plug'
    | 'volume'
    | 'camera'
    | 'droplets'
    | 'cpu'
    | 'settings'
    | 'gauge'
    | 'wifi'
    | 'power'
    | 'database';
}

export const REPAIR_SERVICES: RepairService[] = [
  {
    id: 'display-touch',
    number: '01',
    title: 'Display & Touch Screen Replacement',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Precision replacement for cracked glass, dead pixels, display lines, or unresponsive touch panels.',
    detailDescription:
      'We inspect frame alignment, display connectors, and touch digitizer response before fitting tested replacement display assemblies matched to your device model.',
    scopeNote: 'Available via Hyderabad doorstep service or pickup based on model complexity.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'smartphone',
  },
  {
    id: 'battery-replacement',
    number: '02',
    title: 'Battery Replacement',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Safe removal of swollen or fast-draining batteries and installation of tested replacement cells.',
    detailDescription:
      'Includes battery health check, adhesive seal replacement, charging current verification, and safe handling of degraded lithium-ion packs.',
    scopeNote: 'Completed on-site in most Hyderabad locations after model verification.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'battery',
  },
  {
    id: 'charging-port',
    number: '03',
    title: 'Charging Port Repair',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Fix loose cables, intermittent fast charging, moisture alerts, or damaged USB-C and Lightning ports.',
    detailDescription:
      'Starts with ultrasonic port cleaning and pin inspection, followed by sub-board or port assembly replacement if physical contacts are worn.',
    scopeNote: 'Estimate shared upfront after initial physical inspection.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'plug',
  },
  {
    id: 'speaker-mic',
    number: '04',
    title: 'Speaker & Microphone Repair',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Resolve muffled earpieces, crackling loudspeakers, or voice clarity issues during calls.',
    detailDescription:
      'Covers acoustic mesh cleaning, earpiece flex inspection, and replacement of faulty speaker or microphone modules.',
    scopeNote: 'Acoustic test performed before and after service.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'volume',
  },
  {
    id: 'camera-repair',
    number: '05',
    title: 'Camera Repair',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Address blurry focus, OIS shaking, black camera screens, or cracked rear camera lens glass.',
    detailDescription:
      'Optical sensor inspection, dust removal, lens glass replacement, or full camera module swap while keeping sensor alignment clean.',
    scopeNote: 'Spare module availability confirmed prior to appointment.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'camera',
  },
  {
    id: 'water-damage',
    number: '06',
    title: 'Water Damage Treatment',
    category: 'board',
    categoryLabel: 'Board & Liquid Care',
    shortDescription:
      'Rapid internal moisture evacuation, corrosion cleaning, and circuit inspection after liquid spills.',
    detailDescription:
      'Power isolation, ultrasonic PCB cleaning, short-circuit diagnostics, and component-level assessment. Turn off your device immediately and avoid charging before inspection.',
    scopeNote: 'Success depends on liquid exposure duration and prior corrosion extent.',
    serviceMode: 'Hyderabad Pickup Lab',
    iconName: 'droplets',
  },
  {
    id: 'motherboard-repair',
    number: '07',
    title: 'Motherboard Repair',
    category: 'board',
    categoryLabel: 'Board & Liquid Care',
    shortDescription:
      'Micro-soldering diagnostics for no-power phones, charging IC faults, and logic board shorts.',
    detailDescription:
      'Thermal imaging, rail voltage testing, and precision IC/connector work performed in our ESD-controlled Hyderabad lab with pickup and drop-off.',
    scopeNote: 'Requires lab turnaround; repair proceeds only after estimate approval.',
    serviceMode: 'Hyderabad Pickup Lab',
    iconName: 'cpu',
  },
  {
    id: 'software-troubleshooting',
    number: '08',
    title: 'Software Installation & Troubleshooting',
    category: 'software',
    categoryLabel: 'Software & Data',
    shortDescription:
      'Resolve boot loops, OS update errors, system crashes, and clean firmware reinstallation.',
    detailDescription:
      'Structured software recovery, OS stability updates, account sync verification, and guided troubleshooting for Android and iOS devices.',
    scopeNote: 'Eligible software sessions available remotely across India.',
    serviceMode: 'Hyderabad & Pan-India Online',
    iconName: 'settings',
  },
  {
    id: 'performance-hanging',
    number: '09',
    title: 'Phone Hanging & Performance Issues',
    category: 'software',
    categoryLabel: 'Software & Data',
    shortDescription:
      'Diagnose storage bottlenecks, overheating background apps, and sluggish interface response.',
    detailDescription:
      'Storage cleanup guidance, background process audit, thermal/battery drain check, and system optimization without unnecessary data loss.',
    scopeNote: 'Available both at your Hyderabad doorstep and remotely across India.',
    serviceMode: 'Hyderabad & Pan-India Online',
    iconName: 'gauge',
  },
  {
    id: 'network-signal',
    number: '10',
    title: 'Network & Signal Problems',
    category: 'board',
    categoryLabel: 'Board & Liquid Care',
    shortDescription:
      'Troubleshoot SIM detection errors, weak mobile reception, Wi-Fi drops, and Bluetooth instability.',
    detailDescription:
      'Covers carrier/APN configuration, antenna coaxial cable inspection, SIM tray replacement, and RF section diagnostics.',
    scopeNote: 'Software network checks can be handled remotely; antenna repair in Hyderabad.',
    serviceMode: 'Hyderabad / Online Check',
    iconName: 'wifi',
  },
  {
    id: 'power-volume-buttons',
    number: '11',
    title: 'Power Button & Volume Button Repair',
    category: 'hardware',
    categoryLabel: 'Hardware Repair',
    shortDescription:
      'Restore tactile click response for stuck, sunken, or unresponsive side power and volume keys.',
    detailDescription:
      'Replacement of external key caps, internal flex cables, or micro-switches to restore reliable power and volume control.',
    scopeNote: 'Quick mechanical check conducted before parts replacement.',
    serviceMode: 'Hyderabad Doorstep / Pickup',
    iconName: 'power',
  },
  {
    id: 'data-backup-assessment',
    number: '12',
    title: 'Data Backup & Recovery Assessment',
    category: 'software',
    categoryLabel: 'Software & Data',
    shortDescription:
      'Guided cloud/local backup setup and honest technical assessment for non-booting devices.',
    detailDescription:
      'We help configure secure backups on working phones and assess storage accessibility on damaged units. Data recovery is never guaranteed and depends on hardware/encryption condition.',
    scopeNote: 'Recovery assessment only — no guarantee of data retrieval.',
    serviceMode: 'Hyderabad / Online Guidance',
    iconName: 'database',
  },
];

export const DOORSTEP_HIGHLIGHTS = [
  {
    title: 'Free Home Service in Hyderabad',
    description: 'Technicians visit selected Hyderabad residential and office zones at zero visit fee.',
  },
  {
    title: 'Convenient Appointment Booking',
    description: 'Pick a preferred date and time window online or via WhatsApp in under two minutes.',
  },
  {
    title: 'Doorstep Diagnosis',
    description: 'Initial physical inspection conducted transparently right in front of you.',
  },
  {
    title: 'Pickup & Drop-Off Where Required',
    description: 'Complex motherboard or liquid-damage repairs are securely routed to our Hyderabad lab.',
  },
  {
    title: 'Transparent Repair Estimates',
    description: 'Clear breakdown of spare part options and service charges before any work begins.',
  },
  {
    title: 'Customer Approval Before Repair',
    description: 'Nothing is replaced or billed without your explicit go-ahead on the shared estimate.',
  },
];

export const ONLINE_SERVICES = [
  {
    title: 'Remote Software Troubleshooting',
    description: 'Step-by-step guidance to resolve app crashes, OS glitches, and settings conflicts.',
  },
  {
    title: 'Smartphone Setup Guidance',
    description: 'Smooth migration of contacts, chats, and preferences when moving to a new phone.',
  },
  {
    title: 'App Installation Assistance',
    description: 'Safe setup and troubleshooting for productivity, banking, and utility apps.',
  },
  {
    title: 'Phone Settings Assistance',
    description: 'Configure privacy controls, battery optimization, display comfort, and storage alerts.',
  },
  {
    title: 'Data Backup Guidance',
    description: 'Structured walkthroughs for Google Drive, iCloud, and local computer backups.',
  },
  {
    title: 'Android Troubleshooting',
    description: 'Clear cache conflicts, slowdowns, notification delays, and update stalls.',
  },
  {
    title: 'Online Consultation',
    description: 'Speak with a technician to understand likely repair paths before visiting a shop.',
  },
];

export interface BrandItem {
  name: string;
  shortMark: string;
  focus: string;
}

export const BRANDS_WE_REPAIR: BrandItem[] = [
  { name: 'Apple iPhone', shortMark: 'iPhone', focus: 'OLED Displays · Batteries · Logic Board' },
  { name: 'Samsung', shortMark: 'SAMSUNG', focus: 'Galaxy S, Z, A & M Series Care' },
  { name: 'OnePlus', shortMark: 'ONEPLUS', focus: 'AMOLED Screens · Warp Charging · OS' },
  { name: 'Xiaomi / Redmi', shortMark: 'Xiaomi', focus: 'Redmi, Note & Mi Hardware Support' },
  { name: 'Realme', shortMark: 'realme', focus: 'Display, Charging & Software Care' },
  { name: 'Vivo', shortMark: 'vivo', focus: 'Camera, Screen & Battery Service' },
  { name: 'Oppo', shortMark: 'OPPO', focus: 'Reno, Find & A-Series Repairs' },
  { name: 'Motorola', shortMark: 'motorola', focus: 'Edge, G-Series & Port Replacements' },
  { name: 'Google Pixel', shortMark: 'Google Pixel', focus: 'OLED Panels, Batteries & Android Care' },
  { name: 'Nothing', shortMark: 'NOTHING', focus: 'Glyph Housing, Displays & Port Care' },
];

export interface SpecialOffer {
  id: string;
  badge: string;
  title: string;
  description: string;
  eligibility: string;
  serviceTypePreselect: string;
}

export const SPECIAL_OFFERS: SpecialOffer[] = [
  {
    id: 'offer-free-home',
    badge: 'Hyderabad Doorstep',
    title: 'FREE HOME SERVICE',
    description: 'Available in selected Hyderabad locations.',
    eligibility: 'No technician visit fee for eligible doorstep repair bookings within active zones.',
    serviceTypePreselect: 'Free Home Service – Hyderabad',
  },
  {
    id: 'offer-free-diagnosis',
    badge: 'Diagnostic Care',
    title: 'FREE INITIAL DIAGNOSIS',
    description: 'Subject to service eligibility.',
    eligibility: 'Initial fault assessment provided before you decide whether to proceed with repair.',
    serviceTypePreselect: 'Free Home Service – Hyderabad',
  },
  {
    id: 'offer-refer-friend',
    badge: 'Community Privilege',
    title: 'REFER A FRIEND',
    description: 'Get special repair discounts on your next eligible service.',
    eligibility: 'Share your referral name at booking to unlock eligible partner savings.',
    serviceTypePreselect: 'Free Home Service – Hyderabad',
  },
  {
    id: 'offer-first-time',
    badge: 'New Customer',
    title: 'FIRST-TIME CUSTOMER OFFER',
    description: 'Special introductory discount. Contact us for current eligibility.',
    eligibility: 'Ask our Hyderabad support desk on WhatsApp for active introductory terms.',
    serviceTypePreselect: 'Free Home Service – Hyderabad',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Skilled Technical Support',
    description:
      'Experienced smartphone technicians trained across modern Android and iOS hardware architectures.',
  },
  {
    title: 'Convenient Home Service',
    description:
      'Skip city traffic in Hyderabad with scheduled doorstep inspections and pickup options.',
  },
  {
    title: 'Transparent Pricing',
    description:
      'Itemized repair estimates shared before any work starts, with zero hidden diagnostic surprises.',
  },
  {
    title: 'Quality Parts Options',
    description:
      'Clear discussion of tested replacement part tiers suited to your device model and budget.',
  },
  {
    title: 'Customer-First Approach',
    description:
      'Device privacy respect, clear turnaround expectations, and approval-first repair execution.',
  },
  {
    title: 'Online Assistance Across India',
    description:
      'Remote software guidance, device setup, and troubleshooting accessible from any city in India.',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Book Your Appointment.',
    description:
      'Submit your device details and preferred slot online or message us directly on WhatsApp.',
  },
  {
    step: '02',
    title: 'Describe Your Mobile Problem.',
    description:
      'Share symptoms such as screen damage, battery drain, liquid exposure, or software errors.',
  },
  {
    step: '03',
    title: 'Get Diagnosis & Repair Estimate.',
    description:
      'Our technician evaluates the issue and shares a clear, upfront estimate for your approval.',
  },
  {
    step: '04',
    title: 'Approve Repair & Get Your Phone Back.',
    description:
      'Once you approve, we complete the repair carefully, test key functions, and hand back your device.',
  },
];

export interface TestimonialItem {
  id: string;
  quote: string;
  customerName: string;
  location: string;
  deviceAndService: string;
}

export const DEMO_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'demo-1',
    quote:
      'Booked a morning doorstep slot for my cracked display. The technician arrived on time, explained the part options clearly, and tested touch and Face ID before wrapping up.',
    customerName: 'Raghavendra K.',
    location: 'Madhapur, Hyderabad',
    deviceAndService: 'iPhone Display Replacement',
  },
  {
    id: 'demo-2',
    quote:
      'My phone stopped charging properly due to lint and a worn port. Having someone inspect it at home instead of waiting at a crowded market saved my entire workday.',
    customerName: 'Ananya Reddy',
    location: 'Banjara Hills, Hyderabad',
    deviceAndService: 'Charging Port Service',
  },
  {
    id: 'demo-3',
    quote:
      'Used FIXORA Online Support from Pune when my Android update stalled and storage kept filling up. Clear step-by-step guidance helped stabilize the phone without losing photos.',
    customerName: 'Karthik Sharma',
    location: 'Pune (Pan-India Online Support)',
    deviceAndService: 'Remote Software Troubleshooting',
  },
];

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-free-home',
    question: 'Do you provide free home service?',
    answer:
      'Yes, free home service is available in selected Hyderabad locations subject to area and slot availability. Repair, spare parts, or specialized pickup charges may apply depending on the repair type.',
  },
  {
    id: 'faq-hyderabad-areas',
    question: 'Which areas of Hyderabad do you cover?',
    answer:
      'Our physical doorstep and pickup coverage operates within Hyderabad, Telangana—including Banjara Hills, Jubilee Hills, Madhapur, Gachibowli, Kondapur, Hitec City, Kukatpally, Ameerpet, Begumpet, Secunderabad, Somajiguda, and nearby localities. Share your pincode when booking to confirm slot coverage.',
  },
  {
    id: 'faq-iphones',
    question: 'Do you repair iPhones?',
    answer:
      'Yes, we service Apple iPhone models for screen replacement, battery replacement, charging ports, speakers, cameras, and motherboard diagnostics. FIXORA MOBILES is an independent repair provider and is not affiliated with Apple.',
  },
  {
    id: 'faq-screen-time',
    question: 'How long does a screen replacement take?',
    answer:
      'Most standard display replacements are completed within 60 to 120 minutes once the correct replacement part is confirmed for your model. Curved-edge, foldable, or frame-damaged devices may require lab pickup.',
  },
  {
    id: 'faq-pickup-delivery',
    question: 'Do you offer pickup and delivery?',
    answer:
      'Yes. For repairs that require workbench equipment—such as motherboard micro-soldering or ultrasonic water-damage cleaning—we arrange pickup and drop-off within Hyderabad.',
  },
  {
    id: 'faq-book-online',
    question: 'Can I book online?',
    answer:
      'Yes. You can submit an appointment request using the booking form on this page or send your request via WhatsApp. Please note that bookings are confirmed once our team reviews and accepts your requested slot.',
  },
  {
    id: 'faq-india-online',
    question: 'Do you provide online support across India?',
    answer:
      'Yes. Through FIXORA Online Support, customers anywhere in India can get remote assistance for software troubleshooting, device setup, app help, settings configuration, and backup guidance. Physical hardware repairs remain limited to Hyderabad.',
  },
  {
    id: 'faq-warranty',
    question: 'Do you offer a warranty on replacement parts?',
    answer:
      'Warranty terms depend on the specific spare part tier and repair category (for instance, physical or liquid damage after service is excluded). Exact warranty details are clarified in writing with your estimate prior to repair approval.',
  },
];

export const SERVICE_DROPDOWN_OPTIONS = [
  ...REPAIR_SERVICES.map((s) => s.title),
  'Online Support – Software & Setup Assistance',
  'General Diagnosis / Not Sure Yet',
];

export const SERVICE_TYPE_OPTIONS = [
  'Free Home Service – Hyderabad',
  'Pickup & Drop-off – Hyderabad',
  'Online Support – India',
] as const;

export const PREFERRED_TIME_SLOTS = [
  '09:30 AM – 11:30 AM',
  '11:30 AM – 01:30 PM',
  '02:00 PM – 04:00 PM',
  '04:00 PM – 06:00 PM',
  '06:00 PM – 08:00 PM',
];
