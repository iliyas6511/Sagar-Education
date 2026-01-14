import React, { useMemo, useState } from "react";
import {
  FiStar,
  FiUsers,
  FiClock,
  FiBarChart2,
  FiBookOpen,
  FiVideo,
  FiFileText,
  FiMapPin,
  FiCheckCircle,
  FiChevronDown,
  FiShield,
  FiZap,
  FiAward,
} from "react-icons/fi";

/** ---------------------------------------------
 * Sample Data (edit as per your real course)
 * --------------------------------------------- */
const useCourseData = () =>
  useMemo(
    () => ({
      title: "NEET Integrated Program (12th Science)",
      tagline: "Board + NEET prep in one structured, high-result journey",
      heroImage:
        "https://images.pexels.com/photos/19064143/pexels-photo-19064143.jpeg?cs=srgb&dl=pexels-gabriel-manjarres-119584478-19064143.jpg&fm=jpg",
      rating: 4.8,
      reviewsCount: 1240,
      studentsCount: 5400,
      level: "Intermediate",
      language: "English + Hindi",
      lastUpdated: "Jan 2026",
      duration: "10 Months",
      mode: "Online + Offline",
      location: "Pune",
      batchSize: "Max 40 Students",
      startDate: "15 Feb 2026",

      highlights: [
        {
          icon: FiBookOpen,
          title: "NEET + Board Aligned Syllabus",
          desc: "Concept-first teaching mapped to NCERT + NEET pattern.",
        },
        {
          icon: FiZap,
          title: "Daily Practice + DPPs",
          desc: "Consistent momentum with targeted problems every day.",
        },
        {
          icon: FiVideo,
          title: "Recorded Lectures Access",
          desc: "Missed a class? Rewatch anytime with key notes.",
        },
        {
          icon: FiBarChart2,
          title: "Weekly Tests & Analytics",
          desc: "Performance reports, weak-area tracking & improvement plan.",
        },
        {
          icon: FiShield,
          title: "Doubt Support System",
          desc: "Dedicated doubt slots + mentor follow-ups.",
        },
        {
          icon: FiAward,
          title: "Exam Strategy Mentorship",
          desc: "Time management, revision plans, and rank-focused guidance.",
        },
      ],

      outcomes: [
        "Build NCERT-strong concepts for Biology, Physics & Chemistry",
        "Solve NEET-level questions with proper approach and speed",
        "Create a repeatable revision system (weekly + monthly)",
        "Master test-taking strategy to reduce silly mistakes",
        "Stay consistent with mentor-led planning and accountability",
      ],

      whoIsThisFor: [
        "12th Science Students",
        "Repeaters (Drop Year)",
        "Students aiming for Govt. Medical Colleges",
        "Students needing structured daily routine",
      ],

      curriculum: [
        {
          title: "Module 1 — Foundations & NCERT Mapping",
          meta: "2 weeks • 18 lectures",
          lessons: [
            "How to study NCERT for NEET",
            "Unit-wise plan & score strategy",
            "Baseline test + goal setting",
            "Error log and revision system",
          ],
        },
        {
          title: "Module 2 — Biology (High-Weightage First)",
          meta: "10 weeks • 60 lectures",
          lessons: [
            "Human Physiology (deep + MCQ)",
            "Genetics & Evolution (PYQ focus)",
            "Ecology (fast scoring chapters)",
            "Biotech & Applications",
          ],
        },
        {
          title: "Module 3 — Chemistry (Concept + Reactions)",
          meta: "10 weeks • 55 lectures",
          lessons: [
            "Physical Chemistry numericals",
            "Inorganic NCERT lines mastery",
            "Organic mechanisms + named reactions",
            "Mixed topic NEET drills",
          ],
        },
        {
          title: "Module 4 — Physics (Formula + Approach)",
          meta: "10 weeks • 55 lectures",
          lessons: [
            "Mechanics problem-solving",
            "Electrostatics + Current Electricity",
            "Modern Physics (high ROI)",
            "Full-length physics mocks",
          ],
        },
        {
          title: "Module 5 — Revision + Full Test Series",
          meta: "6 weeks • 12 full mocks",
          lessons: [
            "Weekly revision sprints",
            "Subject-wise grand tests",
            "Full syllabus mocks",
            "Final revision plan & exam temperament",
          ],
        },
      ],

      instructors: [
        {
          name: "Dr. A. Patil",
          role: "Physics Mentor",
          exp: "12+ Years",
          img: "https://randomuser.me/api/portraits/men/32.jpg",
          points: ["Concept Clarity", "NEET Numericals", "Exam Strategy"],
        },
        {
          name: "Prof. R. Deshmukh",
          role: "Chemistry Faculty",
          exp: "10+ Years",
          img: "https://randomuser.me/api/portraits/men/41.jpg",
          points: ["Organic Mechanisms", "NCERT Inorganic", "PYQ Drills"],
        },
        {
          name: "Ms. P. Jadhav",
          role: "Biology Faculty",
          exp: "9+ Years",
          img: "https://randomuser.me/api/portraits/women/65.jpg",
          points: ["NCERT Mastery", "Diagrams & Lines", "High Score Methods"],
        },
      ],

      testimonials: [
        {
          name: "Snehal Patil",
          meta: "NEET • 612/720",
          text: "The weekly tests + analysis changed my preparation. Mentors told me exactly what to fix.",
        },
        {
          name: "Amit Kulkarni",
          meta: "NEET • 589/720",
          text: "Physics felt scary before. The approach-based teaching made it predictable and scoreable.",
        },
        {
          name: "Riya Deshmukh",
          meta: "NEET • 605/720",
          text: "Biology NCERT line-by-line with drills was the best part. Very systematic and premium.",
        },
      ],

      price: "₹24,999",
      oldPrice: "₹34,999",
      includes: [
        "Live + recorded classes access",
        "Weekly tests + full analytics",
        "DPPs + chapter sheets",
        "Mentor support + doubt sessions",
        "Full syllabus NEET mock series",
      ],

      faqs: [
        {
          q: "Is this course good for repeaters?",
          a: "Yes. The program has structured revision sprints, frequent mocks, and mentor follow-ups—ideal for drop-year students too.",
        },
        {
          q: "Do I get recorded lectures?",
          a: "Yes. Recorded access is provided for revision and missed sessions (as per your institute policy).",
        },
        {
          q: "How are doubts handled?",
          a: "Doubts are handled via dedicated doubt slots, mentor support, and topic-wise doubt clearing sessions.",
        },
        {
          q: "Is the syllabus aligned to NCERT?",
          a: "Yes. NCERT is treated as the primary source, with NEET-pattern MCQs and PYQs layered on top.",
        },
      ],
    }),
    []
  );

