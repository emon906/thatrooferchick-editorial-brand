import { Eyebrow, Reveal } from "./primitives";

const rungs = [
  {
    year: "2012",
    title: "First ladder, first bundle",
    body: "Started as a labourer hauling shingles in the Ottawa Valley summer heat. Learned the trade the only honest way — from the bottom of the ladder.",
  },
  {
    year: "2015",
    title: "Tear-offs & tin",
    body: "Three seasons of tear-offs, steep-slope work and metal. Got fast, got clean, got a reputation for finishing what nobody else wanted to start.",
  },
  {
    year: "2018",
    title: "Running the roof",
    body: "Took over crews and job sites. Scheduling, safety, sequencing — the invisible work that decides whether a roof is done right.",
  },
  {
    year: "2021",
    title: "Own tools, own truck",
    body: "Bought the truck, wrote the quotes, answered the phone. First homeowners who hired me because of me, not the company on the door.",
  },
  {
    year: "2026",
    title: "Contractor",
    body: "Fourteen years, licensed and insured, still on the roof every single day. Same hands, bigger ladder.",
  },
];

export function Journey() {
  return (
    <section id="journey" className="relative bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <Reveal>
                <Eyebrow>The Journey</Eyebrow>
                <h2 className="mt-6 font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] font-light tracking-[-0.03em]">
                  Fourteen
                  <br />
                  <span className="italic text-terracotta">rungs</span> up.
                </h2>
                <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
                  No shortcuts, no handed-down company. Every year on this list was earned in
                  shingles, snow and sunrise starts.
                </p>
              </Reveal>
            </div>
          </div>

          <ol className="lg:col-span-8 lg:pl-10">
            {rungs.map((r, i) => (
              <Reveal as="li" key={r.year} delay={i * 60} className="group block">
                <div className="hairline grid grid-cols-[auto_1fr] gap-6 py-8 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-10">
                  <span className="font-display text-2xl leading-none text-terracotta sm:text-3xl">
                    {r.year}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-light sm:text-[2rem]">
                      {r.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {r.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
