"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const navLinks = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact-us", label: "Contact Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 !flex w-full items-center justify-between border-b border-zinc-200 bg-[#FFEBD9]/95 px-4 py-2 backdrop-blur dark:border-zinc-800 dark:bg-black/95 sm:px-6 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/1000x1000_px-logo.png"
            alt="Logo"
            width={220}
            height={220}
            priority
            className="h-20 w-auto object-contain sm:h-24 md:h-28"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-6 md:flex md:gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-sm font-medium text-zinc-600 transition-colors hover:text-[#F2711C] dark:text-zinc-400 dark:hover:text-[#F2711C] md:text-base"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger button */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-600 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? (
            <HiX className="h-6 w-6" />
          ) : (
            <HiMenuAlt3 className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 md:hidden"
          aria-hidden
          onClick={() => setOpen(false)}
        />
      )}
      {/* Mobile menu panel (slide-in from right) */}
      <div
        className={`fixed right-0 top-18 z-40 w-full max-w-sm border-b border-zinc-200 bg-white/98 shadow-lg backdrop-blur transition-transform duration-200 dark:border-zinc-800 dark:bg-zinc-950/98 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "calc(100vh - 4.5rem)" }}
      >
        <ul className="flex flex-col py-4">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="block border-b border-zinc-100 px-6 py-4 text-base font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-[#F2711C] dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-[#F2711C]"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
