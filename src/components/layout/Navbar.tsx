import { navbarItems } from "@/constants";
import HamburgerIcon from "./HamburgerIcon";
import {
  Menu,
  MenuList,
  MenuListItem,
  MenuOverlay,
  MenuToggleButton,
} from "./Menu";
import Button from "../ui/Button";
import Image from "next/image";
import tower from "@/assets/images/tower.png";
import Magnet from "../ui/Magnet";

export default function Navbar() {
  return (
    <Menu className="relative">
      <MenuToggleButton className="flex items-center gap-2">
        <HamburgerIcon />
      </MenuToggleButton>
      <MenuOverlay className="h-screen w-screen bg-red-light-2 fixed left-0 top-0 -z-10">
        <div className="container h-full">
          <div className="size-full flex justify-between">
            <Image
              src={tower}
              alt="tower"
              className="hidden md:block w-[185px]"
            />
            <div className=" flex flex-col items-end gap-20 lg:gap-1.5">
              <MenuList className="pt-20 flex flex-col md:items-end gap-2 md:gap-3">
                {navbarItems.map((item, index) => (
                  <MenuListItem
                    key={item.label}
                    text={item.label}
                    href={item.hash}
                    index={index}
                    className="font-urbanist font-light text-black-100 py-1 border-t border-red-light-3 last:border-b max-w-[361px] md:min-w-[361px] lg:min-w-[453px] whitespace-nowrap"
                  />
                ))}
              </MenuList>
              <Magnet>
                <Button isCircle className="flex-none">
                  Build Wishlist
                </Button>
              </Magnet>
            </div>
          </div>
        </div>
      </MenuOverlay>
    </Menu>
  );
}
