import { videos } from "@/lib/media";
import roofWide from "@/assets/roof-wide.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import { LazyVideo, Reveal } from "./primitives";

/** Full-width cinematic video band with oversized overlaid type. */
export function VideoBand() {
  return (
    <section className="grain relative h-[85svh] min-h-[520px] overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <LazyVideo src={videos.work} poster={roofWide} />
      </div>
      <div className="absolute inset-0 bg-charcoal/45" />
      <div className="relative flex h-full items-center justify-center px-5">
        <Reveal className="text-center">
          <p className="eyebrow text-ivory/70">Ottawa &middot; Est. 2012</p>
          <h2 className="mt-6 font-display text-[clamp(2.6rem,10vw,9rem)] leading-[0.85] font-light tracking-[-0.04em] text-ivory">
            Built to
            <span className="block italic text-ember">outlast</span>
            the weather.
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

/** Video-only section: real work, three clips, no copy competing with them. */
export function WorkVideos() {
  return (
    <section id="work" className="bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-light tracking-[-0.03em] text-ivory">
            Real work,
            <span className="italic text-ember"> unedited.</span>
          </h2>
          <p className="eyebrow text-ivory/50">Sound off &middot; always rolling</p>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <Reveal className="lg:col-span-2">
            <div className="grain aspect-video overflow-hidden rounded-[2px]">
              <LazyVideo src={videos.hero} poster={roofWide} />
            </div>
            <p className="eyebrow mt-4 text-ivory/50">Barrhaven &mdash; full replacement</p>
          </Reveal>

          <Reveal delay={90}>
            <div className="grain aspect-[9/16] overflow-hidden rounded-[2px]">
              <LazyVideo src={videos.reel} poster={gallery1} />
            </div>
            <p className="eyebrow mt-4 text-ivory/50">Ridge walk at sunset</p>
          </Reveal>

          <Reveal delay={160}>
            <div className="grain aspect-[9/16] overflow-hidden rounded-[2px]">
              <LazyVideo src={videos.work} poster={roofWide} />
            </div>
            <p className="eyebrow mt-4 text-ivory/50">Nailing the field</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
