import Facebook from "@/assets/svgs/Facebook";
import Instagram from "@/assets/svgs/Instagram";
import Twitter from "@/assets/svgs/Twitter";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function SpotlightItem({
  profileImage,
  bioScreenShot,
  name,
  socilaMediaArray,
}: {
  profileImage: StaticImageData;
  bioScreenShot: StaticImageData;
  name: string;
  socilaMediaArray: string[];
}) {
  return (
    <li className="flex">
      <figure className="size-[240px] relative md:h-[459px] md:w-[319px] bg-transparent flex-none">
        <Image
          src={profileImage}
          draggable={false}
          alt={name}
          className="size-full object-cover rounded-3xl"
        />
        <div className="rounded-3xl bg-[linear-gradient(325.41deg,rgba(51,51,51,0)_14.2%,#333333_100%)] [backdrop-filter:blur(8px)] absolute top-0 right-0 z-10 size-full" />
        <article className=" absolute top-3 left-5 z-20">
          <h3 className="font-yellowTail font-normal text-[38px] text-red-light-2">
            {name}
          </h3>
          <div className="flex flex-col items-start gap-2.5">
            {socilaMediaArray.map((item, index) => (
              <Link key={item} href={""} className="flex items-center gap-1.5">
                {index === 0 ? (
                  <Facebook />
                ) : index === 1 ? (
                  <Instagram />
                ) : (
                  <Twitter />
                )}
                <span className="font-urbanist font-light text-base text-white-body">
                  {item}
                </span>
              </Link>
            ))}
          </div>
        </article>
      </figure>
      <figure className="h-[279px] md:h-[538px] w-[131px] md:w-[252px] flex-none relative md:right-24 right-12 z-30">
        <Image
          draggable={false}
          src={bioScreenShot}
          alt={name}
          className="rounded-2xl border border-red-light-2 size-full object-cover"
        />
      </figure>
    </li>
  );
}
