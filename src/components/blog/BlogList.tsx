import Link from "next/link";
import { BLOG_POSTS } from "@/lib/blog";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogList() {
  return (
    <section className="border-t border-line px-6 py-24">
      <div className="mx-auto flex max-w-3xl flex-col gap-6">
        {BLOG_POSTS.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-line bg-surface p-8 transition-all duration-200 hover:-translate-y-1 hover:border-signal/40"
          >
            <div className="flex items-center gap-3">
              <span className="font-data text-xs uppercase tracking-wider text-signal">
                {post.category}
              </span>
              <span className="text-xs text-text-dim">
                {formatDate(post.date)}
              </span>
            </div>
            <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-text-hi">
              {post.title}
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-text-mid">
              {post.excerpt}
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 font-data text-xs font-medium text-signal">
              Read more
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}