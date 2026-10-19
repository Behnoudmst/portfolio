import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { getBlogPosts } from "@/data/blog";
import { cn, formatDate, readingTime } from "@/lib/utils";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description:
    "Notes on AI, automation, and software architecture from real client work.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const sortedPosts = posts.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime()
  );

  return (
    <main className="flex flex-col min-h-[100dvh] py-8 sm:py-12">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <Link
          href="/"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "-ml-3 mb-8 gap-2 text-xs font-bold uppercase tracking-[0.2em]"
          )}
        >
          <ArrowLeft className="size-4" />
          Home
        </Link>
      </BlurFade>

      <header className="pb-10 sm:pb-14 border-b border-foreground">
        <BlurFade delay={BLUR_FADE_DELAY * 2}>
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8">
            <div className="sm:col-span-3">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
                Blog
              </p>
            </div>
            <div className="sm:col-span-9">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">
                Writing
              </h1>
              <p className="mt-4 text-sm text-muted-foreground max-w-xl">
                {metadata.description}
              </p>
              <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {sortedPosts.length}{" "}
                {sortedPosts.length === 1 ? "article" : "articles"}
              </p>
            </div>
          </div>
        </BlurFade>
      </header>

      {sortedPosts.length === 0 ? (
        <p className="py-10 text-sm text-muted-foreground">
          No posts yet. Check back soon.
        </p>
      ) : (
        <div>
          {sortedPosts.map((post, id) => (
            <BlurFade
              delay={BLUR_FADE_DELAY * 3 + id * 0.05}
              key={post.slug}
            >
              <article className="border-b border-foreground">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 py-8 transition-colors hover:bg-accent sm:px-4 sm:-mx-4"
                >
                  <div className="sm:col-span-3 flex sm:flex-col gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.metadata.publishedAt}>
                      {formatDate(post.metadata.publishedAt)}
                    </time>
                    <span className="sm:hidden">·</span>
                    <span>{readingTime(post.source)}</span>
                  </div>
                  <div className="sm:col-span-8">
                    <h2 className="text-lg sm:text-xl font-bold tracking-tight">
                      {post.metadata.title}
                    </h2>
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
      )}
    </main>
  );
}
