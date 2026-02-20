"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BookOpen,
  CalendarDays,
  Download,
  RotateCcw
} from "lucide-react";
import { useState } from "react";

interface QuizQuestion {
  question: string;
  options: { label: string; value: string }[];
}

const quizQuestions: QuizQuestion[] = [
  {
    question: "What's your biggest technical challenge right now?",
    options: [
      { label: "I need to build something from scratch", value: "build" },
      { label: "My current app isn't scaling well", value: "scale" },
      { label: "I need to add complex features fast", value: "features" },
      { label: "I'm not sure — I need expert guidance", value: "guidance" },
    ],
  },
  {
    question: "What's your timeline?",
    options: [
      { label: "ASAP — we're losing money every day", value: "urgent" },
      { label: "Within 1-2 months", value: "soon" },
      { label: "3-6 months — planning ahead", value: "planned" },
      { label: "Just exploring options for now", value: "exploring" },
    ],
  },
  {
    question: "What's your budget range for this project?",
    options: [
      { label: "Under €5K — lean and focused", value: "lean" },
      { label: "€5K–€15K — solid investment", value: "medium" },
      { label: "€15K+ — enterprise-level", value: "enterprise" },
      { label: "Not sure yet — need to scope it first", value: "unsure" },
    ],
  },
];

type Outcome = "sprint" | "audit" | "resources";

function getOutcome(answers: string[]): Outcome {
  const [challenge, timeline, budget] = answers;

  // High urgency + clear scope = sprint
  if (
    (challenge === "build" || challenge === "features") &&
    (timeline === "urgent" || timeline === "soon") &&
    (budget === "medium" || budget === "enterprise")
  ) {
    return "sprint";
  }

  // Needs guidance or exploring = resources first
  if (
    challenge === "guidance" ||
    timeline === "exploring" ||
    budget === "lean"
  ) {
    return "resources";
  }

  // Default = audit
  return "audit";
}

const outcomes: Record<
  Outcome,
  {
    badge: string;
    title: string;
    description: string;
    cta: string;
    ctaIcon: React.ReactNode;
    ctaLink: string;
  }
> = {
  sprint: {
    badge: "Great Fit",
    title: "You're a perfect fit for my 4-week MVP sprint.",
    description:
      "Based on your answers, you have a clear goal, realistic timeline, and budget to make it happen. Let's scope your project and get building.",
    cta: "Book a Strategy Session",
    ctaIcon: <CalendarDays className="size-3 mr-1" />,
    ctaLink: "https://cal.com/behnoud/introductory-call",
  },
  audit: {
    badge: "Recommended",
    title: "Let's start with a Technical Audit.",
    description:
      "Before jumping into code, a quick audit will identify the highest-impact opportunities and create a clear roadmap. This saves time and money in the long run.",
    cta: "Download Free Audit Framework",
    ctaIcon: <Download className="size-3 mr-1" />,
    ctaLink: "#value-pack",
  },
  resources: {
    badge: "Getting Started",
    title: "Here are 3 resources to help you get clarity first.",
    description:
      "You're in the exploration phase — that's smart. Start with these resources, and when you're ready to build, I'll be here.",
    cta: "Get Free Resources",
    ctaIcon: <BookOpen className="size-3 mr-1" />,
    ctaLink: "#value-pack",
  },
};

export function ProjectFitQuiz() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [outcome, setOutcome] = useState<Outcome | null>(null);

  const handleSelect = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (step < quizQuestions.length - 1) {
      setStep(step + 1);
    } else {
      setOutcome(getOutcome(newAnswers));
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setOutcome(null);
  };

  if (outcome) {
    const o = outcomes[outcome];
    return (
      <div className="max-w-lg mx-auto space-y-4">
        <div className="border rounded-lg p-6 bg-muted/20 space-y-3 text-center">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-xs font-medium">
            {o.badge}
          </div>
          <h3 className="text-lg font-bold">{o.title}</h3>
          <p className="text-sm text-muted-foreground">{o.description}</p>
          <div className="flex flex-wrap gap-2 justify-center pt-2">
            <Button size="sm" asChild>
              <a
                href={o.ctaLink}
                target={o.ctaLink.startsWith("http") ? "_blank" : undefined}
                rel="noopener"
              >
                {o.ctaIcon}
                {o.cta}
              </a>
            </Button>
            <Button size="sm" variant="outline" onClick={handleReset}>
              <RotateCcw className="size-3 mr-1" /> Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = quizQuestions[step];

  return (
    <div className="max-w-lg mx-auto space-y-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Step {step + 1} of {quizQuestions.length}
        </span>
        <div className="flex gap-1">
          {quizQuestions.map((_, i) => (
            <div
              key={i}
              className={cn(
                "h-1.5 w-6 rounded-full transition-colors",
                i <= step ? "bg-foreground" : "bg-muted"
              )}
            />
          ))}
        </div>
      </div>

      <h4 className="text-base font-semibold text-center">{q.question}</h4>

      <div className="grid gap-2">
        {q.options.map((opt) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(opt.value)}
            className="text-left px-4 py-3 rounded-lg border text-sm cursor-pointer hover:bg-muted/50 hover:border-foreground/30 active:scale-[0.98] transition-all duration-200"
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
