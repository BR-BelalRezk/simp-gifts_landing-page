import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Steps from "@/components/home/Steps";
import Header from "@/components/layout/Header";
import ScrollToUpButton from "@/components/layout/ScrollToUpButton";

export default function Home() {
  return (
    <>
      <Header />
      <ScrollToUpButton />
      <main className="bg-white-body">
        <Hero />
        <Steps />
        <HowItWorks />
      </main>
      <div className="h-[300vh]" />
    </>
  );
}
