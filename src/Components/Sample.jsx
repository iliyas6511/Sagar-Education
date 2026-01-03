import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const categories = ["IIT-JEE", "NEET", "NDA", "MHT-CET", "Foundation"];

const coursesData = {
  "IIT-JEE": [
    { title: "JEE Sankalp Batch", year: "Target Year - 2027", period: "March 2026 – Feb 2027" },
    { title: "JEE Kalyan Batch", year: "Target Year - 2027", period: "March 2026 – Feb 2027" },
    { title: "JEE Sangharsh Batch", year: "Target Year - 2027", period: "March 2026 – Feb 2027" },
  ],
  NEET: [
    { title: "NEET Alpha Batch", year: "Target Year - 2027", period: "2026 – 2027" },
    { title: "NEET Beta Batch", year: "Target Year - 2027", period: "2026 – 2027" },
  ],
  NDA: [{ title: "NDA Warrior Batch", year: "Target Year - 2026", period: "2025 – 2026" }],
  "MHT-CET": [{ title: "CET Achiever Batch", year: "Target Year - 2026", period: "2025 – 2026" }],
  Foundation: [{ title: "Foundation Spark", year: "Class 8–10", period: "2025 – 2026" }],
};

const Courses2 = () => {
  const [activeCategory, setActiveCategory] = useState("IIT-JEE");
  const [currentIndex, setCurrentIndex] = useState(0);

  const total = coursesData[activeCategory].length;

  /* ===== DRAG LOGIC ===== */
  const startX = useRef(0);
  const isDragging = useRef(false);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    const diff = e.clientX - startX.current;

    if (diff > 80 && currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else if (diff < -80 && currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentIndex(0);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-5">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-LogoBlue">
            Our Courses
          </h2>
          <p className="text-softBlack mt-2">
            Explore Our Courses Designed for Skills, Knowledge, and Career Excellence
          </p>
        </div>

        {/* ===== CATEGORY BUTTONS ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-8 py-3 font-semibold transition-all ${
                activeCategory === cat
                  ? "bg-lightgreen text-white"
                  : "bg-DarkBlue text-white hover:bg-DarkBlue/90"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== SLIDER ===== */}
        <div
          className="overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div
            className="flex gap-4 transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {coursesData[activeCategory].map((course, i) => (
              <div
                key={i}
                className="
                  w-full 
                  md:w-[calc(33.333%-1rem)]
                  flex-shrink-0
                  bg-white rounded-md shadow-md hover:shadow-xl transition
                "
              >
                {/* Image */}
                <div className="relative h-[240px] bg-[#E9EEF6]">
                  <img
                    src="/Images/Course.png"
                    className="w-full h-full object-cover"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  <h3 className="text-DarkBlue font-semibold text-lg">
                    {course.title}
                  </h3>
                  <p className="text-sm font-medium">{course.year}</p>

                  <div>
                    <p className="font-semibold">Batch Period</p>
                    <p className="text-sm">{course.period}</p>
                  </div>

                  <button className="bg-lightgreen text-white px-5 py-2 rounded-sm flex items-center gap-2">
                    Know More <FiArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Courses2;
