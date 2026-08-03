import Image from "next/image";
import Link from "next/link";

export type AboutTextItem = {
  text: string;
};

type AboutSectionProps = {
  heading?: string;
  paragraph?: string;
  paragraph2?: string;
  paragraph3?: string;
  paragraph4?: string;
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
  heading = "A Singer Who Turns Moments into Memories.",
  paragraph2 = "For creators, brands, and dreamers, an it’s a creative partner. It helps you stand out, tell your story, and leave a lasting impression. Because in a world full of noise, what truly matters is a voice that people remember. ",
  paragraph = "Imagine having a voice that’s always ready, always perfect, and always aligned with your vision. No delays, no limitations — just pure expression whenever you need it. It brings your ideas to life instantly, turning your thoughts into melodies that sound as real and powerful as human emotion itself.",
  paragraph3 = "It’s like having a voice that’s always ready, always perfect, and always aligned with your vision. No delays, no limitations — just pure expression whenever you need it. It brings your ideas to life instantly, turning your thoughts into melodies that sound as real and powerful as human emotion itself.",
  paragraph4 = "In a fast-moving digital world, standing out is everything. A singer gives you the edge — the ability to create, adapt, and inspire without limits. It empowers you to push boundaries, experiment freely, and bring your vision to life in ways that feel authentic, bold, and truly timeless.",
 
  imageSrc = "/singer.png",
  imageAlt = "About us - care and support",
}: AboutSectionProps) {
  return (
    <section className="w-full bg-white py-10 dark:bg-zinc-950  sm:py-16">
      <div className="mx-auto grid max-w-8xl gap-8 sm:gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 sm:px-8 lg:px-32">
        {/* Left: heading, paragraph, text items, buttons */}
        <div className="flex flex-col ">
          <h2 className="text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
            {heading}
          </h2>
          <p className="mt-16 text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph}
          </p>
          <p className="text-base mt-14 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph2}
          </p>
          <p className="text-base mt-14 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
            {paragraph3}
          </p>
          <p className="text-base mt-14 text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg">
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
          {/* <div className="mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
            <Link
              href={primaryButtonHref}
              className="inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 sm:px-6 sm:py-3 sm:text-base"
              style={{ backgroundColor: "#F2711C" }}
            >
              {primaryButtonLabel}
            </Link>
          
          </div> */}
        </div>

        {/* Right: image with decorative rotated div */}
        <div className="relative flex h-[300px] w-full items-center justify-center pb-12 sm:h-[380px] sm:pb-16 md:h-[460px] lg:h-[650px] lg:pb-24">
          <div className="relative h-full w-full">
            <div className="relative z-10 h-full w-full overflow-hidden rounded-4xl bg-zinc-900">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 70vw"
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
