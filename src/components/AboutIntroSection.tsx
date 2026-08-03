import Image from "next/image";

export type SubHeadingItem = {
  title: string;
  text: string;
};

type AboutIntroSectionProps = {
  heading?: string;
  paragraph?: string;
  subHeadings?: SubHeadingItem[];
  imageSrc?: string;
  imageAlt?: string;
  cardHeading?: string;
  cardParagraph?: string;
  ourStoryHeading?: string;
  ourStoryParagraph?: string;
};

const defaultSubHeadings: SubHeadingItem[] = [
  { title: "Timely, Clear Communication", text: "We’re always here when you need us. Our local teams communicate in the way that works best for you – promptly, respectfully and in the language and format you prefer." },
  { title: "Care That’s Local to You", text: "Backed by national support, your care is delivered by someone local – a trusted team from your community, focused on providing personalised service and better outcomes." },
  { title: "Trusted Clinical and Everyday Care", text: "Whether your care needs are complex or part of everyday life, they deserve expert attention. Your local team brings deep clinical experience and a proactive approach that focuses on prevention, wellbeing and long-term health. " },
];

export default function AboutIntroSection({
  heading = "The Meals and Melodies Team",
  paragraph = "At HomeCaring, your needs always come first. As part of a trusted national network supporting more than 10,000 clients across Australia, we combine local understanding with the backing of strong systems, training and support. You’ll get personalised care, compassionate service and the freedom to live comfortably and independently in your own home.",
  subHeadings = defaultSubHeadings,
  imageSrc = "https://www.homecaring.com.au/wp-content/uploads/2025/06/cuppa-tea.jpg",
  imageAlt = "Care and support",
  cardHeading = "Our Story",
  cardParagraph = "HomeCaring was founded to provide compassionate, client-centred support for individuals who want to live independently at home. Michaela Brown, one of our co-founders, has been deeply committed to quality care throughout her career. After seeing firsthand the difference that personalised, empathetic support can make, she helped establish HomeCaring as a way to empower others with the choice and control they deserve. Today, our team works to make that vision a reality across Australia, offering care that aligns with each person’s unique goals.",
  ourStoryHeading = "Our Mission",
  ourStoryParagraph = "To make a meaningful difference in the lives of those we serve. We are driven to provide respectful, reliable and high-quality care that gives people the ability to shape their support according to their needs.",
}: AboutIntroSectionProps) {
  return (
    <section
      // className="w-full px-4 py-10 sm:px-6 lg:px-32 sm:py-16"
      // style={{ backgroundColor: "rgba(229, 249, 251, 0.40)" }}
    >
      {/* <div className="mx-auto max-w-6xl  space-y-8 sm:space-y-10 lg:space-y-12">
        <h2 className="text-2xl font-normal tracking-tight text-[#3A3F46] dark:text-white sm:text-3xl md:text-4xl lg:text-[66px]">
          {heading}
        </h2>

        <p className="max-w-5xl text-base leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-[18px]">
          {paragraph}
        </p>

        <div className="space-y-6">
          {subHeadings.map((item, i) => (
            <div key={i} className="flex flex-col gap-2 space-y-4">
              <h3 className="text-lg font-medium  text-[#3A3F46] dark:text-green-400 sm:text-[28px]">
                {item.title}
              </h3>
              <p className="mt-2 text-lg leading-relaxed text-[#3A3F46] dark:text-zinc-400 sm:text-[18px]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="flex flex-col justify-center mx-auto max-w-8xl">

        {/* <div className="relative mt-10 aspect-21/12 w-full overflow-hidden sm:mt-12 md:aspect-2/1">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1020px) 100vw, 100vw"
          />
                {/* <div className="absolute left-10 top-[480px]  px-16 py-16 w-full max-w-xs  justify-center -translate-y-1/2 rounded-lg bg-white  shadow-lg sm:right-6 sm:max-w-sm sm:min-h-[200px]  md:max-w-md md:min-h-[240px] lg:max-w-lg lg:min-h-[280px] xl:min-h-[570px]">
          <h2 className="text-xl font-bold tracking-tight mb-10 text-[#F2711C] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {cardHeading}
          </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#3A3F46] sm:text-base">
              {cardParagraph}
            </p>
          </div> 
        </div> */}

        {/* <div className="mx-auto max-w-6xl pt-16  ">
          <h1 className="text-xl font-bold tracking-tight mb-10 text-[#3A3F46] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {ourStoryHeading}
          </h1>
          <p className=" text-sm leading-relaxed text-[#3A3F46] sm:text-base">
            {ourStoryParagraph}
          </p>
        </div>

      </div> */}

    </section>
  );
}
