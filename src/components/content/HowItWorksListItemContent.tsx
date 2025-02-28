import { motion } from "motion/react";
import Image from "next/image";
import howItWorksImage from "@/assets/images/howItWorksImage.png";
import smallAngel from "@/assets/images/smallAngel-2.png";

export default function HowItWorksListItemContent({
  description,
  initial,
  className,
  animate,
  ease,
  delayText,
  delayImage,
}: {
  description: string;
  initial: { height: number } | { width: number; marginLeft: number };
  animate: { height: string } | { width: string; marginLeft: number };
  className: string;
  ease: string;
  delayText: number;
  delayImage: number;
}) {
  return (
    <motion.div
      initial={initial}
      animate={{
        ...animate,
        transition: { duration: 0.5, ease },
      }}
      exit={{
        ...initial,
      }}
      className={className}
    >
      <motion.figure
        initial={{ opacity: 0, y: -25 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease, delay: delayImage },
        }}
        exit={{
          opacity: 0,
          y: -25,
          // transition: { duration: 0.3, ease },
        }}
        className="h-[185px] max-w-[361px] xl:w-[815px] xl:max-w-none xl:h-[416px] relative mt-16 xl:mt-32"
      >
        <Image
          src={howItWorksImage}
          alt="how it works image"
          className="border rounded-3xl border-red-light-2 size-full object-cover"
        />
        <Image
          src={smallAngel}
          alt="small angel"
          className=" absolute w-[69px] h-[88px] right-0 -top-16 xl:w-[220px] xl:h-[284px] xl:-top-52 "
        />
      </motion.figure>
      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.3, ease: "easeOut", delay: delayText },
        }}
        exit={{
          opacity: 0,
          y: 25,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="font-urbanist font-light text-[22px] leading-[31.9px] text-black-300"
      >
        {description}
      </motion.p>
    </motion.div>
  );
}
