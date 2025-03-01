"use client";

import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useInView } from "motion/react";
import { useEffect } from "react";

export default function CTAText() {
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
}
