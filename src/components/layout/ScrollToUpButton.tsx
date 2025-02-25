"use client";

import gsap from "gsap";
import { useLenis } from "lenis/react";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ScrollToUpButton() {
  const ref = useRef(null);
  const lenis = useLenis();
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight / 2,
        onLeave: () => {
          gsap.to(ref.current, {
            scale: 1,
            rotate: 0,
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(ref.current, {
            scale: 0,
            rotate: 180,
            duration: 0.25,
            ease: "power1.out",
          });
        },
      },
    });
  }, []);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    lenis?.scrollTo(hash, { duration: 2.5 });
  };
  return (
    <Link
      ref={ref}
      href={"#hero"}
      onClick={handleClick}
      className="size-12 scale-0 rounded-full bg-white-200 flex items-center justify-center fixed right-5 bottom-5 z-40"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 19L12 5"
          stroke="#CD1D15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 11L12 5"
          stroke="#CD1D15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 11L12 5"
          stroke="#CD1D15"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}