/** ---------------------------------------------
 * 1) HERO
 * --------------------------------------------- */
const CourseHero = ({ course }) => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: `url('${course.heroImage}')` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue/95 via-LogoBlue/90 to-darkBlue-2/90" />
      <div className="absolute inset-0 bg-black/25 mix-blend-multiply" />

      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-6 items-stretch">
          {/* Left content */}
          <div className="rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
            <div className="flex flex-wrap gap-2 items-center">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] md:text-xs tracking-[0.25em] uppercase">
                Course Details
              </span>
              <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] md:text-xs">
                Updated: {course.lastUpdated}
              </span>
            </div>

            <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
              {course.title}
              <span className="block text-white/80 text-lg md:text-2xl font-semibold mt-3">
                {course.tagline}
              </span>
            </h1>

            <div className="mt-5 flex flex-wrap gap-3 items-center text-white/85">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs md:text-sm">
                <FiStar className="text-lightgreen" />
                <span className="font-semibold">{course.rating}</span>
                <span className="text-white/70">({course.reviewsCount} reviews)</span>
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs md:text-sm">
                <FiUsers />
                {course.studentsCount}+ students
              </span>

              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3 py-1 text-xs md:text-sm">
                <FiBarChart2 />
                {course.level}
              </span>
            </div>

            <p className="mt-5 text-sm md:text-base text-white/75 max-w-2xl leading-relaxed">
              A premium, modern program designed for high scores: concept clarity, daily practice,
              analytics-driven tests, and mentor accountability—built for consistent toppers.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button className="px-6 py-3 rounded-xl bg-lightgreen text-white font-semibold shadow hover:shadow-lg transition">
                Enroll Now
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition">
                Download Syllabus
              </button>
            </div>
          </div>

          {/* Right quick card */}
          <div className="rounded-3xl bg-white/6 backdrop-blur-xl border border-white/10 p-6 md:p-7 shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            <h3 className="text-lg md:text-xl font-semibold">Quick Info</h3>

            <div className="mt-5 space-y-3 text-sm md:text-base">
              <InfoRow icon={FiClock} label="Duration" value={course.duration} />
              <InfoRow icon={FiVideo} label="Mode" value={course.mode} />
              <InfoRow icon={FiMapPin} label="Location" value={course.location} />
              <InfoRow icon={FiUsers} label="Batch Size" value={course.batchSize} />
              <InfoRow icon={FiFileText} label="Language" value={course.language} />
            </div>

            <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4">
              <p className="text-white/75 text-xs tracking-[0.22em] uppercase">Batch Starts</p>
              <p className="mt-1 text-xl font-bold">{course.startDate}</p>
              <p className="mt-2 text-white/70 text-sm">
                Limited seats to maintain personal attention and doubt support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InfoRow = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between gap-4">
    <div className="flex items-center gap-2 text-white/80">
      <Icon />
      <span>{label}</span>
    </div>
    <span className="font-semibold text-white">{value}</span>
  </div>
);

