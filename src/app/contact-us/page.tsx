"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const TEAL = "#F2711C";
const TEAL_LIGHT = "#FFE3C2";
const TEAL_PALE = "#F0FBFC";
const SUB = "#6B7280"; // gray-500

// === EmailJS keys ===
// EmailJS dashboard se yeh teeno cheezein copy karke yahan paste kar dein.
// Service ID: Email Services tab se
// Template ID: Email Templates tab se
// Public Key: Account tab se
const EMAILJS_SERVICE_ID = "service_t8n5pnh";
const EMAILJS_TEMPLATE_ID = "template_rokyfvl";
const EMAILJS_PUBLIC_KEY = "u8WP3u1w5--k8YihS";

const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-[15px] text-gray-700 shadow-sm outline-none transition placeholder:text-gray-400 focus:border-[#F2711C] focus:ring-2 focus:ring-[#F2711C]/20";

const labelClass = "mb-1.5 block text-sm font-semibold text-gray-700";

function SectionHeading({ step, title }: { step: string; title: string }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <span
        className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-bold text-white"
        style={{ backgroundColor: TEAL }}
      >
        {step}
      </span>
      <h3 className="text-sm font-bold uppercase tracking-wide text-gray-500">
        {title}
      </h3>
    </div>
  );
}

type FormState = {
  full_name: string;
  group_name: string;
  location: string;
  phone: string;
  best_time: string;
  email: string;
  event_date: string;
  offsite_place: string;
  participants: string;
  source: string;
};

const initialFormState: FormState = {
  full_name: "",
  group_name: "",
  location: "",
  phone: "",
  best_time: "",
  email: "",
  event_date: "",
  offsite_place: "",
  participants: "",
  source: "",
};

