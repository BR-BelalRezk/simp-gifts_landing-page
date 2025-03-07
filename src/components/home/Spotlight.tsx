import SpotlightItem from "../content/SpotlightItem";
import Carousel from "../ui/Carousel";
import Section from "../ui/Section";
import { SectionTitleTypeOne } from "../ui/SectionTitle";
import creator1 from "@/assets/images/creator-1.png";
import publicWishlist1 from "@/assets/images/publicWishlist-1.jpg";

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
        <div className="mt-[150px] w-full [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <Carousel>
            {Array.from({ length: 9 }).map((_, index) => (
              <SpotlightItem
                key={index}
                profileImage={creator1}
                bioScreenShot={publicWishlist1}
                name={"Olivia Rhye"}
                socilaMediaArray={["/rhye123", "@rhye123", "@rhye123"]}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </Section>
  );
}
