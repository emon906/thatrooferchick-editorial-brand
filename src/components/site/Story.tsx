import story from "@/assets/story-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import { Eyebrow, Reveal } from "./primitives";
import { useParallax } from "@/lib/motion";

export function BehindTheRoof() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.05);

  return (
    <section id="story" className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <div ref={ref} style={{ transform: `translate3d(0, ${offset}px, 0)` }}>
              <figure className="grain media-zoom relative rounded-[2px]">
                <img
                  src={story}
                  alt="Carrying a bundle of shingles up the ladder at sunrise"
                  loading="lazy"
                  width={1200}
                  height={1504}
                  className="aspect-[4/5] w-full object-cover"
                />
              </figure>
            </div>
            <div className="-mt-16 ml-auto w-2/5 max-w-[14rem] translate-x-4 sm:-mt-24 sm:w-1/3">
              <img
                src={gallery4}
                alt="Coffee break on the ridge at sunrise"
                loading="lazy"
                width={1000}
                height={1250}
                className="aspect-[4/5] w-full rounded-[2px] border-4 border-ivory object-cover shadow-[var(--shadow-float)]"
              />
            </div>
          </div>

          <div className="lg:col-span-6 lg:pl-6">
            <Reveal>
              <Eyebrow>Behind The Roof</Eyebrow>
              <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[0.98] font-light tracking-[-0.03em]">
                A kid from Calabogie who never came down.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  I grew up in Calabogie, an hour west of Ottawa, where you fix what you own and you
                  finish what you start. At nineteen I got handed a bundle of shingles and told to
                  keep up. I kept up.
                </p>
                <p>
                  Fourteen years later I run the jobs I used to labour on. I still climb the ladder
                  first thing in the morning, still tarp a roof in the rain, still answer my own
                  phone. The name on the truck is mine, so the standard is mine too.
                </p>
                <p className="font-display text-xl leading-snug text-charcoal italic sm:text-2xl">
                  &ldquo;Climbing the ladder 1 rung at a time.&rdquo;
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
                {[
                  ["14", "Years on roofs"],
                  ["100%", "Recommend rate"],
                  ["1", "Standard, always"],
                ].map(([k, v]) => (
                  <div key={v}>
                    <dt className="font-display text-3xl font-light text-terracotta sm:text-4xl">
                      {k}
                    </dt>
                    <dd className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                      {v}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhyMe() {
  const points = [
    {
      k: "You get me",
      v: "Not a salesperson, not a call centre. The person who quotes your roof is the person on it.",
    },
    {
      k: "Trained by the ladder",
      v: "Fourteen seasons of labour before a single contract. I know what a shortcut looks like because I've been asked to take one.",
    },
    {
      k: "Ottawa weather-tested",
      v: "Ice dams, freeze-thaw, February wind. Everything I install is specified for the winter that's coming.",
    },
    {
      k: "Documented, not promised",
      v: "Photos of the deck, the underlay and the finish — so you see the parts of your roof you never will again.",
    },
  ];

  return (
    <section className="bg-charcoal py-24 text-ivory sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow text-ember">Why That Roofer Chick?</span>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-light tracking-[-0.03em]">
              Because the roof
              <span className="italic text-ember"> remembers </span>
              who built it.
            </h2>
          </Reveal>

          <div className="lg:col-span-7">
            {points.map((p, i) => (
              <Reveal key={p.k} delay={i * 80}>
                <div className="grid gap-3 border-t border-ivory/15 py-8 sm:grid-cols-[14rem_1fr] sm:gap-8">
                  <h3 className="font-display text-xl font-light">{p.k}</h3>
                  <p className="text-sm leading-relaxed text-ivory/65 sm:text-base">{p.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
