import SectionTitle from "../ui/SectionTitle";
import StepsElements from "../content/StepsElements";
export default function Steps() {
  return (
    <section className="pt-[72px] md:pt-[168px]">
      <div className="container relative">
        <SectionTitle
          textOne={"Designed for"}
          textTwo={"Gifting"}
          subText={
            "Your fans want to support you. Now they can while having fun and without invading your privacy."
          }
        />
        <span className=" absolute -bottom-20 right-5 md:top-0 md:right-0 font-urbanist font-light text-base text-red-light-2">
          send &gt; shine &gt; repeat
        </span>

        <StepsElements />
      </div>
    </section>
  );
}
