import { whySimpGiftItems } from "@/constants";
import Section from "../ui/Section";
import { SectionTitleTypeOne } from "../ui/SectionTitle";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import special_4 from "@/assets/images/special-4.png";

export default function WhySimpGift() {
  return (
    <Section id="whySimpGift" className="pt-[72px] md:pt-[168px]z">
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
                <div className="flex flex-col gap-1.5">
                  <h3
                    className={
                      index === 3
                        ? "capitalize font-yellowTail font-normal text-[38px] leading-[43.7px] text-red-primary-1"
                        : "font-extrabold italic text-red-light-2 font-urbanist text-[22px] leading-[31.9px]"
                    }
                  >
                    {item.title}
                  </h3>
                  <p className="font-light text-black-200 max-w-[361px] md:max-w-[457px] font-urbanist text-[22px] leading-[31.9px]">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
            <li className="flex self-start flex-col md:flex-row-reverse gap-2">
              <figure className="size-[222px]">
                <Image
                  className="size-full"
                  src={special_4}
                  alt={"special_4"}
                />
              </figure>
              <div className="flex flex-col gap-5">
                <h3 className="capitalize font-yellowTail font-normal text-[38px] leading-[43.7px] text-red-primary-1">
                  top-notch security
                </h3>
                <p className="font-urbanist font-light text-[22px] leading-[31.9px] text-red-primary-3 max-w-[450px]">
                  Your data is fully encrypted and secured above industry
                  standards. Our payment system is handled by{" "}
                  <span className="font-extrabold text-red-primary-1">
                    Stripe
                  </span>{" "}
                  payments ensuring everything will be managed by the best in
                  the industry.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
