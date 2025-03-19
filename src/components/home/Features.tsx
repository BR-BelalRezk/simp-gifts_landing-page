import { SectionTitleTypeOne } from "../ui/SectionTitle";
import FeatureElements from "../content/FeatureElements";
import Section from "../ui/Section";
import Image from "next/image";
import smallAngel from "@/assets/images/smallAngel.png";
import { MotionValue } from "motion/react";

export default function Features({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  return (
    <Section
      id="features"
      className=" bg-white-body py-10 sticky top-0 h-screen"
    >
      <figure className="absolute z-20 -top-10 md:-top-20 right-0">
        <Image
          src={smallAngel}
          alt="small angel"
          className=" h-[90px] w-[100px] md:h-[164px] md:w-[179px]"
        />
      </figure>
      <div className="container relative h-full flex justify-between flex-col gap-5 md:gap-0">
        <SectionTitleTypeOne
          className="top-[20px] md:top-[45px] -right-[7.5rem] md:-right-[14rem]"
          textOne={"Designed for"}
          textTwo={"Gifting"}
          subText={
            "Your fans want to support you. Now they can while having fun and without invading your privacy."
          }
        />
        <span className=" absolute -bottom-20 right-5 md:top-5 md:right-0 font-urbanist font-light text-base text-red-light-2">
          send &gt; shine &gt; repeat
        </span>

        <FeatureElements scrollYProgress={scrollYProgress} />
      </div>
    </Section>
  );
}
