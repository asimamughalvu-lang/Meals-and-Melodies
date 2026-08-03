import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";

type ImageRowSectionProps = {
  heading?: string;
  heading2?: string;
  paragraph?: string | React.ReactNode;
  paragraph2?: string | React.ReactNode;
  buttonLabel?: string;
  buttonHref?: string;
  images?: { src: string | StaticImageData; alt: string; objectPosition?: string }[];
};

const defaultImages = [
  { src: "/Elderly group table outdoors.png", alt: "Seniors enjoying a social meal outdoors at a picnic table" },
  { src: "/services.png", alt: "Meals and Melodies chef preparing a meal indoors in the kitchen", objectPosition: "28% 20%" },
];

export default function ImageRowSection({
  heading = "Delicious and Delightful Social Engagement",
  heading2 = " Delicious and Delightful Social Engagement",

  paragraph2 = "This is a social engagement and capacity-building enterprise that puts gastronomic and music first and foremost. No more boring outings!",
  paragraph = (<>This is a social engagement and capacity-building enterprise that puts gastronomic and music first and foremost.<br /> No more boring outings!</>),
  buttonLabel = "Get Started",
  buttonHref = "/services",
  images = defaultImages,
}: ImageRowSectionProps) {
  return (
    <section className="w-full bg-white px-4 py-12 dark:bg-zinc-950 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-24 xl:px-32 xl:py-28">
      <div className="mx-auto max-w-8xl space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
          {heading2}
        </h2>
        <p className="mx-auto mt-2 max-w-[720px] text-center text-base text-zinc-600 dark:text-zinc-400 sm:mt-4 sm:text-lg md:text-xl">
          {paragraph2}
        </p>
        {/* <div className="mt-8 flex justify-center sm:mt-10 lg:mt-12">
          <Link
            href={buttonHref}
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold text-white transition hover:opacity-90 sm:px-8 sm:py-3.5 sm:text-lg lg:px-10 lg:py-4 lg:text-xl"
            style={{ backgroundColor: "#F2711C" }}
          >
            {buttonLabel}
          </Link>
        </div> */}
        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-2 md:gap-5 lg:mt-14 lg:gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative aspect-3/4 overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:rounded-2xl"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                style={img.objectPosition ? { objectPosition: img.objectPosition } : undefined}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
