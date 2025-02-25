"use client";
import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useInView } from "motion/react";
import { useEffect } from "react";

export default function SectionTitle({
  textOne,
  textTwo,
  subText,
}: {
  textOne: string;
  textTwo: string;
  subText: string;
}) {
  const { scope, enterAnimation } = useTextSplitedAnimation(0.5, 0.1);
  const isInView = useInView(scope, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      enterAnimation();
    }
  }, [isInView, enterAnimation]);

  return (
    <div className="flex flex-col items-start gap-5 md:gap-10">
      <h2 className=" relative w-fit">
        <span className="font-yellowTail relative z-20  font-normal text-[38px] md:text-[97px] md:leading-[82.45px] leading-[43.7px] text-black-100">
          {textOne}
        </span>
        <span className=" absolute top-[22px] md:top-[50px] md:text-[68px] md:leading-[68px] z-10 -right-[5.75rem] md:-right-[10.5rem] text-[34px] leading-[34px] font-black font-sombra text-red-primary-1">
          {textTwo}
        </span>
      </h2>
      <p
        ref={scope}
        className="font-urbanist text-base text-black-200 max-w-[459px]"
      >
        {subText}
      </p>
    </div>
  );
}
