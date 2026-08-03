import Link from "next/link";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#424242] px-6 lg:px-32 py-14 text-white">
      <div className="mx-auto flex max-w-8xl flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:gap-12 md:text-left">
        {/* Left: CTA */}
        <div className="flex max-w-md flex-col items-center gap-4 md:items-start">
          <span
            className="h-1 w-12 rounded-full"
            style={{ backgroundColor: "#F2711C" }}
          />
          <h3 className="text-2xl font-bold sm:text-3xl">
            Discover a new concept in social outings!
          </h3>
          <p className="text-sm text-white/70 sm:text-base">
            Great food, live music, and an experience your community won't
            forget.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex w-fit items-center justify-center rounded-md px-8 py-4 text-base font-semibold text-white transition hover:opacity-90"
            style={{ backgroundColor: "#F2711C" }}
          >
            Contact us
          </Link>
        </div>

        
        {/* Center: Nav links */}
        {/* <div className="flex flex-col items-center gap-4 md:items-center md:justify-center">
          <Link href="/blog" className="text-base text-white/80 transition hover:text-white sm:text-lg font-bold">
            Blog
          </Link>
          <Link href="/faq" className="text-base text-white/80 transition hover:text-white sm:text-lg font-bold">
            Switch Hub
          </Link>
          <Link href="/help" className="text-base text-white/80 transition hover:text-white sm:text-lg font-bold">
            Geography of Care
          </Link>
        </div> */}

        {/* Right: Social icons (top aligned) */}
        <div className="flex gap-4 md:items-start md:justify-end">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:border-[#F2711C] hover:bg-[#F2711C] hover:text-white"
          >
            <FaFacebookF className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white/90 transition hover:border-[#F2711C] hover:bg-[#F2711C] hover:text-white"
          >
            <FaLinkedinIn className="h-5 w-5" />
          </a>
        </div>
      </div>

      {/* Border bottom */}
      <div className="mx-auto mt-12 max-w-8xl border-b border-white/15" />

      {/* Bottom row: legal links */}
      <div className="mx-auto flex max-w-8xl flex-col items-center justify-center gap-4 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-xs text-white/50">
          © {new Date().getFullYear()} Meals and Melodies. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-6">
          <Link href="/privacy" className="text-sm text-white/80 hover:text-white">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-sm text-white/80 hover:text-white">
            Terms of Use
          </Link>
          <Link href="/sitemap" className="text-sm text-white/80 hover:text-white">
            Sitemap
          </Link>
          <Link href="/contact" className="text-sm text-white/80 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}