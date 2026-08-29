import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import roofWide from "@/assets/roof-wide.jpg";
import { videos } from "@/lib/media";
import { Eyebrow, LazyVideo, Reveal } from "./primitives";

export function Masonry() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>The Feed</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] font-light tracking-[-0.03em]">
              Days that end
              <span className="italic text-terracotta"> above </span>
              the treeline.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
            Photos and clips from the last few seasons — sunrise starts, tear-offs, and the odd
            coffee at 40 feet.
          </p>
        </Reveal>

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <Reveal className="break-inside-avoid">
            <div className="media-zoom grain rounded-[2px]">
              <img
                src={gallery3}
                alt="Freshly installed shingle rows"
                loading="lazy"
                width={1000}
                height={1300}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={60} className="break-inside-avoid">
            <div className="grain aspect-[9/16] overflow-hidden rounded-[2px]">
              <LazyVideo src={videos.reel} poster={gallery1} />
            </div>
          </Reveal>

          <Reveal delay={120} className="break-inside-avoid">
            <div className="media-zoom grain rounded-[2px]">
              <img
                src={gallery2}
                alt="Roofing tools laid out on weathered wood"
                loading="lazy"
                width={1000}
                height={1000}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={80} className="break-inside-avoid">
            <div className="grain aspect-video overflow-hidden rounded-[2px]">
              <LazyVideo src={videos.work} poster={roofWide} />
            </div>
          </Reveal>

          <Reveal delay={140} className="break-inside-avoid">
            <div className="media-zoom grain rounded-[2px]">
              <img
                src={gallery4}
                alt="Laughing on the ridge with a coffee at sunrise"
                loading="lazy"
                width={1000}
                height={1250}
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100} className="break-inside-avoid">
            <div className="media-zoom grain rounded-[2px]">
              <img
                src={gallery1}
                alt="Crew silhouetted on a rooftop ridge at sunset"
                loading="lazy"
                width={1200}
                height={800}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
