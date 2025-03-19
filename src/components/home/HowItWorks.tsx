import Section from "../ui/Section";
import HowItWorksList from "../content/HowItWorksList";
import { SectionTitleTypeTwo } from "../ui/SectionTitle";

export default function HowItWorks() {
  return (
    <Section id="howitworks" className="">
      <div className="bg-white-50 rounded-b-[40px] py-16">
        <div className="container">
          <div className="relative md:w-fit">
            <h2 className="relative w-fit">
              <span className="font-yellowTail relative z-20 font-normal md:text-[97px] md:leading-[82.45px] text-[38px] leading-[43.7px] text-red-primary-3">
                How it works
              </span>
              <span className="absolute -right-16 md:-right-24 md:top-8 top-4 uppercase z-10 font-sombra font-black md:text-[68px] md:leading-[68px] text-[34px] leading-[34px] text-red-light-2">
                Works
              </span>
            </h2>
            <SectionTitleTypeTwo
              text={"find. share. celebrate."}
              className="font-urbanist text-base mt-1.5 md:mt-0 font-light md:absolute md:-right-20 md:top-24 text-center text-black-200"
            />
          </div>
          <div className="mt-28 w-full">
            <HowItWorksList />
          </div>
        </div>
      </div>
    </Section>
  );
}
