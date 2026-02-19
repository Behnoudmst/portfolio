import { DATA } from "@/data/resume";

export function ProjectPulse() {
  const pulse = DATA.livePulse;

  return (
    <section id="pulse" className="py-2">
      <div className="flex items-center gap-3 border rounded-lg px-4 py-3 bg-muted/20">
        <span className="relative flex size-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full size-2.5 bg-green-500"></span>
        </span>
        <div className="text-sm">
          <span className="font-medium">{pulse.status}</span>
          <span className="text-muted-foreground ml-1">
            ({pulse.detail})
          </span>
        </div>
      </div>
    </section>
  );
}
