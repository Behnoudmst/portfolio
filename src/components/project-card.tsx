import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  resultBadge?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  resultBadge,
  links,
  className,
}: Props) {
  return (
    <div className="flex flex-col overflow-hidden bg-background h-full group hover:bg-muted transition-colors duration-150">
      <Link
        href={href || "#"}
        className={cn("block cursor-pointer", className)}
      >
        {video && (
          <Image
            src={video}
            alt={title}
            width={500}
            height={300}
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className="h-40 w-full overflow-hidden object-cover object-top"
          />
        )}
      </Link>
      <div className="p-4 flex-1 flex flex-col">
        <div className="space-y-1">
          {resultBadge && (
            <div className="inline-block bg-foreground text-background px-2 py-0.5 text-[10px] font-black uppercase tracking-widest">
              {resultBadge}
            </div>
          )}
          <h3 className="text-sm font-black uppercase tracking-wide mt-1">{title}</h3>
          <time className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert leading-relaxed">
            {description}
          </Markdown>
        </div>
        {tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1.5 py-0 text-[10px] font-mono border-foreground/30"
                variant="outline"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="mt-3 pt-3 border-t border-foreground/20 flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
