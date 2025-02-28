import ArrowDown from "@/assets/svgs/ArrowDown";
import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import footerLogo from "@/assets/images/footerLogo.png";
import redFadedCircle from "@/assets/images/redFadedCircle.png";
import smallAngel from "@/assets/images/smallAngel-3.png";

export default function Footer() {
  return (
    // <footer className="pt-[72px] md:pt-[168px] pb-5 relative overflow-hidden">
    <footer
      className="relative h-screen md:h-[50vh] xl:h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative h-[200vh] md:h-screen md:-top-[50vh] -top-[100vh] xl:h-[200vh] xl:-top-[100vh]">
        <div className="h-screen sticky top-0 md:h-[50vh] md:top-[50vh] xl:top-0 xl:h-screen">
          <figure className=" absolute bottom-0 right-0 xl:-bottom-28 xl:-right-10">
            <div className="relative">
              <Image
                src={smallAngel}
                alt="small angel"
                className="w-[195px] xl:w-[681px]"
              />
              <Image
                src={redFadedCircle}
                alt="red faded circle"
                className=" absolute bottom-7 xl:bottom-48 xl:right-20 right-3 -z-10 xl:w-[571px]"
              />
            </div>
          </figure>
          <div className="container relative flex items-start pt-28 md:pt-0 md:items-center xl:items-start h-full xl:pt-28">
            <div className="flex flex-col md:flex-row md:gap-40 md:justify-start items-start gap-10">
              <Link
                href={"#"}
                target="_blank"
                className="font-poppins font-light text-[22px] leading-[31.9px] text-red-primary-1 flex items-end"
              >
                <ArrowDown className="size-[64px] stroke-red-primary-1" />
                support@simp.gifts
              </Link>
              <div className="flex gap-20">
                {footerLinks.map((item) => (
                  <div key={item.title} className="flex flex-col gap-5">
                    <h4 className="font-poppins font-light text-[22px] leading-[31.9px] text-black-300">
                      {item.title}
                    </h4>
                    <ul className="flex flex-col gap-1.5 font-poppins font-normal text-base text-red-primary-1">
                      {item.linkList.map((linkListItem) => (
                        <li key={linkListItem.label}>
                          <Link target="_blank" href={linkListItem.href}>
                            {linkListItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <figure className="w-[171px] h-[113px] xl:w-[356px] xl:h-[235px] absolute left-0 bottom-3">
              <Image src={footerLogo} alt="simp logo" className="size-full" />
            </figure>
          </div>
        </div>
      </div>
    </footer>
    // </footer>
  );
}
