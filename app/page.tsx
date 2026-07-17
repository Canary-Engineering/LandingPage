import { Hero } from "@/components/home/hero";
import { ProductGrid } from "@/components/home/product-grid";
import { CTA, EdgeDetection, Extras, News, Pillars } from "@/components/home/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <Pillars />
      <EdgeDetection />
      <Extras />
      <News />
      <CTA />
    </>
  );
}
