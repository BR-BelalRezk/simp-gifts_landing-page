import Hero from "@/components/home/Hero";
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
      </main>
      <div className="h-[300vh]" />
    </>
  );
}
