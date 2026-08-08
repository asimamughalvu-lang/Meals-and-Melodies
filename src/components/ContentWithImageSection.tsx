import Image from "next/image";
import Link from "next/link";
import image from "next/image";
import mealsAndMelodies from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM (1).jpeg";
import mealsAndMelodies1 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM.jpeg";
import mealsAndMelodies2 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.52 AM (1).jpeg";
import mealsAndMelodies3 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.51 AM.jpeg";

export type SubHeadingItem = {
  title: string;
  text: string;
};

type ContentWithImageSectionProps = {
  heading?: string;
  heading2?: string;
  paragraph?: string;
  subHeadings?: SubHeadingItem[];
  primaryButtonLabel?: string;
  primaryButtonHref?: string;
  secondaryButtonLabel?: string;
  secondaryButtonHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const defaultSubHeadings: SubHeadingItem[] = [
  {
    title: "MEALS:",
    text: "Valerie Ferdinands is a dedicated and passionate foodie, having owned her own restaurants for years, and no less than a finalise on My Kitchen Rules!\n\Valerie will be the powerhouse behind the menu selections.",
  },
  {
    title: "MELODIES:",
    text: "Sandra Beynon is a seasoned vocalist, with over 50 years of performance experience.\n\nSandra continues to entertain audiences as a working musician in clubs, hotels and private functions.\n\nLucky for our clients, Sandra joins with Valerie as the musical component to this unique enterprise. Sandra loves nothing more than to sing some beautiful tunes and touch the hearts of her audience – the brain, at any age or stage, still gets fired up when a tune is recognised.",
  },
  // {
  //   title: "Trusted Clinical and Everyday Care",
  //   text: "Whether your care needs are complex or part of everyday life, they deserve expert attention. Your local team brings deep clinical experience and a proactive approach that focuses on prevention, wellbeing and long-term health.",
  // },
];

export default function ContentWithImageSection({
  heading = "The Meals and Melodies Team",
  heading2 = "The Meals and Melodies Team",
  paragraph = "At Meals & Melodies, your comfort and wellbeing always come first. As part of a caring community dedicated to enhancing everyday living, we combine a personal touch with thoughtful support and engaging experiences. You’ll enjoy nourishing meals, uplifting melodies, and compassionate service—all designed to help you feel relaxed, connected, and happy in the comfort of your own home.",
  subHeadings = defaultSubHeadings,
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/login",
  secondaryButtonLabel = "Learn More",
  secondaryButtonHref = "/about-us",
  imageSrc = "https://res.cloudinary.com/djlpb1ld5/image/upload/v1781245348/ChatGPT_Image_Jun_12_2026_11_21_46_AM_cglrgb.png",
  imageAlt = "Care and support",
}: ContentWithImageSectionProps) {
  return (
    <section className="w-full  bg-white py-10 dark:bg-zinc-950  sm:py-16 ">
      <div className="mx-auto   grid max-w-8xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 sm:px-8 lg:px-32 ">
        {/* Left: heading, paragraph, sub-headings, buttons */}
        <div className=" flex-col ">
          <h2 className="text-2xl text-center sm:text-left p-2 font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
            {heading2}
          </h2>
          <p className="mt-3 text-base text-center sm:text-left p-2 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph}
          </p>

          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6 p-2">
            {subHeadings.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg text-center sm:text-left font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl">
                  {item.title}
                </h3>

                <p className="mt-1.5 text-center sm:text-left whitespace-pre-line text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}

            {/* <h3 className="text-lg font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl">MEALS:</h3>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
              Valerie Ferdinands is a dedicated and passionate foodie, having owned her own restaurants for years, and no less than a finalise on My Kitchen Rules!\n\Valerie will be the powerhouse behind the menu selections.
            </p>
            <div className=" mx-auto flex justify-between items-center gap-2 mt-4">
              <Image src={mealsAndMelodies} alt="Meals and Melodies" className="w-full h-auto object-cover border rounded-lg" />
              <Image src={mealsAndMelodies1} alt="Meals and Melodies" className="w-full h-auto object-cover border rounded-lg" />
            </div>
            <h3 className="text-lg font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl">MELODIES:</h3>
            <div className="flex  justify-between items-center gap-2 mt-4">
              <Image src={mealsAndMelodies2} alt="Meals and Melodies" className="w-full h-auto object-cover border rounded-lg" />
              <Image src={mealsAndMelodies3} alt="Meals and Melodies" className="w-full h-auto object-cover border rounded-lg" />
            </div>
            <p className="mt-1.5 whitespace-pre-line text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
              Sandra Beynon is a seasoned vocalist, with over 50 years of performance experience.\n\nSandra continues to entertain audiences as a working musician in clubs, hotels and private functions.\n\nLucky for our clients, Sandra joins with Valerie as the musical component to this unique enterprise. Sandra loves nothing more than to sing some beautiful tunes and touch the hearts of her audience – the brain, at any age or stage, still gets fired up when a tune is recognised.
            </p> */}
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:justify-start justify-center sm:mt-10 sm:gap-4">
            <Link
              href={primaryButtonHref}
              className="inline-flex  items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
              style={{ backgroundColor: "#F2711C" }}
            >
              {primaryButtonLabel}
            </Link>
            {/* <Link
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center rounded-md border-2 border-[#3A3F46] bg-[#3A3F46] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F2711C] hover:text-white sm:px-6 sm:py-3 sm:text-base"
            >
              {secondaryButtonLabel}
            </Link> */}
          </div>
        </div>

        {/* Right: image full width & height, centered */}
        <div className="relative flex h-[280px] w-full items-center justify-center pb-12 sm:h-[350px] sm:pb-16 lg:h-[500px] lg:pb-24">
          <div className="relative h-full w-full">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-4xl ">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-cover object-center"
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
