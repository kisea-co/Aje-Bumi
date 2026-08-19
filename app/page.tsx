import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SacredFeminine } from "@/components/SacredFeminine";
import { CollectionPreview } from "@/components/CollectionPreview";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main id="top">
      <Header />
      <Hero />
      <SacredFeminine />
      <CollectionPreview />
      <Newsletter />
      <Footer />
    </main>
  );
}
