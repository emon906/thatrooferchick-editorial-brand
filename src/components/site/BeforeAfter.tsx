import { useCallback, useRef, useState } from "react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import { Eyebrow, Reveal } from "./primitives";

function Compare({
  before,
  after,
  label,
  place,
}: {
  before: string;
  after: string;
  label: string;
  place: string;
}) {
  const [pos, setPos] = useState(52);
  const ref = useRef<HTMLDivElement | null>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos(Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100)));
  }, []);

  return (
    <figure>
      <div
        ref={ref}
        className="grain relative aspect-[4/3] cursor-ew-resize overflow-hidden rounded-[2px] bg-beige select-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          move(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && move(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <img
          src={after}
          alt={`${label} after`}
          loading="lazy"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={before}
          alt={`${label} before`}
          loading="lazy"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        />
        <div
          className="absolute inset-y-0 w-px bg-ivory/90"
          style={{ left: `${pos}%` }}
          aria-hidden
        >
          <span className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-ivory/70 bg-charcoal/40 text-ivory backdrop-blur-sm">
            &#8596;
          </span>
        </div>
        <span className="eyebrow absolute top-4 left-4 rounded-full bg-charcoal/50 px-3 py-1 text-ivory/90 backdrop-blur-sm">
          Before
        </span>
        <span className="eyebrow absolute top-4 right-4 rounded-full bg-ivory/85 px-3 py-1 text-charcoal">
          After
        </span>
      </div>
      <figcaption className="mt-4 flex items-baseline justify-between gap-4">
        <span className="font-display text-xl font-light">{label}</span>
        <span className="eyebrow text-muted-foreground">{place}</span>
      </figcaption>
    </figure>
  );
}

export function BeforeAfter() {
  return (
    <section className="bg-sand py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <Eyebrow>Before / After</Eyebrow>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-light tracking-[-0.03em]">
            Drag the line. That&rsquo;s the
            <span className="italic text-terracotta"> whole pitch.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-12">
          <Reveal>
            <Compare
              before={before1}
              after={after1}
              label="Moss, curl & a hole"
              place="Nepean, ON"
            />
          </Reveal>
          <Reveal delay={110} className="lg:mt-16">
            <Compare
              before={before2}
              after={after2}
              label="Cottage rebuild in steel"
              place="Calabogie, ON"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
