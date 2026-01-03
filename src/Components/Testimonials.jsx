const testimonials = [
  {
    name: "Bill Gates",
    role: "AIR-224 Parent",
    image: "https://i.pravatar.cc/100?img=1",
    text:
      "Supportive teachers, disciplined batches, and practical learning methods prepared me well for exams and future career challenges successfully.",
    rating: 5,
  },
  {
    name: "Shrinath Khan",
    role: "AIR-567",
    image: "https://i.pravatar.cc/100?img=2",
    text:
      "The interactive classes, personal attention, and structured study materials helped me understand subjects better and stay motivated.",
    rating: 5,
  },
  {
    name: "Dinanath Chavan",
    role: "AIR-258",
    image: "https://i.pravatar.cc/100?img=3",
    text:
      "Sagar Education transformed my learning with expert faculty, clear concepts, regular tests, and constant guidance.",
    rating: 5,
  },
  {
    name: "Amit Patil",
    role: "AIR-341",
    image: "https://i.pravatar.cc/100?img=4",
    text:
      "Consistent mentoring and structured approach helped me gain confidence and improve performance significantly.",
    rating: 5,
  },
];




import { useEffect, useRef, useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const cardsDesktop = 3;
const cardsMobile = 1;
const GAP = 24; // gap-6

const Testimonials = () => {
  const autoSlideRef = useRef(null);
  const cardRef = useRef(null);

  const [isDesktop, setIsDesktop] = useState(false);
  const [perView, setPerView] = useState(cardsDesktop);
  const [index, setIndex] = useState(cardsDesktop);
  const [enableTransition, setEnableTransition] = useState(true);
  const [cardWidth, setCardWidth] = useState(0);

  /* ---------------- viewport detection ---------------- */
  useEffect(() => {
    const handleResize = () => {
      const desktop = window.innerWidth >= 768;
      setIsDesktop(desktop);
      setPerView(desktop ? cardsDesktop : cardsMobile);
      setIndex(desktop ? cardsDesktop : cardsMobile);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ---------------- clone slides ---------------- */
  const slides = [
    ...testimonials.slice(-perView),
    ...testimonials,
    ...testimonials.slice(0, perView),
  ];

  /* ---------------- measure card width ---------------- */
  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.offsetWidth + GAP);
    }
  }, [isDesktop]);

  /* ---------------- sliding controls ---------------- */
  const slideNext = () => setIndex((p) => p + 1);
  const slidePrev = () => setIndex((p) => p - 1);

  const startAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    autoSlideRef.current = setInterval(slideNext, 3000);
  };

  const stopAutoSlide = () => {
    clearInterval(autoSlideRef.current);
    setTimeout(startAutoSlide, 15000);
  };

  /* ---------------- infinite loop fix ---------------- */
  useEffect(() => {
    if (!cardWidth) return;

    if (index === slides.length - perView) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(perView);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setEnableTransition(false);
        setIndex(slides.length - perView * 2);
      }, 700);
    }
  }, [index, cardWidth, slides.length, perView]);

  useEffect(() => {
    if (!enableTransition) {
      requestAnimationFrame(() => setEnableTransition(true));
    }
  }, [enableTransition]);

  useEffect(() => {
    if (cardWidth) startAutoSlide();
    return () => clearInterval(autoSlideRef.current);
  }, [cardWidth]);

  /* ---------------- render ---------------- */
  return (
    <section className="py-20 bg-[var(--color-white)]">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-2xl md:text-3xl font-bold text-darkBlue-2">
          What Our Students & Parents Say
        </h2>
        <p className="mt-2 text-sm md:text-base text-[var(--color-DarkGray)]">
          Real experiences sharing growth, confidence, learning outcomes, and success achieved.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-8">
        {/* LEFT ARROW */}
        <button
          onClick={() => {
            stopAutoSlide();
            slidePrev();
          }}
          className="hidden md:flex absolute -left-[40px] top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full border border-[var(--color-DarkBlue)]
          bg-white items-center justify-center
          text-[var(--color-DarkBlue)]
          hover:bg-[var(--color-DarkBlue)] hover:text-white transition"
        >
          <FiChevronLeft size={22} />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={() => {
            stopAutoSlide();
            slideNext();
          }}
          className="hidden md:flex absolute -right-[40px] top-1/2 -translate-y-1/2 z-20
          w-12 h-12 rounded-full border border-[var(--color-DarkBlue)]
          bg-white items-center justify-center
          text-[var(--color-DarkBlue)]
          hover:bg-[var(--color-DarkBlue)] hover:text-white transition"
        >
          <FiChevronRight size={22} />
        </button>

        {/* SLIDER */}
        <div className="overflow-hidden">
          <div
            className={`flex gap-6 ${
              enableTransition ? "transition-transform duration-700 ease-in-out" : ""
            }`}
            style={{
              transform: `translateX(-${index * cardWidth}px)`,
            }}
          >
            {slides.map((item, i) => (
              <div
                ref={i === perView ? cardRef : null}
                key={i}
                className="
                  flex-[0_0_100%]
                  md:flex-[0_0_calc(33.333%-16px)]
                  border border-lightgreen/10
                  bg-white rounded-xl p-8 shadow-[2px_24px_24px_1px_rgba(35,146,39,0.1)]
                "
                // style={{
                //   boxShadow: "0px 2px 24px 1px rgba(35, 146, 39, 0.1)",
                // }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-[var(--color-Black)]">
                      {item.name}
                    </h4>
                    <p className="text-sm text-[var(--color-DarkGray)]">
                      {item.role}
                    </p>
                  </div>
                </div>

                <p className="text-[var(--color-softBlack)] leading-relaxed mb-6">
                  {item.text}
                </p>

                <div className="flex gap-1 text-yellow-400">
                  {Array.from({ length: item.rating }).map((_, j) => (
                    <span key={j}>★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                stopAutoSlide();
                setIndex(i + perView);
              }}
              className={`w-3 h-3 rounded-full transition ${
                index - perView === i
                  ? "bg-[var(--color-DarkBlue)]"
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
