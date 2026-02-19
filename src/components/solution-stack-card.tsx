import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SolutionStackProps {
  icon: string;
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
    <Card className="flex p-5 flex-col h-full hover:shadow-lg transition-all duration-300 border">
      <CardHeader className="pb-2">
        <div className="text-2xl mb-1">{icon}</div>
        <CardTitle className="text-base font-bold">{title}</CardTitle>
        <p className="text-xs text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between gap-3">
        <div className="flex flex-wrap gap-1">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-[10px] px-1.5 py-0"
            >
              {tech}
            </Badge>
          ))}
        </div>
        <div className="border-t pt-2">
          <p className="text-xs text-muted-foreground italic">
            <span className="font-semibold not-italic text-foreground">
              Case:{" "}
            </span>
            {caseStudy}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
