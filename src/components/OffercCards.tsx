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
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/heart.png",
    iconAlt: "",
    heading: "Health & Wellbeing",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Individuals who qualify for this level of support will be able to get help with daily personal care and activities such as those that HomeCaring can provide. ",
  },
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/check.png",
    iconAlt: "   ",
    heading: " Health & Wellbeing",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Disabilities don’t restrict some people from successfully obtaining a position in a company, and NDIS support can assist with keeping this employment and finding it in the first place. ",
  },
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/speech.png",
    iconAlt: "",
    heading: " Social Interaction",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " NDIS approved service providers like HomeCaring can ensure that you maintain connections in the community, which can include behavioural support and therapeutic support for everyday life. ",
  },
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/group.png",
    iconAlt: " ",
    heading: "Education ",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: "NDIS accredited providers like HomeCaring can provide clients with links to community education programmes ",
  },

  {
    iconSrc: "	https://www.homecaring.com.au/wp-content/uploads/2025/06/star.png",
    iconAlt: " ",
    heading: "Daily Living",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " With NDIS support, individuals can get the help that they need with daily supported living in the home. ",
  },
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/shield.png",
    iconAlt: " ",
    heading: "Mobility Equipment",
    buttonLabel: "Get Started",
    buttonHref: "/services",
    paragraph: "  ",
    description: " Whether your loved one needs technology to assist with movement every day or you need modifications to their vehicle to enable them to get around, NDIS can help. ",
  },
];

export default function CardSection({
  heading = "Meals and Melodies",
  paragraph = "The National Disability Insurance Scheme Meals and Melodies is a government program run by the National Disability Insurance Agency Meals and Melodies. It provides funding for people living with disability to access the supports they need to live a full and independent life. With HomeCaring as your provider, NDIS support includes:",
  cards = defaultCards,
}: CardSectionProps) {
  return (
    <section >
      {/* <div className="mx-auto max-w-8xl sm:px-8 lg:px-32">
        <h2 className="text-start text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
          {heading}
        </h2>
        <p className="max-w-5xl text-base leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-[18px] mt-12">
          {paragraph}
        </p>

        <div className="mt-8 grid gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {cards.map((card, i) => (
            <div  
              key={i}
              className="flex  flex-col items-start gap-6 rounded-md bg-[#E7F6EC] p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 sm:gap-8 sm:p-6  md:p-8 md:gap-10"
            >
              <div className="flex flex-1 flex-col items-start gap-6 sm:gap-10">
                {card.iconSrc && (
                  <div className="relative h-16 w-16 shrink-0 rounded-lg sm:h-20 sm:w-20 md:h-24 md:w-24">
                    <Image
                      src={card.iconSrc}
                      alt={card.iconAlt ?? ""}
                      fill
                      className="object-contain"
                      sizes="96px"
                    />
                  </div>
                )}
                <h3 className="text-2xl font-bold transition-colors duration-300 text-gray-700 group-hover:text-white md:text-3xl lg:text-md">
                {card.heading}
                </h3>
                <p className="text-lg font-medium transition-colors duration-300 text-[#3A3F46] dark:text-white/90">
                  {card.description}
                </p>
              </div> 
              //  <Link
              //   href={card.buttonHref}
              //   className="mt-auto inline-flex items-center justify-center rounded-md bg-[#F2711C] px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#F2ECFA] hover:text-zinc-700 sm:px-6 sm:py-3 sm:text-lg md:text-xl"
              // >
              //   {card.buttonLabel}
              // </Link> 
            </div>
          ))}
        </div>
      </div>*/}
    </section>
  );
}
