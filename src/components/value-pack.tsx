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
        await axios.post("https://tools.behnoud.net/webhook/technical-audit", { email }, );
        setSubmitted(true);
      } catch (error) {
        console.error("Something went wrong. Please try again later.", error);
      }
    }
  };

  return (
    <section id="value-pack" className="py-10 sm:py-14 border-b border-foreground">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-8">
        <div className="sm:col-span-3">
          <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
            Free Resource
          </h2>
        </div>
        <div className="sm:col-span-5">
          <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight leading-tight">
            Startup Technical Audit Framework
          </h3>
          <ul className="space-y-2 text-xs text-muted-foreground mt-4">
            <li className="flex items-start gap-2">
              <span className="text-foreground font-bold mt-0.5">01</span>
              5-point technical health checklist for your stack
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-bold mt-0.5">02</span>
              Common scalability pitfalls & how to avoid them
            </li>
            <li className="flex items-start gap-2">
              <span className="text-foreground font-bold mt-0.5">03</span>
              3 questions to ask your current dev team today
            </li>
          </ul>
          <p className="text-[10px] text-muted-foreground mt-4 uppercase tracking-wider">
            Want me to apply this framework to your specific situation?{" "}
            <a
              href="https://cal.com/behnoud/introductory-call"
              target="_blank"
              rel="noopener"
              className="underline text-foreground font-bold"
            >
              Book a free strategy session →
            </a>
          </p>
        </div>
        <div className="sm:col-span-4">
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
                  className="w-full pl-10 pr-4 py-2.5 text-sm border-2 border-foreground bg-background focus:outline-none focus:ring-0 font-mono"
                />
              </div>
              <Button type="submit" className="w-full font-bold uppercase tracking-wider text-xs" size="sm">
                <Download className="size-3 mr-2" />
                Download Free Audit
              </Button>
            </form>
          ) : (
            <div className="text-center space-y-2 p-4 border-2 border-foreground bg-muted/10">
              <CheckCircle2 className="size-8 text-foreground mx-auto" />
              <p className="text-sm font-black uppercase">Check your inbox!</p>
              <p className="text-xs text-muted-foreground">
                The audit framework is on its way.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
