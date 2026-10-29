import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Behnoud Mostafaie",
  initials: "BM",
  url: "https://behnoud.net",
  location: "Milan, Italy",
  role: "Senior Full-Stack / Product Engineer",
  summary:
    "Product-focused senior full-stack engineer building and operating SaaS, B2B, enterprise, and AI-powered products end to end since 2021. Built and scaled a multi-tenant SaaS product as sole engineer to **5,000+ registered users across 50+ countries**, led a 3-engineer team, cut infrastructure costs **70%** (€800/mo → €200/mo), and cut release time in half. Experienced across TypeScript, React/Next.js, Node.js/NestJS, data systems, cloud infrastructure, and AI-enabled workflows, with hands-on ownership from product definition through deployment and support. Enterprise delivery includes Luxottica and a2a Digital Hub.",
  avatarUrl: "/me.jpeg",
  highlights: [
    { value: "80", label: "Engineer enterprise team" },
    { value: "5,000+", label: "SaaS users in 50+ countries" },
    { value: "−70%", label: "Infrastructure costs" },
    { value: "2×", label: "Faster releases" },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "SQL"] },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js (App Router)",
        "React Native",
        "Tailwind CSS",
        "Design systems",
        "Accessibility",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "NestJS",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "TypeORM",
        "PostgreSQL",
        "MongoDB",
        "Redis",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "Structured document extraction & validation",
        "LangChain",
        "Local/cloud LLM providers (Ollama)",
        "n8n",
        "Inngest",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "Linux (Ubuntu)",
        "Self-hosting",
        "Coolify",
        "Mailcow",
        "GCP",
        "Docker",
        "Cloud Run",
        "Vercel",
        "Cloudflare",
        "CI/CD",
        "Cost optimisation",
      ],
    },
    {
      category: "Testing & Monitoring",
      items: ["Jest", "Vitest", "Sentry", "Winston"],
    },
    {
      category: "Integrations",
      items: [
        "Stripe",
        "Twilio",
        "WhatsApp",
        "Telegram",
        "Supabase",
        "Thermal printers",
      ],
    },
  ],
  languages: ["Persian (Native)", "English", "Italian"],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "hi@behnoud.net",
    tel: "+393381291915",
    social: {
      contact: {
        name: "save Contact",
        url: "/ben.vcf",
        icon: Icons.contact,
        navbar: true,
      },
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Behnoudmst",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/behnoudmostafaie",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:hi@behnoud.net",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Freelance (Self-Employed)",
      href: "",
      location: "Milan, Italy · Hybrid",
      title: "Freelance Full-Stack Engineer",
      logoUrl: "",
      start: "Mar 2025",
      end: "Present",
      highlights: [
        "Delivered end-to-end web applications and scalable backend services for clients across healthcare, energy, and digital products, using NestJS, TypeORM, MongoDB, PostgreSQL, Next.js, React, and TypeScript on GCP.",
        "Past engagement, healthcare (Luxottica): owned a real-time updates feature end-to-end using WebSockets within a microfrontend architecture, delivering as part of an 80-engineer, pan-European Agile team.",
        "Past engagement, energy (a2a Digital Hub): built Next.js and TypeScript features alongside the internal product team.",
        "Built and maintained reusable React component libraries in Storybook, establishing shared UI patterns adopted across multiple product teams.",
      ],
    },
    {
      company: "Log-e (Startup Studio)",
      href: "",
      location: "Milan, Italy",
      title: "Full-Stack Software Engineer / Technical Lead",
      logoUrl: "/loge.jpg",
      start: "Nov 2021",
      end: "Jan 2025",
      highlights: [
        "Cut infrastructure costs 70% (€800/mo → €200/mo) and cut release time in half through containerisation, GCP optimisation, automation, and more consistent deployment workflows.",
        "Led a team of 3 engineers across multiple SaaS and B2B products, coordinating development, reviewing code and technical decisions, and supporting architecture and delivery.",
        "Worked directly with founders and stakeholders to translate ambiguous business requirements into technical scope, balancing rapid delivery with long-term maintainability.",
      ],
    },
    {
      company: "Mars Global Tourism",
      href: "",
      location: "Istanbul, Türkiye",
      title: "Web Design & Digital Marketing",
      logoUrl: "",
      start: "Mar 2017",
      end: "Jan 2018",
      highlights: [
        "Designed new landing pages and improved the company website's SEO, leading to 30% more conversions from Google Ads campaigns for the same budget.",
      ],
    },
  ],
  education: [
    {
      school: "Sapienza University of Rome",
      href: "https://www.uniroma1.it",
      degree: "M.S. Mechanical Engineering Design",
      logoUrl: "/sapienza.png",
      period: "2021",
    },
    {
      school: "Azad University of Tabriz",
      href: "",
      degree: "B.S. Mechanical Engineering",
      logoUrl: "",
      period: "2017",
    },
    {
      school: "Google Cloud",
      href: "",
      degree: "Google Cloud Fundamentals: Core Infrastructure",
      logoUrl: "",
      period: "Certification",
    },
  ],
  products: [
    {
      title: "Elegant Menu",
      href: "https://elegant.menu",
      dates: "Full-Stack Product Engineer",
      resultBadge: "5,000+ users · 50+ countries",
      description: `Global multi-tenant restaurant SaaS.

- Designed, built, and operated a multi-tenant platform with Next.js, NestJS, and MongoDB, growing to 5,000+ registered users across 50+ countries.
- Built an AI-powered PDF ingestion workflow with n8n that extracts and validates structured menu data, reducing manual onboarding effort.
- Operated the product across GCP/Cloud Run, Vercel, and Cloudflare, owning deployment, infrastructure cost, and production support.`,
      technologies: [
        "Next.js",
        "NestJS",
        "MongoDB",
        "n8n",
        "GCP Cloud Run",
        "Vercel",
        "Cloudflare",
      ],
      links: [
        {
          type: "Website",
          href: "https://elegant.menu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "/elegant.gif",
    },
    {
      title: "Tiktaac",
      href: "https://tiktaac.com",
      dates: "Full-Stack Engineer · 2022",
      resultBadge: "40,000 users · 100,000 tickets sold",
      description: `Real-time event management & ticketing platform.

- Built a real-time ticketing platform with NestJS, React, React Native, and server-sent events (SSE).
- Built a mobile ticket scanner with Expo for high-volume check-ins and entry/exit scans.
- Led product design and UX, coordinating an external UI designer across web and mobile.
- Integrated Epson thermal printers for ticketing at the door.`,
      technologies: ["NestJS", "React", "React Native", "Expo", "SSE"],
      links: [
        {
          type: "Website",
          href: "https://tiktaac.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      video: "/tiktaac.gif",
    },
  ],
  openSource: [
    {
      title: "Vekt",
      href: "https://vekt.website",
      dates: "Full-Stack Product Engineer",
      resultBadge: "Open source · Self-hosted",
      description: `Open-source, self-hosted recruiting platform.

- Designed and built a privacy-focused recruiting platform with self-hosted deployment and GDPR-conscious architecture.
- Implemented AI-assisted candidate screening, automated email workflows, and event-driven orchestration using Inngest.
- Architected support for local (Ollama) and cloud LLM providers, reducing single-provider dependency for privacy-sensitive deployments.`,
      technologies: ["Next.js", "TypeScript", "Inngest", "Ollama", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://vekt.website",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
