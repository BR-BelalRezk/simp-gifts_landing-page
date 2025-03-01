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
        <MenuOverlay className="h-screen w-screen  fixed left-0 top-0 -z-10">
          {/* <div className="hidden lg:block w-1/4 h-screen fixed top-0 left-0 bg-black-100/90 backdrop-blur-md" /> */}
          <div className="size-full lg:min-w-[850px] lg:w-2/3 bg-red-light-1/95 backdrop-blur-md">
            <div className="container h-full">
              <div className="size-full flex justify-between lg:px-16">
                <Image
                  src={tower}
                  alt="tower"
                  height={1000}
                  className="hidden md:block w-[150px] 2xl:w-[185px] h-full"
                />
                <div className=" flex flex-col items-end gap-20 lg:gap-3 xl:gap-10">
                  <MenuList className="mt-20 md:mt-28 lg:mt-20 xl:mt-10  flex flex-col md:items-end gap-2 md:gap-3">
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
