import shingle from "@/assets/service-shingle.jpg";
import metal from "@/assets/service-metal.jpg";
import repair from "@/assets/service-repair.jpg";
import { Eyebrow, Reveal } from "./primitives";

const services = [
  {
    n: "01",
    img: shingle,
    title: "Full Roof Replacement",
    body: "Complete tear-off, deck inspection, ice & water shield, and architectural shingles installed to spec. Ottawa winters get a vote — we build for them.",
    tags: ["Tear-off", "Shingles", "Ventilation"],
  },
  {
    n: "02",
    img: metal,
    title: "Metal & Steel Roofing",
    body: "Standing seam and steel tile for cottages, farmhouses and homes that should never need another roof. Precision seams, hidden fasteners.",
    tags: ["Standing seam", "Steel tile", "50yr"],
  },
  {
    n: "03",
    img: repair,
    title: "Repairs, Flashing & Eaves",
    body: "Leaks traced to the source. Valleys, chimney flashing, vents and eavestrough — the small details that quietly ruin ceilings.",
    tags: ["Leak repair", "Flashing", "Eaves"],
  },
];

export function Services() {
  return (
    <section id="services" className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>What I Do</Eyebrow>
            <h2 className="mt-6 max-w-xl font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] font-light tracking-[-0.03em]">
              Three ways to
              <span className="italic text-terracotta"> stop worrying </span>
              about your roof.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Residential roofing across Ottawa, the Valley and everywhere the truck can reach before
            sunrise.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => (
            <Reveal
              as="article"
              key={s.n}
              delay={i * 90}
              className={i === 1 ? "lg:mt-16" : i === 2 ? "lg:mt-8" : ""}
            >
              <div className="media-zoom grain relative aspect-[4/5] rounded-[2px] bg-beige">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1100}
                  height={1400}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-5 left-5 font-display text-sm text-ivory/90">
                  {s.n}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl leading-tight font-light sm:text-[1.75rem]">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-charcoal/15 px-3 py-1 text-[0.7rem] tracking-wide text-charcoal-soft uppercase"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
