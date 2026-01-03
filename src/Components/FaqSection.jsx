import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "What courses does Sagar Education offer?",
    answer:
      "Sagar Education offers a wide range of academic and skill-based courses designed to meet diverse learning needs.",
  },
  {
    question: "How can I enroll in a course?",
    answer:
      "You can enroll by visiting our institute, contacting our support team, or enrolling online through our official website.",
  },
  {
    question: "Are study materials provided to students?",
    answer:
      "Yes, comprehensive study materials and practice resources are provided for all enrolled students.",
  },
  {
    question: "Do you conduct regular tests and assessments?",
    answer:
      "Yes, regular tests, assessments, and performance reviews are conducted to track student progress.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="bg-white py-14 px-4 md:px-0">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[var(--color-darkBlue-2)]">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-[var(--color-DarkGray)] mt-2 max-w-2xl mx-auto text-sm md:text-base">
          Find quick answers to common queries about courses, admissions,
          batches, fees, learning methods, and student support services.
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="shadow-md rounded-xl overflow-hidden"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 md:px-6 py-4 md:py-6 bg-[rgba(23,37,144,0.03)] text-left transition"
              >
                <span className="text-[var(--color-lightgreen)] font-medium text-sm md:text-lg">
                  {faq.question}
                </span>
                <FiChevronDown
                  className={`text-[var(--color-darkBlue-2)] text-xl transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`px-5 md:px-6 overflow-hidden rounded-[0px_0px_4px_4px] transition-all duration-300 border border-[rgba(142,142,142,0.2)] bg- ${
                  activeIndex === index
                    ? "max-h-40 py-4 md:py-6 border border-[rgba(142,142,142,0.2)]"
                    : "max-h-0 py-0"
                }`}
              >
                <p className="text-LogoBlue text-sm md:text-lg leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
