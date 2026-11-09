import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Behnoud Mostafaie",
  initials: "BM",
  url: "https://behnoud.net",
  location: "Milan, Italy",
  role: "Senior Full-Stack / Product Engineer",
  summary:
    "Full-stack engineer with 8+ years in software and web, including Linux administration and, since 2021, building SaaS, B2B, enterprise, and AI products end to end. Top Rated on Upwork. As sole engineer, built Elegant Menu, a multi-tenant restaurant SaaS, to **5,000+ registered users across 50+ countries**. Delivered enterprise projects for A2A and Luxottica, led a 3-engineer team, cut infrastructure costs **70%**, and halved release time.",
  avatarUrl: "/me.jpeg",
  highlights: [
    { value: "80", label: "Engineer enterprise team" },
    { value: "5,000+", label: "SaaS users in 50+ countries" },
    { value: "−70%", label: "Infrastructure costs" },
    { value: "2×", label: "Faster releases" },
  ],
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "SQL", "Bash"] },
    {
      category: "Frontend",
      items: [
        "React",
        "Next.js (App Router)",
        "Micro-frontends",
        "React Native",
        "Expo",
        "Tailwind CSS",
        "shadcn/ui",
        "Storybook",
        "Design systems",
        "Accessibility",
      ],
    },
    {
      category: "Backend & Data",
      items: [
        "Node.js",
        "NestJS",
        "Microservices",
        "REST APIs",
        "GraphQL",
        "WebSockets",
        "Role-based access control",
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
        "RAG",
        "n8n",
        "Inngest",
        "Claude Code",
        "Skills",
      ],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "Linux (Ubuntu) server administration",
        "Self-hosting",
        "Coolify",
        "GCP",
        "Docker",
        "Cloud Run",
        "Vercel",
        "Cloudflare",
        "CI/CD",
        "Git",
        "Lerna monorepos",
        "Cost optimisation",
      ],
    },
    {
      category: "Testing & Integrations",
      items: [
        "Jest",
        "Vitest",
        "Sentry",
        "Stripe",
        "Twilio",
        "WhatsApp",
        "Telegram",
        "Supabase",
        "Thermal printers",
      ],
    },
  ],
  languages: [
    "Persian (Native)",
    "Azerbaijani (Native)",
    "Turkish (C1)",
    "English (C1, TOEFL 102)",
    "Italian (B1)",
  ],
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
      location: "Remote · Part-time",
      title: "Freelance Full-Stack Engineer",
      logoUrl: "",
      start: "Feb 2021",
      end: "Present",
      highlights: [
        "Earned Upwork Top Rated status, providing consulting, web design, and development services.",
        "Delivered end-to-end web applications and scalable backend services for clients across healthcare, energy, and digital products, including Yorara Beauty and The Coast News Group.",
      ],
    },
    {
      company: "A2A (Energy)",
      href: "",
      location: "Milan, Italy · Hybrid · Contract",
      title: "Full-Stack Engineer",
      logoUrl: "",
      start: "Oct 2025",
      end: "Jun 2026",
      highlights: [
        "Led frontend architecture and delivery across 3 enterprise digital-service projects, coordinating with cross-functional teams on shared UI libraries and API contracts.",
        "Shipped a library of 20+ reusable React/TypeScript components using Storybook and a shadcn/ui registry, reducing feature delivery time across teams.",
        "Integrated complex REST APIs with role-based authentication and authorization.",
      ],
    },
    {
      company: "Abstract (IT Consulting)",
      href: "",
      location: "Milan, Italy · Remote · Contract",
      title: "Full-Stack Engineer",
      logoUrl: "",
      start: "Mar 2025",
      end: "Oct 2025",
      highlights: [
        "Luxottica healthcare platform: owned a real-time updates feature end to end using WebSockets on a large-scale microservices and micro-frontend platform, within an 80-engineer, pan-European Agile team.",
        "Built and maintained NestJS, TypeORM, and MongoDB backend services with a focus on data integrity.",
        "Developed reusable React/TypeScript components and improved service modularity using a Lerna monorepo.",
      ],
    },
    {
      company: "Log-e (Startup Studio)",
      href: "",
      location: "Milan, Italy · On-site · Full-time",
      title: "Full-Stack Engineer",
      logoUrl: "/loge.jpg",
      start: "Nov 2021",
      end: "Jan 2025",
      highlights: [
        "Cut infrastructure costs 70% (€800/mo → €200/mo) and halved release time across 4+ startup MVPs through right-sizing, containerisation, and deployment automation.",
        "Primary engineer on multiple 0-to-1 launches, including Tiktaac and Montrechic Luxury Watches, owning the frontend, NestJS APIs, database design, and cloud architecture.",
        "Led a team of 3 engineers across SaaS and B2B products, reviewing code and technical decisions.",
        "Worked directly with founders and designers to turn business requirements into specs, user flows, and production SaaS releases.",
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
        "Raised Google Ads conversions 30% on the same budget with new landing pages and SEO.",
      ],
    },
    {
      company: "Akay.ir",
      href: "",
      location: "Tabriz, Iran",
      title: "Unix System Administrator",
      logoUrl: "",
      start: "Feb 2015",
      end: "Jan 2017",
      highlights: [
        "Administered WordPress hosting servers, including firewalls, security updates, backups, and DNS.",
      ],
    },
    {
      company: "Self-Employed",
      href: "",
      location: "Tabriz, Iran",
      title: "Web Designer",
      logoUrl: "",
      start: "Jul 2013",
      end: "Jan 2015",
      highlights: [
        "Delivered client websites and SEO with Joomla, WordPress, and custom CSS.",
      ],
    },
  ],
  education: [
    {
      school: "Sapienza University of Rome",
      href: "https://www.uniroma1.it",
      degree: "M.S. Mechanical Engineering Design (ML thesis at TU Darmstadt)",
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
      dates: "Full-Stack Engineer · 2024 – Present",
      resultBadge: "5,000+ users · 50+ countries",
      description: `QR-based menu & order management SaaS for restaurants and hotels.

- Built and scaled a multi-tenant SaaS with QR menus, order management, and Stripe payments as sole engineer to 5,000+ registered users across 50+ countries.
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
      dates: "Full-Stack Engineer · Feb 2024 – Jan 2025",
      resultBadge: "40,000 users · 100,000 tickets sold",
      description: `Real-time event management & ticketing platform.

- Built a real-time ticketing platform with WhatsApp integration and QR ticket generation that reached 40,000 users and sold 100,000 tickets in 2 years, using NestJS, React, React Native, and server-sent events (SSE).
- Built a mobile ticket scanner with Expo and React Native for high-volume check-ins, and integrated Epson thermal ticket printers for door sales.`,
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
      href: "https://vekt.eu",
      dates: "Full-Stack Product Engineer",
      resultBadge: "Open source · Self-hosted",
      description: `Open-source, self-hosted recruiting platform.

- Designed and built a privacy-focused, GDPR-conscious platform with AI-assisted candidate screening and event-driven workflows using Inngest.
- Architected support for local (Ollama) and cloud LLM providers, reducing single-provider dependency for privacy-sensitive deployments.`,
      technologies: ["Next.js", "TypeScript", "Inngest", "Ollama", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://vekt.eu",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
  ],
} as const;
