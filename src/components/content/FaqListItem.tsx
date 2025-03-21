import { faqItems } from "@/constants";
import ArrowDown from "@/assets/svgs/ArrowDown";
import { AnimatePresence, motion } from "motion/react";
import { twMerge } from "tailwind-merge";

export default function FaqListItem({
  index,
  selectedIndex,
  setSelectedIndex,
  item,
}: {
  item: (typeof faqItems)[number];
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
      className="border-t last:border-b cursor-pointer border-red-light-2 py-3 md:py-5 xl:py-7 lg:w-[700px] xl:w-[800px] 2xl:w-[933px] group"
    >
      <div className="flex items-center justify-between">
        <h3 className="font-light md:group-hover:translate-x-5 duration-500  font-urbanist italic text-[26px] md:text-[37px] md:leading-[48.1px] leading-[39px] text-black-300">
          {item.question}
        </h3>
        <ArrowDown
          className={twMerge(
            "md:group-hover:-translate-x-5 duration-500 flex-none transition-all text-red-light-2",
            selectedIndex === index && "rotate-45"
          )}
        />
      </div>
      <AnimatePresence mode="wait">
        {selectedIndex === index && (
          <motion.div
            initial={{ height: 0, marginTop: 0 }}
            animate={{
              height: "auto",
              marginTop: 20,
            }}
            exit={{
              height: 0,
              marginTop: 0,
            }}
            className="overflow-hidden"
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.3, ease: "linear", delay: 0.2 },
              }}
              exit={{
                opacity: 0,
                y: 25,
                transition: { duration: 0.3, ease: "linear" },
              }}
              className="text-black-400 font-light font-urbanist text-[22px] leading-[31.9px]"
            >
              {item.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
