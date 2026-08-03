import Link from "next/link";
import Image from "next/image";

export type CardItem = {
  iconSrc?: string;
  iconAlt?: string;
  heading: string;
  buttonLabel: string;
  buttonHref: string;
  description: string;
};

type CardSectionProps = {
  heading?: string;
  cards?: CardItem[];
};

const defaultCards: CardItem[] = [
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/handshake.png",
    iconAlt: "Care",
    heading: "Respect",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    description: "We honour each person’s right to make decisions about their own care",
  },
  {

    iconSrc:

      "https://www.homecaring.com.au/wp-content/uploads/2025/06/heart.png",

    iconAlt: "Home care",

    heading: " Empathy ",

    buttonLabel: "Get Started",

    buttonHref: "/services",

    description: " We believe in providing compassionate, attentive support ",

  },
  {

    iconSrc:

      "https://www.homecaring.com.au/wp-content/uploads/2025/06/shield.png",

    iconAlt: "Support",

    heading: " Integrity ",

    buttonLabel: "Get Started",

    buttonHref: "/services",

    description:

      " We are committed to honest, transparent and ethical practices ",

  },
  {

    iconSrc:

      "https://www.homecaring.com.au/wp-content/uploads/2025/06/group.png  ",

    iconAlt: "Support",

    heading: " Excellence",

    buttonLabel: "Get Started",

    buttonHref: "/services",

    description:

      " We deliver the highest standard of care through a highly skilled team   ",

  },
  {

    iconSrc:

      "   https://www.homecaring.com.au/wp-content/uploads/2025/06/star-1.png ",

    iconAlt: "Support",

    heading: "Collaboration ",

    buttonLabel: "Get Started",

    buttonHref: "/services",

    description:

      " We work closely with clients, families and the community to enhance wellbeing   ",

  },
  // ... baki cards bhi isi tarah
];

export default function CardSection({
  heading = "Our Values",
  cards = defaultCards,
}: CardSectionProps) {
  return (
    <div></div>
    // <section className="w-full bg-zinc-50 py-10 dark:bg-zinc-900 sm:py-16">
    //   {/* <div className="mx-auto max-w-8xl px-4 sm:px-8 lg:px-32">
    //   <h2 className="text-start font-bold tracking-tight text-[#F2711C] dark:text-white text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
    //       {heading}
    //     </h2> 

    //      <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
    //       {cards.map((card, i) => (
    //         <div
    //           key={i}
    //           className="group relative flex min-h-[350px] flex-col items-start justify-between rounded-md p-6 shadow-sm transition-all duration-300 
    //                      bg-[#E7F6EC] hover:bg-[#444E5E]" // Default Light, Hover Dark
    //         >
    //           <div className="flex flex-col items-start gap-4">
    //             {/* Icon: Hover par gayab ho jayega 
    //             {card.iconSrc && (
    //               <div className="relative h-16 w-16 transition-opacity duration-300 group-hover:opacity-0 group-hover:h-0">
    //                 <Image
    //                   src={card.iconSrc}
    //                   alt={card.iconAlt ?? ""}
    //                   fill
    //                   className="object-contain"
    //                   sizes="64px"
    //                 />
    //               </div>
    //             )}

    //             {/* Heading: Hover par white ho jayega 
    //             <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-white md:text-3xl lg:text-4xl">
    //               {card.heading}
    //             </h3>

    //             {/* Description: Hover par white ho jayega 
    //             <p className="text-lg font-medium transition-colors duration-300 text-[#3A3F46] group-hover:text-white/90">
    //               {card.description}
    //             </p>
    //           </div>

    //           {/* Button: Default par hidden (opacity-0), Hover par visible 
    //           <div className="w-full transition-all duration-300 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
    //             <Link
    //               href={card.buttonHref}
    //               className="inline-flex items-center justify-center rounded-md bg-[#F2711C] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#00acc0]"
    //             >
    //               {card.buttonLabel}
    //             </Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div> 
    //   </div> */}
    // </section>
  );
}