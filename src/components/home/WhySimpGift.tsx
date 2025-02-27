import { whySimpGiftItems } from "@/constants";
import Section from "../ui/Section";
import { SectionTitleTypeOne } from "../ui/SectionTitle";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export default function WhySimpGift() {
  return (
    <Section id="whySimpGift" className="pt-[72px] md:pt-[168px]">
      <div className="container relative">
        <SectionTitleTypeOne
          className="-right-16 top-[1.3rem] md:top-[50px] md:-right-[170px] lg:-right-[288px] lg:top-12"
          textOne="What makes us"
          textTwo="special"
          subText="And why you will love simp gifts."
        />
        <span className=" absolute -bottom-20 right-5 md:top-0 md:right-0 font-urbanist font-light text-base text-red-light-2">
          gift // gift // gift
        </span>
        <div className="mt-36">
          <ul className="flex flex-col gap-8">
            {whySimpGiftItems.map((item, index) => (
              <li
                key={item.title}
                className={twMerge(
                  "flex flex-col gap-2",
                  index === 0 && " self-start",
                  index === 1 && " self-center",
                  index === 2 && " self-end"
                )}
              >
                <figure className="size-[222px]">
                  <Image
                    className="size-full"
                    src={item.src}
                    alt={item.title}
                  />
                </figure>
                <div
                  className={twMerge(
                    " flex flex-col",
                    index === 3 ? "gap-5" : "gap-1.5"
                  )}
                >
                  <h3
                    className={
                      index === 3
                        ? "capitalize font-yellowTail font-normal text-[38px] leading-[43.7px] text-red-primary-1"
                        : "font-extrabold italic text-red-light-2 font-urbanist text-[22px] leading-[31.9px]"
                    }
                  >
                    {item.title}
                  </h3>
                  <p
                    className={
                      index === 3
                        ? "font-urbanist font-light text-[22px] leading-[31.9px] text-red-primary-3 max-w-[450px]"
                        : "font-light text-black-200 max-w-[361px] md:max-w-[457px] font-urbanist text-[22px] leading-[31.9px]"
                    }
                  >
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
