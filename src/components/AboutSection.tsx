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
  textItems?: AboutTextItem[];
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

/* Default NDIS-style blurbs — not used for Meals and Melodies About page.
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
*/

export default function AboutSection({
  heading = "The Chef, The Singer, and a Whole Lot of Soul.",

  // heading = "Delicious and Delightful Social Engagement",
  // paragraph = "We’re here to make care better. More personal, more consistent and more empowering. Whether you’re navigating NDIS or in-home care options for the first time or reassessing your current care, we’ll help you feel confident, informed and genuinely supported.",
  paragraph = (<>At Meals and Melodies, we believe that age should never be a barrier to exceptional food and world-class entertainment. We’ve combined gourmet dining with live, interactive music to create "Incursion" and "Excursion" experiences that residents actually look forward to.</>),
  paragraph2 = (<> <strong>Valerie Ferdinands: The Culinary Heart</strong>  You may recognize Valerie from the 2017 season of My Kitchen Rules, where she and her daughter Courtney were the runners-up with their legendary Anglo-Indian flavors. Her winning "Sweetly Spiced" sauce even became a national sensation. Today, Valerie helms the kitchen at New Farm Bistro, bringing that same chef-quality standard and passion for authentic, flavorful meals to every Meals and Melodies event.</>),
  paragraph3 = ( <> <strong>Sandra Beynon:The Voice of the Party  </strong> Sandra is a seasoned vocalist and MC, known across Australia for her work with Body and Soul Music. With years of experience performing at major festivals and events, Sandra doesn’t just "sing at" a room—she connects with it. Her ability to lead a sing-a-long and read the energy of a crowd ensures that every guest leaves with a smile and a song in their heart.</>),

  textItems = [],
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/services",

  // imageSrc = "/aboutHeader.png",
  imageSrc = "/about.png",
  imageAlt = "About us - care and support",
}: AboutSectionProps) {
  return (
    <section className="w-full bg-white py-10 dark:bg-zinc-950  sm:py-16">
      <div className="mx-auto grid max-w-8xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-start lg:gap-12 sm:px-8 lg:px-32">
        {/* Left: heading, paragraph, text items, buttons */}
        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
            {heading}
          </h2>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph}
          </p>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph2}
          </p>
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph3}
          </p>
          {textItems.length > 0 ? (
            <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
              {textItems.map((item, i) => (
                <div key={i}>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
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
        <div className="relative flex w-full items-center justify-center pb-8 sm:pb-12 lg:pb-16 lg:self-center">
          <div className="relative mx-auto h-[220px] w-full max-w-lg sm:h-[260px] sm:max-w-xl lg:h-[500px] lg:max-w-2xl">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-4xl bg-zinc-900">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div
              className="absolute inset-0 z-0 overflow-hidden rounded-4xl dark:bg-zinc-700"
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
