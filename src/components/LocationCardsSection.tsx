import Image from "next/image";
import type { StaticImageData } from "next/image";

import seniorsOutdoor from "@/assets/WhatsApp Image 2026-03-18 at 11.23.51 AM.jpeg";
import seniorsOutdoor1 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.52 AM (1).jpeg";
import seniorsOutdoor2 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM (1).jpeg";
import seniorsOutdoor3 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM.jpeg";

export type LocationCardItem = {
  imageSrc: string;
  imageAlt: string;
  heading: string;
  locationHref?: string;
};

type LocationCardsSectionProps = {
  heading?: string;
  paragraph?: string;
  subHeading?: string;
  subHeading2?: string;
  paragraph2?: string;
  cards?: LocationCardItem[];
};

const defaultCards: LocationCardItem[] = [
  {
    imageSrc: "/HCP-51-1-scaled.webp",
    imageAlt: "Location 1",
    heading: "New South Wales",
    locationHref: "#",
  },
  {
    imageSrc: "/HCP-54-1-scaled.webp",
    imageAlt: "Location 2",
    heading: "Victoria",
    locationHref: "#",
  },
  {
    imageSrc: "/HCP-57-1-scaled.webp",
    imageAlt: "Location 3",
    heading: "Queensland",
    locationHref: "#",
  },
  {
    imageSrc: "/NDIS-19-1-scaled.webp",
    imageAlt: "Location 4",
    heading: "South Australia",
    locationHref: "#",
  },
  {
    imageSrc: "/HCP-57-1-scaled.webp",
    imageAlt: "Location 3",
    heading: "Queensland",
    locationHref: "#",
  },
  {
    imageSrc: "/NDIS-19-1-scaled.webp",
    imageAlt: "Location 4",
    heading: "South Australia",
    locationHref: "#",
  },
];

const incursionImages: StaticImageData[] = [seniorsOutdoor, seniorsOutdoor1];
const excursionImages: StaticImageData[] = [seniorsOutdoor2, seniorsOutdoor3];

function ImageBlock({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
      {images.map((src, i) => (
        <div
          key={i}
          className="relative aspect-4/3 w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 sm:rounded-xl"
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 25vw"
          />
        </div>
      ))}
    </div>
  );
}

export default function LocationCardsSection({
  heading = "Our Service Area",
  subHeading = "INCURSIONS",
  subHeading2 = "EXCURSIONS",
  paragraph2 = "Your group can travel to a location in the vicinity of your facility – e.g. a park – to experience a lovely outdoor experience.",
  paragraph = "Valerie and Sandra will travel to your location and bring everything that's needed – food and music!",
  cards = defaultCards,
}: LocationCardsSectionProps) {
  return (
    <section className="w-full bg-[#FFEBD9] px-4 sm:px-6 md:px-8 lg:px-12 py-10 dark:bg-zinc-950  sm:py-14  md:py-16  lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl 2xl:text-[66px]">
          {heading}
        </h2>

        {/* Map */}
        <div className="relative mt-6 aspect-16/10 w-full overflow-hidden rounded-lg border border-zinc-200 bg-zinc-100 dark:border-zinc-800 dark:bg-zinc-900 sm:mt-8 sm:rounded-xl md:aspect-2/1 lg:rounded-2xl">
          <iframe
            title="Service area map - Australia"
            src="https://www.openstreetmap.org/export/embed.html?bbox=112.5%2C-44.5%2C154.5%2C-9.5&layer=mapnik&marker=-25.27%2C133.77"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <iframe
            title="Service area map - Brisbane"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d453477.6536737166!2d152.99319645!3d-27.3821429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b91579aac93d233%3A0x402a35af3deaf40!2sBrisbane%20QLD%2C%20Australia!5e0!3m2!1sen!2s!4v1786190192428!5m2!1sen!2s"
            className="absolute inset-0 h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      {/* INCURSIONS */}
      {/* <div className="mt-10 space-y-4 sm:mt-12 sm:space-y-5 md:mt-14 lg:mt-16">
          <h3 className="text-lg font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl md:text-2xl">
            {subHeading}
          </h3>
          <p className="max-w-3xl text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-base">
            {paragraph}
          </p>
          <ImageBlock images={incursionImages} alt="Seniors at outdoor social meal" />
        </div> */}

      {/* EXCURSIONS */}
      {/* <div className="mt-12 space-y-4 sm:mt-14 sm:space-y-5 md:mt-16 lg:mt-20">
          <h3 className="text-lg font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl md:text-2xl">
            {subHeading2}
          </h3>
          <ImageBlock images={excursionImages} alt="Seniors on excursion" />
          <p className="max-w-3xl text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-base">
            {paragraph2}
          </p>
        </div> */}
    </section>
  );
}
