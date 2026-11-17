/**
 * Single source of truth for public profile data.
 *
 * Before deploying, update:
 * - email
 * - profileLinks (add LinkedIn, GitHub, portfolio, WhatsApp, etc.)
 * - NEXT_PUBLIC_SITE_URL in `.env.local` (or Vercel env vars)
 *
 * Do not add technologies, employers, dates, or URLs that are not confirmed.
 */

function resolveSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL.replace(/\/$/, "")}`;
  }

  return "http://localhost:3000";
}

export type ProfileLinkIcon =
  | "linkedin"
  | "github"
  | "mail"
  | "phone"
  | "globe"
  | "link";

export type ProfileLink = {
  id: string;
  label: string;
  href: string;
  /** Optional shorter text for the resume document */
  display?: string;
  icon?: ProfileLinkIcon;
  /** Include in schema.org sameAs (public profile URLs) */
  sameAs?: boolean;
};

/**
 * Add or remove profile / social links here.
 * They appear in the hero, contact, footer, and resume.
 *
 * Examples you can paste in:
 * { id: "x", label: "X", href: "https://x.com/you", icon: "link", sameAs: true },
 * { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/919234578836", icon: "link" },
 * { id: "portfolio", label: "Portfolio", href: "https://yoursite.com", icon: "globe", sameAs: true },
 * { id: "email", label: "Email", href: "mailto:you@email.com", icon: "mail" },
 */
export const profileLinks: ProfileLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/md-athar-ali-ansari-544a201a2",
    icon: "linkedin",
    sameAs: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: "https://github.com/therealtech99",
    display: "github.com/therealtech99",
    icon: "github",
    sameAs: true,
  },
];

function linkById(id: string) {
  return profileLinks.find((link) => link.id === id)?.href ?? "";
}

export const site = {
  name: "Md Athar Ali Ansari",
  shortName: "Md Athar",
  initials: "MA",
  /**
   * Optional headshot shown above profile links.
   * Drop a file in `public/` and set the path here (e.g. "/profile.jpg").
   * Leave empty to show initials instead.
   */
  photo: "/profile.jpg",
  title: "Flutter Developer",
  location: "Bangalore, India",
  years: "4+ years",
  phone: "+91 92345 78836",
  phoneHref: "tel:+919234578836",
  headline:
    "I architect and ship high-performance Flutter applications — from first screen to production.",
  supporting:
    "4+ years building Flutter and mobile products in production, including a live 3-app grocery platform on Google Play. I own architecture, API integration, and the hard problems after launch.",
  email: "mdatharaliansari786@gmail.com",
  /** Convenience aliases — prefer editing `profileLinks` above */
  linkedin: linkById("linkedin"),
  github: linkById("github"),
  resumePath: "/resume.pdf",
  resumeFileName: "Md-Athar-Ali-Ansari-Resume.pdf",
  resumePage: "/resume",
  siteUrl: resolveSiteUrl(),
  seoTitle: "Md Athar Ali Ansari | Flutter Developer",
  seoDescription:
    "Portfolio and resume of Md Athar Ali Ansari, a Flutter Developer with 4+ years of experience architecting and shipping production Flutter applications, Firebase backends, REST API integrations, and related full-stack work.",
};

export const navItems = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
] as const;

export const heroStack = [
  "Flutter",
  "Dart",
  "Firebase",
  "REST APIs",
  "Git",
] as const;

export const skillGroups = [
  {
    title: "Flutter / Mobile",
    items: ["Flutter", "Dart"],
  },
  {
    title: "Architecture & APIs",
    items: ["REST APIs", "Firebase", "Authentication", "API Integration"],
  },
  {
    title: "Quality & delivery",
    items: ["Git", "GitHub", "Testing", "Debugging", "Deployment"],
  },
  {
    title: "Payments & Cloud",
    items: ["UPI", "Cashfree", "Google Cloud Platform"],
  },
  {
    title: "Also ships web",
    items: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
  },
] as const;

export const aboutParagraphs = [
  "I am a Flutter developer with 4+ years of experience architecting, building, and maintaining production mobile applications in Dart — from first interface through Play Store deployment.",
  "I founded VillageMart, a live grocery platform with Customer, Delivery, and Admin applications on Flutter and Firebase. That product taught me how to keep a multi-app system fast, stable, and usable in the real world: low connectivity, payments, inventory, and last-mile operations.",
  "I integrate Flutter clients with Firebase and REST APIs, own debugging and performance when something breaks in production, and take features from requirements to release without handing off the hard parts. I also ship Next.js products when a project needs a web surface.",
];

export type ExperienceItem = {
  role: string;
  organization: string;
  period: string;
  location?: string;
  summary: string;
  highlights: string[];
};

/**
 * Only confirmed roles and dates are listed.
 * Add additional employers, titles, and dates from your resume in this array.
 */
export const experience: ExperienceItem[] = [
  {
    role: "Founder & Lead Product Engineer",
    organization: "VillageMart",
    period: "Nov 2021 – Present",
    location: "Bangalore, India",
    summary:
      "Architected, developed, and maintained a 3-app Flutter/Firebase grocery platform from conception through live Play Store operations.",
    highlights: [
      "Designed and shipped Customer, Admin, and Delivery applications in Flutter and Dart on a shared Firebase backend.",
      "Translated product UX into production Flutter interfaces across three apps, with a focus on clarity, responsiveness, and real-world use.",
      "Reached 1,000+ Google Play installs and 150+ successful deliveries.",
      "Built an offline-first ordering path for low-connectivity zones, using atomic Firebase transactions to prevent overselling.",
      "Integrated Firebase services, REST-style data flows, and dynamic QR UPI payments with privacy number masking.",
      "Owned troubleshooting, stability, inventory, billing, last-mile logistics, and FSSAI food-tech compliance after launch.",
    ],
  },
  {
    role: "Freelance Full-Stack Developer",
    organization: "Independent / Client Projects",
    period: "2022 – Present",
    summary:
      "Independent delivery of production Next.js websites and product platforms, from requirements through deployment and post-launch support.",
    highlights: [
      "Havocline Ventures — Next.js marketing and lead-generation site with service pages and WhatsApp-based lead capture.",
      "Ujala Electric — Next.js catalog site with product listings, category filtering, and dealership onboarding.",
      "Resume4u.in — Next.js resume-builder product with templates, import/parsing, client-side drafts, and UPI checkout via Cashfree.",
      "Owned the full lifecycle independently: requirements, design, development, deployment, and client support.",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Commerce (B.Com)",
    school: "Bangalore University",
    year: "2021",
  },
] as const;

export const technicalHighlights = [
  "Multi-app Flutter architecture: Customer, Delivery, and Admin on a shared Firebase backend",
  "Offline-first browsing and ordering for zero-network conditions",
  "Firebase atomic transactions to keep inventory consistent under concurrent orders",
  "Voice-to-cart ordering system in beta",
  "Resume-parsing pipeline for PDF, DOCX, and TXT import with assisted content writing",
] as const;

export const projectCategories = ["All", "Mobile", "Web", "Client"] as const;

export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  technologies: string[];
  contribution: string;
  categories: ProjectCategory[];
  links: ProjectLink[];
  visual: "villagemart" | "resume" | "electric" | "sifa" | "amlu" | "havocline";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "villagemart",
    name: "VillageMart",
    featured: true,
    description:
      "A production Flutter grocery platform: Customer, Delivery, and Admin applications on Firebase. The customer app is live on Google Play.",
    features: [
      "Customer, delivery, and admin applications",
      "Offline-first ordering for low-connectivity zones",
      "Atomic Firebase transactions to prevent overselling",
      "Dynamic QR UPI payments",
      "Inventory, billing, and last-mile logistics",
      "Voice-to-cart ordering in beta",
    ],
    technologies: ["Flutter", "Dart", "Firebase"],
    contribution:
      "Founder and Flutter developer. Owned architecture, product UX, Dart implementation, authentication, data, payments, and Play Store deployment across the three-app ecosystem.",
    categories: ["Mobile", "Web"],
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.villagemart.app",
      },
      {
        label: "Website",
        href: "https://villagemartapp.in",
      },
    ],
    visual: "villagemart",
  },
  {
    slug: "resume4u",
    name: "Resume4u.in",
    description:
      "A resume maker and CV builder for India, covering templates, content editing, and PDF export.",
    features: [
      "Eight professional resume templates",
      "Import from PDF, DOCX, or TXT",
      "Assisted professional writing",
      "Click-to-edit resume preview",
      "Client-side draft storage",
      "UPI checkout via Cashfree",
    ],
    technologies: ["Next.js", "React.js"],
    contribution:
      "Built a Next.js resume-builder product covering templates, import/parsing, drafts, and payment checkout.",
    categories: ["Web"],
    links: [{ label: "Live Project", href: "https://resume4u.in/" }],
    visual: "resume",
  },
  {
    slug: "ujala-electric",
    name: "Ujala Electric",
    description:
      "A client business website for a fan and electrical appliances brand, covering products, collections, and dealer enquiry.",
    features: [
      "Product listings and category filtering",
      "Catalog for ceiling, pedestal, wall, and ventilation fans",
      "Dealership onboarding flow",
      "WhatsApp contact for product enquiries",
    ],
    technologies: ["Next.js", "React.js"],
    contribution:
      "Built a Next.js catalog website for an electrical appliance manufacturer, including listings, filtering, and dealer onboarding.",
    categories: ["Web", "Client"],
    links: [{ label: "Live Project", href: "https://www.ujalaelectric.com/" }],
    visual: "electric",
  },
  {
    slug: "shifa-digital-solution",
    name: "SHIFA Digital Solution",
    description:
      "A digital and software development business presence covering web, mobile, and related service pages.",
    features: [
      "Website and service presentation",
      "Mobile app and web development offering pages",
      "Quote and contact flow",
      "Business profile and location details",
    ],
    technologies: [],
    contribution:
      "Owned the digital presence and production website for this software development work.",
    categories: ["Web"],
    links: [
      { label: "Live Project", href: "https://shifadigitalsolution.in/" },
    ],
    visual: "sifa",
  },
  {
    slug: "amlu",
    name: "AMLU",
    description:
      "A client website for an architecture and interior design studio, covering portfolio, offices, people, and contact.",
    features: [
      "Studio and services presentation",
      "English and Arabic language switch",
      "Office locations, projects, and team sections",
      "Contact and enquiry form",
    ],
    technologies: [],
    contribution:
      "Full-stack developer responsible for building and delivering the production studio website.",
    categories: ["Web", "Client"],
    links: [{ label: "Live Project", href: "https://amlu.vercel.app/" }],
    visual: "amlu",
  },
  {
    slug: "havocline-ventures",
    name: "Havocline Ventures",
    description:
      "A client website for a sports infrastructure company, covering facilities, process, consulting, and contact.",
    features: [
      "Marketing and lead-generation website",
      "Service pages for sports infrastructure",
      "WhatsApp-based lead capture",
      "Client testimonial system",
    ],
    technologies: ["Next.js", "React.js"],
    contribution:
      "Built a Next.js marketing and lead-generation site for a sports infrastructure company.",
    categories: ["Web", "Client"],
    links: [
      { label: "Live Project", href: "https://www.havoclinesolutions.com/" },
    ],
    visual: "havocline",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  if (index < 0) return { prev: undefined, next: undefined };

  return {
    prev: projects[(index - 1 + projects.length) % projects.length],
    next: projects[(index + 1) % projects.length],
  };
}

export const whyHireMe = [
  {
    title: "Flutter from architecture to store",
    body: "I have owned a multi-app Flutter product from conception through Google Play — interfaces, Firebase, payments, and the operational work after launch.",
  },
  {
    title: "Performance under real constraints",
    body: "VillageMart has to work in low-connectivity zones. I designed offline-first flows and atomic transactions so ordering stays fast, consistent, and usable.",
  },
  {
    title: "APIs, stability, and independent delivery",
    body: "I integrate Flutter clients with Firebase and REST services, debug production issues myself, and ship without waiting for someone else to finish the hard parts.",
  },
  {
    title: "Pixel-conscious product UI",
    body: "I treat Flutter UI as product work: clear hierarchy, responsive layouts, and interfaces that stay usable for customers, riders, and operators — not just a demo screen.",
  },
] as const;
