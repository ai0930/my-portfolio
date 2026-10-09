import Link from "next/link";
import { navItems, profile } from "@/data/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:h-16 sm:px-6">
        <Link
          href="#hero"
          className="text-lg font-bold tracking-tight text-ink sm:text-xl"
        >
          {profile.name}
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-ink-muted md:flex">
          {navItems.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-rose"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="rounded-full bg-rose px-4 py-1.5 text-xs font-bold text-white shadow-sm transition hover:bg-rose/90 sm:text-sm"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
