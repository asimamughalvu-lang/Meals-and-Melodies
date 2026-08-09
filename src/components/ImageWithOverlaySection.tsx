import Image from "next/image";
import Link from "next/link";

type ImageWithOverlaySectionProps = {
  imageSrc?: string;
  imageAlt?: string;
  heading?: string;
  buttonLabel?: string;
  buttonHref?: string;
  paragraph?: string;
};

export default function ImageWithOverlaySection({
  imageSrc = "/Seaside table with C.png",
  imageAlt = "Section image",
  heading = "Tell us about your group.",
  paragraph = "Answer a few questions and Sandra or Val will be in touch to get the ball rolling.",
  buttonHref = "/contact-us",
}: ImageWithOverlaySectionProps) {
  return (
    <section className="w-full overflow-hidden bg-[#FFEBD9] py-10 sm:py-16">
      {/* max-w-6xl + mx-auto = block center; lg:translate-x-[8%] = image -20% overlap balance */}
      <div className="relative mx-auto flex w-full max-w-8xl flex-col items-stretch rounded-2xl px-4 sm:px-8 md:px-16 lg:flex-row lg:translate-x-[8%] lg:px-24">
        {/* Left: cyan div — mobile pe upar, desktop pe left */}
        <div
          className="flex min-h-[380px] flex-1 flex-col justify-center gap-3 rounded-t-2xl px-6 py-8 z-50 sm:min-h-[300px] sm:gap-4 sm:px-8 sm:py-10 md:min-h-[320px] lg:h-[480px] lg:min-w-[30%] lg:rounded-tr-[160px] lg:rounded-bl-2xl lg:rounded-tl-2xl lg:px-10 lg:py-12 lg:gap-5 xl:h-[550px]"
          style={{ backgroundColor: "#FFE3C2" }}
        >
          <h2 className="text-xl font-bold leading-tight text-gray-600 sm:text-2xl md:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="text-base font-bold leading-tight text-gray-600 sm:text-lg md:text-xl">
            {paragraph}
          </p>
          <div className="mt-8 flex justify-start sm:mt-12">
            <Link
              href={buttonHref ?? "/services"}
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
              style={{ backgroundColor: "#F2711C" }}
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Image: mobile pe neeche full width, desktop pe 20% overlap */}
        <div className="relative h-[280px] w-full shrink-0 overflow-hidden rounded-b-2xl sm:h-[350px] md:h-[420px] lg:h-[480px] lg:w-[70%] lg:min-w-[280px] lg:-translate-x-[20%] lg:rounded-r-2xl xl:h-[550px]">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-left lg:object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
