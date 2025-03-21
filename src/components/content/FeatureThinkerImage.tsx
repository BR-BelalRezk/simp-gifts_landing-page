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
      initial={{
        y: isMobile ? -50 : -75,
        x: isMobile ? "-70%" : "75%",
        opacity: 0,
      }}
      animate={{
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: "tween",
          ease: [0.76, 0, 0.24, 1],
          duration: 1,
        },
      }}
      exit={{
        opacity: 0,
        y: isMobile ? -50 : -75,
        x: isMobile ? "-70%" : "75%",
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
            ? "absolute bottom-0 -right-[4.5rem]  w-[100px] md:hidden"
            : "right-auto bottom-auto hidden md:block relative w-[150px]"
        )}
      />
    </motion.div>
  );
}
