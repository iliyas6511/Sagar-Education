import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* ===== STEPS DATA ===== */
const steps = [
    {
        title: "Orientation",
        desc: "Introduction to programs, faculty, campus culture, expectations, and learning resources.",
        image: "/Images/Step-1.png",
    },
    {
        title: "Get Study Material",
        desc: "Access comprehensive study materials, notes, and digital content.",
        image: "/Images/step-2.png",
    },
    {
        title: "Interactive Classes",
        desc: "Personalized attention with engaging and interactive sessions.",
        image: "/Images/step-3.png",
    },
    {
        title: "Regular Tests",
        desc: "Frequent assessments to track progress and strengthen concepts.",
        image: "/Images/step-4.png",
    },
    {
        title: "Performance Review",
        desc: "Detailed analysis to identify strengths and improvement areas.",
        image: "/Images/step-2.png",
    },
    {
        title: "Success & Growth",
        desc: "Confidence building for long-term academic and career success.",
        image: "/Images/step-4.png",
    },
];

const StepSlider = () => {
    const sliderRef = useRef(null);
    const autoSlideRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const [index, setIndex] = useState(1);
    const [slidesPerView, setSlidesPerView] = useState(1);

    /* ===== RESPONSIVE ===== */
    useEffect(() => {
        const update = () => {
            if (window.innerWidth >= 1024) setSlidesPerView(4);
            else if (window.innerWidth >= 768) setSlidesPerView(2);
            else setSlidesPerView(1);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    /* ===== CLONE FOR LOOP ===== */
    const slides = [
        ...steps.slice(-slidesPerView),
        ...steps,
        ...steps.slice(0, slidesPerView),
    ];

    /* ===== AUTO SLIDE ===== */
    const startAutoSlide = () => {
        autoSlideRef.current = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 3500);
    };

    const stopAutoSlide = () => clearInterval(autoSlideRef.current);

    useEffect(() => {
        startAutoSlide();
        return stopAutoSlide;
    }, []);

    /* ===== LOOP FIX ===== */
    useEffect(() => {
        if (index >= steps.length + slidesPerView) {
            setTimeout(() => {
                sliderRef.current.style.transition = "none";
                setIndex(slidesPerView);
            }, 500);
        }

        if (index <= 0) {
            setTimeout(() => {
                sliderRef.current.style.transition = "none";
                setIndex(steps.length);
            }, 500);
        }
    }, [index, slidesPerView]);

    useEffect(() => {
        sliderRef.current.style.transition = "transform 0.6s ease";
    }, [index]);

    /* ===== HANDLERS ===== */
    const next = () => {
        stopAutoSlide();
        setIndex((prev) => prev + 1);
        startAutoSlide();
    };

    const prev = () => {
        stopAutoSlide();
        setIndex((prev) => prev - 1);
        startAutoSlide();
    };

    /* ===== TOUCH SWIPE (MOBILE) ===== */
    const onTouchStart = (e) => (touchStartX.current = e.touches[0].clientX);
    const onTouchMove = (e) => (touchEndX.current = e.touches[0].clientX);
    const onTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) next();
        if (touchEndX.current - touchStartX.current > 50) prev();
    };

    return (
        <section className="py-14 bg-[var(--color-white)]">
            {/* HEADER */}
            <div className="text-center mb-10 px-4">
                <h2 className="text-2xl md:text-3xl font-semibold text-darkBlue-2">
                    Student Journey
                </h2>
                <p className="mt-3 text-sm md:text-base text-[var(--color-DarkGray)] max-w-3xl mx-auto">
                    Guiding students through milestones, skills development, achievements,
                    and confidence-building for academic and professional success.
                </p>
            </div>

            <div className="relative max-w-7xl mx-auto px-4">
                {/* ARROWS (DESKTOP ONLY) */}
                <button
                    onClick={prev}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-DarkBlue text-white rounded-full shadow items-center justify-center"
                >
                    <FiChevronLeft size={22} />
                </button>

                <button
                    onClick={next}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 bg-DarkBlue text-white rounded-full shadow items-center justify-center"
                >
                    <FiChevronRight size={22} />
                </button>

                {/* SLIDER */}
                <div
                    className="overflow-hidden"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div
                        ref={sliderRef}
                        className="flex"
                        style={{
                            transform: `translateX(-${index * (100 / slidesPerView)}%)`,
                        }}
                    >
                        {slides.map((item, i) => (
                            <div
                                key={i}
                                className="w-full md:w-1/2 lg:w-1/4 px-3 flex-shrink-0"
                            >
                                <div
                                    className="relative h-90 rounded-md overflow-hidden bg-cover bg-center"
                                    style={{ backgroundImage: `url(${item.image})` }}
                                >
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/50" />

                                    {/* STEP NUMBER (TOP LEFT) */}
                                    <span className="absolute top-3 left-3 z-10 h-8 w-8 text-sm rounded-full bg-white text-[var(--color-DarkBlue)] flex items-center justify-center  font-semibold">
                                        {((i - slidesPerView + steps.length) % steps.length) + 1}
                                    </span>

                                    {/* CONTENT (ONE LINE) */}
                                    <div className="absolute top-1/2  ">
                                        <div className="w-full p-5 text-white">
                                            {/* Fixed-height content wrapper */}
                                            <div className="min-h-[72px]">
                                                <h3 className="text-lg font-semibold leading-tight">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-1 text-sm opacity-90 leading-snug">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* DOTS */}
                <div className="mt-6 flex justify-center gap-2">
                    {steps.map((_, i) => (
                        <span
                            key={i}
                            className={`h-2.5 w-2.5 rounded-full ${index % steps.length === i + 1
                                    ? "bg-[var(--color-DarkBlue)]"
                                    : "bg-[var(--color-DarkGray)] opacity-40"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StepSlider;
