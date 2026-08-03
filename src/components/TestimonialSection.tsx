"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaQuoteRight, FaStar } from "react-icons/fa";

export type TestimonialItem = {
  quote: string;
  imageSrc: string;
  imageAlt: string;
  name: string;
  rating: number; // 1-5
};

type TestimonialSectionProps = {
  heading?: string;
  testimonials?: TestimonialItem[];
};

const defaultTestimonials: TestimonialItem[] = [
  {
    quote:
      "The care and support we received was outstanding. The team went above and beyond to make us feel comfortable and valued.",
    imageSrc: "/1000x1000%20px.webp",
    imageAlt: "Client",
    name: "Sarah M.",
    rating: 5,
  },
  {
    quote:
      "Professional, kind, and reliable. They have made a real difference in our daily lives. Highly recommend their services.",
    imageSrc: "/HCP-51-1-scaled.webp",
    imageAlt: "Client",
    name: "John D.",
    rating: 5,
  },
  {
    quote:
      "From the first contact to ongoing support, everything has been excellent. Thank you for your dedication and compassion.",
    imageSrc: "/HCP-54-1-scaled.webp",
    imageAlt: "Client",
    name: "Emma L.",
    rating: 5,
  },
  {
    quote: "Outstanding service and genuine care. We couldn't be happier with the support our family receives.",
    imageSrc: "/HCP-57-1-scaled.webp",
    imageAlt: "Client",
    name: "Michael R.",
    rating: 5,
  },
  {
    quote: "Reliable, compassionate, and always there when we need them. A truly wonderful team.",
    imageSrc: "/NDIS-19-1-scaled.webp",
    imageAlt: "Client",
    name: "Lisa K.",
    rating: 5,
  },
  {
    quote: "They have transformed how we manage daily care. Professional and kind in every way.",
    imageSrc: "/1000x1000%20px.webp",
    imageAlt: "Client",
    name: "David P.",
    rating: 5,
  },
  {
    quote: "Outstanding service and genuine care. We couldn't be happier with the support our family receives.",
    imageSrc: "/HCP-57-1-scaled.webp",
    imageAlt: "Client",
    name: "Michael R.",
    rating: 5,
  },
  {
    quote: "Reliable, compassionate, and always there when we need them. A truly wonderful team.",
    imageSrc: "/NDIS-19-1-scaled.webp",
    imageAlt: "Client",
    name: "Lisa K.",
    rating: 5,
  },
  {
    quote: "They have transformed how we manage daily care. Professional and kind in every way.",
    imageSrc: "/1000x1000%20px.webp",
    imageAlt: "Client",
    name: "David P.",
    rating: 5,
  },

];

function TestimonialCard({
  t,
  blurEdge,
}: {
  t: TestimonialItem;
  blurEdge?: "left" | "right";
}) {
  return (
    <div
      className="relative flex min-h-[280px] flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 dark:bg-zinc-900 sm:min-h-[300px] sm:p-6 md:min-h-[320px] md:p-8"
      style={
        blurEdge
          ? {
              WebkitMaskImage:
                blurEdge === "left"
                  ? "linear-gradient(to right, transparent 0%, black 22%, black 100%)"
                  : "linear-gradient(to left, transparent 0%, black 22%, black 100%)",
              maskImage:
                blurEdge === "left"
                  ? "linear-gradient(to right, transparent 0%, black 22%, black 100%)"
                  : "linear-gradient(to left, transparent 0%, black 22%, black 100%)",
              WebkitMaskSize: "100% 100%",
              maskSize: "100% 100%",
              WebkitMaskPosition: "0 0",
              maskPosition: "0 0",
              WebkitMaskRepeat: "no-repeat",
              maskRepeat: "no-repeat",
            }
          : undefined
      }
    >
      <div className="absolute left-4 top-4 text-[#F2711C]">
        <FaQuoteRight className="h-8 w-8 md:h-10 md:w-10" aria-hidden />
      </div>
      <div className="flex justify-center items-center mt-8 sm:mt-10 md:mt-14">
      <p className="mt-12 flex-1 pr-4 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:pr-6 sm:text-base md:pr-10 md:text-lg">
        {t.quote}
      </p>
      </div>
      
      <div className="mb-6 flex items-center mt-8 justify-between gap-3 sm:mb-8 sm:mt-10 md:mb-10 md:mt-14 md:gap-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full sm:h-12 sm:w-12">
            <Image
              src={t.imageSrc}
              alt={t.imageAlt}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <span className="text-base font-semibold text-zinc-900 dark:text-white sm:text-[18px]">
            {t.name}
          </span>
        </div>
        <div className="flex shrink-0 gap-0.5 text-[#FDAB9F]">
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`h-4 w-4 ${
                i < t.rating ? "fill-current" : "fill-zinc-200 dark:fill-zinc-600"
              }`}
              aria-hidden
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Mobile: 1 slide, Tablet (md): 2 slides, Desktop (lg): 3 slides
function getSlidesPerPage(width: number) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
}

