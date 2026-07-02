import Link from "next/link";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-signal text-ink hover:brightness-110 hover:-translate-y-0.5 shadow-[0_0_0_1px_rgba(255,90,54,0.4)]",
  ghost:
    "border border-line text-text-mid hover:border-signal hover:text-text-hi",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200 ${VARIANT_STYLES[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
