"use client";
import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";
import SplitType from "split-type";

export default function SectionTitle({
  textOne,
  textTwo,
  subText,
}: {
  textOne: string;
  textTwo: string;
  subText: string;
}) {
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

  const [h2Scope, h2Enter] = useAnimate();
  useEffect(() => {
    new SplitType(h2Scope.current, { types: "chars,lines", tagName: "span" });
  }, [h2Scope]);
  const enterAnimation = () =>
    h2Enter(
      h2Scope.current.querySelectorAll(".char"),
      { opacity: 1 },
      { duration: 0.5, delay: stagger(0.2) }
    );
  const isInView = useInView(h2Scope, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      enterAnimation();
    }
  }, [isInView, enterAnimation]);

  return (
    <div className="flex flex-col items-start gap-5 md:gap-10">
      <h2 ref={h2Scope} className=" relative w-fit">
        <span className="font-yellowTail relative z-20  font-normal text-[38px] md:text-[97px] md:leading-[82.45px] leading-[43.7px] text-black-100">
          {textOne}
        </span>
        <span className=" absolute top-[22px] md:top-[50px] md:text-[68px] md:leading-[68px] z-10 -right-[5.75rem] md:-right-[10.5rem] text-[34px] leading-[34px] font-black font-sombra text-red-primary-1">
          {textTwo}
        </span>
      </h2>
      <p
        ref={pScope}
        className="font-urbanist text-base text-black-200 max-w-[459px]"
      >
        {subText}
      </p>
    </div>
  );
}
