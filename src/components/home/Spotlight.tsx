import Section from "../ui/Section";
import { SectionTitleTypeOne } from "../ui/SectionTitle";

export default function Spotlight() {
  return (
    <Section id="spotlight">
      <div className="container">
        <SectionTitleTypeOne
          textOne="Spotlight on"
          textTwo="Creators"
          subText="Get inspired by the many other creators that uses Simp Gifts to build stronger connections with their fans."
          className="top-[22px] -right-[142px] md:top-[50px] md:-right-[245px] lg:-right-[360px]"
        />
        <div className="mt-[250px]">
          <ul className="gap-12 flex"></ul>
        </div>
      </div>
    </Section>
  );
}
