import { howItWorksItems } from "@/constants";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";

import { twMerge } from "tailwind-merge";
import HowItWorksListItemContent from "./HowItWorksListItemContent";

export default function HowItWorksListItem({
  index,
  selectedIndex,
  setSelectedIndex,
  item,
}: {
  item: (typeof howItWorksItems)[number];
  index: number;
  selectedIndex: number | null;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  return (
    <li
      onClick={() => {
        if (index === selectedIndex) {
          setSelectedIndex(null);
        } else {
          setSelectedIndex(index);
        }
      }}
      key={item.title}
      className="max-w-[361px] cursor-pointer w-full md:max-w-none xl:flex gap-20 xl:w-fit group"
    >
      <div className="xl:w-16">
        <div
          className={twMerge(
            "flex items-center justify-between border-t w-full  py-1.5 xl:py-0 transition-colors duration-300 xl:min-h-[600px]  xl:flex-col-reverse xl:border-l xl:border-t-0",
            selectedIndex === index
              ? "text-red-primary-1 border-red-primary-1"
              : "text-red-light-3 border-red-light-3"
          )}
        >
          <h3 className="font-urbanist group-hover:translate-x-5 xl:group-hover:translate-x-0 duration-500 xl:group-hover:-translate-y-5 capitalize relative xl:bottom-16 text-nowrap font-light italic text-[37px] leading-[48.1px] xl:w-fit xl:-rotate-90 ">
            {item.title}
          </h3>
          <span className="font-yellowTail group-hover:-translate-x-5 xl:group-hover:translate-x-0 xl:group-hover:translate-y-5 duration-500 font-normal text-[38px] leading-[43.7px]">
            {index + 1}
          </span>
        </div>
      </div>
      <AnimatePresence>
        {selectedIndex === index && (
          <>
            <HowItWorksListItemContent
              className="overflow-hidden flex flex-col gap-5 xl:hidden"
              animate={{ height: "auto" }}
              initial={{ height: 0 }}
              delayText={0.2}
              delayImage={0}
              ease="easeOut"
              description={item.description}
            />
            <HowItWorksListItemContent
              className="overflow-x-clip hidden xl:flex flex-col gap-5 items-end"
              animate={{ width: "auto" }}
              initial={{ width: 0 }}
              delayImage={1}
              ease="linear"
              delayText={0.7}
              description={item.description}
            />
          </>
        )}
      </AnimatePresence>
    </li>
  );
}
