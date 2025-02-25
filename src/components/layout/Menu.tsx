"use client";
// compound component

import { AnimatePresence, motion } from "motion/react";
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
const Menu = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  const [toggle, setToggle] = useState(false);
  const value = { toggle, setToggle };
  return (
    <MenuContext.Provider value={value}>
      <div className={className}>{children}</div>
    </MenuContext.Provider>
  );
};

const MenuToggleButton = ({
  className,
  children,
}: {
  className: string;
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
        <motion.div
          initial={"close"}
          animate={"open"}
          exit={"close"}
          variants={{
            open: {
              y: 0,
              transition: {
                duration: 0.75,
                type: "tween",
                ease: [0.76, 0, 0.24, 1],
              },
            },
            close: {
              y: "-100%",
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
  children,
}: React.HTMLAttributes<HTMLLIElement>) => {
  const { setToggle } = useMenu();
  const closeMenu = () => setToggle(false);
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
      {children}
    </motion.li>
  );
};

// exports
export { Menu, MenuToggleButton, MenuOverlay, MenuList, MenuListItem };
