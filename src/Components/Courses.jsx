import { useRef, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const categories = ["IIT-JEE", "NEET", "NDA", "MHT-CET", "Foundation"];

const coursesData = {
    "IIT-JEE": [
        {
            title: "JEE Sankalp Batch",
            year: "Target Year - 2027",
            period: "March 2026 – Feb 2027",
        },
        {
            title: "JEE Kalyan Batch",
            year: "Target Year - 2027",
            period: "March 2026 – Feb 2027",
        },
        {
            title: "JEE Sangharsh Batch",
            year: "Target Year - 2027",
            period: "March 2026 – Feb 2027",
        },
    ],
    NEET: [
        { title: "NEET Alpha Batch", year: "Target Year - 2027", period: "2026 – 2027" },
        { title: "NEET Beta Batch", year: "Target Year - 2027", period: "2026 – 2027" },
    ],
    NDA: [
        { title: "NDA Warrior Batch", year: "Target Year - 2026", period: "2025 – 2026" },
    ],
    "MHT-CET": [
        { title: "CET Achiever Batch", year: "Target Year - 2026", period: "2025 – 2026" },
    ],
    Foundation: [
        { title: "Foundation Spark", year: "Class 8–10", period: "2025 – 2026" },
    ],
};

const Courses = () => {
    const [activeCategory, setActiveCategory] = useState("IIT-JEE");
    const [loading, setLoading] = useState(false);
    const sliderRef = useRef(null);

    const handleCategoryChange = (cat) => {
        if (cat === activeCategory) return;
        setLoading(true);
        setActiveCategory(cat);

        setTimeout(() => {
            setLoading(false);
            sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
        }, 500);
    };

    let isDown = false;
    let startX;
    let scrollLeft;

    /* ===== DRAG SCROLL ===== */
    const handleMouseDown = (e) => {
        isDown = true;
        sliderRef.current.classList.add("cursor-grabbing");
        startX = e.pageX - sliderRef.current.offsetLeft;
        scrollLeft = sliderRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        isDown = false;
        sliderRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseUp = () => {
        isDown = false;
        sliderRef.current.classList.remove("cursor-grabbing");
    };

    const handleMouseMove = (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        sliderRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-5">

                {/* ===== HEADING ===== */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-LogoBlue">
                        Our Courses
                    </h2>
                    <p className="text-softBlack mt-2 text-sm md:text-base">
                        Explore Our Courses Designed for Skills, Knowledge, and Career Excellence
                    </p>
                </div>

                {/* ===== CATEGORY BUTTONS ===== */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => handleCategoryChange(cat)}
                            className={`px-8 py-3 min-w-50 font-semibold text-sm md:text-base transition-all ${activeCategory === cat
                                ? "bg-lightgreen text-white"
                                : "bg-DarkBlue text-white hover:bg-DarkBlue/90"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* ===== LOADER ===== */}
                {loading ? (
                    <div className="flex justify-center items-center h-[300px]">
                        <span className="w-12 h-12 border-4 border-DarkBlue border-t-transparent rounded-full animate-spin"></span>
                    </div>
                ) : (
                    <>
                        < div
                            ref={sliderRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab"
                            onMouseDown={handleMouseDown}
                            onMouseLeave={handleMouseLeave}
                            onMouseUp={handleMouseUp}
                            onMouseMove={handleMouseMove}
                        >
                            {coursesData[activeCategory].map((course, i) => (
                                <div
                                    key={i}
                                    className="flex-[0_0_100%] md:flex-[0_0_33%] bg-white rounded-md overflow-hidden shadow-md hover:shadow-xl transition"
                                >
                                    {/* Image */}
                                    <div className="relative bg-[#E9EEF6] h-[240px] rounded-t-lg">
                                        <img
                                            src="/Images/Course.png"
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/20"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-4 space-y-6">
                                        <div className="space-y-2">
                                            <div className="space-y-1">
                                                <h3 className="text-DarkBlue font-semibold text-[20px]">
                                                    {course.title}
                                                </h3>

                                                <p className="text-DarkGray font-medium text-sm">{course.year}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-softBlack ">Batch Period</p>
                                                <p className="text-softBlack text-sm">{course.period}</p>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="font-semibold text-softBlack ">Details</p>
                                                <p className="text-softBlack text-sm">
                                                    Our batches offer structured learning, expert guidance,
                                                    flexible schedules, personalized attention, and practical training...
                                                </p>
                                            </div>


                                        </div>
                                        <button className="bg-lightgreen cursor-pointer text-white min-w-[150px] px-5 py-2 text-sm font-medium rounded-sm flex items-center gap-2 hover:bg-green-700 transition">
                                            Know More <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>

                )}

                {/* ===== COURSE CARDS ===== */}


            </div>
        </section >
    );
};

export default Courses;
