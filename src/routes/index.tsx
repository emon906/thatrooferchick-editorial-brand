import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Journey } from "@/components/site/Journey";
import { Services } from "@/components/site/Services";
import { VideoBand, WorkVideos } from "@/components/site/VideoBand";
import { BehindTheRoof, WhyMe } from "@/components/site/Story";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Masonry } from "@/components/site/Gallery";
import { Reviews } from "@/components/site/Reviews";
import { Social, FinalCta, Footer } from "@/components/site/Closing";

const title = "That Roofer Chick — Ottawa Roofing Contractor, 14 Years On The Roof";
const description =
  "Ottawa roofing by That Roofer Chick: 14 years from labourer to contractor. Roof replacement, metal roofing and repairs. 100% recommend. Call +1 613-801-8582.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-ivory">
      <Nav />
      <Hero />
      <Journey />
      <Services />
      <VideoBand />
      <BehindTheRoof />
      <BeforeAfter />
      <WorkVideos />
      <WhyMe />
      <Masonry />
      <Reviews />
      <Social />
      <FinalCta />
      <Footer />
    </main>
  );
}
