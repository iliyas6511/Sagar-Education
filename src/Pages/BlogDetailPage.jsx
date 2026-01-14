// BlogDetailPage.jsx
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FiCalendar,
  FiClock,
  FiUser,
  FiChevronRight,
  FiTag,
  FiLink,
  FiFacebook,
  FiTwitter,
  FiLinkedin,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";

/* =========================
   BLOG DATA (replace with your API data)
========================= */
const blogData = {
  id: "blog-001",
  category: "Study Strategy",
  title: "How to Build a Consistent Study Routine (Without Burnout)",
  excerpt:
    "A practical, student-first routine that improves results while keeping your energy and motivation stable.",
  date: "2026-01-10",
  readTime: "7 min read",
  author: {
    name: "Sagar Education Team",
    role: "Academic Mentors",
    avatar:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=240&auto=format&fit=crop&q=60",
  },
  coverImage:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=60",
  tags: ["Routine", "Productivity", "Boards", "NEET", "IIT-JEE"],
  content: [
    {
      type: "p",
      text: "Consistency beats intensity. A routine that you can follow daily—even on low-energy days—will outperform occasional long study marathons.",
    },
    { type: "h2", text: "1) Start with your exam reality" },
    {
      type: "p",
      text: "Before you plan hours, plan outcomes. List your subjects, weak areas, upcoming tests, and time left. This becomes your weekly blueprint.",
    },
    {
      type: "ul",
      items: [
        "Write your syllabus split into chapters",
        "Mark weak / medium / strong topics",
        "Decide weekly targets (not daily pressure)",
      ],
    },
    { type: "h2", text: "2) Use a simple daily structure" },
    {
      type: "p",
      text: "A premium routine is not complex. It is predictable. Use 2–3 focused sessions with breaks and a short revision slot.",
    },
    {
      type: "quote",
      text: "If you can’t repeat your plan tomorrow, it’s not a routine—it’s a one-time effort.",
    },
    { type: "h2", text: "3) Make revision non-negotiable" },
    {
      type: "p",
      text: "Revision reduces stress because it creates familiarity. Keep a 30–45 minute daily revision window to review formulas, errors, and flash notes.",
    },
    { type: "h2", text: "4) Prevent burnout with recovery rules" },
    {
      type: "ul",
      items: [
        "Stop studying 30 minutes earlier if you feel brain fog (use it for light revision)",
        "Sleep on time—your recall depends on it",
        "Keep one light day per week to reset",
      ],
    },
    { type: "h2", text: "5) Track progress, not perfection" },
    {
      type: "p",
      text: "Use a simple weekly review: what improved, what stayed weak, and what to change next week. This makes your routine adaptive and realistic.",
    },
  ],
};

const relatedPostsData = [
  {
    id: "rel-1",
    title: "Smart Revision Plan for Boards + Competitive Exams",
    date: "2025-12-18",
    readTime: "5 min read",
  },
  {
    id: "rel-2",
    title: "How to Analyze Mock Tests Like a Topper",
    date: "2025-11-30",
    readTime: "6 min read",
  },
  {
    id: "rel-3",
    title: "Daily Physics Practice: A Simple 30-Minute Method",
    date: "2025-10-22",
    readTime: "4 min read",
  },
];

/* =========================
   HELPERS
========================= */
const slugify = (str) =>
  String(str)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");

function formatDate(isoOrDateStr) {
  // keep it simple (no external libs)
  const d = new Date(isoOrDateStr);
  if (Number.isNaN(d.getTime())) return isoOrDateStr;
  return d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" });
}

/* =========================
   SECTION: Reading Progress
========================= */
const BlogReadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop;
      const scrollHeight = doc.scrollHeight - doc.clientHeight;
      const pct = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setProgress(Math.max(0, Math.min(100, pct)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-lightgray">
        <div className="h-1 bg-lightgreen" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};



/* =========================
   SECTION: Header (title/meta)
========================= */
const BlogHeader = ({ blog }) => {
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-DarkBlue text-white px-3 py-1 text-[11px] md:text-xs tracking-[0.18em] uppercase">
              {blog.category}
            </span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm text-DarkGray">
              <FiCalendar />
              {formatDate(blog.date)}
            </span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm text-DarkGray">
              <FiClock />
              {blog.readTime}
            </span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm text-DarkGray">
              <FiUser />
              {blog.author.name}
            </span>
          </div>

          <h1 className="mt-5 text-2xl md:text-4xl font-semibold text-DarkBlue leading-tight">
            {blog.title}
          </h1>

          <p className="mt-4 text-sm md:text-base text-softBlack leading-relaxed max-w-3xl">
            {blog.excerpt}
          </p>
        </div>
      </div>
    </section>
  );
};

