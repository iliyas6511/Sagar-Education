import { useEffect, useRef, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

/* ===== NEWS DATA ===== */
const newsData = [
    { text: "Enroll now for upcoming courses with limited seats available.", isNew: true },
    { text: "Recent batch results published with outstanding student performances." },
    { text: "Merit-based scholarships introduced to support deserving students & many more." },
    { text: "Expert-led training session conducted to enhance teaching excellence. Exam Results Announced" },
];

export default function NewsUpdates() {
    const listRef = useRef(null);
    const [paused, setPaused] = useState(false);
    const [offset, setOffset] = useState(0);

    /* ===== CONTINUOUS VERTICAL SCROLL ===== */
    useEffect(() => {
        if (paused) return;

        const interval = setInterval(() => {
            setOffset((prev) => prev + 1);
        }, 30);

        return () => clearInterval(interval);
    }, [paused]);

    /* ===== LOOP RESET ===== */
    useEffect(() => {
        const listHeight = listRef.current?.scrollHeight / 2;
        if (offset >= listHeight) {
            setOffset(0);
        }
    }, [offset]);

    return (
        <section className="w-full bg-white py-16">
            {/* ===== HEADER ===== */}
            <div className="text-center mb-12 px-4">
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-DarkBlue)]">
                    News & Updates
                </h2>
                <p className="mt-3 text-[var(--color-DarkGray)] max-w-2xl mx-auto">
                    Latest announcements, events, achievements, and important updates from our institution.
                </p>
            </div>

            {/* ===== CONTENT ===== */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                {/* ===== LEFT IMAGE + TEXT ===== */}
                <div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                            alt="News"
                            className="w-full h-[200px] md:h-[250px] object-cover rounded-sm"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>

                    <p className="mt-6 text-[var(--color-softBlack)] leading-relaxed">
                        Our News section also highlights student successes, faculty accomplishments,
                        and institutional initiatives that reflect our commitment to quality education
                        and continuous improvement. Regular updates ensure transparency and help
                        the academic community stay connected with ongoing activities and future plans.
                    </p>
                </div>

                {/* ===== RIGHT SCROLLING NEWS ===== */}
                <div
                    className="relative h-[500px] bg-white  rounded-xl shadow-[0px_4px_24px_rgba(23,37,144,0.2)] p-6 overflow-hidden"
                    onMouseEnter={() => setPaused(true)}
                    onMouseLeave={() => setPaused(false)}
                    onFocus={() => setPaused(true)}
                    onBlur={() => setPaused(false)}
                    tabIndex={0}
                >
                    <div
                        ref={listRef}
                        // style={{
                        //     transform: `translateY(-${offset}px)`,
                        // }}
                        className="space-y-4 verticalScroll h-full transition-transform duration-75 ease-linear"
                    >
                        {/* duplicated list for infinite loop */}
                        {[...newsData].map((item, index) => (
                            <div
                                key={index}

                                className="bg-lightgray rounded-lg px-5 py-4 flex items-start gap-3 cursor-pointer hover:bg-[var(--color-veryLightgray)]"
                            >
                                <FiChevronRight className="text-[var(--color-darkBlue-2)] mt-1 shrink-0" />

                                <p className="text-[var(--color-darkBlue-2)] leading-snug">
                                    {item.text}
                                    {item.isNew && (
                                        <span className="ml-2 text-sm text-[var(--color-Darkred)] font-medium">
                                            New
                                        </span>
                                    )}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
