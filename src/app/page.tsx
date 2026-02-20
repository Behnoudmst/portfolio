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
    <main className="flex flex-col min-h-[100dvh] space-y-16">
      {/* 1. Problem-Solution Hero + 2. Audience Toggle */}
      <AudienceHero />

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About Me</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown className="prose max-w-full mt-3 text-pretty font-sans text-sm text-muted-foreground dark:prose-invert leading-relaxed">
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* 3. Solution Stacks */}
      <section id="solutions">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="space-y-1">
              <h2 className="text-xl font-bold">How I Solve Problems</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I don&apos;t just list technologies — I combine them into
                solutions that drive business results.
              </p>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
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
        </div>
      </section>

      {/* Client Testimonial */}
      <section id="testimonial">
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <div className="relative border rounded-xl p-6 sm:p-8 bg-gradient-to-br from-muted/20 to-transparent">
            <div className="absolute top-4 left-5 text-6xl leading-none text-foreground/5 font-serif select-none">
              &ldquo;
            </div>
            <div className="relative">
              <Markdown className="prose max-w-full text-pretty font-sans text-sm sm:text-base text-muted-foreground dark:prose-invert italic leading-relaxed">
                {`"${DATA.testimonial.quote.trim()}"`}
              </Markdown>
              <div className="flex items-center gap-3 mt-4 pt-4 border-t border-border/50">
                <div className="size-1.5 rounded-full bg-blue-500" />
                <div>
                  <p className="text-sm font-semibold">
                    {DATA.testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {DATA.testimonial.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* 4. Pre-Call Value Pack */}
      <ValuePack />

      {/* 8. Work Experience */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 8}>
            <div className="space-y-1">
              <h2 className="text-xl font-bold">Work Experience</h2>
              <p className="text-sm text-muted-foreground">
                Hover over each role to see impact highlights.
              </p>
            </div>
          </BlurFade>
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

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
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

      {/* 5. Results-First Project Cards */}
      <section id="projects">
        <div className="space-y-8 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-medium tracking-wide">
                  My Projects
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Results That Speak for Themselves
                </h2>
                <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
                  Every project starts with a business problem and ends with
                  measurable outcomes. Here&apos;s the proof.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
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
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator">
        <div className="space-y-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <span className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-medium tracking-wide">
                  Interactive Tool
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Should You Hire Me as a Co-Founder or Contractor?
                </h2>
                <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
                  Answer 4 quick questions and get a personalized recommendation
                  for the best engagement model for your situation.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <div className="max-w-lg mx-auto border rounded-xl p-6 bg-gradient-to-br from-muted/10 to-transparent">
              <Calculator />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 10. Project Fit Quiz */}
      <section id="contact">
        <div className="space-y-6 w-full pb-16">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-3 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                  Let&apos;s Find Your Perfect Fit
                </h2>
                <p className="mx-auto max-w-[540px] text-muted-foreground text-sm sm:text-base leading-relaxed">
                  Answer 3 quick questions and I&apos;ll show you the best next
                  step for your project.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 17}>
            <ProjectFitQuiz />
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 18}>
            <p className="text-center text-sm text-muted-foreground mt-4">
              Prefer email? Reach out at{" "}
              <Link
                href="mailto:hi@behnoud.net"
                className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
              >
                hi@behnoud.net
              </Link>{" "}
              — I&apos;ll respond within 48 hours.
            </p>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