/* =========================
   SECTION: Featured Image
========================= */
const BlogFeaturedImage = ({ src, alt }) => {
  return (
    <section className="pb-6 md:pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="rounded-xl overflow-hidden border border-black/10 bg-white shadow-[0_18px_55px_rgba(0,0,0,0.08)]">
          <img
            src={src}
            alt={alt}
            className="w-full h-[220px] sm:h-[320px] md:h-[420px] object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

/* =========================
   SECTION: Table of Contents
========================= */
const BlogTOC = ({ items }) => {
  if (!items?.length) return null;

  return (
    <section className="bg-white border border-black/10 rounded-2xl p-5 md:p-6 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
      <h3 className="text-sm font-semibold text-DarkBlue tracking-wide">
        Table of Contents
      </h3>
      <ul className="mt-4 space-y-2">
        {items.map((t) => (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              className="text-sm text-softBlack hover:text-DarkBlue transition block leading-snug"
            >
              {t.text}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};



/* =========================
   SECTION: Author Card
========================= */
const BlogAuthorCard = ({ author }) => {
  return (
    <section className="mt-8">
      <div className="bg-white border border-black/10 rounded-2xl p-6 md:p-7 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
        <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
          <img
            src={author.avatar}
            alt={author.name}
            className="w-14 h-14 rounded-full object-cover border border-black/10"
            loading="lazy"
          />
          <div className="flex-1">
            <p className="text-DarkBlue font-semibold">{author.name}</p>
            <p className="text-sm text-DarkGray">{author.role}</p>
          </div>
          <div className="text-xs text-DarkGray">
            Writing focused, student-first guidance.
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================
   SECTION: Related Posts
========================= */
const RelatedPosts = ({ posts }) => {
  return (
    <section className="mt-8">
      <div className="bg-white border border-black/10 rounded-2xl p-6 shadow-[0_16px_45px_rgba(0,0,0,0.06)]">
        <h3 className="text-base font-semibold text-DarkBlue">Related posts</h3>

        <div className="mt-4 grid gap-3">
          {posts.map((p) => (
            <a
              key={p.id}
              href={`/blog/${p.id}`}
              className="group rounded-xl border border-black/10 p-4 hover:bg-veryLightgray transition"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-softBlack font-semibold leading-snug group-hover:text-DarkBlue transition">
                    {p.title}
                  </p>
                  <p className="mt-1 text-xs text-DarkGray">
                    {formatDate(p.date)} • {p.readTime}
                  </p>
                </div>
                <FiChevronRight className="mt-1 text-DarkGray group-hover:text-DarkBlue transition" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};



/* =========================
   SECTION: Blog Content (Article)
========================= */
const BlogContent = ({ blocks }) => {
  return (
    <section>
      <article className="bg-white border border-black/10 rounded-2xl p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <div className="prose max-w-none">
          {blocks.map((b, idx) => {
            if (b.type === "h2") {
              const id = slugify(b.text);
              return (
                <h2
                  key={idx}
                  id={id}
                  className="scroll-mt-24 text-xl md:text-2xl font-semibold text-DarkBlue mt-8 first:mt-0"
                >
                  {b.text}
                </h2>
              );
            }

            if (b.type === "p") {
              return (
                <p key={idx} className="mt-4 text-sm md:text-base text-softBlack leading-relaxed">
                  {b.text}
                </p>
              );
            }

            if (b.type === "ul") {
              return (
                <ul key={idx} className="mt-4 space-y-2 pl-5 list-disc text-softBlack text-sm md:text-base">
                  {b.items.map((it, i) => (
                    <li key={i} className="leading-relaxed">
                      {it}
                    </li>
                  ))}
                </ul>
              );
            }

            if (b.type === "quote") {
              return (
                <blockquote
                  key={idx}
                  className="mt-6 rounded-2xl border border-black/10 bg-veryLightgray p-5 md:p-6"
                >
                  <p className="text-softBlack italic leading-relaxed">
                    “{b.text}”
                  </p>
                </blockquote>
              );
            }

            return null;
          })}
        </div>
      </article>
    </section>
  );
};

/* =========================
   PAGE WRAPPER (Single component at end)
========================= */
const BlogDetailPage = () => {
  const tocItems = useMemo(() => {
    return blogData.content
      .filter((b) => b.type === "h2")
      .map((b) => ({ id: slugify(b.text), text: b.text }));
  }, []);

  return (
    <div className="bg-veryLightgray min-h-screen">
      <BlogReadingProgress />

      {/* <BlogBreadcrumbs category={blogData.category} title={blogData.title} /> */}
      <BlogHeader blog={blogData} />
      <BlogFeaturedImage src={blogData.coverImage} alt={blogData.title} />

      {/* Content + Sidebar */}
      <section className="pb-10 md:pb-14">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-[1fr_340px] gap-6 md:gap-8 items-start">
          {/* Main */}
          <div>
            <BlogContent blocks={blogData.content} />
            {/* <BlogTagsAndShare tags={blogData.tags} title={blogData.title} /> */}
            <BlogAuthorCard author={blogData.author} />
            {/* <BlogComments /> */}
          </div>

          {/* Sidebar (TOC + Related) */}
          <aside className="md:sticky md:top-6 space-y-6">
            <BlogTOC items={tocItems} />
            <RelatedPosts posts={relatedPostsData} />
          </aside>
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;