export default function ContactUs({ onClose }: { onClose?: () => void }) {
  const [venue, setVenue] = useState<"your" | "offsite" | "">("");
  const [themed, setThemed] = useState<"yes" | "no" | "">("");
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...form,
          venue:
            venue === "your"
              ? "Your Venue"
              : venue === "offsite"
                ? "Off-site location"
                : "Not specified",
          themed:
            themed === "yes" ? "Yes" : themed === "no" ? "No" : "Not specified",
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );
      setSubmitted(true);
    } catch (err: any) {
      console.error("EmailJS error:", err?.status, err?.text, err);
      setError(
        "Something went wrong, your message could not be sent. Please try again.",
      );
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="mx-auto w-full max-w-xl px-4 py-10 sm:py-14">
        <div className="flex flex-col items-center rounded-2xl bg-[#FFEBD9] px-6 py-16 text-center shadow-[0_2px_40px_rgba(0,0,0,0.06)] sm:px-10">
          <div
            className="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
            style={{ backgroundColor: TEAL_LIGHT }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-700 sm:text-3xl">
            Thank you!
          </h2>
          <p className="mt-3 text-lg" style={{ color: SUB }}>
            Sandra or Val will give you a call very soon!
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            style={{ backgroundColor: TEAL }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#FFEBD9]">
      <div className="mx-auto w-full max-w-2xl px-4 py-10 sm:py-14 bg-white">
        <div className="overflow-hidden rounded-2xl shadow-[0_2px_40px_rgba(0,0,0,0.06)] ring-1 ring-black/5">
          {/* <div className="px-6 py-7 sm:px-10 sm:py-8" style={{ backgroundColor: TEAL_PALE }}>
          <h2 className="text-xl font-bold text-gray-700 sm:text-2xl">
            Tell us about your group
          </h2>
          <p className="mt-1.5 text-sm sm:text-base" style={{ color: SUB }}>
            Answer a few questions and Sandra or Val will be in touch to get
            the ball rolling.
          </p>
        </div> */}

          <form onSubmit={handleSubmit} className="px-6 py-8 sm:px-10 sm:py-9">
            {/* Step 1 — Contact details */}
            <SectionHeading step="1" title="Your details" />
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input
                    type="text"
                    required
                    className={inputClass}
                    value={form.full_name}
                    onChange={(e) => updateField("full_name", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    Group / Company / Organisation
                  </label>
                  <input
                    type="text"
                    className={inputClass}
                    value={form.group_name}
                    onChange={(e) => updateField("group_name", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Location</label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.location}
                  onChange={(e) => updateField("location", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input
                    type="tel"
                    required
                    className={inputClass}
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                  />
                </div>
                <div>
                  <label className={labelClass}>Best time to call</label>
                  <input
                    type="text"
                    placeholder="e.g. Weekday mornings"
                    className={inputClass}
                    value={form.best_time}
                    onChange={(e) => updateField("best_time", e.target.value)}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Email</label>
                <input
                  type="email"
                  required
                  className={inputClass}
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                />
              </div>
            </div>

            <hr className="my-8 border-gray-100" />

            {/* Step 2 — Event details */}
            <SectionHeading step="2" title="Your event" />
            <div className="flex flex-col gap-5">
              <div>
                <label className={labelClass}>
                  What date do you have in mind? (or date range)
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12 August 2026, or a range of dates"
                  className={inputClass}
                  value={form.event_date}
                  onChange={(e) => updateField("event_date", e.target.value)}
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  Please allow for manual entry here — no calendar picker.
                </p>
              </div>

              {/* Venue */}
              <div>
                <label className={labelClass + " mb-2"}>
                  Where do you wish to host your group?
                </label>
                <div className="flex flex-col gap-2.5">
                  <label
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 transition hover:border-[#F2711C]/50"
                    style={
                      venue === "your"
                        ? { borderColor: TEAL, backgroundColor: TEAL_PALE }
                        : undefined
                    }
                  >
                    <input
                      type="radio"
                      name="venue"
                      value="your"
                      checked={venue === "your"}
                      onChange={() => setVenue("your")}
                      className="mt-0.5 h-4 w-4 accent-[#F2711C]"
                    />
                    <span>Your Venue</span>
                  </label>
                  <label
                    className="flex cursor-pointer items-start gap-3 rounded-lg border border-gray-200 px-4 py-3 text-sm text-gray-600 transition hover:border-[#F2711C]/50"
                    style={
                      venue === "offsite"
                        ? { borderColor: TEAL, backgroundColor: TEAL_PALE }
                        : undefined
                    }
                  >
                    <input
                      type="radio"
                      name="venue"
                      value="offsite"
                      checked={venue === "offsite"}
                      onChange={() => setVenue("offsite")}
                      className="mt-0.5 h-4 w-4 accent-[#F2711C]"
                    />
                    <span>
                      Off-site at a nearby accessible park, hall or other
                      location
                    </span>
                  </label>
                </div>

                {venue === "offsite" && (
                  <div
                    className="mt-3 rounded-lg p-4"
                    style={{ backgroundColor: TEAL_PALE }}
                  >
                    <label className={labelClass}>
                      Do you have a place in mind, or do you wish us to find one
                      for you?
                    </label>
                    <input
                      type="text"
                      className={inputClass}
                      value={form.offsite_place}
                      onChange={(e) =>
                        updateField("offsite_place", e.target.value)
                      }
                    />
                    <p className="mt-1.5 text-xs" style={{ color: SUB }}>
                      Please note that we do not organise transport. You must
                      organise this yourself.
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className={labelClass}>
                  Number of expected participants
                </label>
                <input
                  type="number"
                  min={1}
                  className={inputClass}
                  value={form.participants}
                  onChange={(e) => updateField("participants", e.target.value)}
                />
                <p className="mt-1.5 text-xs text-gray-400">
                  Please note our minimum numbers apply — see Pricing for
                  details.
                </p>
              </div>

              {/* Themed event */}
              <div>
                <label className={labelClass + " mb-2"}>
                  Do you wish to have a themed event?
                </label>
                <div className="flex gap-3">
                  <label
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-[#F2711C]/50"
                    style={
                      themed === "yes"
                        ? { borderColor: TEAL, backgroundColor: TEAL_PALE }
                        : undefined
                    }
                  >
                    <input
                      type="radio"
                      name="themed"
                      value="yes"
                      checked={themed === "yes"}
                      onChange={() => setThemed("yes")}
                      className="h-4 w-4 accent-[#F2711C]"
                    />
                    Yes
                  </label>
                  <label
                    className="flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-600 transition hover:border-[#F2711C]/50"
                    style={
                      themed === "no"
                        ? { borderColor: TEAL, backgroundColor: TEAL_PALE }
                        : undefined
                    }
                  >
                    <input
                      type="radio"
                      name="themed"
                      value="no"
                      checked={themed === "no"}
                      onChange={() => setThemed("no")}
                      className="h-4 w-4 accent-[#F2711C]"
                    />
                    No
                  </label>
                </div>
                <p className="mt-1.5 text-xs text-gray-400">
                  Please note pricing is different to normal
                  excursions/incursions.
                </p>
              </div>

              <div>
                <label className={labelClass}>How did you hear about us?</label>
                <input
                  type="text"
                  className={inputClass}
                  value={form.source}
                  onChange={(e) => updateField("source", e.target.value)}
                />
              </div>
            </div>

            {error && (
              <p className="mt-4 rounded-lg bg-red-50 px-4 py-2.5 text-sm text-red-600">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={sending}
              className="mt-9 inline-flex w-full items-center justify-center rounded-lg px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              style={{ backgroundColor: TEAL }}
            >
              {sending ? "Sending..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
