import { Hero } from "@/components/hero";
import { LatestPosts } from "@/components/latest-posts";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
      {children}
    </h2>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* ── HERO ── */}
      <Hero />

      <div className="border-t border-foreground my-0" />

      {/* ── PROFILE ── */}
      <section id="about" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <SectionLabel>Profile</SectionLabel>
            </div>
            <div className="sm:col-span-9">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
                {DATA.summary}
              </Markdown>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <SectionLabel>Skills</SectionLabel>
            </div>
            <div className="sm:col-span-9 space-y-4">
              {DATA.skills.map((group) => (
                <div
                  key={group.category}
                  className="grid grid-cols-1 sm:grid-cols-4 gap-2"
                >
                  <p className="text-xs font-black uppercase tracking-wide">
                    {group.category}
                  </p>
                  <div className="sm:col-span-3 flex flex-wrap gap-1">
                    {group.items.map((item) => (
                      <Badge
                        key={item}
                        variant="outline"
                        className="px-1.5 py-0 text-[10px] font-mono border-foreground/30"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="work" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="mb-6">
            <SectionLabel>Experience</SectionLabel>
          </div>
        </BlurFade>
        <div className="space-y-0">
          {DATA.work.map((work, id) => (
            <BlurFade key={work.company} delay={BLUR_FADE_DELAY * 6 + id * 0.05}>
              <ResumeCard
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={`${work.title} · ${work.location}`}
                href={work.href}
                period={`${work.start} – ${work.end}`}
                highlights={work.highlights}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── PRODUCT ENGINEERING ── */}
      <section id="products" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-8">
            <div className="sm:col-span-3">
              <SectionLabel>Product Engineering</SectionLabel>
            </div>
            <div className="sm:col-span-9">
              <p className="text-sm text-muted-foreground">
                Products I designed, built, and operated in production.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-foreground">
          {DATA.products.map((product, id) => (
            <BlurFade key={product.title} delay={BLUR_FADE_DELAY * 8 + id * 0.05}>
              <ProjectCard
                href={product.href}
                title={product.title}
                description={product.description}
                dates={product.dates}
                tags={product.technologies}
                video={product.video}
                resultBadge={product.resultBadge}
                links={product.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── OPEN SOURCE & AI ── */}
      <section id="open-source" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <SectionLabel>Open Source & AI</SectionLabel>
            </div>
            <div className="sm:col-span-9 border border-foreground">
              {DATA.openSource.map((project) => (
                <ProjectCard
                  key={project.title}
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  resultBadge={project.resultBadge}
                  links={project.links}
                />
              ))}
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── EDUCATION & CERTIFICATION ── */}
      <section id="education" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <div className="mb-6">
            <SectionLabel>Education & Certification</SectionLabel>
          </div>
        </BlurFade>
        <div className="space-y-0">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.degree}
              delay={BLUR_FADE_DELAY * 11 + id * 0.05}
            >
              <ResumeCard
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={education.period}
              />
            </BlurFade>
          ))}
        </div>
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <p className="mt-6 text-xs text-muted-foreground uppercase tracking-wider">
            <span className="font-bold text-foreground">Languages:</span>{" "}
            {DATA.languages.join(" · ")}
          </p>
        </BlurFade>
      </section>

      {/* ── BLOG ── */}
      <LatestPosts />

      {/* ── CONTACT ── */}
      <section id="contact" className="py-10 sm:py-14 pb-24">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <SectionLabel>Contact</SectionLabel>
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                Let&apos;s Work
                <br />
                Together
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                I&apos;m open to full-time senior full-stack and product
                engineering roles in Milan or remote. Reach me at{" "}
                <Link
                  href={`mailto:${DATA.contact.email}`}
                  className="text-foreground font-bold hover:underline underline-offset-4"
                >
                  {DATA.contact.email}
                </Link>{" "}
                or on{" "}
                <Link
                  href={DATA.contact.social.LinkedIn.url}
                  target="_blank"
                  className="text-foreground font-bold hover:underline underline-offset-4"
                >
                  LinkedIn
                </Link>
                .
              </p>
            </div>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