/** ---------------------------------------------
 * 2) HIGHLIGHTS
 * --------------------------------------------- */
const CourseHighlights = ({ course }) => {
  return (
    <section className="py-14 md:py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">
            Premium Experience
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-DarkBlue">
            What makes this course modern & result-driven
          </h2>
          <p className="mt-2 text-sm md:text-base text-DarkGray">
            Designed to feel structured, fast, and mentor-led—like a high-end learning system.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group rounded-2xl bg-white border flex flex-col justify-between border-softgray shadow-sm hover:shadow-xl transition overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-DarkBlue/10 to-darkBlue-2/10 border border-softgray grid place-items-center">
                      <Icon className="text-DarkBlue" size={22} />
                    </div>
                    <h3 className="font-semibold text-softBlack">{item.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-DarkGray leading-relaxed">{item.desc}</p>
                </div>

                {/* premium accent line */}
                <div className="h-1 w-full bg-gradient-to-r from-DarkBlue via-darkBlue-2 to-lightgreen opacity-70" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/** ---------------------------------------------
 * 3) OVERVIEW (image + outcomes + who this for)
 * --------------------------------------------- */
const CourseOverview = ({ course }) => {
  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-DarkBlue/10 via-darkBlue-2/10 to-lightgreen/10 blur-xl" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&auto=format&fit=crop&q=60"
            alt="Course classroom"
            className="relative rounded-3xl border border-softgray shadow-lg w-full  object-cover"
          />

          <div className="relative mt-5 rounded-2xl bg-veryLightgray border border-softgray p-5">
            <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">
              Who this is for
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {course.whoIsThisFor.map((t, i) => (
                <span
                  key={i}
                  className="text-xs md:text-sm px-3 py-1 rounded-full bg-white border border-softgray text-softBlack"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">
            Course Overview & Outcomes
          </h2>
          <p className="mt-3 text-sm md:text-base text-DarkGray leading-relaxed">
            This program is built to reduce confusion and increase score—clear daily structure,
            strong NCERT mapping, and weekly feedback loops that keep you improving.
          </p>

          <div className="mt-6 rounded-3xl bg-veryLightgray border border-softgray p-6 md:p-7">
            <h3 className="font-semibold text-softBlack">You will be able to:</h3>
            <ul className="mt-4 space-y-3">
              {course.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3">
                  <FiCheckCircle className="mt-0.5 text-lightgreen" size={18} />
                  <span className="text-sm md:text-base text-softBlack">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <MiniStat label="Students" value={`${course.studentsCount}+`} icon={FiUsers} />
            <MiniStat label="Duration" value={course.duration} icon={FiClock} />
          </div>
        </div>
      </div>
    </section>
  );
};

const MiniStat = ({ label, value, icon: Icon }) => (
  <div className="rounded-2xl border border-softgray bg-white p-5 shadow-sm">
    <div className="flex items-center gap-2 text-DarkBlue">
      <Icon />
      <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">{label}</p>
    </div>
    <p className="mt-2 text-lg md:text-xl font-bold text-softBlack">{value}</p>
  </div>
);

/** ---------------------------------------------
 * 4) CURRICULUM (Accordion)
 * --------------------------------------------- */
const CourseCurriculum = ({ course }) => {
  const [open, setOpen] = useState(0);

  return (
    <section className="py-14 md:py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">
            Curriculum
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-DarkBlue">
            Structured modules with a premium learning flow
          </h2>
          <p className="mt-2 text-sm md:text-base text-DarkGray">
            Start with foundations, build concept strength, then go heavy on tests + rank strategy.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          {course.curriculum.map((m, idx) => {
            const isOpen = open === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-softgray bg-white shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left"
                >
                  <div>
                    <h3 className="font-semibold text-softBlack">{m.title}</h3>
                    <p className="text-sm text-DarkGray mt-1">{m.meta}</p>
                  </div>
                  <FiChevronDown
                    className={`shrink-0 text-DarkBlue transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 md:px-6 pb-6">
                    <div className="h-px bg-softgray mb-4" />
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {m.lessons.map((l, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 rounded-xl bg-veryLightgray border border-softgray p-3"
                        >
                          <span className="mt-0.5">
                            <FiCheckCircle className="text-lightgreen" />
                          </span>
                          <span className="text-sm text-softBlack">{l}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/** ---------------------------------------------
 * 5) SCHEDULE / MODE (cards)
 * --------------------------------------------- */
const CourseSchedule = ({ course }) => {
  const scheduleCards = [
    {
      title: "Live Classes",
      desc: "Interactive sessions with problem-solving and MCQ drills.",
      icon: FiVideo,
    },
    {
      title: "Notes & Sheets",
      desc: "Chapter sheets, DPPs, and revision packs included.",
      icon: FiFileText,
    },
    {
      title: "Mentorship",
      desc: "Weekly check-ins, planning and accountability system.",
      icon: FiShield,
    },
  ];

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">
              Schedule, Mode & Learning Resources
            </h2>
            <p className="mt-2 text-sm md:text-base text-DarkGray leading-relaxed">
              A clean weekly routine: concept classes → daily practice → weekly tests → analytics → mentor fixes.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {scheduleCards.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div
                    key={i}
                    className="rounded-2xl border border-softgray bg-veryLightgray p-6 hover:bg-white hover:shadow-lg transition"
                  >
                    <div className="h-12 w-12 rounded-xl bg-white border border-softgray grid place-items-center">
                      <Icon className="text-DarkBlue" size={22} />
                    </div>
                    <h3 className="mt-4 font-semibold text-softBlack">{c.title}</h3>
                    <p className="mt-2 text-sm text-DarkGray">{c.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* premium info card */}
          <div className="rounded-3xl border border-softgray bg-gradient-to-b from-veryLightgray to-white p-6 md:p-7 shadow-sm">
            <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">
              Batch Snapshot
            </p>

            <div className="mt-5 space-y-3">
              <KeyValue label="Start Date" value={course.startDate} />
              <KeyValue label="Mode" value={course.mode} />
              <KeyValue label="Location" value={course.location} />
              <KeyValue label="Batch Size" value={course.batchSize} />
              <KeyValue label="Duration" value={course.duration} />
            </div>

            <div className="mt-6 rounded-2xl bg-white border border-softgray p-4">
              <p className="text-sm text-softBlack font-semibold">
                Bonus: Strategy Workshop
              </p>
              <p className="mt-1 text-sm text-DarkGray">
                A dedicated session on revision cycles, test temperament, and time management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const KeyValue = ({ label, value }) => (
  <div className="flex items-center justify-between gap-4">
    <span className="text-sm text-DarkGray">{label}</span>
    <span className="text-sm font-semibold text-softBlack">{value}</span>
  </div>
);

/** ---------------------------------------------
 * 6) INSTRUCTORS
 * --------------------------------------------- */
const CourseInstructors = ({ course }) => {
  return (
    <section className="py-14 md:py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-xs tracking-[0.22em] uppercase text-DarkGray font-semibold">
            Mentors
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-DarkBlue">
            Learn from expert faculty
          </h2>
          <p className="mt-2 text-sm md:text-base text-DarkGray">
            Experienced educators focused on clarity, consistency, and score improvement.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {course.instructors.map((t, i) => (
            <div
              key={i}
              className="rounded-3xl bg-white border flex flex-col justify-between border-softgray shadow-sm hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="absolute -inset-2 rounded-full bg-gradient-to-br from-DarkBlue/20 to-lightgreen/20 blur-lg" />
                    <img
                      src={t.img}
                      alt={t.name}
                      className="relative h-14 w-14 rounded-full object-cover ring-4 ring-white"
                      loading="lazy"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-softBlack">{t.name}</h3>
                    <p className="text-sm text-DarkGray">
                      {t.role} • <span className="font-semibold">{t.exp}</span>
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {t.points.map((p, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-veryLightgray border border-softgray text-softBlack"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <button className="mt-6 w-full px-5 py-2.5 rounded-xl bg-DarkBlue text-white font-semibold hover:bg-darkBlue-2 transition">
                  View Profile
                </button>
              </div>

              <div className="h-1 w-full bg-gradient-to-r from-DarkBlue via-darkBlue-2 to-lightgreen opacity-80" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/** ---------------------------------------------
 * 7) PRICING + FAQ + TESTIMONIALS (premium final section)
 * --------------------------------------------- */
const CoursePricingFAQ = ({ course }) => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-DarkBlue via-LogoBlue to-darkBlue-2 text-white">
      {/* premium blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-lightgreen/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-8 items-stretch">
          {/* Pricing card */}
          <div className="rounded-3xl bg-white/8 backdrop-blur-xl border border-white/15 p-6 md:p-8 shadow-[0_22px_80px_rgba(0,0,0,0.45)]">
            <p className="text-xs tracking-[0.22em] uppercase text-white/70 font-semibold">
              Enrollment
            </p>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
              Join the batch & start your score journey
            </h2>

            <div className="mt-6 flex items-end gap-3">
              <p className="text-4xl font-bold text-lightgreen">{course.price}</p>
              <p className="text-white/60 line-through">{course.oldPrice}</p>
            </div>

            <div className="mt-6 space-y-3">
              {course.includes.map((x, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FiCheckCircle className="mt-0.5 text-lightgreen" />
                  <span className="text-white/85">{x}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 grid sm:grid-cols-2 gap-3">
              <button className="px-6 py-3 rounded-xl bg-lightgreen text-white font-semibold shadow hover:shadow-lg transition">
                Enroll Now
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition">
                Talk to Counselor
              </button>
            </div>

            {/* Testimonials */}
            <div className="mt-8 rounded-2xl bg-white/6 border border-white/12 p-5">
              <p className="text-xs tracking-[0.22em] uppercase text-white/70 font-semibold">
                Student Feedback
              </p>
              <div className="mt-4 space-y-4">
                {course.testimonials.map((t, i) => (
                  <div key={i} className="rounded-2xl bg-white/8 border border-white/10 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-white/70">{t.meta}</p>
                    </div>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed">
                      “{t.text}”
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="rounded-3xl bg-white/6 backdrop-blur-xl border border-white/12 p-6 md:p-8">
            <p className="text-xs tracking-[0.22em] uppercase text-white/70 font-semibold">
              FAQs
            </p>
            <h3 className="mt-3 text-2xl font-semibold">Common questions</h3>
            <p className="mt-2 text-white/75">
              Quick answers before you enroll.
            </p>

            <div className="mt-6 space-y-4">
              {course.faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className="rounded-2xl bg-white/8 border border-white/12 overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(isOpen ? -1 : i)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left"
                    >
                      <span className="font-semibold">{f.q}</span>
                      <FiChevronDown
                        className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-sm text-white/80 leading-relaxed">
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-8 rounded-2xl border border-white/12 bg-gradient-to-r from-white/10 to-white/5 p-5">
              <p className="font-semibold">Need help choosing the right batch?</p>
              <p className="mt-1 text-sm text-white/75">
                Share your current class, target score, and attempt year—we’ll suggest the best plan.
              </p>
              <button className="mt-4 px-5 py-2.5 rounded-xl bg-white text-DarkBlue font-semibold hover:bg-veryLightgray transition">
                Get Guidance
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/** ---------------------------------------------
 * MAIN PAGE (wrap all sections)
 * --------------------------------------------- */
const CourseDetailPage = () => {
  const course = useCourseData();

  return (
    <>
      <CourseHero course={course} />
      <CourseHighlights course={course} />
      <CourseOverview course={course} />
      <CourseCurriculum course={course} />
      <CourseSchedule course={course} />
      <CourseInstructors course={course} />
      <CoursePricingFAQ course={course} />
    </>
  );
};

export default CourseDetailPage;