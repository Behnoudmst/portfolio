"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { useState } from "react";
export function ValuePack() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await axios.post("https://tools.behnoud.net/webhook-test/technical-audit", { email });
        setSubmitted(true);
      } catch (error) {
        console.error("Something went wrong. Please try again later.", error);
      }
    }
  };

  return (
    <section id="value-pack">
      <div className="border rounded-xl p-6 sm:p-8 bg-gradient-to-br from-muted/30 to-muted/5">
        <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
          <div className="flex-1 space-y-4">
            <span className="inline-block rounded-full bg-foreground text-background px-4 py-1.5 text-xs font-medium tracking-wide">
              Free Resource
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight">
              Get My Startup Technical Audit Framework
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 mt-0.5 text-green-500 flex-shrink-0" />
                5-point technical health checklist for your stack
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 mt-0.5 text-green-500 flex-shrink-0" />
                Common scalability pitfalls & how to avoid them
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="size-4 mt-0.5 text-green-500 flex-shrink-0" />
                3 questions to ask your current dev team today
              </li>
            </ul>
            <p className="text-xs text-muted-foreground/70">
              Want me to apply this framework to your specific situation?{" "}
              <a
                href="https://cal.com/behnoud/introductory-call"
                target="_blank"
                rel="noopener"
                className="underline text-foreground font-medium"
              >
                Book a free strategy session →
              </a>
            </p>
          </div>
          <div className="w-full sm:w-auto sm:min-w-[240px]">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>
                <Button type="submit" className="w-full" size="sm">
                  <Download className="size-3 mr-2" />
                  Download Free Audit Framework
                </Button>
              </form>
            ) : (
              <div className="text-center space-y-2 p-4 border rounded-lg bg-green-50 dark:bg-green-950/20">
                <CheckCircle2 className="size-8 text-green-500 mx-auto" />
                <p className="text-sm font-medium">Check your inbox!</p>
                <p className="text-xs text-muted-foreground">
                  The audit framework is on its way.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
