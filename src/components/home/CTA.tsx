import Button from "../ui/Button";
import Magnet from "../ui/Magnet";
import { CTAImages, CTAText } from "../content/CTAAnimation";

export default function CTA() {
  return (
    <section className="mt-96 xl:mt-[168px]">
      <div className="bg-red-light-1">
        <div className="container pt-16 pb-64 md:pb-20 relative ">
          <span className=" absolute bottom-5 right-3 md:bottom-auto md:right-auto md:top-52 font-urbanist font-light normal-case text-base text-red-light-2">
            01: pick a gift <br /> 02: add your touch <br /> 03: make it theirs
          </span>
          <div className=" absolute flex flex-col md:gap-10 md:top-[45%] gap-20 top-[32%] z-20 md:right-0">
            <CTAText />
            <Magnet className="w-fit self-end lg:self-start">
              <Button isCircle>Start Wishlist</Button>
            </Magnet>
          </div>
          <h3 className="uppercase flex flex-col font-sombra font-black md:text-[161px] md:leading-[136.85px] text-[68px] leading-[68px] text-white-body">
            <span className="self-start">build</span>
            <span className="self-end flex flex-col items-end gap-14 md:gap-10 relative z-20">
              your
            </span>
            <span className=" capitalize self-center relative md:left-[145px] xl:left-[170px] mt-48 md:mt-80  z-10 text-white-body font-yellowTail font-normal text-[97px] leading-[82.45px] lg:text-[190px] lg:leading-[161.5px]">
              community
            </span>
          </h3>
          <div className="w-[173px] h-[373px] lg:w-[250px] lg:h-[500px] xl:w-[340px] xl:h-[736px] absolute top-2/3 lg:top-1/2 lg:left-10 xl:top-1/3 xl:left-20">
            <div className=" relative size-full">
              <CTAImages />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
