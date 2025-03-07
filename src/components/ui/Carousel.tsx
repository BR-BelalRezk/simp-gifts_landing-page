"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

export default function Carousel({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const [width, setWidth] = useState<number>(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const carouselWidth = carouselRef.current?.scrollWidth ?? 0;
    const innerCarouselWidth = carouselRef.current?.offsetWidth ?? 0;
    setWidth(carouselWidth - innerCarouselWidth);
  }, []);
  return (
    <div
      className="overflow-x-scroll overflow-y-hidden pb-10 w-full spotlightScrollbar"
      role="carousel"
      ref={carouselRef}
    >
      <motion.ul
        className="cursor-grab flex items-center justify-center  w-full gap-4 md:gap-3"
        role="inner-carousel"
        drag={"x"}
        dragConstraints={{ right: width, left: -width }}
        whileTap={{ cursor: "grabbing" }}
      >
        {children}
      </motion.ul>
    </div>
  );
}
