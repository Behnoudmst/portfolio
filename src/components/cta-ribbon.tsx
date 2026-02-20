"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function CtaRibbon() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed top-0 inset-x-0 z-40 bg-foreground text-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-4 py-2">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.15em]">
          Ship your MVP in weeks, not months.{" "}
          <Link
            href="https://cal.com/behnoud/introductory-call"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-2 hover:no-underline ml-1"
          >
            → Book a Free Strategy Session
          </Link>
        </p>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 p-1 hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Dismiss banner"
        >
          <X className="size-3.5" />
        </button>
      </div>
    </div>
  );
}
