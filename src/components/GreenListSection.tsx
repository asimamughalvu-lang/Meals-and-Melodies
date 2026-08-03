import Image from "next/image";
import Link from "next/link";
import type { StaticImageData } from "next/image";
import { FaArrowRight } from "react-icons/fa";

import seniorsOutdoor from "@/assets/WhatsApp Image 2026-03-18 at 11.23.51 AM.jpeg";
import seniorsOutdoor1 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.52 AM (1).jpeg";
import seniorsOutdoor2 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM (1).jpeg";
import seniorsOutdoor3 from "@/assets/WhatsApp Image 2026-03-18 at 11.23.53 AM.jpeg";

export type ListRowItem = {
  logoSrc: string | StaticImageData;
  logoAlt: string;
  text: string;
  paragraph?: string;
  href?: string;
};

type GreenListSectionProps = {
  heading?: string;
  column1?: ListRowItem[];
  column2?: ListRowItem[];
  paragraph?: string;
};

const defaultColumn3: ListRowItem[] = [
  {
    logoSrc: seniorsOutdoor,
    logoAlt: "Seniors at outdoor social meal by the beach",
    text: "INCURSIONS",
    paragraph:
      "Valerie and Sandra will travel to your location and bring everything that's needed – food and music!",
  },
  {
    logoSrc: seniorsOutdoor1,
    logoAlt: "Seniors at outdoor social meal",
    text: "EXCURSIONS",
    paragraph:
      "Your group can travel to a location in the vicinity of your facility – e.g. a park – to experience a lovely outdoor experience.",
  },
  // {
  //   logoSrc: seniorsOutdoor,
  //   logoAlt: "Seniors at outdoor social meal by the beach",
  //   text: "INCURSIONS",
  //   paragraph:
  //     "Valerie and Sandra will travel to your location and bring everything that's needed – food and music!",
  // },
  // {
  //   logoSrc: seniorsOutdoor1,
  //   logoAlt: "Seniors at outdoor social meal",
  //   text: "EXCURSIONS",
  //   paragraph:
  //     "Your group can travel to a location in the vicinity of your facility – e.g. a park – to experience a lovely outdoor experience.",
  // },
];

// const defaultColumn2: ListRowItem[] = [];

const introParagraph =
  "Capacity-Building Food-Based Activities\n\nSocial Outings – just have a great time – morning tea or lunch\n\nSpecial Themed Events – lunch or dinner – get dressed up and enjoy a very special menu and musical offering";

const blockImages: [StaticImageData, StaticImageData][] = [
  [seniorsOutdoor, seniorsOutdoor1],
  [seniorsOutdoor2, seniorsOutdoor3],
];

const defaultColumn1: ListRowItem[] = [
  { logoSrc: "/life-skills.webp", logoAlt: "Care", text: "Life Skills" },
  { logoSrc: "/a-min.png", logoAlt: "Home", text: "Community Participation" },
  { logoSrc: "/b-min.webp", logoAlt: "Support", text: "Behaviour Support" },
  { logoSrc: "/c-min.webp", logoAlt: "Health", text: "Domestic Assistance" },
  { logoSrc: "/e-min.png", logoAlt: "Life", text: "Personal Care" },
  { logoSrc: "/f-min.png", logoAlt: "Life", text: "Complex Care" },
];

const defaultColumn2: ListRowItem[] = [
  { logoSrc: "/g-min.png", logoAlt: "Plan", text: "Disability Care" },
  { logoSrc: "/h-min.png", logoAlt: "Community", text: "Dementia Care" },
  { logoSrc: "/i-min.png", logoAlt: "Therapy", text: "Palliative Care" },
  { logoSrc: "/j-min.png", logoAlt: "Respite", text: "Respite Care" },
  { logoSrc: "/k-min.png", logoAlt: "More", text: "24X7 Care" },
  {
    logoSrc: "/l-min.png",
    logoAlt: "More",
    text: "Allied Healthcare & Much More",
  },
];

const rowItemWrapperClasses =
  "group flex min-h-[80px] w-full cursor-pointer items-center gap-3 border-t border-zinc-300 py-3 transition-colors first:border-t-0 sm:min-h-[100px] sm:gap-4 sm:py-4 md:gap-5";

function RowItem({ item }: { item: ListRowItem }) {
  const content = (
    <div className="flex w-full items-center justify-between gap-3 sm:gap-5">
      <div className="relative h-10 w-10 shrink-0 rounded-lg bg-gray-800 transition-colors group-hover:bg-[#F2711C] sm:h-12 sm:w-12">
        <Image
          src={item.logoSrc}
          alt={item.logoAlt}
          fill
          className="object-cover p-2"
          sizes="60px"
        />
      </div>
      <span className="flex-1 text-left text-base font-bold text-[#3A3F46] transition-colors group-hover:text-[#F2711C] sm:text-lg">
        {item.text}
      </span>
      <FaArrowRight
        className="h-5 w-5 shrink-0 text-[#3A3F46] transition-colors group-hover:text-[#F2711C]"
        aria-hidden
      />
    </div>
  );

  if (item.href) {
    return (
      <Link href={item.href} className={rowItemWrapperClasses}>
        {content}
      </Link>
    );
  }
  return <div className={rowItemWrapperClasses}>{content}</div>;
}

function ImagePair({
  images,
  alt,
}: {
  images: [StaticImageData, StaticImageData];
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

export default function GreenListSection({
  heading = "Support Services You Can Count On",
  column1 = defaultColumn1,
  column2 = defaultColumn2,
  paragraph = introParagraph,
}: GreenListSectionProps) {
  return (
    <section className="w-full bg-white dark:bg-zinc-950">
      {/* <div className="max-w-8xl    mx-auto  px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-14 lg:px-12 lg:py-16 xl:px-32 xl:py-20">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#2c2d2e] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:mt-6 sm:text-base md:mt-8">
          {paragraph}
        </p> */}

        {/* <div className=" grid gap-x-4 sm:mt-10 sm:gap-x-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
          <div className="flex flex-col">
            {column1.map((item, i) => (
              <RowItem key={i} item={item} />
            ))}
          </div>
          <div className="flex flex-col">
            {column2.map((item, i) => (
              <RowItem key={i} item={item} />
            ))}
          </div>
        </div> */}

        {/* <div className="mt-10 space-y-12 sm:mt-12 sm:space-y-14 md:mt-14 md:space-y-16 lg:mt-16 lg:space-y-20">
          {column1.slice(0, 2).map((item, i) => (
            <article key={i} className="space-y-4 sm:space-y-5">
              <h3 className="text-lg font-semibold text-[#3A3F46] dark:text-green-400 sm:text-xl md:text-2xl">
                {item.text.trim()}
              </h3>
              {i === 1 && blockImages[i] && (
                <ImagePair images={blockImages[i]} alt="Seniors on excursion" />
              )}
              {i === 0 && (
                <p className="max-w-3xl text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-base">
                  {item.paragraph}
                </p>
              )}
              {i === 0 && blockImages[i] && (
                <ImagePair images={blockImages[i]} alt="Seniors at incursion" />
              )}
              {i === 1 && (
                <p className="max-w-3xl text-sm leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-base">
                  {item.paragraph}
                </p>
              )}
            </article>
          ))}
        </div> */}

        
      {/* </div> */}
    </section>
  );
}
