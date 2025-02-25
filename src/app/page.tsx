import Hero from "@/components/home/Hero";
import Header from "@/components/layout/Header";
import ScrollToUpButton from "@/components/layout/ScrollToUpButton";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ScrollToUpButton />
      <div className="h-[300vh]" />
    </>
  );
}
