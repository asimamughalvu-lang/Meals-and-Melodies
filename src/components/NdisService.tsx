import Image from "next/image";

export type SubHeadingItem = {
  title: string;
  text: string;
};

type PersonalisedCareProps = {
  heading?: string;
  paragraph?: string;
  subHeadings?: SubHeadingItem[];
  imageSrc?: string;
  imageAlt?: string;
  cardHeading?: string;
  cardParagraph?: string;
};

export default function PersonalisedCare({
  imageSrc = "https://www.homecaring.com.au/wp-content/uploads/2025/06/cuppa-tea.jpg",
  imageAlt = "Care and support",
  cardHeading = "NDIS Service Provider",
  cardParagraph = "HomeCaring is a National Disability Insurance Scheme provider, which means that you can ensure that you get an organisation that sees your needs and is committed to helping you meet them. HomeCaring is proud to offer NDIS support, whether we can help with a smaller package that requires minimal assistance to a larger package that involved wraparound care. As part of our service, you’ll have unlimited access to a personalised suite of supports with our helpful and friendly support team.",

}: PersonalisedCareProps) {
  // return (
  //   <section
  //     className=" px-4 sm:px-6 lg:px-32 py-10 sm:py-16"
     
  //   >
  //    {/* <div className=" "
  //     style={{ backgroundColor: "rgba(229, 249, 251, 0.40)" }}
  //     >
  //        <div className="relative min-h-screen w-full overflow-hidden   mb-12">
  //         <Image
  //           src={imageSrc}
  //           alt={imageAlt}
  //           fill
  //           className="object-cover"
  //           sizes="(max-width: 1020px) 100vw, 100vw"
  //         />
  //          <div className="absolute left-10 top-[330px]  p-10 w-full max-w-md  justify-center -translate-y-1/2 rounded-lg bg-white/80   ">
  //           <h2 className="text-xl font-bold tracking-tight mb-10 text-[#F2711C] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
  //             {cardHeading}
  //           </h2>
  //           <p className="mt-3 text-sm leading-relaxed text-[#3A3F46] sm:text-base">
  //             {cardParagraph}
  //           </p>
  //         </div> 
  //       </div> 
     
    
  //     </div> */}
  //   </section>
  // );
}
