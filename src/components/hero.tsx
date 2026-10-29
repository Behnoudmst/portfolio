import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";

export function Hero() {
  return (
    <section id="hero" className="py-12 sm:py-20">
      <div className="flex justify-between items-start gap-6">
        <div className="flex-1 min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {DATA.role} — {DATA.location}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.9]">
            Behnoud
            <br />
            Mostafaie
          </h1>
        </div>
        <Avatar className="size-20 sm:size-24 border-2 border-foreground flex-shrink-0">
          <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
          <AvatarFallback>{DATA.initials}</AvatarFallback>
        </Avatar>
      </div>

      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-[560px] mt-6">
        I build and operate SaaS, enterprise, and AI-powered products end to
        end — from product definition through deployment and support.
      </p>

      <div className="flex items-center gap-2 mt-6">
        <span className="size-2 rounded-full bg-green-500" />
        <span className="text-xs font-bold uppercase tracking-wider">
          Open to full-time roles
        </span>
      </div>

      <div className="flex flex-wrap gap-2 mt-6">
        <Button asChild size="sm" className="font-bold uppercase tracking-wider text-xs">
          <Link href={`mailto:${DATA.contact.email}`}>Get in touch</Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="font-bold uppercase tracking-wider text-xs border-foreground">
          <Link href={DATA.contact.social.LinkedIn.url} target="_blank">
            LinkedIn
          </Link>
        </Button>
        <Button asChild size="sm" variant="outline" className="font-bold uppercase tracking-wider text-xs border-foreground">
          <Link href={DATA.contact.social.GitHub.url} target="_blank">
            GitHub
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-[1px] bg-foreground border border-foreground mt-10">
        {DATA.highlights.map((highlight) => (
          <div key={highlight.label} className="bg-background p-4">
            <p className="text-2xl sm:text-3xl font-black tracking-tight">
              {highlight.value}
            </p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-1">
              {highlight.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
