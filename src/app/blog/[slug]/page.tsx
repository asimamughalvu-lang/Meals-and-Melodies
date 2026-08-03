import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Meals and Melodies Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <div className="min-h-screen font-sans">
      <section
        className="w-full px-4 py-14 sm:px-8 sm:py-16 lg:px-32"
        style={{ backgroundColor: "rgba(229, 249, 251, 0.40)" }}
      >
        <div className="mx-auto max-w-4xl">
          <Link
            href="/blog"
            className="text-sm font-semibold text-[#F2711C] hover:underline"
          >
            ← Back to Blog
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#F2711C]">
            {post.category}
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-[#3A3F46] sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
            <span>{post.date}</span>
            <span aria-hidden>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="w-full px-4 py-10 sm:px-8 lg:px-32">
        <div className="mx-auto max-w-4xl">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl sm:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 800px"
              priority
            />
          </div>

          <div className="mt-8 flex flex-col gap-5">
            {post.content.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed text-[#3A3F46] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 border-t border-zinc-200 pt-8">
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ backgroundColor: "#F2711C" }}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {otherPosts.length > 0 && (
        <section className="w-full bg-zinc-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-32">
          <div className="mx-auto max-w-8xl">
            <h2 className="text-xl font-bold text-[#3A3F46] sm:text-2xl">
              More from the blog
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#F2711C]">
                      {p.category}
                    </p>
                    <h3 className="mt-2 text-base font-bold text-[#3A3F46] group-hover:text-[#F2711C]">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}