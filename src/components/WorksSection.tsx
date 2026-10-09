import { projects } from "@/data/site";

export function WorksSection() {
  return (
    <section
      id="works"
      className="bg-gradient-to-b from-transparent via-lilac/30 to-transparent px-4 py-20 sm:px-6"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title mb-2 text-center text-sm text-rose">
          WORKS
        </h2>
        <p className="mb-12 text-center text-2xl font-bold text-ink">
          プログラミング作品
        </p>
        <ul className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <li key={project.title} className="card-soft rounded-3xl p-8">
              <h3 className="mb-3 text-xl font-bold text-ink">{project.title}</h3>
              <p className="mb-4 text-sm leading-relaxed text-ink-muted">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-mint/80 px-3 py-1 text-xs font-medium text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm font-bold">
                {project.link && (
                  <a
                    href={project.link}
                    className="text-rose underline-offset-4 hover:underline"
                  >
                    Demo
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    className="text-ink-muted underline-offset-4 hover:text-ink hover:underline"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
