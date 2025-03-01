"use client";
import { useLenis } from "lenis/react";
// compound component

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { cloneElement, createContext, useContext, useState } from "react";

// types
type MenuContextType = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

// context parent
const MenuContext = createContext<MenuContextType | null>(null);

// context hook
const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error(
      "Use the useMenu hook inside the components of the Menu context"
    );
  }
  return context;
};

// components
const Menu = ({ children, className }: React.HTMLAttributes<HTMLElement>) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  return (
    <MenuContext.Provider value={value}>
      <nav className={className}>{children}</nav>
    </MenuContext.Provider>
  );
};

const MenuToggleButton = ({
  className,
  children,
}: {
  className?: string;
  children: React.JSX.Element;
}) => {
  const { toggle, setToggle } = useMenu();
  const onToggle = () => setToggle((prevState) => !prevState);
  return (
    <button className={className} onClick={onToggle}>
      {cloneElement(children, { toggle })}
    </button>
  );
};

const MenuOverlay = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { toggle } = useMenu();
  return (
    <AnimatePresence mode="wait">
      {toggle && (
        <>
          <motion.div
            initial={"close"}
            animate={"open"}
            exit={"close"}
            variants={{
              open: {
                x: 0,
                transition: {
                  duration: 0.75,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              },
              close: {
                x: "-100%",
                transition: {
                  duration: 0.5,
                  type: "tween",
                  ease: [0.76, 0, 0.24, 1],
                },
              },
            }}
            className={className}
          >
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

const MenuList = ({
  className,
  children,
}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <motion.ul
      variants={{
        open: {
          transition: {
            duration: 0.5,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
            delayChildren: 0.75,
            staggerChildren: 0.05,
          },
        },
        close: {
          transition: {
            duration: 0.3,
            type: "tween",
            ease: [0.76, 0, 0.24, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.ul>
  );
};

const MenuListItem = ({
  className,
  text,
  index,
  href,
}: {
  className: string;
  text: string;
  index: number;
  href: string;
}) => {
  const { setToggle } = useMenu();
  const lenis = useLenis();
  const closeMenu = () => setToggle(false);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    lenis?.scrollTo(hash, { duration: 2.5 });
  };
  return (
    <motion.li
      onClick={closeMenu}
      variants={{
        open: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 250, damping: 25 },
        },
        close: {
          opacity: 0,
          y: 25,
          transition: { duration: 0.3 },
        },
      }}
      className={className}
    >
      <Link
        onClick={handleClick}
        href={`#${href}`}
        className="flex items-start gap-[50px] group"
      >
        <span className="text-base">0{index + 1}</span>
        <span className="italic group-hover:-translate-x-5 duration-500 text-[37px]  leading-[48.1px] lg:text-[64px] lg:leading-[64px]">
          {text}
        </span>
      </Link>
    </motion.li>
  );
};

// exports
export { Menu, MenuToggleButton, MenuOverlay, MenuList, MenuListItem };
