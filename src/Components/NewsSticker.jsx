import { FaCircle } from "react-icons/fa";

const NewsSticker = () => {
    const newsText =
        "Sagar Education empowers students through quality academics, innovation, skilled faculty, and result-oriented learning.";

    return (
        <div className="w-full overflow-hidden bg-[var(--color-Darkred)]">
            <div className="flex h-12 md:h-14 items-center overflow-hidden">
                <div className="marquee flex gap-10">

                    {/* FIRST COPY */}
                    <div className="flex gap-10 items-center whitespace-nowrap">
                        <FaCircle className="text-white text-[6px]" />
                        <p className="text-white whitespace-nowrap">
                            Sagar Education empowers students through quality academics, innovation,
                            skilled faculty, and result-oriented learning.
                        </p>
                    </div>

                    {/* SECOND COPY */}
                    <div className="flex gap-10 items-center whitespace-nowrap">
                        <FaCircle className="text-white text-[6px]" />
                        <p className="text-white whitespace-nowrap">
                            Sagar Education empowers students through quality academics, innovation,
                            skilled faculty, and result-oriented learning.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NewsSticker;
