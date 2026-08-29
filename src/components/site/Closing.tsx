import { CONTACT, videos } from "@/lib/media";
import roofWide from "@/assets/roof-wide.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { Eyebrow, LazyVideo, MagneticLink, Reveal } from "./primitives";

export function Social() {
  return (
    <section className="bg-ivory py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Follow Along</Eyebrow>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.6rem)] leading-[0.95] font-light tracking-[-0.03em]">
              The roof, daily —
              <span className="italic text-terracotta"> {CONTACT.handle}</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Tear-offs, tool talk, ladder lessons and the occasional Ottawa sunrise. If you want to
              see how the work actually gets done, it&rsquo;s all there.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <MagneticLink href={CONTACT.tiktok}>TikTok</MagneticLink>
              <MagneticLink href={CONTACT.instagram} variant="outline">
                Instagram
              </MagneticLink>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-5 lg:col-span-7">
            <Reveal>
              <div className="grain aspect-[9/16] overflow-hidden rounded-[2px]">
                <LazyVideo src={videos.reel} poster={gallery4} />
              </div>
            </Reveal>
            <Reveal delay={90} className="mt-10">
              <div className="media-zoom grain aspect-[9/16] rounded-[2px]">
                <img
                  src={gallery3}
                  alt="Detail of new shingle rows"
                  loading="lazy"
                  width={1000}
                  height={1300}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="contact" className="grain relative overflow-hidden bg-charcoal">
      <div className="absolute inset-0 opacity-40">
        <LazyVideo src={videos.hero} poster={roofWide} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 to-charcoal/95" />

      <div className="relative mx-auto max-w-7xl px-5 py-28 sm:px-8 sm:py-40">
        <Reveal>
          <p className="eyebrow text-ember">Ottawa &amp; the Valley</p>
          <h2 className="mt-8 max-w-4xl font-display text-[clamp(2.5rem,7.5vw,6rem)] leading-[0.88] font-light tracking-[-0.035em] text-ivory">
            Ready to get your roof
            <span className="italic text-ember"> done right?</span>
          </h2>
          <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/70">
            Free honest assessment. If it can be repaired, I&rsquo;ll tell you. If it can&rsquo;t,
            I&rsquo;ll show you why.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <MagneticLink href={CONTACT.phoneHref}>{CONTACT.phone}</MagneticLink>
            <MagneticLink href={CONTACT.instagram} variant="light">
              Message me
            </MagneticLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-charcoal pb-10 text-ivory">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 border-t border-ivory/15 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-2xl leading-none">
              That Roofer <em className="text-ember not-italic">Chick</em>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
              Climbing the ladder 1 rung at a time. From labourer to contractor. 14yrs goes quick!
            </p>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">Contact</p>
            <a
              href={CONTACT.phoneHref}
              className="mt-4 block font-display text-xl transition-colors hover:text-ember"
            >
              {CONTACT.phone}
            </a>
            <p className="mt-2 text-sm text-ivory/60">{CONTACT.city}, Canada</p>
            <p className="text-sm text-ivory/60">From {CONTACT.from}</p>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">Social</p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={CONTACT.tiktok} className="text-ivory/75 transition-colors hover:text-ember">
                  TikTok {CONTACT.handle}
                </a>
              </li>
              <li>
                <a
                  href={CONTACT.instagram}
                  className="text-ivory/75 transition-colors hover:text-ember"
                >
                  Instagram {CONTACT.handle}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-ivory/45">Sections</p>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                ["Journey", "#journey"],
                ["Services", "#services"],
                ["Work", "#work"],
                ["Reviews", "#reviews"],
              ].map(([l, h]) => (
                <li key={h}>
                  <a href={h} className="text-ivory/75 transition-colors hover:text-ember">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-ivory/15 pt-8 text-xs text-ivory/45">
          <p>&copy; {new Date().getFullYear()} That Roofer Chick &mdash; Ottawa, Ontario.</p>
          <p>Licensed &amp; insured residential roofing.</p>
        </div>
      </div>
    </footer>
  );
}
