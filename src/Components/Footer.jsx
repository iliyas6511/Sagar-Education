import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope
} from "react-icons/fa6";

const footerColumns = [
  {
    title: "About Us",
    links: [
      "About Sagar",
      "Contact Us",
      "Sections & many more",
      "Blogs & Updates",
      "Event",

    ],
  },
  {
    title: "Courses",
    links: [
      "ClassRooms",
      "Foundation",
      "NEET",
      "Distance Learning",
      "NDA",
      "ZEE",
    ],
  },
  {
    title: "Study Material",
    links: [
      "ClassRooms",
      "Foundation",
      "NEET",
      "Distance Learning",
      "NDA",
      "ZEE",
    ],
  },
];

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <footer className="bg-[var(--color-softBlack)] text-[var(--color-white)]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-12 gap-6 md:gap-12">

        {/* LEFT : BRAND INFO */}
        <div className="space-y-6 col-span-12 md:col-span-4 max-md:order-2 max-md:mt-5">
          <div className="flex items-center gap-4">
            <img
              src="/Images/Sagar education Logo.jpeg"
              alt="Sagar Education"
              className="w-16 h-16 object-cover bg-white rounded"
            />
            <div>
              <h3 className="text-xl font-semibold">Sagar Education</h3>
              <p className="text-base text-softgray">
                Name Of Excellence
              </p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <FaLocationDot size={30} className=" text-white" />
            <p className="text-base leading-relaxed text-softgray">
              Birdev Chowk Near Auto stop, In front of Balumama Mandir,
              Peth Vadgaon, Kolhapur<br />Pin-416305
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <FaPhone size={20} className="text-white" />
            <p className="text-base leading-relaxed text-softgray">
              HOD - Shri. Donald Putin (+91 80871 77259)
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <FaEnvelope size={20} className="text-white" />
            <p className="text-base leading-relaxed text-softgray">
              sagaredu@gmail.com
            </p>
          </div>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 pt-3">
            {[FaFacebookF, FaWhatsapp, FaInstagram, FaXTwitter].map(
              (Icon, i) => (
                <div
                  key={i}
                  className="p-4 rounded-full bg-[#2f2f2f] hover:bg-[var(--color-darkBlue-2)] transition cursor-pointer"
                >
                  <Icon size={20} />
                </div>
              )
            )}
          </div>
        </div>

        {/* COLUMN TEMPLATE */}
        <div className="col-span-12 md:col-span-8 space-y-4 hidden md:block">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="w-full">
              <h4 className="text-lg font-semibold mb-4">{col.title}</h4>
              <ul className="space-y-3 text-sm flex flex-wrap gap-10 ">
                {col.links.map((item, i) => (
                  <li
                    key={i}
                    className={`cursor-pointer transition hover:text-[var(--color-darkBlue-2)] text-softgray`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <div className="md:hidden col-span-12 space-y-4 order-1">
          {footerColumns.map((col, idx) => (
            <div key={idx} className="border-b border-white/10 pb-3">
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-full flex justify-between items-center text-left text-lg font-semibold py-2"
              >
                {col.title}
                {activeIndex === idx ? <FaMinus className="text-white"/> : <FaPlus />}
              </button>

              {activeIndex === idx && (
                <ul className="mt-3 space-y-3 text-sm">
                  {col.links.map((item, i) => (
                    <li
                      key={i}
                      className="text-softgray hover:text-[var(--color-darkBlue-2)] transition cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[#4a4a4a] py-4 text-center text-sm text-[var(--color-DarkGray)]">
        ©2026 All rights Reserved to Sagar Education
      </div>
    </footer>
  );
};

export default Footer;
