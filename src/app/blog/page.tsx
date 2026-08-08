import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "./posts";

export const metadata = {
  title: "Blog | Meals and Melodies",
  description:
    "Stories, guides and behind-the-scenes updates from Meals and Melodies.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#FFEBD9]">
      <section
        className="w-full px-4 py-14 sm:px-8 sm:py-16 lg:px-32"
        style={{ backgroundColor: "rgba(229, 249, 251, 0.40)" }}
      >
        <div className="mx-auto max-w-8xl text-center">
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#3A3F46] sm:text-5xl lg:text-[66px]">
            Latest news from Val and Sandra
          </h1>
          <p className="mx-auto mt-6 max-w-4xl text-base leading-relaxed text-[#3A3F46] sm:text-lg">
            Guides, behind-the-scenes moments and updates from the team bringing
            food and live music together, one event at a time.
          </p>
        </div>
      </section>

      <section className="w-full px-4 py-12 sm:px-8 sm:py-16 lg:px-32">
        <div className="mx-auto grid max-w-8xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-top transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#F2711C]">
                  {post.category}
                </p>
                <h2 className="mt-2 text-lg font-bold text-[#3A3F46] group-hover:text-[#F2711C]">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {post.excerpt}
                </p>
                <div className="mt-5 flex items-center gap-2 text-xs text-zinc-500">
                  <span>{post.date}</span>
                  <span aria-hidden>·</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
