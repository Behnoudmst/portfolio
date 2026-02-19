"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { useState } from "react";

interface Question {
  question: string;
  options: { label: string; value: string; points: Record<string, number> }[];
}

const questions: Question[] = [
  {
    question: "What stage is your product at?",
    options: [
      {
        label: "Just an idea / pre-MVP",
        value: "idea",
        points: { cofounder: 3, contractor: 1 },
      },
      {
        label: "MVP built, getting traction",
        value: "mvp",
        points: { cofounder: 2, contractor: 2 },
      },
      {
        label: "Established product, needs scaling",
        value: "scaling",
        points: { cofounder: 1, contractor: 3 },
      },
      {
        label: "Mature product, specific feature needed",
        value: "feature",
        points: { cofounder: 0, contractor: 4 },
      },
    ],
  },
  {
    question: "What's your technical situation?",
    options: [
      {
        label: "No technical team at all",
        value: "no-team",
        points: { cofounder: 4, contractor: 1 },
      },
      {
        label: "Small team, need senior leadership",
        value: "small-team",
        points: { cofounder: 3, contractor: 2 },
      },
      {
        label: "Full team, need extra hands",
        value: "full-team",
        points: { cofounder: 0, contractor: 4 },
      },
      {
        label: "Team exists but struggling with architecture",
        value: "arch-help",
        points: { cofounder: 2, contractor: 3 },
      },
    ],
  },
  {
    question: "What's your budget model preference?",
    options: [
      {
        label: "Equity / revenue share — I need a partner",
        value: "equity",
        points: { cofounder: 4, contractor: 0 },
      },
      {
        label: "Monthly retainer — ongoing relationship",
        value: "retainer",
        points: { cofounder: 2, contractor: 3 },
      },
      {
        label: "Fixed project budget — defined scope",
        value: "fixed",
        points: { cofounder: 0, contractor: 4 },
      },
      {
        label: "Not sure yet — open to discussion",
        value: "open",
        points: { cofounder: 2, contractor: 2 },
      },
    ],
  },
  {
    question: "How much technical debt do you have?",
    options: [
      {
        label: "Starting fresh — no legacy code",
        value: "fresh",
        points: { cofounder: 3, contractor: 2 },
      },
      {
        label: "Some shortcuts taken, needs cleanup",
        value: "some",
        points: { cofounder: 2, contractor: 3 },
      },
      {
        label: "Significant debt — blocking new features",
        value: "significant",
        points: { cofounder: 1, contractor: 4 },
      },
      {
        label: "Need a complete rebuild",
        value: "rebuild",
        points: { cofounder: 3, contractor: 2 },
      },
    ],
  },
];

type Result = "cofounder" | "contractor" | "hybrid";

const results: Record<Result, { title: string; description: string; cta: string; ctaLink: string }> = {
  cofounder: {
    title: "Technical Co-Founder Partnership",
    description:
      "Based on your answers, you'd benefit most from a long-term technical partner who's invested in your product's success. I can help architect, build, and scale your product as a strategic partner — not just a hired hand.",
    cta: "Let's discuss a partnership",
    ctaLink: "https://cal.com/behnoud/introductory-call",
  },
  contractor: {
    title: "Expert Contractor Engagement",
    description:
      "Your needs are well-suited for a focused, project-based engagement. I can jump in, execute on defined scope, and deliver production-ready code that your team can maintain and extend.",
    cta: "Scope a project together",
    ctaLink: "https://cal.com/behnoud/introductory-call",
  },
  hybrid: {
    title: "Flexible Hybrid Model",
    description:
      "Your situation could go either way. I'd recommend starting with a defined project to build trust, then evaluating a deeper partnership based on results. This gives you the best of both worlds.",
    cta: "Let's find the right fit",
    ctaLink: "https://cal.com/behnoud/introductory-call",
  },
};

export function Calculator() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [result, setResult] = useState<Result | null>(null);

  const handleSelect = (optionIndex: number) => {
    const newAnswers = [...answers, optionIndex];
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Calculate result
      let cofounder = 0;
      let contractor = 0;
      newAnswers.forEach((ansIdx, qIdx) => {
        const pts = questions[qIdx].options[ansIdx].points;
        cofounder += pts.cofounder;
        contractor += pts.contractor;
      });

      if (Math.abs(cofounder - contractor) <= 2) {
        setResult("hybrid");
      } else if (cofounder > contractor) {
        setResult("cofounder");
      } else {
        setResult("contractor");
      }
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleReset = () => {
    setStep(0);
    setAnswers([]);
    setResult(null);
  };

  if (result) {
    const r = results[result];
    return (
      <div className="space-y-4">
        <div className="border rounded-lg p-6 bg-muted/20 space-y-3">
          <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-xs font-medium">
            Your Result
          </div>
          <h3 className="text-lg font-bold">{r.title}</h3>
          <p className="text-sm text-muted-foreground">{r.description}</p>
          <div className="flex flex-wrap gap-2 pt-2">
            <Button size="sm" asChild>
              <a href={r.ctaLink} target="_blank" rel="noopener">
                {r.cta} <ArrowRight className="size-3 ml-1" />
              </a>
            </Button>
            <Button size="sm" variant="outline" onClick={handleReset}>
              <RotateCcw className="size-3 mr-1" /> Retake
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const q = questions[step];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <span>
          Question {step + 1} of {questions.length}
        </span>
        <div className="flex gap-1">
          {questions.map((_, i) => (
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

      <h4 className="text-base font-semibold">{q.question}</h4>

      <div className="grid gap-2">
        {q.options.map((opt, i) => (
          <button
            key={opt.value}
            onClick={() => handleSelect(i)}
            className="text-left px-4 py-3 rounded-lg border text-sm hover:bg-muted/50 transition-colors hover:border-foreground/30"
          >
            {opt.label}
          </button>
        ))}
      </div>

      {step > 0 && (
        <Button size="sm" variant="ghost" onClick={handleBack}>
          <ArrowLeft className="size-3 mr-1" /> Back
        </Button>
      )}
    </div>
  );
}
