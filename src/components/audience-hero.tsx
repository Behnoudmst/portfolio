"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { useState } from "react";

type Audience = "founder" | "cto" | "agency";

const audienceContent: Record<
  Audience,
  { label: string; action: string; headline: string; subtext: string }
> = {
  founder: {
    label: "Founder",
    action: "Build",
    headline:
      "Ship your MVP in weeks, not months—with a tech stack built to scale.",
    subtext:
      "I help founders go from idea to revenue-generating product fast. No bloated code, no over-engineering—just what you need to validate, launch, and grow.",
  },
  cto: {
    label: "CTO",
    action: "Scale",
    headline:
      "Scale your architecture without the growing pains.",
    subtext:
      "Microservices, CI/CD, cloud infrastructure—I bring enterprise-grade patterns so your team ships faster and your systems stay reliable under load.",
  },
  agency: {
    label: "Agency",
    action: "Optimize",
    headline:
      "A reliable dev partner who delivers on time, every time.",
    subtext:
      "Clean code, clear communication, seamless handoffs. I integrate with your team like I've always been there—so you can focus on your clients.",
  },
};

export function AudienceHero() {
  const [audience, setAudience] = useState<Audience>("founder");
  const content = audienceContent[audience];

  return (
    <section id="hero" className="py-12 sm:py-20">
      <div className="w-full">
        {/* Top bar: role + avatar */}
        <div className="flex justify-between items-start gap-6">
          <div className="flex-1 min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Solutions Architect (AI & Automation) — Milan, Italy
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
              Tired of devs
              <br />
              who build features
              <br />
              instead of{" "}
              <span className="text-foreground underline decoration-2 underline-offset-4">
                results
              </span>
              ?
            </h1>
          </div>
          <Avatar className="size-20 sm:size-24 border-2 border-foreground flex-shrink-0">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[540px] mt-6">
          I turn technical complexity into revenue-generating applications
          for startups and scale-ups.
        </p>

        {/* Audience Toggle */}
        <div className="flex items-center gap-3 text-sm text-muted-foreground flex-wrap mt-8">
          <span className="text-xs uppercase tracking-wider font-bold">I&apos;m a</span>
          <div className="inline-flex border border-foreground">
            {(Object.keys(audienceContent) as Audience[]).map((key) => (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className={cn(
                  "px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors duration-150 cursor-pointer border-r border-foreground last:border-r-0",
                  audience === key
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground hover:bg-muted"
                )}
              >
                {audienceContent[key].label}
              </button>
            ))}
          </div>
          <span className="text-xs uppercase tracking-wider">
            looking to{" "}
            <span className="font-black text-foreground">
              {content.action}
            </span>
          </span>
        </div>

        {/* Audience-Specific Message */}
        <div className="border-2 border-foreground p-5 sm:p-6 mt-6 bg-background transition-all duration-200">
          <p className="font-bold text-sm sm:text-base leading-snug uppercase tracking-wide">
            {content.headline}
          </p>
          <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
            {content.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
