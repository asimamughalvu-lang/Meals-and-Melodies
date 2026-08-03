"use client";

import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

export type FaqItem = {
  question: string;
  answer: string | React.ReactNode;
};

type FaqsSectionProps = {
  heading?: string;
  faqs?: FaqItem[];
};

const defaultFaqs: FaqItem[] = [
  {
    question: "What does the Meals & Melodies team do?",
    answer:
      "Our Meals & Melodies team designs social outings and shared dining experiences with music at the heart of each event. We focus on connection, confidence and joy—whether that’s a picnic, long-table lunch or an indoor gathering with live or curated tunes.",
  },
  {
    question: "How is this different from a regular day program?",
    answer:
      "Meals & Melodies is built around gastronomy and music as the main event, not an afterthought. Sessions are paced for conversation, participation and sensory enjoyment, with support staff who understand disability, ageing and accessibility.",
  },
  {
    question: "Can NDIS funding cover Meals & Melodies activities?",
    answer:
      "Many participants use community participation or capacity-building supports from their plan for group social activities, depending on goals and approved funding. We can discuss how your plan aligns with our outings—contact us for a clear, no-pressure conversation.",
  },
  {
    question: "What should I bring on the day?",
    answer:
      "We’ll send a simple checklist before each outing (e.g. hat, water bottle, any personal items). If you need medication support or specific equipment, tell the team when you book so we can plan with you and your support network.",
  },
  {
    question: "How do families and support coordinators stay informed?",
    answer:
      "We provide clear communication about dates, venues, dietary notes and any changes. Families and coordinators are welcome to reach out to the Meals & Melodies team at any time for updates or to discuss individual support needs.",
  },
  {
    question: "How do I join the next outing?",
    answer:
      "Get in touch via our website or phone. We’ll confirm availability, discuss your goals and any support required, and reserve your place. We’re happy to answer questions before you commit to anything.",
  },
];

export default function FaqsSection({
  heading = "Meals & Melodies Teams — FAQs",
  faqs = defaultFaqs,
}: FaqsSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full bg-white px-4 py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-6xl py-10 sm:px-8 sm:py-16 md:py-20 lg:px-12">
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#F2711C] dark:text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-[66px]">
          {heading}
        </h2>

        <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800 sm:mt-10">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="border-b border-zinc-200 last:border-b-0 dark:border-zinc-800"
              >
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-center justify-between gap-3 py-6 text-left hover:bg-gray-50 sm:gap-4 sm:py-8 md:py-10"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className="text-left text-base font-medium text-[#3A3F46] dark:text-white sm:text-lg md:text-[22px]">
                    {faq.question}
                  </span>
                  <span className="shrink-0" aria-hidden>
                    {isOpen ? (
                      <IoCloseSharp className="h-5 w-5" />
                    ) : (
                      <LuPlus className="h-5 w-5" />
                    )}
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="whitespace-pre-line pb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:pb-8 sm:text-base md:pr-8 md:text-[18px] lg:pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
