import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <span className="font-data text-sm uppercase tracking-wider text-signal">
        404
      </span>
      <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-text-hi sm:text-5xl">
        This page shifted somewhere else.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-text-mid">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
        Let&apos;s get you back on track.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button href="/">Back to Home</Button>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-md border border-line px-6 py-3 text-sm font-semibold text-text-mid transition-all hover:border-signal hover:text-text-hi"
        >
          Contact Us
        </Link>
      </div>
    </main>
  );
}