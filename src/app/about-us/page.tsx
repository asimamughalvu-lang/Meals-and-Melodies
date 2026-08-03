import AboutIntroSection from "@/components/AboutIntroSection";
import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import ImageWithOverlaySection from "@/components/ImageWithOverlaySection";
import OurValues from "@/components/OurValues";
import WhatWeOffer from "@/components/WhatWeOffer";

export const metadata = {
  title: "About Us | HomeCaring",
  description:
    "Learn about HomeCaring – trusted in-home aged care and NDIS support across Australia.",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen font-sans">
      <AboutSection />
      <CardSection />
      <AboutIntroSection />
      <OurValues />
      <WhatWeOffer />
      <ImageWithOverlaySection />

    </div>
  );
}
