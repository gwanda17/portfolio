/**
 * GwenPortfolio — Data Layer
 * @module data/portfolio
 *
 * Single source of truth. Update here, reflects everywhere.
 * In a real project this could be fetched from a CMS.
 */

export const IDENTITY = {
  stageName: "Gwen",
  handle: "@Pejuangdeadline.it",
  role: "Lead Architect",
  instagramUrl: "https://instagram.com/pejuangdeadline.it",
  githubUrl: "https://github.com/",
  linkedinUrl: "https://linkedin.com/",
  tagline: "Crafting Digital Legacies for Visionaries.",
  quote: "Code is poetry that executes flawlessly.",
};

export const AVAILABILITY = {
  isAvailable: true,
  label: "Available for Projects",
  labelBusy: "Fully Booked — DM for Waitlist",
};

export const STATS = [
  { value: "100+", label: "Commits / week" },
  { value: "100%", label: "Client retention" },
  { value: "0.8L", label: "Coffee / hr" },
  { value: "∞", label: "Deadlines met" },
];

export const SERVICES = [
  { icon: "globe", label: "Web Dev" },
  { icon: "smartphone", label: "App Design" },
  { icon: "shield-check", label: "100% Retention" },
  { icon: "zap", label: "Fast Delivery" },
];

export const PROJECTS = [
  {
    id: 1,
    name: "Nusantara Commerce Platform",
    role: "full-stack · e-commerce",
    stack: "react/next.js · node.js",
    year: "'25",
    active: true,
  },
  {
    id: 2,
    name: "Medika Health Dashboard",
    role: "web app · data viz",
    stack: "typescript · d3.js",
    year: "'24",
    active: false,
  },
  {
    id: 3,
    name: "KosApp — Boarding House Manager",
    role: "mobile app",
    stack: "react native · firebase",
    year: "'24",
    active: false,
  },
  {
    id: 4,
    name: "Tokobuku Digital Library",
    role: "pwa · offline-first",
    stack: "node.js · workbox",
    year: "'23",
    active: false,
  },
  {
    id: 5,
    name: "Warung UMKM POS System",
    role: "desktop app",
    stack: "electron · sqlite",
    year: "'23",
    active: false,
  },
];

export const TRUST_STAMP_TEXT =
  "High-Performance Code • Scalable Architecture • Gwen's Laboratory •";
