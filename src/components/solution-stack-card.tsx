import { Badge } from "@/components/ui/badge";

interface SolutionStackProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: readonly string[];
  caseStudy: string;
}

export function SolutionStackCard({
  icon,
  title,
  description,
  technologies,
  caseStudy,
}: SolutionStackProps) {
  return (
    <div className="flex flex-col h-full bg-background p-5 sm:p-6 group cursor-pointer hover:bg-muted transition-colors duration-150">
      <div className="flex items-center gap-3 mb-3">
        <div className="flex items-center justify-center size-8 border border-foreground text-foreground">
          {icon}
        </div>
        <h3 className="text-sm font-black uppercase tracking-wider">{title}</h3>
      </div>
      <p className="text-xs text-muted-foreground leading-relaxed mb-4">
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-4">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-[10px] px-1.5 py-0 font-mono border-foreground/30"
          >
            {tech}
          </Badge>
        ))}
      </div>
      <div className="mt-auto border-t border-foreground/20 pt-3">
        <p className="text-xs text-muted-foreground leading-relaxed">
          <span className="font-bold text-foreground uppercase tracking-wider text-[10px]">
            Case →{" "}
          </span>
          {caseStudy}
        </p>
      </div>
    </div>
  );
}
