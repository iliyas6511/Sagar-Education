const AboutHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1uSBzM5fJWBIMpwoLXWfWtKKv2JVXr52pNg&s')", // TODO: replace with your image
      }}
    >
      {/* Dark blue overlay over the background image */}
      <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue/95 via-DarkBlue/90 to-darkBlue-2/90" />

      {/* Optional extra vignette for depth */}
      <div className="pointer-events-none absolute inset-0 bg-black/30 mix-blend-multiply" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-10 md:py-20">
        <div className="max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">

          {/* Label / Badge */}
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] md:text-xs tracking-[0.25em] uppercase">
            Premier 12<sup>th</sup> Science Institute
          </span>

          {/* Heading */}
          <h1 className="mt-5 text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Shaping Futures
            <span className="block text-white/80">
              Through Quality Education
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base text-white/80 max-w-xl">
            Sagar Education is committed to nurturing young minds with academic
            excellence, discipline, and innovation for competitive success.
          </p>

          {/* Stats / Highlights – optional but adds a “rich” feel */}
          <div className="mt-8 grid grid-cols-2 gap-4 md:gap-6 max-w-xl">
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 md:px-5 md:py-4">
              <p className="text-xl md:text-2xl font-semibold">12<sup>th</sup> Sci</p>
              <p className="mt-1 text-[11px] md:text-xs text-white/70">
                Focused board & competitive coaching
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 md:px-5 md:py-4">
              <p className="text-xl md:text-2xl font-semibold">NEET</p>
              <p className="mt-1 text-[11px] md:text-xs text-white/70">
                Integrated preparation for top exams
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 md:px-5 md:py-4">
              <p className="text-xl md:text-2xl font-semibold">ZEE</p>
              <p className="mt-1 text-[11px] md:text-xs text-white/70">
                Integrated preparation for top exams
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 md:px-5 md:py-4">
              <p className="text-xl md:text-2xl font-semibold">NDA</p>
              <p className="mt-1 text-[11px] md:text-xs text-white/70">
                Integrated preparation for top exams
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutIntro = () => {
  return (
    <section className="py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-6 md:gap-12 items-start">

        <img
          src="https://images.unsplash.com/photo-1709290749293-c6152a187b14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGVkdWNhdGlvbiUyMGNsYXNzJTIwaW5kaWF8ZW58MHx8MHx8fDA%3D"
          alt="Classroom"
          className="rounded-xl w-full h-full shadow-lg"
        />

        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue mb-4">
            About Sagar Education
          </h2>

          <p className="text-softBlack text-sm md:text-base leading-relaxed mb-2">
            Sagar Education is a trusted coaching institute focused on IIT-JEE,
            NEET, MHT-CET, and Foundation courses. With expert faculty and
            student-centric teaching methods, we ensure academic growth and
            confidence.
          </p>

          <p className="text-softBlack text-sm md:text-base leading-relaxed mb-2">
            Our structured programs, special batches, and repeaters’ support
            help students achieve consistent results year after year.
          </p>
          <p className="text-softBlack text-sm md:text-base leading-relaxed mb-4">
            Sagar Education is a trusted coaching institute focused on IIT-JEE,
            NEET, MHT-CET, and Foundation courses. With expert faculty and
            student-centric teaching methods, we ensure academic growth and
            confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

const visionMissionData = [
  {
    title: "Our Vision",
    desc: "To create a learning ecosystem that nurtures academic excellence, discipline, and confidence in every student."
  },
  {
    title: "Our Mission",
    desc: "To deliver structured, high-quality education through expert faculty, mentorship, and result-driven strategies."
  },
  {
    title: "Our History",
    desc: "Founded with a passion for education, Sagar Education has consistently guided students towards competitive success."
  },
  {
    title: "Our Success",
    desc: "Thousands of students have achieved success in IIT-JEE, NEET, MHT-CET, and foundation programs under our guidance."
  }
];

const VisionMission = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-DarkBlue mb-12">
          Vision, Mission & Growth
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionMissionData.map((item, i) => (
            <div
              key={i}
              className="p-7 rounded-xl bg-lightgray shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold text-DarkBlue mb-3">
                {item.title}
              </h3>
              <p className="text-softBlack text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


import { FaChalkboardTeacher, FaUserGraduate, FaBook, FaChartLine, FaClock, FaStar } from "react-icons/fa";

const whyData = [
  {
    icon: <FaChalkboardTeacher size={26} />,
    title: "Expert Faculty",
    desc: "Highly experienced teachers with proven academic success records."
  },
  {
    icon: <FaUserGraduate size={26} />,
    title: "Student-Centric Approach",
    desc: "Focused mentoring to strengthen concepts and boost confidence."
  },
  {
    icon: <FaBook size={26} />,
    title: "Structured Curriculum",
    desc: "Well-planned syllabus aligned with competitive exam standards."
  },
  {
    icon: <FaChartLine size={26} />,
    title: "Regular Assessments",
    desc: "Frequent tests with performance analysis and improvement plans."
  },
  {
    icon: <FaClock size={26} />,
    title: "Special Batches",
    desc: "Dedicated IIT, NEET, repeater, and foundation batches."
  },
  {
    icon: <FaStar size={26} />,
    title: "Consistent Results",
    desc: "Track record of top-performing students every academic year."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl md:text-3xl font-semibold text-center text-DarkBlue mb-3">
          Why Choose Sagar Education?
        </h2>

        <p className="text-center text-DarkGray text-sm md:text-base max-w-2xl mx-auto mb-12">
          We combine academic excellence, personalized mentorship, and proven strategies
          to help students achieve competitive success.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyData.map((item, i) => (
            <div
              key={i}
              className="bg-white p-7 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-DarkBlue mb-4 flex justify-center">
                {item.icon}
              </div>
              <h4 className="font-semibold text-softBlack mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-DarkGray">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

import { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiBriefcase } from "react-icons/fi";

const facultyData = [
  {
    name: "Dr. A. Patil",
    subject: "Physics",
    experience: "12+ Years",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CqCC8J1P3d_LD36pkauEC2-bNz43CaBJ9g&s",
  },
  {
    name: "Prof. R. Deshmukh",
    subject: "Chemistry",
    experience: "10+ Years",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CqCC8J1P3d_LD36pkauEC2-bNz43CaBJ9g&s",
  },
  {
    name: "Mr. S. Kulkarni",
    subject: "Mathematics",
    experience: "15+ Years",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CqCC8J1P3d_LD36pkauEC2-bNz43CaBJ9g&s",
  },
  {
    name: "Ms. P. Jadhav",
    subject: "Biology",
    experience: "8+ Years",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7CqCC8J1P3d_LD36pkauEC2-bNz43CaBJ9g&s",
  },
];

const FacultySection = () => {
  const [isHover, setIsHover] = useState(false);
  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);

  const slides = [
    facultyData[facultyData.length - 1], // clone last
    ...facultyData,
    facultyData[0], // clone first
  ];

  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);

  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  // Autoplay (pauses on hover)
  useEffect(() => {
    if (isHover) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [isHover, index]);

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100">
      {/* Decorative blurred blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs md:text-sm font-semibold tracking-[0.22em] text-indigo-600 uppercase">
            Meet Our Mentors
          </p>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
            Our Expert Faculty
          </h2>
          <p className="mt-3 text-slate-600">
            Learn from experienced educators who focus on concepts, clarity, and results.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
        >
          <div className="overflow-x-hidden overflow-y-visible rounded-[2rem] py-8">
            <div
              className={`flex ${enableTransition
                ? "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                : ""
                }`}
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((item, i) => (
                <div key={i} className="min-w-full flex justify-center px-2 md:px-6">
                  <div className="relative w-full max-w-3xl">
                    {/* Gradient border feel */}
                    <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-indigo-200/60 via-white to-sky-200/60 blur-[1px]" />
                    <div className="relative rounded-[2rem] bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_20px_60px_rgba(15,23,42,0.12)] p-6 md:p-10">
                      {/* Subject badge */}
                      <div className="absolute top-5 left-5 md:top-7 md:left-7">
                        <span className="inline-flex items-center rounded-full bg-gradient-to-r from-indigo-600 to-sky-500 px-3 py-1 text-xs font-semibold text-white shadow">
                          {item.subject}
                        </span>
                      </div>

                      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        {/* Avatar */}
                        <div className="relative">
                          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-indigo-500/30 to-sky-500/30 blur-md" />
                          <img
                            src={item.img}
                            alt={item.name}
                            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full object-cover ring-4 ring-white shadow-lg"
                          />
                        </div>

                        {/* Info */}
                        <div className="text-center md:text-left flex-1">
                          <h4 className="text-xl md:text-2xl font-bold text-slate-900">
                            {item.name}
                          </h4>

                          <div className="mt-3 inline-flex items-center gap-2 text-slate-600">
                            <FiBriefcase className="opacity-80" />
                            <span className="text-sm md:text-base">
                              Experience: <span className="font-semibold text-slate-800">{item.experience}</span>
                            </span>
                          </div>

                          <p className="mt-4 text-slate-600 leading-relaxed">
                            Focused on strong fundamentals, problem-solving methods, and exam-oriented preparation.
                          </p>

                          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                            <button className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold shadow hover:shadow-lg hover:bg-slate-800 transition">
                              View Profile
                            </button>
                            <button className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition">
                              Book a Doubt Session
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Controls */}
          <button
            onClick={prev}
            aria-label="Previous faculty"
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiChevronLeft size={22} />
          </button>

          <button
            onClick={next}
            aria-label="Next faculty"
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 grid place-items-center h-11 w-11 rounded-full bg-white/80 backdrop-blur border border-white/60 shadow hover:bg-white transition focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <FiChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="mt-8 flex items-center justify-center gap-2">
            {facultyData.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${index === i ? "w-8 bg-indigo-600" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { useEffect, useRef } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Snehal Patil",
    course: "IIT-JEE",
    text: "Strong concepts, disciplined study plan, and excellent mentorship.",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Student – NEET",
    course: "NEET",
    text: "Faculty support and regular testing made my preparation confident.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Repeater Student",
    course: "MHT-CET",
    text: "Personal attention helped me improve rank significantly.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const slides = [
  testimonials[testimonials.length - 1],
  ...testimonials,
  testimonials[0],
];

const AboutTestimonials = () => {
  const [index, setIndex] = useState(1);
  const [enableTransition, setEnableTransition] = useState(true);
  const [hover, setHover] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const next = () => setIndex((p) => p + 1);
  const prev = () => setIndex((p) => p - 1);

  // Auto play
  useEffect(() => {
    if (hover) return;
    const t = setInterval(next, 4500);
    return () => clearInterval(t);
  }, [hover]);

  // Infinite loop fix
  useEffect(() => {
    if (index === slides.length - 1) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(1);
      }, 700);
    }
    if (index === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(slides.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  // Touch handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX.current > 50) next();
    if (touchEndX.current - touchStartX.current > 50) prev();
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12 px-4">
        <p className="text-xs tracking-[0.22em] uppercase text-indigo-600 font-semibold">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-slate-900">
          What Our Students Say
        </h2>
      </div>

      {/* Slider */}
      <div
        className="relative max-w-4xl mx-auto px-4"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="overflow-x-hidden overflow-y-visible py-6">
          <div
            className={`flex ${
              enableTransition
                ? "transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                : ""
            }`}
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((item, i) => (
              <div key={i} className="min-w-full px-3 md:px-6">
                <div className="relative bg-white/90 backdrop-blur-xl rounded-2xl border border-slate-200 p-8 md:p-10 text-center shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
                  
                  {/* Avatar */}
                  <div className="flex justify-center -mt-16 mb-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 rounded-full object-cover ring-4 ring-white"
                    />
                  </div>

                  <p className="text-slate-600 text-base md:text-lg leading-relaxed italic">
                    “{item.text}”
                  </p>

                  <h4 className="mt-6 text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {item.course}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-0 md:-left-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white border border-slate-200 grid place-items-center shadow hover:bg-slate-50 transition"
          aria-label="Previous testimonial"
        >
          <FiChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="absolute right-0 md:-right-6 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white border border-slate-200 grid place-items-center shadow hover:bg-slate-50 transition"
          aria-label="Next testimonial"
        >
          <FiChevronRight size={22} />
        </button>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i + 1)}
              className={`h-2.5 rounded-full transition-all ${
                index === i + 1
                  ? "w-8 bg-indigo-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};






// import { useState, useEffect } from "react";
import {
  FiAward,
  FiUsers,
  FiTrendingUp,
} from "react-icons/fi";

const stats = [
  { label: "Years of Experience", value: "10+", icon: FiAward },
  { label: "Successful Students", value: "5000+", icon: FiUsers },
  { label: "Top Results", value: "100+", icon: FiTrendingUp },
  { label: "Expert Faculty", value: "20+", icon: FiBriefcase },
];

// Helper component for the count-up animation
const CountUp = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return `${count}${suffix}`;
};

const Achievements = () => {
  return (
    <section className="relative py-20 md:py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Decorative background elements for a premium feel */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Our Achievements
          </h2>
          <p className="mt-2 text-sm md:text-base text-blue-200">
            Numbers that speak for our commitment to excellence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;
            // Extract numeric value and suffix for the count-up animation
            const numericValue = parseInt(item.value.replace(/\D/g, ""), 10);
            const suffix = item.value.replace(/[0-9]/g, "");

            return (
              <div
                key={index}
                className="group relative flex flex-col items-center text-center p-6 md:p-8 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4 text-lightgreen">
                  <Icon className="w-9 h-9" />
                </div>

                {/* Animated Value */}
                <h3 className="text-4xl md:text-5xl font-semibold text-lightgreen tabular-nums">
                  <CountUp end={numericValue} suffix={suffix} />
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm md:text-base font-medium text-blue-100/90">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};




// ResultsToppers.jsx
const toppers = [
  {
    name: "Snehal Patil",
    exam: "IIT-JEE",
    rank: "AIR 245",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Amit Kulkarni",
    exam: "NEET",
    rank: "AIR 512",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Riya Deshmukh",
    exam: "MHT-CET",
    rank: "99.45%",
    image: "https://randomuser.me/api/portraits/women/72.jpg",
  },
  {
    name: "Om Patil",
    exam: "Foundation",
    rank: "State Topper",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

const ResultsToppers = () => {
  // duplicate list for seamless loop
  const marqueeItems = [...toppers, ...toppers];

  return (
    <section className="relative py-16 text-white overflow-hidden bg-gradient-to-b from-[#061a44] via-[#041431] to-[#020b1e]">
      {/* subtle premium glow */}
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/15 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-10">
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-xs tracking-widest uppercase">
            Achievers
          </p>
          <h2 className="mt-3 text-2xl md:text-3xl font-semibold">
            Results &amp; Toppers
          </h2>
          <p className="mt-2 text-sm text-white/70">
            Celebrating top ranks and outstanding performance
          </p>
        </div>

        {/* marquee */}
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
          {/* fade edges */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#041431] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#041431] to-transparent z-10" />

          <div className="py-6">
            <div
              className="
                flex w-max gap-6 px-6
                animate-marquee-ltr
                hover:[animation-play-state:paused]
                motion-reduce:animate-none
              "
            >
              {marqueeItems.map((item, i) => (
                <div
                  key={i}
                  className="
                    min-w-[260px] md:min-w-[280px]
                    rounded-2xl p-6
                    bg-white/10 border border-white/15
                    shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                    transition duration-300
                    hover:-translate-y-1 hover:border-emerald-400/40
                  "
                >
                  {/* avatar */}
                  <div className="flex justify-center -mt-12 mb-4">
                    <div className="rounded-full p-[2px] bg-gradient-to-b from-emerald-400/70 to-sky-400/30">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-full object-cover bg-[#0b1f46]"
                        loading="lazy"
                      />
                    </div>
                  </div>

                  <div className="text-center">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <p className="text-sm text-white/70 mt-1">{item.exam}</p>

                    <div className="mt-4 inline-flex items-center justify-center">
                      <span className="px-3 py-1 rounded-full text-sm font-bold bg-emerald-400/15 text-emerald-200 border border-emerald-300/20">
                        {item.rank}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 text-center text-xs text-white/50">
              Tip: Hover to pause
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};



const AboutUsPage = () => {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <VisionMission />
      <WhyChooseUs />
      <FacultySection />
      <ResultsToppers />
      <AboutTestimonials />
      <Achievements />
    </>
  );
};

export default AboutUsPage;


