"use client";

import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useEffect } from "react";
import { motion } from "motion/react";

function HeroText() {
  const { scope: pScope, enterAnimation: pEnter } = useTextSplitedAnimation(
    0.5,
    0.1
  );

  useEffect(() => {
    pEnter();
  }, [pEnter]);
  return (
    <p
      ref={pScope}
      className="text-center font-light font-urbanist text-[#4F4F4F] text-[22px] leading-[31.9px]   md:max-w-xl mx-auto"
    >
      <span className="md:block"></span> Your fans want to support you.{" "}
      <span className="md:block">
        Now they can — without invading your privacy.
      </span>{" "}
      <span>Simp Gifts is the wishlist platform built for creators.</span>
    </p>
  );
}

function HeroHeading() {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <span className="font-normal block z-20 font-yellowTail text-white-body  text-[38px] leading-[43.7px] md:text-[97px] md:leading-[82.45px]">
        Gifts that builds
      </span>
      <span className="block text-red-primary-1 font-sombra -mt-3 z-10 uppercase font-black text-[34px] leading-[34px] md:text-[68px] md:leading-[68px] ">
        connection
      </span>
    </motion.h1>
  );
}

export { HeroText, HeroHeading };
