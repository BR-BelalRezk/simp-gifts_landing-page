"use client";
import { useScroll } from "motion/react";
import { useRef } from "react";
import Hero from "../home/Hero";

export default function ParallaxSectionTransition({
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div id="hero" ref={ref} className="min-screen relative scroll-mt-[1000px]">
      <Hero scrollYProgress={scrollYProgress} />
      {children}
    </div>
  );
}
