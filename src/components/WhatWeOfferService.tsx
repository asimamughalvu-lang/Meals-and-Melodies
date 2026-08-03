import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export type ListRowItem = {
  logoSrc: string;
  logoAlt: string;
  text: string;
  href?: string;
};

type WhatWeOfferServiceProps = {
  heading?: string;
  paragraph?: string;
  column1?: ListRowItem[];
  column2?: ListRowItem[];
};

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
  { logoSrc: "/l-min.png", logoAlt: "More", text: "Allied Healthcare & Much More" },
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
    return <Link href={item.href} className={rowItemWrapperClasses}>{content}</Link>;
  }
  return <div className={rowItemWrapperClasses}>{content}</div>;
}

export default function WhatWeOfferService({
  heading = "What We Offer",
  paragraph = "HomeCaring provides professional home care services, tailored to your needs.",
  column1 = defaultColumn1,
  column2 = defaultColumn2,
}: WhatWeOfferServiceProps) {
  return (
    <div> </div>
    // <section className="w-full ">
    //     {/*  gap-8 sm:gap-12 md:gap-16 lg:gap-20 */}
    //   <div className=" max-w-8xl   px-4  sm:px-8  lg:px-32 py-8 lg:py-1">
    //     <h2 className="text-center mb-6 text-2xl font-bold tracking-tight text-[#2c2d2e] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
    //       {heading}
    //     </h2>
    //     <p className="mx-auto mt-8  max-w-5xl text-center text-base  text-[#3A3F46] dark:text-zinc-400 sm:text-lg">
    //       {paragraph}
    //     </p>
    //     <div className=" grid gap-x-4 sm:mt-10 sm:gap-x-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-16">
    //       <div className="flex flex-col">
    //         {column1.map((item, i) => (
    //           <RowItem key={i} item={item} />
    //         ))}
    //       </div>
    //       <div className="flex flex-col">
    //         {column2.map((item, i) => (
    //           <RowItem key={i} item={item} />
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
}
