import { musicVideos } from "@/data/site";

export function MusicSection() {
  return (
    <section id="music" className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="section-title mb-2 text-center text-sm text-rose">
          MUSIC
        </h2>
        <p className="mb-12 text-center text-2xl font-bold text-ink">
          演奏動画
        </p>
        <div className="grid gap-10 md:grid-cols-2">
          {musicVideos.map((video) => (
            <article key={video.youtubeId + video.title}>
              <div className="card-soft overflow-hidden rounded-3xl p-2">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-ink/5">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <h3 className="mt-4 text-lg font-bold text-ink">{video.title}</h3>
              <p className="text-sm text-ink-muted">{video.event}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs text-ink-muted">
          ※ <code className="rounded bg-blush/50 px-1">src/data/site.ts</code>{" "}
          の youtubeId を自分の動画IDに差し替えてください
        </p>
      </div>
    </section>
  );
}
