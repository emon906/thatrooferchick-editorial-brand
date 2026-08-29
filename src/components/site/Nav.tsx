import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { CONTACT } from "@/lib/media";

const links = [
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "Reviews", href: "#reviews" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <nav
        className={cn(
          "pointer-events-auto mx-auto flex max-w-6xl items-center justify-between rounded-full border px-5 py-3 transition-all duration-700 sm:px-7",
          solid
            ? "border-border bg-ivory/85 shadow-[var(--shadow-card)] backdrop-blur-xl"
            : "border-ivory/25 bg-charcoal/15 backdrop-blur-md",
        )}
      >
        <a
          href="#top"
          className={cn(
            "font-display text-base leading-none tracking-tight transition-colors duration-700 sm:text-lg",
            solid ? "text-charcoal" : "text-ivory",
          )}
        >
          That Roofer <em className="text-terracotta not-italic">Chick</em>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "eyebrow transition-colors duration-500",
                solid ? "text-charcoal-soft hover:text-terracotta" : "text-ivory/80 hover:text-ivory",
              )}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={cn(
              "hidden rounded-full px-5 py-2.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-500 sm:inline-flex",
              solid
                ? "bg-charcoal text-ivory hover:bg-terracotta"
                : "bg-ivory text-charcoal hover:bg-terracotta hover:text-primary-foreground",
            )}
          >
            Work With Me
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-full border transition-colors md:hidden",
              solid ? "border-border text-charcoal" : "border-ivory/40 text-ivory",
            )}
          >
            <span className="text-lg leading-none">{open ? "\u00d7" : "\u2261"}</span>
          </button>
        </div>
      </nav>

      {open && (
        <div className="pointer-events-auto mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-ivory/95 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl md:hidden">
          <ul className="space-y-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-charcoal"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT.phoneHref}
            className="eyebrow mt-6 block text-terracotta"
          >
            {CONTACT.phone}
          </a>
        </div>
      )}
    </header>
  );
}
