import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";
console.log("hhh");

const pricingPlans = [
  {
    title: "Incursions",
    subtitle: "We come to you!",
    price: "$39",
    period: "pp",
    isCustom: false,
    minimum: "Minimum 25 persons",
    features: [
      "Chef-prepared gourmet meal served at your facility",
      "Live vocal performance by an industry professional",
      "Fully set up and delivered by our team",
      "Minimum 25 persons",
    ],
  },
  {
    title: "Excursions",
    subtitle: "We meet you at a location agreed between us",
    price: "$45",
    period: "pp",
    featured: true,
    isCustom: false,
    minimum: "Minimum 20 persons",
    features: [
      "Everything in Incursions",
      "Hosted at a location agreed between us",
      "Gourmet meal and live themed performance",
      "Group transport coordination support",
      "Minimum 20 persons",
    ],
  },
  {
    title: "Special Events",
    subtitle: "Held at the New Farm Bistro or at your venue",
    price: "Contact us for pricing",
    period: "",
    isCustom: true,
    minimum: "Minimum numbers vary by event",
    features: [
      "Held at New Farm Bistro or your own venue",
      "Themed experiences: Bollywood, French Bastille, Mexican Fiesta & more",
      "Gourmet catering and a full live themed performance",
      "Custom pricing based on venue and group size",
    ],
  },
];

export const metadata = {
  title: "Pricing | HomeCaring",
  description:
    "View HomeCaring pricing options for personalised care and disability support services.",
};

function IncludedInEveryPackage() {
  return (
    <div className="mt-6 border-t border-zinc-100 pt-6 text-left">
      <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
        <span className="font-semibold text-[#3A3F46]">Gourmet Catering: </span>
        Chef-prepared meals, and top quality vocal entertainment by an industry
        professional.
      </p>
    </div>
  );
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#FFEBD9] ">
      <section
        className="w-full px-4 py-14 sm:px-8 sm:py-16 lg:px-32"
        style={{ backgroundColor: "rgba(229, 249, 251, 0.40)" }}
      >
        <div className="mx-auto max-w-8xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F2711C]">
            Pricing
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#3A3F46] sm:text-5xl lg:text-[66px]">
            Premium Experiences Tailored to Your Community
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#3A3F46] sm:text-lg">
            We believe in providing exceptional value without the
            "one-size-fits-all" approach. Because every facility has different
            requirements—from group sizes to specific dietary needs and travel
            distances—we provide custom quotes to ensure you get the best
            possible experience for your budget.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:px-32">
        <div className="mx-auto grid max-w-8xl gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article
              key={plan.title}
              className={`rounded-3xl border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg sm:p-8 ${
                plan.featured
                  ? "border-zinc-200 bg-white"
                  : "border-zinc-200 bg-white"
              }`}
            >
              {plan.featured ? (
                <p className="mb-4 inline-flex rounded-full bg-[#F2711C] px-3 py-1 text-xs font-semibold text-white">
                  Most Popular
                </p>
              ) : null}

              <h2 className="text-2xl font-bold text-[#3A3F46]">
                {plan.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-600">{plan.subtitle}</p>

              <div className="mt-5 flex items-end gap-1">
                {plan.isCustom ? (
                  <span className="text-2xl font-bold text-[#F2711C] sm:text-3xl">
                    {plan.price}
                  </span>
                ) : (
                  <>
                    <span className="text-4xl font-bold text-[#F2711C]">
                      {plan.price}
                    </span>
                    <span className="pb-1 text-sm text-zinc-500">
                      {plan.period}
                    </span>
                  </>
                )}
              </div>
              {plan.minimum ? (
                <p className="mt-1 text-xs font-medium text-zinc-500">
                  {plan.minimum}
                </p>
              ) : null}

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[#3A3F46] sm:text-base"
                  >
                    <FaCheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#F2711C]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/services"
                className="mt-8 inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ backgroundColor: "#F2711C" }}
              >
                Choose Plan
              </Link>
              <IncludedInEveryPackage />
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-[#424242] px-4 py-12 text-white sm:px-8 sm:py-16 lg:px-32">
        <div className="mx-auto flex max-w-8xl flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
              Need a custom quote for your care plan?
            </h2>
            <p className="mt-3 text-sm text-white/85 sm:text-base">
              Speak with our team for a personalised estimate based on your
              location, care goals and level of support.
            </p>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#3A3F46] transition hover:bg-zinc-100"
          >
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
}
