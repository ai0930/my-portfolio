import { profile } from "@/data/site";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-t from-blush/40 to-transparent px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-lg text-center">
        <h2 className="section-title mb-2 text-sm text-rose">CONTACT</h2>
        <p className="mb-8 text-2xl font-bold text-ink">お問い合わせ</p>
        <div className="card-soft rounded-3xl p-8">
          <p className="mb-6 text-sm text-ink-muted">
            就活・インターンなど、お気軽にご連絡ください。
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mb-4 block text-lg font-bold text-rose hover:underline"
          >
            {profile.email}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border border-ink/10 bg-white px-6 py-2 text-sm font-bold text-ink transition hover:border-rose/30"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
