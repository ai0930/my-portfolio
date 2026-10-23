import { activities } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title mb-2 text-center text-sm text-rose">
          ABOUT
        </h2>
        <p className="mb-12 text-center text-2xl font-bold text-ink">
          所属・活動
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((item) => (
            <article
              key={item.title}
              className="card-soft animate-drift rounded-3xl p-8"
            >
              <h3 className="mb-3 text-xl font-bold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-muted">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
