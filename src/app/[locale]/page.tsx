import ContactUs from "@/components/contactUs/ContactUs";
import Counting from "@/components/counting/Counting";
import HeroSection from "@/components/heroSection/HeroSection";
import HowItWork from "@/components/howItWork/HowItWork";
import Services from "@/components/services/Services";
import VisionAndMisson from "@/components/visionAndMisson/VisionAndMisson";
import WhoWeAre from "@/components/whoWeAre/WhoWeAre";
import WhyChooseUs from "@/components/whyChooseUs/WhyChooseUs";
import WorkingHours from "@/components/workingHours/WorkingHours";
import WorkShop from "@/components/workShop/WorkShop";

export default async function Home() {
  return (
    <section>
      <HeroSection />
      <WorkShop />
      <WhoWeAre />
      <Counting />
      <VisionAndMisson />
      <WorkingHours />
      <Services />
      <WhyChooseUs />
      <HowItWork />
      <ContactUs />
    </section>
  );
}
