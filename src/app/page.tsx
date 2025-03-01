import HowItWorks from "@/components/home/HowItWorks";
import Features from "@/components/home/Features";
import Header from "@/components/layout/Header";
import ScrollToUpButton from "@/components/layout/ScrollToUpButton";
import WhySimpGift from "@/components/home/WhySimpGift";
import {
  SectionImageSeparatorOne,
  SectionImageSeparatorTwo,
} from "@/components/ui/SectionImageSeparator";
import Spotlight from "@/components/home/Spotlight";
import FAQ from "@/components/home/FAQ";
import CTA from "@/components/home/CTA";
import Footer from "@/components/layout/Footer";
import ParallaxSectionTransition from "@/components/content/ParallaxSectionTransition";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollToUpButton />
      <main className="bg-white-body overflow-x-clip">
        <ParallaxSectionTransition element={<Hero />}>
          <Features />
        </ParallaxSectionTransition>

        <HowItWorks />
        <WhySimpGift />
        <SectionImageSeparatorOne />
        <Spotlight />
        <FAQ />
        <CTA />
        <SectionImageSeparatorTwo />
      </main>
      <Footer />
    </>
  );
}
