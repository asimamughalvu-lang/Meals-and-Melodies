"use client";

import { useState } from "react";
import Link from "next/link";
import { IoCloseSharp } from "react-icons/io5";
import { LuPlus } from "react-icons/lu";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqsSectionProps = {
  heading?: string;
  faqs?: FaqItem[];
};

const defaultFaqs: FaqItem[] = [
  {
    question: "What is the Meals & Melodies team?",
    answer:
      "Meals & Melodies is our social engagement program that brings people together around great food and live or curated music. Our team plans outings, shared meals and relaxed activities so participants can build confidence, friendships and community connections in a welcoming setting.",
  },
  {
    question: "Who can join Meals & Melodies outings?",
    answer:
      "We support older Australians, people living with disability and anyone who would like meaningful social connection with support on the day. If you have NDIS community participation or similar goals, we can align activities with your plan. Get in touch and we’ll help you find the right group or session.",
  },
  {
    question: "What happens at a typical session?",
    answer:
      "Expect a friendly welcome, a shared meal or picnic-style gathering, and music—whether that’s a performer, sing-along or background tunes that suit the group. Sessions are designed to be inclusive, unhurried and fun, with staff on hand to support participation at everyone’s pace.",
  },
  {
    question: "Can you cater for dietary needs and allergies?",
    answer:
      "Yes. When you register, tell us about dietary requirements, allergies, texture-modified meals or cultural preferences. Our team works with venues and caterers so everyone can enjoy the meal safely and comfortably.",
  },
  {
    question: "How do I book or get more information?",
    answer:
      "Contact our Meals & Melodies team to discuss upcoming dates, locations and any support you need on the day. We’ll walk you through eligibility, funding options if applicable, and how to reserve your place.",
  },
  {
    question: "Is transport and accessibility supported?",
    answer:
      "We aim to choose venues and activities that are as accessible as possible. Let us know your mobility, sensory or communication needs when you enquire—we can discuss transport options, pacing of the day and any extra support so you can take part with confidence.",
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
    <section className="w-full bg-[#FFEBD9]  py-10 dark:border-zinc-800 dark:bg-zinc-950 sm:px-10 sm:py-16">
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
                  className="flex w-full items-center justify-between gap-3 px-3  lg:px-10  py-6 text-left hover:bg-gray-50 sm:gap-4 sm:py-8 md:py-10"
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
                    <p className="pb-6 text-sm text-zinc-600 dark:text-zinc-400 sm:pb-8 sm:text-base md:pr-8 md:text-[18px] lg:pr-12">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 sm:px-8 sm:py-4 sm:text-base"
            style={{ backgroundColor: "#F2711C" }}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
