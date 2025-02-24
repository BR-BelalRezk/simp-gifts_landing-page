import Image from "next/image";
import heroBG from "@/assets/images/heroBG.png";

export default function Hero() {
  return (
    <section className="relative">
      <figure className="absolute top-0 h-screen w-screen bg-[#FCD6D6] -z-10">
        <Image
          src={heroBG}
          alt="hero background image"
          className="size-full object-cover mix-blend-luminosity"
        />
      </figure>
      <div className="container">
        <article className="pt-[176px] md:pt-[208px]">
          <h1 className="text-center  flex flex-col">
            <span className="font-normal z-20 font-yellowTail text-white-body  text-[38px] leading-[43.7px] md:text-[97px] md:leading-[82.45px]">
              Gifts that builds
            </span>
            <span className="text-red-primary font-sombra -mt-3 z-10 uppercase font-black text-[34px] leading-[34px] md:text-[68px] md:leading-[68px] ">
              connection
            </span>
          </h1>
          <p className="text-center font-light font-urbanist text-[#4F4F4F] text-[22px] leading-[31.9px] tracking-[-2%] mt-10 max-w-[361px] md:max-w-xl mx-auto">
            <span className="block">Your fans want to support you.</span>
            <span className="md:block">
              Now they can — without invading your privacy.
            </span>{" "}
            <span>Simp Gifts is the wishlist platform built for creators.</span>
          </p>
        </article>
      </div>
    </section>
  );
}
