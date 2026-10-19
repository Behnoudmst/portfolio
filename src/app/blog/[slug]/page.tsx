import { getBlogPosts, getPost } from "@/data/blog";
import { DATA } from "@/data/resume";
import { buttonVariants } from "@/components/ui/button";
import { cn, formatDate, readingTime } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: {
    params: Promise<{
      slug: string;
    }>;
  }
): Promise<Metadata | undefined> {
  const params = await props.params;
  let post = await getPost(params.slug);

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image ? `${DATA.url}${image}` : `${DATA.url}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${DATA.url}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function Blog(
  props: {
    params: Promise<{
      slug: string;
    }>;
  }
) {
  const params = await props.params;
  let post = await getPost(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="blog" className="py-8 sm:py-12">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${DATA.url}${post.metadata.image}`
              : `${DATA.url}/og?title=${post.metadata.title}`,
            url: `${DATA.url}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: DATA.name,
            },
          }),
        }}
      />
      <Link
        href="/blog"
        className={cn(
          buttonVariants({ variant: "ghost", size: "sm" }),
          "-ml-3 mb-8 gap-2 text-xs font-bold uppercase tracking-[0.2em]"
        )}
      >
        <ArrowLeft className="size-4" />
        All posts
      </Link>
      <header className="pb-8 sm:pb-10 mb-8 sm:mb-10 border-b border-foreground">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground">
          Blog
        </p>
        <h1 className="mt-4 text-3xl sm:text-5xl font-bold tracking-tighter max-w-3xl text-balance">
          {post.metadata.title}
        </h1>
        {post.metadata.summary && (
          <p className="mt-4 text-base text-muted-foreground max-w-2xl">
            {post.metadata.summary}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="font-medium text-foreground">{DATA.name}</span>
          <span>·</span>
          <time dateTime={post.metadata.publishedAt}>
            {formatDate(post.metadata.publishedAt)}
          </time>
          <span>·</span>
          <span>{readingTime(post.source)}</span>
        </div>
      </header>
      <article
        className="prose dark:prose-invert max-w-3xl"
        dangerouslySetInnerHTML={{ __html: post.source }}
      ></article>
      <footer className="mt-12 pt-8 border-t border-foreground">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "gap-2 border-foreground"
          )}
        >
          <ArrowLeft className="size-4" />
          Back to all posts
        </Link>
      </footer>
    </main>
  );
}
