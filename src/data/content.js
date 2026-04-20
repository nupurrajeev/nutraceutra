import founderPhoto from './photo.jpeg'

// ╔══════════════════════════════════════════════════════════════╗
// ║  NUTRACEUTRA WEBSITE — CONTENT FILE                         ║
// ║  All website text is centralized here for easy editing.     ║
// ║                                                              ║
// ║  🔍 Search for "TODO" to find all placeholder content       ║
// ║     that needs to be replaced with real data.                ║
// ║                                                              ║
// ║  📌 Placeholders are marked with square brackets:            ║
// ║     "[Text — To Be Added]"                                   ║
// ╚══════════════════════════════════════════════════════════════╝

export const siteConfig = {
  name: 'Nutraceutra',
  tagline: 'Scientific Integrity as a Service',
  subTagline: 'Bridging the Gap Between Pharmacological Rigor and Market Innovation',
  description:
    'Premier scientific and strategic consulting for the nutraceutical, functional wellness, and animal health industries.',
  url: 'https://nutraceutra.com',
}

// ─── PAGE META ────────────────────────────────────────────────────────────────
export const pageMeta = {
  home: {
    title: 'Nutraceutra | Scientific Integrity as a Service',
    description:
      'Premier scientific consulting for nutraceutical, functional wellness, and animal health industries. Founded by Dr. Ajay Srivastava, DVM, PhD.',
  },
  about: {
    title: 'About | Nutraceutra',
    description:
      'Meet the team behind Nutraceutra. Dr. Ajay Srivastava, DVM, PhD — bridging laboratory science and global business strategy.',
  },
  services: {
    title: 'Services | Nutraceutra',
    description:
      'Preclinical & Clinical Design, Regulatory Compliance, Operations & Sourcing, Development & Innovation, and Pharmaceutical Preclinical services.',
  },
  trackRecord: {
    title: 'Track Record | Nutraceutra',
    description:
      'Decades of measurable scientific impact — 12+ patents, 100+ peer-reviewed publications, Amazon best-selling books.',
  },
  contact: {
    title: 'Contact | Nutraceutra',
    description:
      'Ready to accelerate your innovation? Contact the Nutraceutra team to discuss your next breakthrough.',
  },
  blog: {
    title: 'Blogs & Insights | Nutraceutra',
    description:
      'Science-backed insights on nutraceuticals, pet health, and functional wellness — authored by Dr. Ajay Srivastava, DVM, PhD.',
  },
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
export const hero = {
  headline: 'Scientific Integrity',
  headlineAccent: 'as a Service',
  subheadline: 'Bridging the Gap Between Pharmacological Rigor and Market Innovation',
  ctaPrimary: { label: 'Explore Services', to: '/services' },
  ctaSecondary: { label: 'Meet the Founder', to: '/about' },
}

// ─── ABOUT PREVIEW (Home page) ────────────────────────────────────────────────
export const aboutPreview = {
  heading: 'Who We Are',
  body: 'At Nutraceutra, we provide elite scientific and strategic consulting for the human nutraceutical, functional wellness, and animal health industries. Founded by a dually trained DVM and PhD in Medical Pharmacology, our firm offers C-Suite expertise on demand.',
  link: { label: 'Learn More About Us', to: '/about' },
}

// ─── STATS ────────────────────────────────────────────────────────────────────
export const stats = [
  { value: 100, suffix: '+', label: 'Peer-Reviewed Publications' },
  { value: 12, suffix: '+', label: 'Patents Held' },
  { value: 100, suffix: '+', label: 'Preclinical Studies' },
  { value: 2, suffix: '', label: 'Amazon Best-Selling Books' },
]

// ─── SERVICES (overview cards — used on Home and Services pages) ───────────────
export const serviceCards = [
  {
    id: 'preclinical',
    icon: 'Flask',
    title: 'Preclinical & Clinical Design',
    shortDesc: 'Custom study protocols, CRO management, and veterinary-grade trial expertise.',
    link: '/services#preclinical',
  },
  {
    id: 'regulatory',
    icon: 'ShieldCheck',
    title: 'Regulatory & Compliance',
    shortDesc: 'FDA guidance, label review, claim substantiation, and global compliance audits.',
    link: '/services#regulatory',
  },
  {
    id: 'operations',
    icon: 'Globe',
    title: 'Operations & Sourcing',
    shortDesc: 'Scientific due diligence, global raw material sourcing, and analytical support.',
    link: '/services#operations',
  },
  {
    id: 'innovation',
    icon: 'Lightbulb',
    title: 'Development & Innovation',
    shortDesc: 'AI-driven ingredient discovery, novel formulations, CDMO management, and IP strategy.',
    link: '/services#innovation',
  },
]

// ─── SERVICES DETAIL (Services page) ─────────────────────────────────────────
export const servicesDetail = {
  preclinical: {
    id: 'preclinical',
    icon: 'Flask',
    title: 'Preclinical & Clinical Design',
    subtitle: 'Rigorous Science, Real-World Results',
    intro:
      'We design and manage studies that stand up to regulatory scrutiny and deliver commercially meaningful outcomes for human and animal health products.',
    items: [
      {
        title: 'Study Design',
        desc: 'Custom protocols for human and pet health (Safety, Efficacy, PK/PD) — designed for regulatory acceptance from day one.',
      },
      {
        title: 'CRO Management',
        desc: 'End-to-end oversight of global research partners, ensuring data integrity, timeline adherence, and budget control.',
      },
      {
        title: 'Veterinary Excellence',
        desc: 'Specialized in AAFCO/NASC compliant pet health trials with deep expertise in companion animal and equine pharmacology.',
      },
    ],
  },
  regulatory: {
    id: 'regulatory',
    icon: 'ShieldCheck',
    title: 'Regulatory & Compliance',
    subtitle: 'Navigate Complexity with Confidence',
    intro:
      'From FDA filings to global market entry, we ensure your products are compliant, defensible, and ready to scale.',
    items: [
      {
        title: 'Agency Guidance',
        desc: 'Expert navigation of FDA (Human), AAFCO & NASC (Animal) regulatory frameworks, keeping your program ahead of the curve.',
      },
      {
        title: 'Label & Claims',
        desc: 'Professional label review and robust claim substantiation dossiers built to withstand regulatory scrutiny.',
      },
      {
        title: 'Compliance & Audit Support',
        desc: 'Ensuring global market readiness through rigorous audit support, GAP analysis, and continuous compliance monitoring.',
      },
    ],
  },
  operations: {
    id: 'operations',
    icon: 'Globe',
    title: 'Operations & Sourcing',
    subtitle: 'From Supply Chain to Strategic Growth',
    intro:
      'We provide scientific rigor to every operational decision — from raw material selection to M&A due diligence.',
    items: [
      {
        title: 'Due Diligence',
        desc: 'Scientific vetting of M&A targets and new technologies, giving you a clear-eyed view of the science behind the story.',
      },
      {
        title: 'Global Sourcing',
        desc: 'Identifying high-purity, sustainable, and cost-effective raw materials from vetted global suppliers.',
      },
      {
        title: 'Analytical Support',
        desc: 'Method validation, stability testing oversight, and certificate-of-analysis review to protect product quality.',
      },
    ],
  },
  innovation: {
    id: 'innovation',
    icon: 'Lightbulb',
    title: 'Development & Innovation',
    subtitle: 'From Molecule to Market',
    intro:
      'We accelerate the path from scientific concept to commercially successful product using cutting-edge tools and deep formulation expertise.',
    items: [
      {
        title: 'AI-Driven Discovery',
        desc: 'Utilizing advanced AI tools for novel ingredient searches and synergistic formulations to reduce time-to-market.',
      },
      {
        title: 'Novel Formulations',
        desc: 'Expert development of complex delivery systems, including MCT-based softgels and high-bioavailability powders.',
      },
      {
        title: 'CDMO Selection & Prototyping',
        desc: 'Managing the transition from benchtop prototype sampling to full-scale commercial manufacturing.',
      },
      {
        title: 'Intellectual Property Strategy',
        desc: 'Strategic guidance on patent filings and protecting proprietary Trade Secret formulations from day one.',
      },
    ],
  },
  pharma: {
    id: 'pharma',
    icon: 'Microscope',
    title: 'Pharmaceutical Preclinical Design & Monitoring',
    subtitle: 'Pharma-Grade Rigor for High-Stakes Development',
    intro:
      'Leveraging deep pharmacological expertise, we provide a dedicated pillar for pharmaceutical advancement — applying the highest scientific standards to preclinical programs.',
    items: [
      {
        title: 'Safety & Toxicology',
        desc: 'GLP-compliant study design (acute, sub-chronic, genotoxicity) and analysis via top-tier global CROs.',
      },
      {
        title: 'Study Monitoring',
        desc: 'On-site and remote monitoring of preclinical trials to ensure data integrity and protocol adherence.',
      },
      {
        title: 'Toxicology Analysis',
        desc: 'High-level interpretation of clinical chemistry and histopathology data for regulatory submissions and IND packages.',
      },
    ],
  },
}

// ─── ABOUT COMPANY ────────────────────────────────────────────────────────────
export const aboutCompany = {
  heading: 'About Nutraceutra',
  body: `At Nutraceutra, we provide elite scientific and strategic consulting for the human nutraceutical, functional wellness, and animal health industries. Founded by a dually trained DVM and PhD in Medical Pharmacology, our firm offers "C-Suite expertise on demand." We don't just suggest ingredients; we validate mechanisms, secure intellectual property, run clinical validation and navigate the rigorous regulatory pathways of both human and veterinary medicine. From AI-driven formulation to global CRO management, we turn complex science into commercially viable, evidence-based products.`,
  values: [
    {
      icon: 'Award',
      title: 'Scientific Rigor',
      desc: 'Every recommendation is backed by peer-reviewed evidence and pharmacological first principles.',
    },
    {
      icon: 'Target',
      title: 'Commercial Focus',
      desc: 'We translate complex science into products that succeed in the marketplace.',
    },
    {
      icon: 'Globe',
      title: 'Global Reach',
      desc: 'An international network of CROs, suppliers, and regulatory experts at your service.',
    },
  ],
}

// ─── FOUNDER ──────────────────────────────────────────────────────────────────
export const founder = {
  name: 'Dr. Ajay Srivastava, DVM, PhD',
  tagline: 'Strategic Advisor | Scientific Innovator | Entrepreneur',
  photo: founderPhoto,
  initials: 'AS',
  bio: `Dr. Srivastava is a dually trained Doctor of Veterinary Medicine (DVM) and PhD in Medical Pharmacology, with advanced expertise in Neuropharmacology, Nutrition, and Clinical Pharmacology. With onsite executive training from Harvard Business School in Leading Product Innovation, he bridges the gap between laboratory science and global business strategy.`,
  highlights: [
    {
      icon: 'Briefcase',
      title: 'Executive Leadership',
      desc: 'Former C-Suite Chief Science Officer for two major global dietary supplement and functional wellness companies, leading large teams of innovators and regulatory experts.',
    },
    {
      icon: 'BookOpen',
      title: 'Academic Authority',
      desc: 'Adjunct Faculty at the University of Wisconsin; former Research Faculty with over 100 peer-reviewed publications and a respected voice in translational pharmacology.',
    },
    {
      icon: 'Award',
      title: 'Proven Innovation',
      desc: 'Holder of 12+ patents and author of Amazon top-selling books on nutraceuticals for both human and animal health.',
    },
    {
      icon: 'FlaskConical',
      title: 'Trial Experience',
      desc: 'Conducted over 100 preclinical and multiple clinical studies, with a focus on probiotics, brain health, and metabolic wellness.',
    },
    {
      icon: 'Rocket',
      title: 'Startup Catalyst',
      desc: 'Scientific co-founder of multiple biotech ventures and a strategic advisor to emerging startups in the health and wellness space.',
    },
  ],
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ajay-srivastava-dvm-ms-phd/',
    email: '#', // TODO: Add email address
    twitter: '#', // TODO: Add Twitter/X profile URL (remove if not needed)
  },
}

