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
    <section id="hero">
      <div className="w-full space-y-6">
        {/* Audience Toggle */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-wrap">
          <span>I&apos;m a</span>
          <div className="inline-flex rounded-lg border bg-muted p-0.5 gap-0.5">
            {(Object.keys(audienceContent) as Audience[]).map((key) => (
              <button
                key={key}
                onClick={() => setAudience(key)}
                className={cn(
                  "px-3 py-1 rounded-md text-xs font-medium transition-all duration-200",
                  audience === key
                    ? "bg-foreground text-background shadow-sm"
                    : "hover:bg-background/50"
                )}
              >
                {audienceContent[key].label}
              </button>
            ))}
          </div>
          <span>
            looking to{" "}
            <span className="font-semibold text-foreground">
              {content.action}
            </span>{" "}
            my product.
          </span>
        </div>

        {/* Hero Content */}
        <div className="gap-4 flex justify-between items-start">
          <div className="flex-col flex flex-1 space-y-3">
            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl xl:text-3xl/tight">
              Tired of developers who build features instead of business
              results?
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground font-medium leading-relaxed max-w-[600px]">
              I turn technical complexity into revenue-generating applications
              for startups and scale-ups.
            </p>
            <p className="text-sm text-muted-foreground/80 italic">
              Full-stack developer who speaks business, not just code.
            </p>
          </div>
          <Avatar className="size-28 sm:size-32 border flex-shrink-0">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback>{DATA.initials}</AvatarFallback>
          </Avatar>
        </div>

        {/* Audience-Specific Message */}
        <div className="border rounded-lg p-4 bg-muted/30 transition-all duration-300">
          <p className="font-semibold text-sm sm:text-base">
            {content.headline}
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            {content.subtext}
          </p>
        </div>
      </div>
    </section>
  );
}
