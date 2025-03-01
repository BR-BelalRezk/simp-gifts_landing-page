"use client";
import Image from "next/image";
import sectionImageSeparator_1 from "@/assets/images/sectionImageSeparator-1.jpg";
import sectionImageSeparator_2 from "@/assets/images/sectionImageSeparator-2.png";
import sectionImageSepearatorBG_2 from "@/assets/images/SectionImageSepearatorBG-2.png";
import useTextSplitedAnimation from "@/hooks/useTextSplitAnimation";
import { useInView } from "motion/react";
import { useEffect } from "react";

const SectionImageSeparatorOne = () => {
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
    <div className="my-40">
      <figure className="bg-white-200 w-screen h-[128px] md:h-[112px] relative">
        <Image
          src={sectionImageSeparator_1}
          alt="section image separator"
          className="mix-blend-luminosity size-full object-cover object-right sectionImageSeparator"
        />
        <p
          ref={pScope}
          className="font-urbanist absolute right-5  bottom-3 md:bottom-5 lg:bottom-1.5 text-white-body max-w-[188px] md:max-w-[300px] lg:max-w-[500px] font-light italic text-[22px] leading-[31.9px] lg:leading-[48.1px] lg:text-[37px]"
        >
          No better way to show your love then through a gift.
        </p>
      </figure>
    </div>
  );
};

const SectionImageSeparatorTwo = () => {
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
    <div className="mt-72">
      <figure className="bg-red-light-1 w-screen h-[400px] relative overflow-hidden">
        <Image
          src={sectionImageSepearatorBG_2}
          alt="section image separator"
          height={582}
          width={0}
          className="mix-blend-luminosity size-full object-cover object-right"
        />
        <Image
          src={sectionImageSeparator_2}
          alt="section image separator"
          className="mix-blend-luminosity w-[254px] lg:w-[331px] absolute bottom-0 lg:-bottom-5 object-cover"
        />
        <p
          ref={pScope}
          className="font-urbanist absolute right-5 bottom-0 lg:bottom-5  text-white-body max-w-[200px] md:max-w-[400px] font-light text-[22px] leading-[31.9px] lg:leading-[48.1px] lg:text-[37px]"
        >
          Give a gift that speaks louder than words.
        </p>
      </figure>
    </div>
  );
};

export { SectionImageSeparatorOne, SectionImageSeparatorTwo };