// ─── ADVISORY BOARD ───────────────────────────────────────────────────────────
// TODO: Replace placeholder advisory board entries with actual member details and photos
export const advisoryBoard = [
  {
    id: 1,
    name: '[Name — To Be Added]',
    role: 'Board-Certified Toxicologist',
    credentials: '[Credentials — To Be Added]',
    photo: null, // TODO: Add photo path e.g. "/images/board/member1.jpg"
    initials: 'XX',
  },
  {
    id: 2,
    name: '[Name — To Be Added]',
    role: 'Global Regulatory Specialist',
    credentials: '[Credentials — To Be Added]',
    photo: null, // TODO: Add photo path
    initials: 'XX',
  },
  {
    id: 3,
    name: '[Name — To Be Added]',
    role: 'Clinical Trial Expert',
    credentials: '[Credentials — To Be Added]',
    photo: null, // TODO: Add photo path
    initials: 'XX',
  },
  {
    id: 4,
    name: '[Name — To Be Added]',
    role: '[Role — To Be Added]',
    credentials: '[Credentials — To Be Added]',
    photo: null, // TODO: Add photo path
    initials: 'XX',
  },
]

// ─── PATENTS ──────────────────────────────────────────────────────────────────
// TODO: Replace placeholder patent data with actual patent details
export const patents = [
  { id: 1, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 2, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 3, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 4, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 5, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 6, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 7, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 8, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 9, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 10, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 11, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
  { id: 12, title: '[Patent Title — To Be Added]', number: '[Patent Number]', year: '[Year]', status: 'Granted' },
]

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
// TODO: Replace with actual publications. Add more entries as needed.
// Full publication list link: TODO — add link to full publication repository (e.g. Google Scholar, PubMed)
export const publications = [
  { id: 1, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 2, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 3, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 4, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 5, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 6, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 7, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 8, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 9, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
  { id: 10, title: '[Publication Title — To Be Added]', journal: '[Journal Name]', year: '[Year]', doi: '#' },
]

// ─── TRADEMARKS ───────────────────────────────────────────────────────────────
// TODO: Add all trademark names and descriptions
export const trademarks = [
  { name: 'Replentin™', description: '[Description — To Be Added]', status: 'Registered' },
  { name: '[Trademark — To Be Added]', description: '[Description — To Be Added]', status: '[Status]' },
  { name: '[Trademark — To Be Added]', description: '[Description — To Be Added]', status: '[Status]' },
  { name: '[Trademark — To Be Added]', description: '[Description — To Be Added]', status: '[Status]' },
]

// ─── BOOKS ────────────────────────────────────────────────────────────────────
// TODO: Replace with actual book titles, subtitles, and Amazon links
export const books = [
  {
    id: 1,
    title: '[Book Title — To Be Added]',
    subtitle: '[Subtitle — To Be Added]',
    category: 'Human Health',
    amazonLink: '#', // TODO: Add actual Amazon link
    coverPlaceholder: true,
  },
  {
    id: 2,
    title: '[Book Title — To Be Added]',
    subtitle: '[Subtitle — To Be Added]',
    category: 'Animal Health',
    amazonLink: '#', // TODO: Add actual Amazon link
    coverPlaceholder: true,
  },
]

// ─── CONTACT INFO ─────────────────────────────────────────────────────────────
export const contactInfo = {
  email: 'info@nutraceutra.com', // TODO: Confirm or replace with actual email
  phone: '[Phone Number — To Be Added]', // TODO: Add phone number
  address: '[Office Address — To Be Added]', // TODO: Add street address
  city: '[City, State, ZIP — To Be Added]', // TODO: Add city/state/zip
  country: '[Country — To Be Added]', // TODO: Add country
  linkedin: '#', // TODO: Add LinkedIn company page URL
  twitter: '#', // TODO: Add Twitter/X URL (remove entry if not applicable)
  calendlyLink: '#', // TODO: Add Calendly/booking link (remove entry if not applicable)
}

// ─── BLOGS ────────────────────────────────────────────────────────────────────
// Latest articles first. Source: linkedin.com/in/ajay-srivastava-dvm-ms-phd/
export const blogs = [
  {
    title: 'When Iron Feeds the Wrong Bacteria',
    snippet:
      'Excess iron in pet diets can remain unabsorbed in the gut, where it fuels harmful bacteria like E. coli and Salmonella. Iron is not just a nutrient — it is also a growth substrate for pathogens that shift the microbiome and drive oxidative stress over time.',
    date: 'April 20, 2026',
    linkedinUrl: 'https://www.linkedin.com/pulse/when-iron-feeds-wrong-bacteria-ajay-srivastava-dvm-ms-phd-3nvwc',
    tags: ['Pet Health', 'Gut Microbiome', 'Nutrition Science'],
  },
  {
    title: 'Always Hungry or Under-Nourished? YOUR PET.',
    snippet:
      'Many dogs beg constantly despite being fed adequate calories on a schedule. Dr. Srivastava distinguishes between learned attention-seeking and genuine nutritional dissatisfaction — because calories alone do not guarantee a thriving pet.',
    date: 'February 5, 2026',
    linkedinUrl: 'https://www.linkedin.com/pulse/always-hungry-under-nourished-your-pet-ajay-srivastava-dvm-ms-phd-vipyc',
    tags: ['Pet Health', 'Nutrition', 'Behavior'],
  },
  {
    title: 'The 70/30 Paradox: We Are 70% Water, Yet We Chase the Other 30%',
    snippet:
      'Holiday feasts focus intensely on proteins, fats, and supplements — the "dry mass" — while overlooking a fundamental biological reality: digestion is hydrolysis, and the 70% we are made of matters far more than the 30% we obsess over.',
    date: 'December 25, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/7030-paradox-we-70-water-yet-chase-other-30-srivastava-dvm-ms-phd-ljiyc',
    tags: ['Nutrition Science', 'Hydration', 'Pet Health'],
  },
  {
    title: "Confident Dogs (and Us) Aren't Born — They're Raised",
    snippet:
      'Humans and dogs share far more physiology and behavioral wiring than we realize. Aggressive or anxious behavior in dogs is rarely about breed — it is almost always about insufficient social exposure, and it is entirely correctable.',
    date: 'December 22, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/confident-dogs-us-arent-born-theyre-raised-srivastava-dvm-ms-phd-yygrc',
    tags: ['Pet Health', 'Animal Behavior', 'Training'],
  },
  {
    title: 'The "War" on Fresh Food Science vs Kibble',
    snippet:
      'When researchers found that dogs on fresh, gently-cooked diets had significantly lower blood levels of Advanced Glycation End-products (AGEs) than kibble-fed dogs, the industry response was a media blast rather than science — which tells you everything.',
    date: 'December 4, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/war-fresh-food-science-vs-kibble-ajay-srivastava-dvm-ms-phd-8mwnc',
    tags: ['Pet Nutrition', 'Pet Food', 'Evidence-Based'],
  },
  {
    title: 'Shatavari — How Much of It Is Real, and How Much Is Reinvented?',
    snippet:
      'Examining what modern science actually supports about Asparagus racemosus — separating centuries-old Ayurvedic tradition from today\'s marketing claims. Sample sizes are small, durations short, and most data comes from Indian populations, raising real questions about generalizability.',
    date: 'October 21, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/shatavari-how-much-real-reinvented-ajay-srivastava-dvm-ms-phd-k0ukc',
    tags: ['Botanicals', "Women's Health", 'Evidence-Based'],
  },
  {
    title: "Pet Food Labels Aren't as Straightforward as They Look",
    snippet:
      'Pet food labels can be even more confusing than supplement labels. A practical guide to decoding ingredient lists and guaranteed analysis panels — what they actually mean, what the regulatory shorthand hides, and how to make smarter choices.',
    date: 'August 25, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/pet-food-labels-arent-straightforward-look-srivastava-dvm-ms-phd-2b0jc',
    tags: ['Pet Health', 'Nutrition', 'Consumer Guide'],
  },
  {
    title: "The Longevity Secret Hiding in Your Body (and Your Dog's Too)",
    snippet:
      'A landmark 14-year Purdue/Purina study found lean-fed Labrador retrievers lived 1.8 years longer, with delayed onset of osteoarthritis, better insulin sensitivity, and reduced inflammation. The caloric restriction science extends well beyond pets.',
    date: 'July 30, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/longevity-secret-hiding-your-body-dogs-too-srivastava-dvm-ms-phd-ln12c',
    tags: ['Longevity', 'Pet Health', 'Nutrition Science'],
  },
  {
    title: 'Welcome to Pet Science by Dr. Ajay — Where Evidence Meets Pet Wellness',
    snippet:
      'Introducing a newsletter dedicated to turning peer-reviewed research into real-world guidance for pet owners, veterinarians, and health industry professionals who demand more than marketing.',
    date: 'June 30, 2025',
    linkedinUrl: 'https://www.linkedin.com/pulse/welcome-pet-science-dr-ajay-where-evidence-meets-ajay-cvsjc',
    tags: ['Pet Health', 'Newsletter'],
  },
]

export const contactInterests = [
  { value: '', label: 'Select your primary interest' },
  { value: 'human-health', label: 'Human Health' },
  { value: 'pet-health', label: 'Pet Health' },
  { value: 'pharmaceutical', label: 'Pharmaceutical' },
  { value: 'startup-advisory', label: 'Startup Advisory' },
  { value: 'other', label: 'Other' },
]
