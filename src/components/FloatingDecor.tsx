const items = [
  { emoji: "✨", className: "left-[8%] top-[18%] text-2xl", delay: "0s" },
  { emoji: "🎵", className: "right-[12%] top-[22%] text-3xl", delay: "1s" },
  { emoji: "💻", className: "left-[15%] bottom-[28%] text-2xl", delay: "2s" },
  { emoji: "🌸", className: "right-[8%] bottom-[32%] text-3xl", delay: "0.5s" },
  { emoji: "⭐", className: "left-[45%] top-[12%] text-xl opacity-70", delay: "1.5s" },
  { emoji: "🎸", className: "right-[28%] bottom-[18%] text-2xl", delay: "2.5s" },
];

export function FloatingDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((item) => (
        <span
          key={item.emoji + item.className}
          className={`animate-float absolute opacity-80 ${item.className}`}
          style={{ animationDelay: item.delay, ["--rot" as string]: "-6deg" }}
        >
          {item.emoji}
        </span>
      ))}
    </div>
  );
}
