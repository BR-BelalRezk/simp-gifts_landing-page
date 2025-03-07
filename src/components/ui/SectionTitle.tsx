"use client";
import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useInView } from "motion/react";
import { useEffect } from "react";
import { twMerge } from "tailwind-merge";

const SectionTitleTypeOne = ({
  textOne,
  textTwo,
  subText,
  className,
}: {
  textOne: string;
  textTwo: string;
  subText: string;
  className: string;
}) => {
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
    <div className="flex items-start justify-start">
      <div className="flex flex-col items-start gap-5">
        <h2 className=" relative w-fit">
          <span className="font-yellowTail relative z-20  font-normal text-[38px] md:text-[97px] md:leading-[82.45px] leading-[43.7px] text-black-100">
            {textOne}
          </span>
          <span
            className={twMerge(
              "absolute uppercase  md:text-[68px] md:leading-[68px] z-10 text-[34px] leading-[34px] font-black font-sombra text-red-primary-1",
              className
            )}
          >
            {textTwo}
          </span>
        </h2>
        <p
          ref={pScope}
          className="font-urbanist text-base text-black-200 max-w-[340px] self-end md:self-start"
        >
          {subText}
        </p>
      </div>
    </div>
  );
};

const SectionTitleTypeTwo = ({
  className,
  text,
}: {
  className: string;
  text: string;
}) => {
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
    <p ref={pScope} className={className}>
      {text}
    </p>
  );
};
export { SectionTitleTypeOne, SectionTitleTypeTwo };
