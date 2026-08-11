import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandStory } from "@/components/BrandStory";
import { CollectionPreview } from "@/components/CollectionPreview";
import { Craftsmanship } from "@/components/Craftsmanship";
import { Philosophy } from "@/components/Philosophy";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <BrandStory />
      <CollectionPreview />
      <Craftsmanship />
      <Philosophy />
      <Newsletter />
      <Footer />
    </main>
  );
}
