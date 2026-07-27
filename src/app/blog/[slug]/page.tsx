import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";
import CtaBanner from "@/components/ui/CtaBanner";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.title} | SR Shift Digital Blog`,
    description: post.excerpt,
    alternates: {
      canonical: `https://srshiftdigital.com/blog/${post.slug}`,
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        author: {
          "@type": "Organization",
          name: "SR Shift Digital",
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://srshiftdigital.com" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://srshiftdigital.com/blog" },
          { "@type": "ListItem", position: 3, name: post.title, item: `https://srshiftdigital.com/blog/${post.slug}` },
        ],
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="px-6 pb-24 pt-40">
        <div className="mx-auto max-w-2xl">
          <Link
            href="/blog"
            className="font-data text-xs text-text-dim transition-colors hover:text-text-mid"
          >
            ← Back to Blog
          </Link>

          <div className="mt-6 flex items-center gap-3">
            <span className="font-data text-xs uppercase tracking-wider text-signal">
              {post.category}
            </span>
            <span className="text-xs text-text-dim">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-text-hi sm:text-4xl">
            {post.title}
          </h1>

          <div className="mt-10 flex flex-col gap-5">
            {post.content.map((para, i) => (
              <p key={i} className="text-base leading-relaxed text-text-mid">
                {para}
              </p>
            ))}
          </div>
        </div>
      </article>

      <CtaBanner
        title="Want this handled for you instead?"
        subtitle="Get a free audit and we'll show you exactly where your own account or website stands."
      />
    </main>
  );
}