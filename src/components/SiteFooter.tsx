import { profile } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-blush/40 bg-white/50 py-8 text-center text-sm text-ink-muted">
      <p>
        © {new Date().getFullYear()} {profile.nameJa} — Portfolio
      </p>
    </footer>
  );
}
