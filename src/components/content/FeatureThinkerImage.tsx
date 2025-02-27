import Image from "next/image";
import { motion } from "motion/react";
import stepsThinker from "@/assets/images/stepsThinker.png";
import { twMerge } from "tailwind-merge";

export default function FeatureThinkerImage({
  isMobile,
}: {
  isMobile: boolean;
}) {
  return (
    <motion.div
      initial={{ y: isMobile ? -50 : -100, x: isMobile ? "-70%" : "100%" }}
      animate={{
        y: 0,
        x: 0,
        transition: {
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
          duration: 1,
        },
      }}
      exit={{
        y: isMobile ? -50 : -100,
        x: isMobile ? "-70%" : "100%",
        transition: {
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
          duration: 0.5,
        },
      }}
    >
      <Image
        src={stepsThinker}
        alt="step thinker"
        className={twMerge(
          "step_thinker z-10",
          isMobile
            ? "absolute bottom-0 -right-[6.5rem]  w-[155px]  h-[307px] md:hidden"
            : "right-auto bottom-auto hidden md:block relative w-[221px] h-[439px]"
        )}
      />
    </motion.div>
  );
}
