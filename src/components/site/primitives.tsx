import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { useMagnetic, useReveal } from "@/lib/motion";

export function Reveal({
  children,
  delay = 0,
  className,
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "figure" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(delay);
  return (
    <Tag
      ref={ref as never}
      data-visible={visible}
      className={cn("reveal", className)}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={cn("eyebrow inline-flex items-center gap-3 text-terracotta", className)}>
      <span className="h-px w-8 bg-terracotta/60" aria-hidden />
      {children}
    </span>
  );
}

export function MagneticLink({
  href,
  children,
  variant = "solid",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "light";
  className?: string;
}) {
  const ref = useMagnetic<HTMLAnchorElement>(0.22);
  return (
    <a
      ref={ref}
      href={href}
      className={cn(
        "group inline-flex items-center gap-3 rounded-full px-8 py-4 text-sm font-semibold tracking-wide transition-colors duration-500 will-change-transform",
        variant === "solid" &&
          "bg-terracotta text-primary-foreground hover:bg-ember",
        variant === "outline" &&
          "border border-charcoal/25 text-charcoal hover:border-terracotta hover:text-terracotta",
        variant === "light" &&
          "border border-ivory/40 text-ivory backdrop-blur-sm hover:border-ivory hover:bg-ivory/10",
        className,
      )}
    >
      {children}
      <span className="transition-transform duration-500 group-hover:translate-x-1" aria-hidden>
        &#8594;
      </span>
    </a>
  );
}

/** Autoplaying, muted, looping background video that only loads once near the viewport. */
export function LazyVideo({
  src,
  poster,
  className,
  eager = false,
}: {
  src: string;
  poster?: string;
  className?: string;
  eager?: boolean;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [load, setLoad] = useState(eager);

  useEffect(() => {
    if (load) return;
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "300px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  return (
    <div ref={ref} className={cn("h-full w-full", className)}>
      {load ? (
        <video
          className="h-full w-full object-cover"
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        />
      ) : (
        poster && (
          <img src={poster} alt="" aria-hidden className="h-full w-full object-cover" />
        )
      )}
    </div>
  );
}
