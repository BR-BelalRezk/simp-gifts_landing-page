import Section from "../ui/Section";
import FaqList from "../content/FaqList";
import Image from "next/image";
import faqThinker from "@/assets/images/faqThinker.png";
import { SectionTitleTypeTwo } from "../ui/SectionTitle";

export default function FAQ() {
  return (
    <Section id="faq" className="pt-[72px] md:pt-[168px] relative">
      <figure className="w-[195px] -bottom-[270px] h-[244px] xl:w-[400px] xl:h-[500px] 2xl:w-[469px] 2xl:h-[586px] absolute left-0 xl:bottom-auto xl:top-[525px]">
        <Image src={faqThinker} alt="faq thinker image" className="size-full" />
      </figure>
      <div className="container">
        <div className="flex flex-col gap-10 lg:gap-20">
          <h2 className="relative flex flex-col">
            <span className="font-sombra uppercase font-black text-[34px] leading-[34px] md:text-[68px] md:leading-[68px] text-red-primary-3">
              faq
            </span>
            <span className=" absolute  -left-[5px] top-2 md:right-auto md:left-[8px] md:top-[43px] lg:-left-[3px] lg:top-[23px] capitalize font-yellowTail font-normal text-[30px] leading-[43.7px] lg:text-[97px] lg:leading-[82.45px] text-red-light-2">
              frequently asked questions
            </span>
          </h2>
          <SectionTitleTypeTwo
            text={"Got Questions? We've Got Answers!"}
            className="font-urbanist font-light text-[22px] leading-[31.9px] text-black-400"
          />
        </div>
        <div className="mt-14 relative flex xl:w-full xl:items-end xl:justify-end">
          <FaqList />
        </div>
      </div>
    </Section>
  );
}
