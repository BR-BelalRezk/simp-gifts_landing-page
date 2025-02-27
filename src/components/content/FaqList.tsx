"use client";
import { faqItems } from "@/constants";
import { useState } from "react";
import FaqListItem from "./FaqListItem";

export default function FaqList() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  return (
    <ul className="flex flex-col lg:self-end">
      {faqItems.map((item, index) => (
        <FaqListItem
          index={index}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          key={item.question}
          item={item}
        />
      ))}
    </ul>
  );
}
