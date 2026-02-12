import GetID from "@/components/Home/GetID";
import Hero from "@/components/Home/Hero";
import HowToPlay from "@/components/Home/HowToPlay";
import Partner from "@/components/Home/Partner";
import WhyJoinUs from "@/components/Home/WhyJoinUs";
import FAQ from "@/components/ui/FAQ";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <GetID />
      <WhyJoinUs />
      <Partner />
      <HowToPlay />
      {/* <InstagramPost /> */}
      <FAQ />
    </div>
  );
}
