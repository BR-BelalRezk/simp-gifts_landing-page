"use client";
import { stepsItems } from "@/constants";
import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import StepItem from "./StepItem";

export default function StepsElements() {
  const [stepNumber, setStepNumber] = useState(0);
  return (
    <LayoutGroup>
      <motion.div
        layout
        className="flex mt-20 flex-col items-center md:items-start gap-10 xl:gap-20 w-full"
      >
        <ul className="w-full">
          <AnimatePresence mode="wait" initial={false}>
            {stepsItems.map(
              (item, index) =>
                stepNumber === index && (
                  <StepItem item={item} key={item.title} />
                )
            )}
          </AnimatePresence>
        </ul>
        <div className="flex items-center gap-4 xl:ml-56">
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
