"use client";
import Logo from "./Logo";
import { motion } from "motion/react";

export default function HamburgerIcon({ toggle }: { toggle?: boolean }) {
  const span_0 = toggle
    ? { translateY: 8, rotate: 45 }
    : { translateY: 0, rotate: 0 };
  const span_1 = toggle ? { opacity: 0 } : { opacity: 1 };
  const span_2 = toggle
    ? { translateY: -8, rotate: -45 }
    : { translateY: 0, rotate: 0 };
  return (
    <>
      <div className="flex flex-col items-center gap-[6px]">
        {Array.from({ length: 3 }).map((_, index) => (
          <motion.span
            key={index}
            animate={index === 0 ? span_0 : index === 1 ? span_1 : span_2}
            transition={{
              duration: 0.5,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            }}
            className="w-5 border-[1.5px] border-red-primary-1"
          />
        ))}
      </div>
      <Logo />
    </>
  );
}
