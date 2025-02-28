import { navbarItems } from "@/constants";
import { MenuList, MenuListItem, MenuOverlay } from "./Menu";
import Button from "../ui/Button";
import Image from "next/image";
import tower from "@/assets/images/tower.png";
import Magnet from "../ui/Magnet";

export default function Navbar() {
  return (
    <div className="absolute">
      <div className="relative">
        <MenuOverlay className="h-screen w-screen lg:right-0 lg:left-auto  fixed left-0 top-0 -z-10">
          {/* <div className="hidden lg:block w-1/4 h-screen fixed top-0 left-0 bg-black-100/90 backdrop-blur-md" /> */}
          <div className="size-full lg:w-3/4 bg-red-light-1/95 backdrop-blur-md ml-auto">
            <div className="container h-full">
              <div className="size-full flex justify-between">
                <Image
                  src={tower}
                  alt="tower"
                  height={1000}
                  className="hidden md:block w-[150px] 2xl:w-[185px] h-full"
                />
                <div className=" flex flex-col items-end gap-20 lg:gap-1.5 lg:pr-14">
                  <MenuList className="pt-20  flex flex-col md:items-end gap-2 md:gap-3">
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
          </div>
        </MenuOverlay>
      </div>
    </div>
  );
}
