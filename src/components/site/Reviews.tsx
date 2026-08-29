import { Eyebrow, Reveal } from "./primitives";

const reviews = [
  {
    quote:
      "She showed up when she said she would, tore off two layers in a day and left the yard cleaner than she found it. Rare.",
    name: "Danielle M.",
    place: "Kanata, ON",
  },
  {
    quote:
      "Found the leak three other guys missed. Photos of every step. My ceiling has been dry through two winters now.",
    name: "Rob T.",
    place: "Orleans, ON",
  },
  {
    quote:
      "Straight quote, no upsell, no games. She explained the ventilation issue in plain English and just fixed it.",
    name: "Priya S.",
    place: "Ottawa, ON",
  },
  {
    quote:
      "Steel roof on the cottage looks unreal. Fourteen years of experience shows in the seams.",
    name: "Glen H.",
    place: "Calabogie, ON",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-4">
            <Eyebrow>Reviews</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[0.95] font-light tracking-[-0.03em]">
              100%
              <span className="block italic text-terracotta">recommend.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Six reviews, six recommendations. Small numbers, perfect record — and every one of
              them a neighbour.
            </p>
            <p className="mt-8 font-display text-6xl leading-none font-light text-terracotta">6</p>
            <p className="eyebrow mt-2 text-muted-foreground">Reviews &middot; 100% recommend</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
            {reviews.map((r, i) => (
              <Reveal
                as="figure"
                key={r.name}
                delay={i * 80}
                className={i % 2 === 1 ? "sm:mt-10" : ""}
              >
                <div className="flex h-full flex-col justify-between rounded-[2px] border border-border bg-card p-7 shadow-[var(--shadow-card)]">
                  <blockquote className="font-display text-lg leading-snug font-light sm:text-xl">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-8 flex items-baseline justify-between gap-4 border-t border-border pt-5">
                    <span className="text-sm font-semibold">{r.name}</span>
                    <span className="eyebrow text-muted-foreground">{r.place}</span>
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
