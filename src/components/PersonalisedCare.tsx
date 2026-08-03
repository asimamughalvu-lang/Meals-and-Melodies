import Image from "next/image";

type PersonalisedCareProps = {
  heading?: string;
  paragraph?: string;
  paragraph2?: string;
  paragraph3?: string;
  listItem1?: string;
  listItem2?: string;
  listItem3?: string;
  imageSrc?: string;
  imageAlt?: string;
  cardHeading?: string;
  cardParagraph?: string;
};

const bodyText =
  "text-sm leading-relaxed text-[#3A3F46] sm:text-base dark:text-zinc-400";

export default function PersonalisedCare({
  heading = "A Registered NDIS Provider Who Cares",
  paragraph = "Choosing a registered NDIS provider means peace of mind. We meet strict quality and safety standards and our experienced teams are trained to deliver services that are respectful and reliable.",
  paragraph2 = "We'll work closely with you, your family and your case managers to:",
  paragraph3 = "From your first conversation with us, you'll have a dedicated team who listens, supports and advocates for you.",
  listItem1 = "Create a care plan that meets your needs",
  listItem2 = "Provide care that is respectful and reliable",
  listItem3 = "Support you to live independently in your own home",
  imageSrc = "https://www.homecaring.com.au/wp-content/uploads/2025/06/cuppa-tea.jpg",
  imageAlt = "Care and support",
  cardHeading = "Personalised Care, Designed Around You",
  cardParagraph = "Providing care that has been completely personalised for every individual is important to us here at HomeCaring. We recognise every individual as the unique person that they are, and it's why we avoid a solution that is \"one size fits all\". Our care plans are person-centred, not plan-centred, which means that you get a service that shines a light on what you need and delivers a solution for it.",
}: PersonalisedCareProps) {
  return (
    <section >
      {/* <div
        className="rounded-lg"
        style={{ backgroundColor: "rgba(229, 249, 251, 0.4)" }}
      >
        <div className="relative mb-12 min-h-screen w-full overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1020px) 100vw, 100vw"
          />
          <div className="absolute left-10 top-[330px] w-full max-w-md -translate-y-1/2 rounded-lg bg-white/80 p-10">
            <h2 className="mb-4 text-xl font-bold tracking-tight text-[#F2711C] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              {cardHeading}
            </h2>
            <p className={bodyText}>{cardParagraph}</p>
          </div>
        </div>

        <div className="px-4 pb-10 sm:pb-16">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-[#F2711C] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            {heading}
          </h2>
          <p className={bodyText}>{paragraph}</p>
          <p className={`mt-8 ${bodyText}`}>{paragraph2}</p>
          <ul className="list-inside list-disc space-y-1 py-8">
            <li className={bodyText}>{listItem1}</li>
            <li className={bodyText}>{listItem2}</li>
            <li className={bodyText}>{listItem3}</li>
          </ul>
          <p className={bodyText}>{paragraph3}</p>
        </div>
      </div> */}
    </section>
  );
}
