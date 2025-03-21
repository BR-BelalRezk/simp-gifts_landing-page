import Image from "next/image";
import steps from "@/assets/images/steps.png";
import { usePresence, motion } from "motion/react";
import { useEffect } from "react";
import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { stepsItems } from "@/constants";
import FeatureThinkerImage from "./FeatureThinkerImage";

export default function FeatureItem({
  item,
}: {
  item: (typeof stepsItems)[number];
}) {
  const [isPresent, safeToRemove] = usePresence();

  const {
    scope: titleScope,
    enterAnimation: titleEnter,
    exitAnimation: titleExit,
  } = useTextSplitedAnimation(0.5, 0.1);
  const {
    scope: descriptionScope,
    enterAnimation: descriptionEnter,
    exitAnimation: descriptionExit,
  } = useTextSplitedAnimation(0.5, 0.13);

  useEffect(() => {
    if (isPresent) {
      titleEnter().then(() => {
        descriptionEnter();
      });
    } else {
      Promise.all([titleExit(), descriptionExit()]).then(() => safeToRemove());
    }
  }, [
    isPresent,
    titleEnter,
    titleExit,
    descriptionEnter,
    descriptionExit,
    safeToRemove,
  ]);
  return (
    <li className="flex flex-col gap-10 lg:flex-row lg:gap-0 lg:justify-between lg:items-end">
      <figure className="  relative md:flex items-end self-start flex-row-reverse">
        <div className="bg-red-primary-2 z-20 rounded-[32px]  h-[250px] md:h-[50vh] relative md:-left-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                duration: 1,
              },
            }}
            exit={{
              opacity: 0,
              transition: {
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
                duration: 0.5,
              },
            }}
            className="z-10 size-full"
          >
            <Image
              src={steps}
              alt="step-1"
              className="border   size-full   rounded-[32px] border-red-primary-2"
            />
          </motion.div>
        </div>
        <FeatureThinkerImage isMobile={true} />
        <FeatureThinkerImage isMobile={false} />
      </figure>
      <div className="text-[22px] leading-[31.9px] font-poppins xl:mb-10">
        <h3 ref={titleScope} className="text-black-300 font-semibold">
          {item.title}
        </h3>
        <p
          ref={descriptionScope}
          className="text-black-200 font-light max-w-[361px] md:max-w-[700px]"
        >
          {item.description}
        </p>
      </div>
    </li>
  );
}
