"use client";
import { useScroll } from "motion/react";
import { useRef } from "react";
import { HeroContainer } from "./HeroAnimation";
import { stepsItems } from "@/constants";
import Features from "../home/Features";

export default function ParallaxSectionTransition({
  element,
}: {
  element: React.JSX.Element;
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  return (
    <div
      id="hero"
      ref={ref}
      className="min-h-screen relative scroll-mt-[1000px]"
      style={{ height: `${(stepsItems.length + 1) * 100}vh` }}
    >
      <HeroContainer scrollYProgress={scrollYProgress} element={element} />
      <Features scrollYProgress={scrollYProgress} />
    </div>
  );
}
