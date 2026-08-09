import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export type AboutTextItem = {
  text: string;
};

type AboutSectionProps = {
  heading?: string;
  paragraph?: ReactNode;
  paragraph2?: ReactNode;
  paragraph3?: ReactNode;
  paragraph4?: ReactNode;
  textItems?: AboutTextItem[];
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const defaultTextItems: AboutTextItem[] = [
  {
    text: "We believe the best care happens when you’re supported by people who understand your community and take the time to understand you. That’s why our teams are led by local owners and professionals who live where you live. They know the streets, the services, the culture and most importantly, they’re invested in your wellbeing.",
  },
  {
    text: "We proudly support older Australians, people living with disability and individuals with dementia across the country. Our team provides high-quality, tailored services designed to help you live safely and independently at home.",
  },
  {
    text: "This is care that puts you first. With compassionate professionals and a personalised approach, we work with you and your loved ones to create a plan that fits your life, so you can stay connected to what matters most.",
  },
];

export default function AboutSection({
  // heading = "NDIS Provider",
  heading = "More Than a Meal. It’s a Performance.",
  // paragraph = "  Care and support, designed around you.At HomeCaring, we believe quality disability support starts with truly understanding the person and not just their plan. Every individual is unique, which is why our care is personalised, flexible and built around your goals and lifestyle.As a registered NDIS provider, we work with you to create a care plan that supports your independence, safety and wellbeing. Whether you need help for a few hours each week or 24/7 wraparound support, our team is here to help you live the life you choose.",
  paragraph = "We offer two ways to experience Meals and Melodies, both designed to fit seamlessly into your social calendar.",
  paragraph2 = (
    <>
      {" "}
      Themed Excursions at New Farm Bistro <br />
      Pack the bus and head to the beautiful New Farm Bistro. We host your group
      for a 1.5+ hour immersive experience including a gourmet meal and a live
      themed performance.{" "}
    </>
  ),
  paragraph3 = (
    <>
      <strong> Bollywood Bash:</strong> Vibrant Indian flavors and rhythmic
      classics.
      <br />
      <strong>French Bastille Day:</strong> A gourmet journey to Paris through
      food and song.
      <br />
      <strong>Mexican Fiesta:</strong> Festive tunes and a menu that brings the
      heat (just enough!).{" "}
    </>
  ),
  paragraph4 = (
    <>
      {" "}
      In-House Incursions
      <br />
      Can’t make it to the Bistro? We’ll bring the magic to you. Valerie
      prepares a chef-standard meal to be served at your facility, while Sandra
      sets the stage with a live set of classics tailored to your residents'
      favorite eras.{" "}
    </>
  ),

  textItems = defaultTextItems,
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/contact-us",

  imageSrc = "/services.png",
  imageAlt = "About us - care and support",
}: AboutSectionProps) {
  return (
    <section className="w-full min-h-screen  py-10 dark:bg-zinc-950  sm:py-16 ">
      <div className="mx-auto grid max-w-8xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 sm:px-8 lg:px-32">
        {/* Left: heading, paragraph, text items, buttons */}
        <div className="flex flex-col">
          <h2 className="text-2xl sm:text-left text-center font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
            {heading}
          </h2>
          <p className="mt-3 text-base sm:text-left text-center text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph}
          </p>
          <p className="mt-3 text-base sm:text-left text-center text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph2}
          </p>
          <p className="mt-3 text-base sm:text-left text-center text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph3}
          </p>
          <p className="mt-3 text-base sm:text-left text-center text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph4}
          </p>
          {/* <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            {textItems.map((item, i) => (
              <div key={i}>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div> */}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4 sm:mx-0 mx-auto">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
              style={{ backgroundColor: "#F2711C" }}
            >
              {primaryButtonLabel}
            </Link>
          </div>
        </div>

        {/* Right: image with decorative rotated div */}
        <div className="relative flex h-full min-h-[360px] w-full items-center justify-center pb-12 sm:min-h-[460px] sm:pb-16 lg:min-h-[680px] lg:pb-24">
          <div className="relative h-full w-full">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-4xl">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute inset-0 z-0 rounded-4xl dark:bg-zinc-700"
              style={{
                transform: "rotate(-187deg)",
                backgroundColor: "rgba(253, 171, 159, 0.4)",
              }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
