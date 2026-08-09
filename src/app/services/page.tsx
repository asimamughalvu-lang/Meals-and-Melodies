import AboutIntroSection from "@/components/AboutIntroSection";
import AboutSection from "@/components/AboutSection";
import CardSection from "@/components/CardSection";
import ImageWithOverlaySection from "@/components/ImageWithOverlaySection";
import OurValues from "@/components/OurValues";
import WhatWeOffer from "@/components/WhatWeOffer";
import HomecareServices from "@/components/HomecareServices";
import PersonalisedCare from "@/components/PersonalisedCare";
import ServicesSection from "@/components/ServicesSection";
import GreenListSection from "@/components/GreenListSection";
import WhatWeOfferService from "@/components/WhatWeOfferService";
import NdisService from "@/components/NdisService";
import OfferCards from "@/components/OffercCards";
import Caring from "@/components/Caring";
import Servicefaqs from "@/components/servicefaqs";

export const metadata = {
  title: "Services | HomeCaring",
  description:
    "Explore our range of services – from personal care to domestic assistance, nursing care and more.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen  sm:p-0 px-4 bg-[#FFEBD9]">
      <ServicesSection />
      <PersonalisedCare />
      <WhatWeOfferService />
      {/* <NdisService /> */}
      <OfferCards />
      <Caring />
      <Servicefaqs />
      <ImageWithOverlaySection />
    </div>
  );
}