export default function TestimonialSection({
  heading = "What Our Clients Say",
  testimonials = defaultTestimonials,
}: TestimonialSectionProps) {
  const [slidesPerPage, setSlidesPerPage] = useState(1);
  const totalPages = Math.ceil(testimonials.length / slidesPerPage);
  const [page, setPage] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const start = page * slidesPerPage;
  const visible = testimonials.slice(start, start + slidesPerPage);

  // Responsive: mobile 1, tablet 2, desktop 3
  useEffect(() => {
    const update = () => setSlidesPerPage(getSlidesPerPage(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Page ko valid range mein rakhna jab slidesPerPage change ho
  useEffect(() => {
    if (page >= totalPages && totalPages > 0) setPage(totalPages - 1);
  }, [slidesPerPage, totalPages, page]);

  const DRAG_THRESHOLD = 50;

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragStartX(e.clientX);
  };
  const handleMouseUp = (e: React.MouseEvent) => {
    if (dragStartX === null) return;
    const dx = e.clientX - dragStartX;
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      if (dx > 0) setPage((p) => (p - 1 + totalPages) % totalPages);
      else setPage((p) => (p + 1) % totalPages);
    }
    setDragStartX(null);
  };
  const handleMouseLeave = () => setDragStartX(null);

  // Touch swipe for mobile
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > DRAG_THRESHOLD) {
      if (dx > 0) setPage((p) => (p - 1 + totalPages) % totalPages);
      else setPage((p) => (p + 1) % totalPages);
    }
    setTouchStartX(null);
  };

  // Auto-move slides every 5 seconds
  useEffect(() => {
    if (totalPages <= 1) return;
    const id = setInterval(() => {
      setPage((p) => (p + 1) % totalPages);
    }, 5000);
    return () => clearInterval(id);
  }, [totalPages]);

  return (
    <section className="w-full lg:px-32">
      {/* <div className="mx-auto max-w-8xl rounded-lg bg-[#E7F6EC] py-10 sm:py-14 md:py-16"> */}
        {/* <h2 className="text-center text-2xl font-bold tracking-tight text-[#2c2d2e] py-6 dark:text-white sm:text-3xl sm:py-8 md:text-4xl md:py-10 lg:text-5xl xl:text-[66px]">
          {heading}
        </h2> */}

        {/* Mobile: 1 slide, Tablet: 2 slides, Desktop: 3 slides. Drag/swipe to change */}
        {/* <div
          className="mt-8 grid w-full cursor-grab select-none grid-cols-1 gap-5 active:cursor-grabbing sm:mt-10 sm:gap-6 md:grid-cols-2 md:gap-10 md:mt-12 lg:grid-cols-[1fr_2fr_1fr] lg:gap-10"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Testimonials slider - drag or swipe to change slides"
        >
          {visible.map((t, i) => {
            const isLeft = i === 0;
            const isRight = i === 2;
            const isCenter = i === 1;
            const showHalfOnLg = visible.length === 3 && (isLeft || isRight);

            const card = (
              <TestimonialCard
                key={start + i}
                t={t}
                blurEdge={
                  visible.length === 3
                    ? isLeft
                      ? "left"
                      : isRight
                        ? "right"
                        : undefined
                    : undefined
                }
              />
            );

            if (showHalfOnLg) {
              return (
                <div
                  key={start + i}
                  className={`overflow-hidden ${isLeft ? "flex justify-end" : "flex justify-start"}`}
                >
                  <div className="min-w-[200%] shrink-0">{card}</div>
                </div>
              );
            }
            return <div key={start + i}>{card}</div>;
          })}
        </div> */}

        {/* {totalPages > 1 && (
          <div className="mt-6 items-center flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setPage(i)}
                className={`h-2 rounded-full transition ${
                  i === page ? "w-8 bg-[#F2711C]" : "w-2 bg-zinc-300 dark:bg-zinc-600"
                }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
        )} */}
      {/* </div> */}
     </section>
  );
}
