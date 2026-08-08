import Image from "next/image";
import Link from "next/link";

export type SubHeadingItem = {
  text: string;
};

type ContentWithImageSectionProps = {
  heading?: string;
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
    text: "We focus on delivering high-quality, compassionate support that’s built around your needs, not the system’s.",
  },
  {
    text: "Everyone deserves to feel independent and respected in their home. Whether you need a little help or more complex care, we’re here with the experience, clinical excellence and service to make life easier.",
  },
  {
    text: "Whether your care needs are complex or part of everyday life, they deserve expert attention. Your local team brings deep clinical experience and a proactive approach that focuses on prevention, wellbeing and long-term health.",
  },
];

export default function ContentWithImageSection({
  heading = "Find The Right HomeCaring Service",
  paragraph = "We deliver in-home aged care and NDIS support to help you feel confident, comfortable and in control of your life at home.",
  subHeadings = defaultSubHeadings,
  primaryButtonLabel = "Get Started",
  primaryButtonHref = "/services",
  secondaryButtonLabel = "Learn More",
  secondaryButtonHref = "/about-us",
  imageSrc = "https://res.cloudinary.com/djlpb1ld5/image/upload/v1781244677/ChatGPT_Image_Jun_12_2026_11_08_30_AM_bdo7af.png",
  imageAlt = "Care and support",
}: ContentWithImageSectionProps) {
  return (
    <section className="w-full bg-[#FFEBD9]  py-10 dark:bg-zinc-950 sm:py-16">
      {/* <div className="mx-auto grid max-w-8xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 sm:px-8 lg:px-32">
        {/* Left: heading, paragraph, sub-headings, buttons */}
      {/* <div className="flex flex-col max-w-lg">
          {/* <h2 className="text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
            {heading}
          </h2> 
          <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph}
          </p>
          <div className="mt-6 space-y-5 sm:mt-8 sm:space-y-6">
            {subHeadings.map((item, i) => (
              <div key={i}>
                <p className="mt-1.5 text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-2 sm:text-base">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
              style={{ backgroundColor: "#F2711C" }}
            >
              {primaryButtonLabel}
            </Link>
            <Link
              href={secondaryButtonHref}
              className="inline-flex items-center justify-center rounded-md border-2 border-[#3A3F46] bg-[#3A3F46] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#F2711C] hover:text-white sm:px-6 sm:py-3 sm:text-base"
            >
              {secondaryButtonLabel}
            </Link>
          </div>
         </div>



        {/* Right: image full width & height, centered 
        {/* <div className="relative flex h-full min-h-[280px] w-full items-center justify-center pb-12 sm:min-h-[350px] sm:pb-16 lg:min-h-[500px] lg:pb-24">
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
            {/* Rotated div - image jitni height/width, image ke neeche nazar aati hai 
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
      </div> */}
    </section>
  );
}
