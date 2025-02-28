import Image from "next/image";
import heroBG from "@/assets/images/heroBG.png";
import heroImage from "@/assets/images/heroImage.png";
import Button from "../ui/Button";
import Magnet from "../ui/Magnet";
import { HeroHeading, HeroText } from "../content/HeroTypo";
import { MotionValue, useTransform, motion } from "motion/react";

export default function Hero({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -25]);
  return (
    <section className="sticky h-screen top-0">
      <motion.div id="hero" style={{ scale, rotate }} className="h-full">
        <figure className="absolute h-full w-screen bg-[#FCD6D6] z-10">
          <Image
            src={heroBG}
            alt="hero background image"
            className="size-full object-cover mix-blend-luminosity"
          />
          <Image
            src={heroImage}
            alt="hero background image"
            className="mix-blend-luminosity object-cover size-80 md:w-[600px] md:h-auto 2xl:w-[723px] absolute bottom-0 left-0"
          />
        </figure>
        <article className="pt-[176px] md:pt-[208px] h-full w-fit mx-auto flex flex-col z-30 relative ">
          <div className="flex items-center flex-col gap-5">
            <HeroHeading />
            <HeroText />
          </div>
          <Magnet className="w-fit self-end mt-auto mb-20 mr-1.5 lg:self-start lg:mr-0 lg:mt-5 lg:ml-5 lg:mb-auto">
            <Button isCircle>Start Now</Button>
          </Magnet>
        </article>
      </motion.div>
    </section>
  );
}
