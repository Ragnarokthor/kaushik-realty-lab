import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Categories from "@/components/home/Categories";
import FeaturedTools from "@/components/home/FeaturedTools";
import TrustBar from "@/components/home/TrustBar";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Categories />
        <FeaturedTools />
        <Footer />
      </main>
    </>
  );
}
