import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

// The "light" variant expects a second asset (logo-light.png) for dark
// backgrounds — e.g. a footer or a hero with a photo behind it — since a
// navy-on-transparent mark just disappears there. If that asset doesn't
// exist yet, drop it in /public alongside logo.png and this switches
// automatically; no other changes needed.

const LOGO_SRC = {
  default: "/logo.png",
  light: "/logo-light.png",
} as const;

export function Logo({
  className,
  variant = "default",
}: {
  className?: string;
  variant?: "default" | "light";
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center rounded-sm transition-opacity duration-200",
        "hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className,
      )}
      aria-label="WINZEE home"
    >
      <Image
        src={LOGO_SRC[variant]}
        alt="WINZEE"
        width={240}
        height={72}
        priority
        sizes="(min-width: 640px) 160px, 128px"
        className="h-16 w-auto object-contain transition-transform duration-200 ease-out group-hover:scale-[1.02] sm:h-20"
      />
    </Link>
  );
}
