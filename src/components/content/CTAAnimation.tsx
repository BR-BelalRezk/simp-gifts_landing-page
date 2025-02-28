"use client";

import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useInView, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import ctaImage from "@/assets/images/ctaImage.jpg";
import { twMerge } from "tailwind-merge";

const CTAText = () => {
  const { scope: pScope, enterAnimation: pEnter } = useTextSplitedAnimation(
    0.5,
    0.1
  );
  const isPInView = useInView(pScope, { once: true, amount: 0.5 });
  useEffect(() => {
    if (isPInView) {
      pEnter();
    }
  }, [isPInView, pEnter]);
  return (
    <p
      ref={pScope}
      className="font-urbanist self-start font-light normal-case text-[22px] max-w-[420px] md:max-w-[577px] leading-[31.9px] text-black-300"
    >
      Your creativity inspires others. Now, let them show their appreciation by
      sending gifts your way. Create a wishlist, share it, and grow your tribe
      of passionate supporters.
    </p>
  );
};

const CTAImages = () => {
  return (
    <motion.figure className="size-full cursor-grab" drag dragSnapToOrigin>
      {Array.from({ length: 3 }).map((_, index) => (
        <Image
          key={index}
          draggable={false}
          src={ctaImage}
          alt="cta image"
          className={twMerge(
            "size-full border border-red-light-2  absolute",
            index === 0
              ? "z-30"
              : index === 1
              ? "z-20 translate-x-[10px] translate-y-[10px] xl:translate-x-[20px] xl:translate-y-[20px]"
              : "z-10 translate-x-[20px] translate-y-[20px] xl:translate-x-[40px] xl:translate-y-[40px]"
          )}
        />
      ))}
    </motion.figure>
  );
};

export { CTAText, CTAImages };
