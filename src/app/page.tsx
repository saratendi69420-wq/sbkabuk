import Hero from "@/components/Home/Hero";
import GetID from "@/components/Home/GetID";
import Partner from "@/components/Home/Partner";
import WhyJoinUs from "@/components/Home/WhyJoinUs";
import InstagramPost from "@/components/Home/InstagramPost";
import FAQ from "@/components/ui/FAQ";
import HowToPlay from "@/components/Home/HowToPlay";
export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <GetID />
      <WhyJoinUs />
      <Partner />
      <HowToPlay />
      <InstagramPost />
      <FAQ />
    </div>
  );
}
