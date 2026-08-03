import Link from "next/link";
import Image from "next/image";

export type CardItem = {
  iconSrc?: string;
  iconAlt?: string;
  heading: string;
  buttonLabel: string;
  buttonHref: string;
  paragraph: string;
  description: string;
};

type CardSectionProps = {
  heading?: string;
  paragraph?: string;
  cards?: CardItem[];
};

const defaultCards: CardItem[] = [
  {
    iconSrc: "",
    iconAlt: "",
    heading: "Personal Care",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Support with daily living, hygiene and mobility ",
  },
  {
    iconSrc: "",
    iconAlt: "   ",
    heading: "  Domestic Assistance ",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Help with cleaning, cooking, laundry and more ",
  },
  {
    iconSrc: "",
    iconAlt: "",
    heading: "  Nursing Care",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Clinical support from qualified nurses, including medication management ",
  },
  {
    iconSrc: "",
    iconAlt: " ",
    heading: "Social Support",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Encouraging connection through community and companionship ",
  },

  {
    iconSrc: "",
    iconAlt: " ",
    heading: "Respite Care",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Short-term care to give primary caregivers a break ",
  },
  {
    iconSrc: "",
    iconAlt: " ",
    heading: "Specialist Care",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Tailored support for complex health and disability needs ",
  },
];

export default function CardSection({
  heading = "What We Offer",
  paragraph = "From everyday help to complex care, our services are designed to meet you where you are and grow with you as your needs change.",
  cards = defaultCards,
}: CardSectionProps) {
  return (
  <div></div>
    // <section className="w-full bg-zinc-50 py-10 dark:bg-zinc-900 sm:py-16">
    //   <div className="mx-auto max-w-8xl sm:px-8 lg:px-32">
    //     {/* <h2 className="text-start text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
    //       {heading}
    //     </h2> */}
    //     {/* <p className="max-w-5xl text-base mt-6 leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-[18px]">
    //       {paragraph}
    //     </p> */}

    //     {/* <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
    //       {cards.map((card, i) => (
    //         <div  
    //           key={i}
    //           className="flex  flex-col items-start gap-6 rounded-md bg-[#E7F6EC] p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 sm:gap-8 sm:p-6  md:p-8 md:gap-10"
    //         >
    //           <div className="flex flex-1 flex-col items-start gap-6 sm:gap-10">
    //             {card.iconSrc && (
    //               <div className="relative h-16 w-16 shrink-0 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24">
    //                 <Image
    //                   src={card.iconSrc}
    //                   alt={card.iconAlt ?? ""}
    //                   fill
    //                   className="object-contain"
    //                   sizes="96px"
    //                 />
    //               </div>
    //             )}
    //             <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-white md:text-3xl lg:text-xl">
    //             {card.heading}
    //             </h3>
    //             <p className="text-lg font-medium transition-colors duration-300 text-[#3A3F46] dark:text-white/90">
    //               {card.description}
    //             </p>
    //           </div>
    //           {/* <Link
    //             href={card.buttonHref}
    //             className="mt-auto inline-flex items-center justify-center rounded-md bg-[#F2711C] px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#F2ECFA] hover:text-zinc-700 sm:px-6 sm:py-3 sm:text-lg md:text-xl"
    //           >
    //             {card.buttonLabel}
    //           </Link> 
    //         </div>
    //       ))}
    //     </div> */}
    //   </div>
    // </section>
  );
}
