import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import { cn, formatDate, readingTime } from "@/lib/utils";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;
const POST_LIMIT = 3;

export async function LatestPosts() {
  const posts = await getBlogPosts();
  const latestPosts = posts
    .sort(
      (a, b) =>
        new Date(b.metadata.publishedAt).getTime() -
        new Date(a.metadata.publishedAt).getTime()
    )
    .slice(0, POST_LIMIT);

  if (latestPosts.length === 0) {
    return null;
  }

  return (
    <section id="blog" className="py-10 sm:py-14 border-b border-foreground">
      <BlurFade delay={BLUR_FADE_DELAY * 13}>
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 mb-8">
          <div className="sm:col-span-3">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
              Blog
            </h2>
          </div>
          <div className="sm:col-span-9">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight leading-none">
              Notes From
              <br />
              the Field
            </h3>
            <p className="text-sm text-muted-foreground mt-3">
              Practical write-ups on AI, automation, and software architecture.
            </p>
          </div>
        </div>
      </BlurFade>
      <div className="border-t border-gray-200">
        {latestPosts.map((post, id) => (
          <BlurFade
            key={post.slug}
            delay={BLUR_FADE_DELAY * 14 + id * 0.05}
          >
            <article className="border-b border-gray-200 last:border-b-0">
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-6 transition-colors hover:bg-accent sm:px-4 sm:-mx-4"
              >
                <div className="sm:col-span-3 flex sm:flex-col gap-2 text-xs text-muted-foreground">
                  <time dateTime={post.metadata.publishedAt}>
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                  <span className="sm:hidden">·</span>
                  <span>{readingTime(post.source)}</span>
                </div>
                <div className="sm:col-span-8">
                  <h4 className="text-base sm:text-lg font-bold tracking-tight">
                    {post.metadata.title}
                  </h4>
                  {post.metadata.summary && (
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                      {post.metadata.summary}
                    </p>
                  )}
                </div>
                <div className="hidden sm:flex sm:col-span-1 justify-end">
                  <ArrowUpRight className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </div>
              </Link>
            </article>
          </BlurFade>
        ))}
      </div>
      <BlurFade delay={BLUR_FADE_DELAY * 15}>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
          <div className="sm:col-span-3" />
          <div className="sm:col-span-9">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ variant: "outline" }),
                "gap-2 border-foreground text-xs font-bold uppercase tracking-[0.2em]"
              )}
            >
              All posts
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </BlurFade>
    </section>
  );
}
