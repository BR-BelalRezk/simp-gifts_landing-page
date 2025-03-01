"use client";
import { useScroll } from "motion/react";
import { useRef } from "react";
import { HeroContainer } from "./HeroAnimation";

export default function ParallaxSectionTransition({
  children,
  element,
}: React.HTMLAttributes<HTMLDivElement> & { element: React.JSX.Element }) {
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
    >
      <HeroContainer scrollYProgress={scrollYProgress} element={element} />
      {children}
    </div>
  );
}
