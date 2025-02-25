import Image from "next/image";
import heroBG from "@/assets/images/heroBG.png";
import heroImage from "@/assets/images/heroImage.png";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="relative h-[110vh] md:h-screen">
      <figure className="absolute h-full w-screen bg-[#FCD6D6] -z-10">
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
      <article className="pt-[176px] md:pt-[208px] h-full w-fit  mx-auto flex flex-col">
        <div className="flex items-center flex-col gap-5">
          <h1 className="text-center">
            <span className="font-normal block z-20 font-yellowTail text-white-body  text-[38px] leading-[43.7px] md:text-[97px] md:leading-[82.45px]">
              Gifts that builds
            </span>
            <span className="block text-red-primary font-sombra -mt-3 z-10 uppercase font-black text-[34px] leading-[34px] md:text-[68px] md:leading-[68px] ">
              connection
            </span>
          </h1>
          <p className="text-center font-light font-urbanist text-[#4F4F4F] text-[22px] leading-[31.9px] tracking-[-2%]  max-w-[361px] md:max-w-xl mx-auto">
            <span className="block">Your fans want to support you.</span>
            <span className="md:block">
              Now they can — without invading your privacy.
            </span>{" "}
            <span>Simp Gifts is the wishlist platform built for creators.</span>
          </p>
        </div>

        <Button
          isCircle
          className="self-end mt-auto mb-20 lg:self-start lg:mt-5 lg:ml-5 lg:mb-auto"
        >
          Start Now
        </Button>
      </article>
    </section>
  );
}
