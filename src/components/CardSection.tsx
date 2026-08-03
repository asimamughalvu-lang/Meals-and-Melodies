import Link from "next/link";
import Image from "next/image";

export type CardItem = {
  iconSrc?: string;
  iconAlt?: string;
  heading: string;
  buttonLabel: string;
  buttonHref: string;
};

type CardSectionProps = {
  heading?: string;
  cards?: CardItem[];
};

const defaultCards: CardItem[] = [
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/house-heart.png",
    iconAlt: "Support",
    heading: "I need to find fun and engaging social outings for elders",
    buttonLabel: "Get Started",
    buttonHref: "/services",
  },

   {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/people-icon.png",
    iconAlt: "Home care",
    heading: "I need to find fun and engaging social outings for elders",
    buttonLabel: "Get Started",
    buttonHref: "/services",
  },
  {
    iconSrc: "https://www.homecaring.com.au/wp-content/uploads/2025/06/plus-icon.png",
    iconAlt: "Support",
    heading: "I need to find capacity-building activities for my NDIS client",
    buttonLabel: "Get Started",
    buttonHref: "/services",
  },
 
];

export default function CardSection({
  heading = "Ready for something new?",
  cards = defaultCards,
}: CardSectionProps) {
  return (
    <section className="w-full bg-zinc-50 py-10 dark:bg-zinc-900 sm:py-16">
      {/* <div className="mx-auto max-w-8xl sm:px-8 lg:px-32">
        <h2 className="text-start text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
          {heading}
        </h2>
       
        {/* <div className="mt-8 grid gap-6 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 ">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex min-h-[280px] flex-col items-start gap-6 rounded-md bg-[#E7F6EC] p-5 shadow-sm dark:border-zinc-700 dark:bg-zinc-800 sm:gap-8 sm:p-6 md:min-h-[320px] md:p-8 md:gap-10"
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
                <h3 className="text-lg font-semibold leading-snug text-[#3A3F46] dark:text-white sm:text-xl md:text-[22px]">
                  {card.heading}
                </h3>
              </div>
              <Link
                href={card.buttonHref}
                className="mt-auto inline-flex items-center justify-center rounded-md bg-[#F2711C] px-5 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#F2ECFA] hover:text-zinc-700 sm:px-6 sm:py-3 sm:text-lg md:text-xl"
              >
                {card.buttonLabel}
              </Link>
            </div>
          ))}
        </div> 
        
      </div> */}
    </section>
  );
}
