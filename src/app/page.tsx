import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

// New components
import { AudienceHero } from "@/components/audience-hero";
import { Calculator } from "@/components/calculator";
import { ProjectFitQuiz } from "@/components/project-fit-quiz";
import { SolutionStackCard } from "@/components/solution-stack-card";
import { ValuePack } from "@/components/value-pack";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh]">
      {/* ── HERO ── */}
      <AudienceHero />

      {/* ── GRID DIVIDER ── */}
      <div className="border-t border-foreground my-0" />

      {/* ── ABOUT ── */}
      <section id="about" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                About
              </h2>
            </div>
            <div className="sm:col-span-9">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
                {DATA.summary}
              </Markdown>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── SOLUTION STACKS ── */}
      <section id="solutions" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-6">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Solutions
              </h2>
            </div>
            <div className="sm:col-span-9">
              <p className="text-sm text-muted-foreground">
                I don&apos;t just list technologies — I combine them into
                solutions that drive business results.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-foreground">
          {DATA.solutionStacks.map((stack, id) => (
            <BlurFade
              key={stack.title}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <SolutionStackCard
                icon={stack.icon}
                title={stack.title}
                description={stack.description}
                technologies={stack.technologies}
                caseStudy={stack.caseStudy}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section id="testimonial" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Client Voice
              </h2>
            </div>
            <div className="sm:col-span-9">
              <blockquote className="border-l-2 border-foreground pl-6">
                <Markdown className="prose max-w-full text-pretty font-sans text-base sm:text-lg text-foreground dark:prose-invert italic leading-relaxed font-medium">
                  {`"${DATA.testimonial.quote.trim()}"`}
                </Markdown>
                <footer className="mt-4 flex items-center gap-2">
                  <span className="inline-block w-4 h-[1px] bg-foreground" />
                  <cite className="not-italic text-xs font-bold uppercase tracking-[0.15em]">
                    {DATA.testimonial.author}
                  </cite>
                  <span className="text-xs text-muted-foreground">
                    / {DATA.testimonial.title}
                  </span>
                </footer>
              </blockquote>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── VALUE PACK ── */}
      <ValuePack />

      {/* ── WORK EXPERIENCE ── */}
      <section id="work" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 8}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-6">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Experience
              </h2>
            </div>
            <div className="sm:col-span-9">
              <p className="text-xs text-muted-foreground uppercase tracking-wider">
                Hover to reveal impact highlights
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="space-y-0">
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
                testimonial={work.testimonial}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── EDUCATION ── */}
      <section id="education" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 9}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-6">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Education
              </h2>
            </div>
            <div className="sm:col-span-9" />
          </div>
        </BlurFade>
        <div className="space-y-0">
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 10 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-8">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Projects
              </h2>
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                Results That Speak
                <br />
                for Themselves
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                Every project starts with a business problem and ends with
                measurable outcomes.
              </p>
            </div>
          </div>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-foreground">
          {DATA.projects.map((project, id) => (
            <BlurFade
              key={project.title}
              delay={BLUR_FADE_DELAY * 12 + id * 0.05}
            >
              <ProjectCard
                href={project.href}
                key={project.title}
                title={project.title}
                description={project.description}
                dates={project.dates}
                tags={project.technologies}
                image={project.image}
                video={project.video}
                resultBadge={project.resultBadge}
                links={project.links}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* ── CALCULATOR ── */}
      <section id="calculator" className="py-10 sm:py-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-8">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Interactive
              </h2>
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight leading-tight">
                Co-Founder or Contractor?
              </h3>
              <p className="text-sm text-muted-foreground mt-2">
                4 questions. Personalized recommendation.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 14}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3" />
            <div className="sm:col-span-9">
              <div className="border border-foreground p-6 sm:p-8 bg-background">
                <Calculator />
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* ── CONTACT / FIT QUIZ ── */}
      <section id="contact" className="py-10 sm:py-14 pb-24">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-8">
            <div className="sm:col-span-3">
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Contact
              </h2>
            </div>
            <div className="sm:col-span-9">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
                Find Your
                <br />
                Perfect Fit
              </h3>
              <p className="text-sm text-muted-foreground mt-3">
                3 quick questions to determine the best next step for your project.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 17}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3" />
            <div className="sm:col-span-9">
              <ProjectFitQuiz />
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 18}>
          <div className="mt-8 pt-6 border-t border-foreground">
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              Prefer email? →{" "}
              <Link
                href="mailto:hi@behnoud.net"
                className="text-foreground font-bold hover:underline underline-offset-4 transition-colors"
              >
                hi@behnoud.net
              </Link>
            </p>
          </div>
        </BlurFade>
      </section>
    </main>
  );
}
