import { FiSearch, FiArrowRight } from "react-icons/fi";

const quickTopics = ["Admissions", "Study Tips", "Results"];

const BlogHeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1600&auto=format&fit=crop&q=60')",
      }}
    >
      {/* Gradient overlay (ONLY hero uses gradient) */}
      <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue/95 via-DarkBlue/90 to-darkBlue-2/90" />
      <div className="pointer-events-none absolute inset-0 bg-Black/25 mix-blend-multiply" />

      <div className="relative max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Student Blog
            <span className="block text-white/75">Tips, admissions & results</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-sm md:text-base text-white/80 max-w-xl">
            Clean, curated posts to help you study smarter and stay updated.
          </p>

          {/* Search */}
          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
              <FiSearch className="text-white/75" />
              <input
                className="w-full bg-transparent outline-none placeholder:text-white/55 text-sm md:text-base"
                placeholder="Search articles..."
              />
            </div>

            <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-DarkBlue px-5 py-3 font-semibold shadow hover:bg-veryLightgray transition">
              Explore <FiArrowRight />
            </button>
          </div>

          {/* Quick topics (minimal) */}
          <div className="mt-5 flex flex-wrap gap-2">
            {quickTopics.map((t) => (
              <button
                key={t}
                className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs md:text-sm text-white/85 hover:bg-white/15 transition"
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import React, { useMemo, useState } from "react";
import { FiCalendar, FiClock, FiTag, FiArrowUpRight } from "react-icons/fi";

const PAGE_SIZE = 6;

const seedPosts = [
  {
    id: 1,
    title: "How to Build a 90-Day Study System (Without Burnout)",
    excerpt:
      "A premium, repeatable routine to improve consistency—covering planning, revision loops, and weekly testing.",
    tag: "Study Tips",
    date: "Jan 05, 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "NEET Preparation: Smart Revision Strategy for Last 30 Days",
    excerpt:
      "Focus on high-yield chapters, mistakes-based revision, and test analysis with a clean daily template.",
    tag: "NEET",
    date: "Dec 18, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "Admissions & Batches: Choosing the Right Track for You",
    excerpt:
      "A simple breakdown of batch types, learning pace, and how to select the best plan based on your target.",
    tag: "Admissions",
    date: "Nov 22, 2025",
    readTime: "4 min read",
    image:
      "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Topper Mindset: How High Performers Use Mock Tests",
    excerpt:
      "Learn how toppers review papers, create error logs, and convert weak topics into scoring strengths.",
    tag: "Results",
    date: "Oct 14, 2025",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1454165205744-3b78555e5572?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 5,
    title: "Parent Guide: Supporting Study at Home (Without Pressure)",
    excerpt:
      "How to create structure, communication, and motivation while respecting your child’s mental space.",
    tag: "Parent Guide",
    date: "Sep 29, 2025",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&auto=format&fit=crop&q=60",
  },
  {
    id: 6,
    title: "JEE: Concept-First Approach to Increase Accuracy",
    excerpt:
      "Stop guessing. Build clarity with micro-concepts, timed practice, and question pattern grouping.",
    tag: "JEE",
    date: "Aug 10, 2025",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=1400&auto=format&fit=crop&q=60",
  },
];

const BlogCard = ({ post }) => {
  return (
    <article className="group rounded-2xl border border-softgray bg-white shadow-sm hover:shadow-lg transition overflow-hidden">
      <div className="relative">
        <img
          src={post.image}
          alt={post.title}
          className="h-44 md:h-52 w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-Black/10 opacity-0 group-hover:opacity-100 transition" />

        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/95 text-DarkBlue border border-softgray px-3 py-1 text-xs font-semibold">
            <FiTag />
            {post.tag}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-DarkGray">
          <span className="inline-flex items-center gap-2">
            <FiCalendar />
            {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <FiClock />
            {post.readTime}
          </span>
        </div>

        <h3 className="mt-3 text-base md:text-lg font-semibold text-softBlack leading-snug">
          {post.title}
        </h3>

        <p className="mt-2 text-sm text-DarkGray leading-relaxed">
          {post.excerpt}
        </p>

        <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-DarkBlue hover:text-darkBlue-2 transition">
          Read article
          <FiArrowUpRight />
        </button>
      </div>
    </article>
  );
};

const BlogGridToggle = () => {
  // Dummy list (replace later with backend)
  const allPosts = useMemo(() => {
    const repeats = 3; // total = 18
    const out = [];

    for (let r = 0; r < repeats; r++) {
      seedPosts.forEach((base, i) => {
        const id = r * seedPosts.length + i + 1;
        out.push({
          ...base,
          id,
          title: r === 0 ? base.title : `${base.title} • Update ${r + 1}`,
          image: `${base.image}&sig=${id}`,
        });
      });
    }

    return out;
  }, []);

  // Only two states: 6 posts OR all posts
  const [expanded, setExpanded] = useState(false);

  const visiblePosts = expanded ? allPosts : allPosts.slice(0, PAGE_SIZE);
  const showToggle = allPosts.length > PAGE_SIZE;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-14">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {showToggle && (
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="rounded-2xl bg-DarkBlue text-white px-6 py-3 font-semibold shadow hover:bg-darkBlue-2 transition"
          >
            {expanded ? "View less" : "View more blogs"}
          </button>
        </div>
      )}
    </section>
  );
};


import { FiDownload, FiMail, FiShield } from "react-icons/fi";

const BlogAdSection = () => {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-softgray bg-DarkBlue text-white shadow-[0_22px_70px_rgba(23,37,144,0.25)]">
          {/* Decorative shapes (NO gradients; only solid + opacity) */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />

          <div className="relative grid gap-10 md:grid-cols-[1.2fr_.8fr] items-center p-7 md:p-12">
            {/* Left content */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1 text-[10px] md:text-xs tracking-[0.25em] uppercase">
                <FiShield className="opacity-90" />
                Premium Resource
              </span>

              <h3 className="mt-4 text-2xl md:text-3xl font-semibold leading-tight">
                Download the “Smart Revision Checklist”
              </h3>
              <p className="mt-3 text-white/80 text-sm md:text-base max-w-xl">
                A one-page checklist to structure revision, track mistakes, and plan tests — designed for quick daily use.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-DarkBlue px-5 py-3 font-semibold hover:bg-veryLightgray transition">
                  <FiDownload />
                  Download PDF
                </button>

                <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 font-semibold hover:bg-white/15 transition">
                  <FiMail />
                  Get it on Email
                </button>
              </div>

              <p className="mt-4 text-xs text-white/60">
                No spam. Only helpful resources and important updates.
              </p>
            </div>

            {/* Right poster card */}
            <div className="md:justify-self-end w-full">
              <div className="rounded-2xl bg-white p-6 text-softBlack border border-softgray shadow-lg">
                <p className="text-xs font-semibold tracking-[0.22em] uppercase text-DarkGray">
                  Inside this PDF
                </p>

                <ul className="mt-4 space-y-3 text-sm text-softBlack">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lightgreen" />
                    7-day revision loop template
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lightgreen" />
                    Mistake-log + improvement plan
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lightgreen" />
                    Mock test analysis checklist
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-lightgreen" />
                    Daily focus blocks (60/90 min)
                  </li>
                </ul>

                <div className="mt-6 rounded-xl bg-veryLightgray border border-softgray p-4">
                  <p className="text-sm font-semibold text-DarkBlue">Bonus</p>
                  <p className="text-xs text-DarkGray mt-1">
                    Includes a “high-yield chapters” tracker for quick planning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogPage = () => {
  return (
    <>
      <BlogHeroSection />
      <BlogGridToggle />
      <BlogAdSection />
    </>
  );
};

export default BlogPage;