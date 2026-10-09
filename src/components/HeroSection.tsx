import { profile } from "@/data/site";
import { FloatingDecor } from "./FloatingDecor";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-bokeh relative min-h-[85vh] overflow-hidden px-4 pb-16 pt-12 sm:min-h-[90vh] sm:px-6"
    >
      <FloatingDecor />
      <div className="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <p className="mb-2 text-sm font-medium tracking-[0.2em] text-rose sm:text-base">
          PORTFOLIO
        </p>
        <div className="relative mb-6">
          <div
            className="absolute -inset-8 rounded-full bg-rose/25 blur-3xl"
            aria-hidden
          />
          <h1 className="relative text-5xl font-bold leading-none text-rose sm:text-7xl md:text-8xl">
            {profile.nameJa.split("").length <= 6
              ? profile.nameJa
              : profile.name}
          </h1>
        </div>
        <p className="mb-2 text-lg font-bold text-ink sm:text-2xl">
          {profile.tagline}
        </p>
        <p className="mb-8 max-w-md text-sm text-ink-muted sm:text-base">
          {profile.subtitle}
        </p>
        <p className="card-soft max-w-xl rounded-3xl px-6 py-5 text-sm leading-relaxed text-ink sm:text-base">
          {profile.bio}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="#works"
            className="rounded-full bg-rose px-8 py-3 text-sm font-bold text-white shadow-md transition hover:scale-[1.02] hover:shadow-lg"
          >
            作品を見る
          </a>
          <a
            href="#music"
            className="card-soft rounded-full px-8 py-3 text-sm font-bold text-ink transition hover:scale-[1.02]"
          >
            演奏動画
          </a>
        </div>
      </div>
    </section>
  );
}
