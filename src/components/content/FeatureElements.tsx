"use client";
import { stepsItems } from "@/constants";
import { useState } from "react";
import {
  AnimatePresence,
  LayoutGroup,
  motion,
  MotionValue,
  useMotionValueEvent,
} from "motion/react";
import FeatureItem from "./FeatureItem";

export default function FeatureElements({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const [stepNumber, setStepNumber] = useState(0);
  const totalSteps = stepsItems.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const newStep = Math.min(Math.floor(latest * totalSteps), totalSteps - 1);
    setStepNumber(newStep);
  });
  return (
    <LayoutGroup>
      <motion.div
        layout
        className="flex  flex-col items-center md:items-start gap-5  w-full"
      >
        <ul className="w-full">
          <AnimatePresence mode="wait" initial={false}>
            {stepsItems.map(
              (item, index) =>
                stepNumber === index && (
                  <FeatureItem item={item} key={item.title} />
                )
            )}
          </AnimatePresence>
        </ul>
        <div className="flex items-center gap-4 self-center">
          {stepsItems.map((_, index) => (
            <button
              onClick={() => setStepNumber(index)}
              key={index}
              className="size-4 bg-[#BABEBD] relative"
            >
              {index === stepNumber && (
                <motion.span
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  layoutId="steps"
                  className="bg-red-primary-2 size-4 z-10 absolute inset-0"
                />
              )}
            </button>
          ))}
        </div>
      </motion.div>
    </LayoutGroup>
  );
}
