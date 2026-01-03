import React from 'react'
import Navbar from '../Components/Navbar'
import NewsSticker from '../Components/NewsSticker'
import HeroSlider from '../Components/HeroSlider'


import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import Courses from '../Components/Courses';
import Courses2 from '../Components/Sample';
import StepSlider from '../Components/StepSlider';
import Testimonials from '../Components/Testimonials';
import ExperienceStats from '../Components/ExperienceStats';
import NewsUpdates from '../Components/NewsUpdates';
import FAQSection from '../Components/FaqSection';
import Advertisement from '../Components/Advertisement';
import Footer from '../Components/Footer';

const slides = [
  { type: "image", src: "/Images/aboutSlider.png" },
  { type: "image", src: "/Images/aboutSlider.png" },
  { type: "video", src: "/Videos/Sagar Education.mp4" },
];

const AUTO_SLIDE_TIME = 10000; // 100 seconds

const AboutHome = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const resetAutoSlide = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(nextSlide, AUTO_SLIDE_TIME);
  };

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    resetAutoSlide();
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  /* ===== Touch Controls (Mobile) ===== */
  const handleTouchStart = (e) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEnd.current = e.changedTouches[0].clientX;
    if (touchStart.current - touchEnd.current > 50) nextSlide();
    if (touchEnd.current - touchStart.current > 50) prevSlide();
  };

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 md:px-2 grid md:grid-cols-2 gap-10 items-start">

        {/* ===== LEFT CONTENT ===== */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue mb-4">
            All About Sagar Education
          </h2>

          <p className="text-softBlack leading-relaxed mb-6 text-sm md:text-base">
            Sagar Education is a trusted name in academic excellence, committed
            to nurturing knowledge, skills, and values that empower students to
            succeed in a rapidly evolving world.Sagar Education is a trusted name in academic excellence, committed
            to nurturing knowledge, skills, and values that empower students to
            succeed in a rapidly evolving world.
          </p>

          <ul className="space-y-2 text-sm md:text-base text-softBlack mb-8 list-disc ml-5">
            <li>Supported by experienced and dedicated faculty</li>
            <li>Student-centric learning environment</li>
            <li>Holistic development through innovation</li>
            <li>Research-oriented learning</li>
            <li>Modern infrastructure</li>
          </ul>

          <button className="bg-lightgreen text-white hover:bg-green-700 px-6 py-3 rounded-md font-semibold transition shadow-md">
            Read More
          </button>
        </div>

        {/* ===== RIGHT SLIDER ===== */}
        <div
          className="relative rounded-sm shadow-xl overflow-hidden group"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Media */}
          {slides[index].type === "image" ? (
            <img
              src={slides[index].src}
              alt=""
              className="w-full h-[240px] md:h-[420px] lg:h-[475px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
          ) : (
            <video
              src={slides[index].src}
              autoPlay
              muted
              loop
              className="w-full h-[240px] md:h-[420px] lg:h-[475px] object-cover"
            />
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Arrows (md+) */}
          {/* <div className="hidden md:flex absolute bottom-5 left-1/2 -translate-x-1/2 gap-5 z-10"> */}
            <button
              onClick={() => {
                prevSlide();
                resetAutoSlide();
              }}
              className="bg-white hidden md:block text-black p-2 rounded-full absolute bottom-4 left-2 shadow-lg hover:scale-110 transition"
            >
              <FiChevronLeft size={24} />
            </button>

            <button
              onClick={() => {
                nextSlide();
                resetAutoSlide();
              }}
              className="bg-white text-black hidden md:block p-2 rounded-full absolute bottom-4 right-2 shadow-lg hover:scale-110 transition"
            >
              <FiChevronRight size={24} />
            </button>
          {/* </div> */}

          {/* ===== PREMIUM DOTS ===== */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`transition-all duration-300 rounded-full ${
                  i === index
                    ? "w-6 h-2 bg-DarkBlue"
                    : "w-2 h-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};






const HomePage = () => {
  return (
    <>
      <Navbar />
      <NewsSticker />
      <HeroSlider />
      <AboutHome />
      <Courses />
      <StepSlider />
      <Testimonials />
      <ExperienceStats />
      <NewsUpdates />
      <FAQSection />
      <Advertisement />
      <Footer />
    </>
  )
}

export default HomePage
