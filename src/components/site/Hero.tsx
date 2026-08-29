import portrait from "@/assets/hero-portrait.jpg";
import roofWide from "@/assets/roof-wide.jpg";
import { videos, CONTACT } from "@/lib/media";
import { LazyVideo, MagneticLink } from "./primitives";
import { useParallax } from "@/lib/motion";

export function Hero() {
  const { ref, offset } = useParallax<HTMLDivElement>(0.06);

  return (
    <section id="top" className="grain relative min-h-[100svh] overflow-hidden bg-charcoal">
      <div className="absolute inset-0">
        <LazyVideo src={videos.hero} poster={roofWide} eager />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/35 to-charcoal/85" />
      <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_20%_10%,transparent,oklch(0.248_0.014_60/0.55))]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-5 pt-32 pb-14 sm:px-8 lg:pb-20">
        <div className="grid items-end gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="eyebrow inline-flex items-center gap-3 rounded-full border border-ivory/35 px-5 py-2 text-ivory/90">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
              14 Years on the Roof
            </span>

            <h1 className="mt-8 font-display text-[clamp(2.9rem,9vw,7.5rem)] leading-[0.86] font-light tracking-[-0.03em] text-ivory">
              14 Years.
              <span className="mt-2 block pl-[8%] italic text-ember lg:pl-[18%]">One Rung</span>
              <span className="block">at a Time.</span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg">
              From labourer to contractor — built from the ground up.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <MagneticLink href="#contact">Work With Me</MagneticLink>
              <MagneticLink href="#journey" variant="light">
                Explore My Journey
              </MagneticLink>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pb-6">
            <div
              ref={ref}
              style={{ transform: `translate3d(0, ${offset}px, 0)` }}
              className="ml-auto w-full max-w-[22rem] will-change-transform"
            >
              <figure className="grain overflow-hidden rounded-[2px] border border-ivory/20 shadow-[var(--shadow-float)]">
                <img
                  src={portrait}
                  alt="That Roofer Chick standing on a finished rooftop at golden hour in Ottawa"
                  width={912}
                  height={1200}
                  className="aspect-[3/4] w-full object-cover"
                />
              </figure>
              <div className="mt-4 flex items-baseline justify-between gap-4 text-ivory/70">
                <p className="eyebrow">Ottawa, ON &middot; from {CONTACT.from.split(",")[0]}</p>
                <p className="font-display text-2xl text-ivory">100%</p>
              </div>
              <p className="text-right text-xs text-ivory/55">recommend &mdash; 6 reviews</p>
            </div>
          </div>
        </div>

        <div className="mt-14 flex items-center justify-between border-t border-ivory/15 pt-6">
          <p className="max-w-xs text-xs leading-relaxed text-ivory/60 sm:text-sm">
            &ldquo;Climbing the ladder 1 rung at a time! From labourer to contractor. 14yrs goes
            quick!&rdquo;
          </p>
          <a href="#journey" className="eyebrow hidden text-ivory/60 hover:text-ivory sm:block">
            Scroll &darr;
          </a>
        </div>
      </div>
    </section>
  );
}
