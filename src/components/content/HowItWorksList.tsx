"use client";
import { howItWorksItems } from "@/constants";
import { useState } from "react";
import HowItWorksListItem from "./HowItWorksListItem";
export default function HowItWorksList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <ul className="flex flex-col gap-2 justify-center items-center w-full xl:flex-row xl:items-start xl:justify-start">
      {howItWorksItems.map((item, index) => (
        <HowItWorksListItem
          key={item.title}
          index={index}
          item={item}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      ))}
    </ul>
  );
}
