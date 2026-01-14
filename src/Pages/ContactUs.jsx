// ContactUsPage.jsx
import { useMemo, useState } from "react";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiClock,
  FiSend,
  FiChevronDown,
  FiMessageCircle,
  FiHelpCircle,
  FiUsers,
  FiBookOpen,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

/* -------------------- Smooth scroll helper (use everywhere) -------------------- */
const scrollToId = (id, offset = 84) => {
  const el = document.getElementById(id);
  if (!el) return;

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
  window.scrollTo({ top: y, behavior: reduceMotion ? "auto" : "smooth" });

  // Optional: focus for accessibility (does not change page)
  el.setAttribute("tabindex", "-1");
  el.focus({ preventScroll: true });
};

/* ----------------------------- 1) HERO ----------------------------- */
const ContactHero = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-DarkBlue/95 via-DarkBlue/90 to-darkBlue-2/90" />
      <div className="pointer-events-none absolute inset-0 bg-Black/30 mix-blend-multiply" />

      <div className="relative max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="max-w-5xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 md:p-10 shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-[10px] md:text-xs tracking-[0.25em] uppercase">
            Contact Sagar Education
          </span>

          <h1 className="mt-5 text-3xl md:text-5xl font-bold leading-tight">
            We’re Here to Help
            <span className="block text-3xl mt-2 font-semibold text-white/80">Admissions • Batches • Guidance</span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-white/80 max-w-2xl">
            Reach out for course details, fee structure, scholarship guidance, or
            batch timings. Our team responds quickly during working hours.
          </p>

          {/* UPDATED: These buttons now smooth-scroll to sections (no instant jump) */}
          <div className="mt-7 flex flex-col md:flex-row gap-3">
            <button
              type="button"
              onClick={() => scrollToId("call-card")}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-white text-DarkBlue shadow hover:shadow-lg transition"
            >
              <FiPhone /> Call Now
            </button>

            <button
              type="button"
              onClick={() => scrollToId("form")}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/25 bg-white/10 hover:bg-white/15 transition"
            >
              <FiSend /> Send Message
            </button>

            <button
              type="button"
              onClick={() => scrollToId("map")}
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold border border-white/25 bg-white/10 hover:bg-white/15 transition"
            >
              <FiMapPin /> Get Directions
            </button>
          </div>

          {/* <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { label: "Quick Response", value: "< 24 hrs" },
              { label: "Counselling", value: "1:1" },
              { label: "Support", value: "Parents & Students" },
              { label: "Office Visit", value: "Mon–Sat" },
            ].map((s, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3"
              >
                <p className="text-lg md:text-xl font-semibold">{s.value}</p>
                <p className="mt-1 text-[11px] md:text-xs text-white/70">{s.label}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

/* ---------------------- 2) OFFICE DETAILS (INFO) ---------------------- */
const OfficeDetails = () => {
  const cards = useMemo(
    () => [
      {
        id: "address-card",
        icon: <FiMapPin className="text-DarkBlue" size={22} />,
        title: "Office Address",
        lines: [
          "Sagar Education, Main Branch",
          "FC Road, Shivajinagar, Pune, Maharashtra 411005",
        ],
        action: { label: "View Map Section", to: "map" },
      },
      {
        id: "call-card",
        icon: <FiPhone className="text-DarkBlue" size={22} />,
        title: "Call Us",
        lines: ["+91 99999 99999", "+91 88888 88888"],
        // Keep call action as actual tel (user can click to call), but hero scrolls here.
        action: { label: "Call Now", href: "tel:+919999999999" },
      },
      {
        id: "mail-card",
        icon: <FiMail className="text-DarkBlue" size={22} />,
        title: "Email",
        lines: ["info@sagareducation.in", "admissions@sagareducation.in"],
        action: { label: "Open Form Section", to: "form" },
      },
      {
        id: "hours-card",
        icon: <FiClock className="text-DarkBlue" size={22} />,
        title: "Working Hours",
        lines: ["Mon – Sat: 9:00 AM – 7:30 PM", "Sunday: Closed"],
        action: { label: "Ask Availability", to: "form" },
      },
    ],
    []
  );

  return (
    <section id="contact-details" className="py-14 md:py-16 bg-veryLightgray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">
            Contact Details
          </h2>
          <p className="mt-2 text-sm md:text-base text-DarkGray">
            Visit, call, or email—choose the most convenient way to reach us.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((c, i) => (
            <div
              key={i}
              id={c.id}
              className="relative overflow-hidden rounded-2xl bg-white border border-softgray shadow-[0_10px_30px_rgba(0,0,0,0.06)] p-6 md:p-7 scroll-mt-24"
            >
              <div className="pointer-events-none absolute -top-14 -right-14 h-40 w-40 rounded-full bg-darkBlue-2/10 blur-2xl" />
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-veryLightgray border border-softgray grid place-items-center">
                  {c.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-softBlack">{c.title}</h3>
                  <div className="mt-2 space-y-1">
                    {c.lines.map((l, idx) => (
                      <p key={idx} className="text-sm md:text-[15px] text-DarkGray">
                        {l}
                      </p>
                    ))}
                  </div>

                  <div className="mt-5">
                    {"to" in c.action ? (
                      <button
                        type="button"
                        onClick={() => scrollToId(c.action.to)}
                        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-DarkBlue to-darkBlue-2 text-white shadow hover:shadow-lg transition"
                      >
                        {c.action.label}
                      </button>
                    ) : (
                      <a
                        href={c.action.href}
                        className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-DarkBlue to-darkBlue-2 text-white shadow hover:shadow-lg transition"
                      >
                        {c.action.label}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-2xl border border-softgray bg-white p-5 md:p-6 shadow-[0_10px_30px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-lightgreen/10 border border-lightgreen/20 grid place-items-center text-lightgreen">
                <FiMessageCircle size={20} />
              </div>
              <div>
                <p className="font-semibold text-softBlack">Prefer WhatsApp?</p>
                <p className="text-sm text-DarkGray">
                  Get quick batch & admission info on chat.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold bg-lightgreen text-white shadow hover:shadow-lg transition"
            >
              <FaWhatsapp /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- 3) MAP ----------------------------- */
const OfficeLocationMap = () => {
  return (
    <section id="map" className="py-14 md:py-16 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">
              Office Location
            </h2>
            <p className="mt-2 text-sm md:text-base text-DarkGray">
              Find us easily and plan your visit.
            </p>
          </div>

          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold border border-softgray bg-veryLightgray hover:bg-lightgray transition text-softBlack"
          >
            <FiMapPin /> Open Google Maps
          </a>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          <div className="md:col-span-2 overflow-hidden rounded-2xl border border-softgray shadow-[0_12px_40px_rgba(0,0,0,0.07)]">
            <div className="aspect-[16/11] md:aspect-[16/9] w-full">
              <iframe
                title="Sagar Education Location"
                src="https://www.google.com/maps?q=Shivajinagar%20Pune&output=embed"
                className="w-full h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="rounded-2xl border border-softgray bg-veryLightgray p-6 md:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.22em] uppercase font-semibold text-DarkBlue">
              <FiHelpCircle /> Visit Tips
            </p>

            <h3 className="mt-3 text-lg font-semibold text-softBlack">
              Before You Visit
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-DarkGray">
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-darkBlue-2" />
                Prefer an appointment for counselling during peak hours.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-darkBlue-2" />
                Carry last year’s marksheet (optional) for better guidance.
              </li>
              <li className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-darkBlue-2" />
                Parking availability may vary—reach 10 minutes early.
              </li>
            </ul>

            <div className="mt-6 rounded-xl bg-white border border-softgray p-4">
              <p className="text-sm font-semibold text-softBlack">Working Hours</p>
              <p className="mt-1 text-sm text-DarkGray">Mon–Sat: 9:00 AM – 7:30 PM</p>
              <button
                type="button"
                onClick={() => scrollToId("form")}
                className="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-DarkBlue to-darkBlue-2 text-white shadow hover:shadow-lg transition"
              >
                Ask Availability
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- 4) FORM ----------------------------- */
const MailUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Admissions Enquiry",
    message: "",
  });

  const [status, setStatus] = useState({ type: "idle", msg: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "idle", msg: "" });

    if (!form.name || !form.phone || !form.message) {
      setStatus({ type: "error", msg: "Please fill Name, Phone and Message." });
      return;
    }

    setStatus({
      type: "success",
      msg: "Thanks! Your message has been received. We’ll contact you shortly.",
    });

    setForm({
      name: "",
      phone: "",
      email: "",
      subject: "Admissions Enquiry",
      message: "",
    });
  };

  return (
    <section id="form" className="py-14 md:py-16 bg-veryLightgray scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">
          {/* Left info panel */}
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-DarkBlue to-darkBlue-2 text-white p-7 md:p-10 shadow-[0_20px_70px_rgba(0,0,0,0.18)]">
            <div className="pointer-events-none absolute -top-16 -right-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-Black/20 blur-3xl" />

            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-4 py-1 text-[10px] md:text-xs tracking-[0.25em] uppercase">
              <FiSend /> Mail Us
            </p>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
              Send Your Enquiry
            </h2>
            <p className="mt-3 text-sm md:text-base text-white/80">
              Share your requirement—course, batch timing, fees, or counselling.
              We usually respond within 24 hours (working days).
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4">
              {[
                {
                  icon: <FiUsers />,
                  title: "Admissions Guidance",
                  desc: "Course, fees, scholarship & schedule.",
                },
                {
                  icon: <FiBookOpen />,
                  title: "Academic Support",
                  desc: "Batch details, syllabus & test schedule.",
                },
              ].map((x, i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-white/10 border border-white/15 p-5"
                >
                  <div className="flex items-start gap-3">
                    <div className="h-10 w-10 rounded-xl bg-white/10 border border-white/15 grid place-items-center">
                      {x.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{x.title}</p>
                      <p className="mt-1 text-sm text-white/75">{x.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7 rounded-2xl bg-white/10 border border-white/15 p-5">
              <p className="text-sm font-semibold">Priority Support</p>
              <p className="mt-1 text-sm text-white/75">
                For urgent queries, call us during office hours.
              </p>
              <a
                href="tel:+919999999999"
                className="mt-4 inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold bg-white text-DarkBlue"
              >
                <FiPhone /> +91 99999 99999
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl bg-white border border-softgray shadow-[0_12px_40px_rgba(0,0,0,0.07)] p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-DarkBlue">
              Contact Form
            </h3>
            <p className="mt-2 text-sm text-DarkGray">
              Fill the form and our team will connect with you.
            </p>

            {status.type !== "idle" && (
              <div
                className={`mt-5 rounded-xl border p-4 text-sm ${
                  status.type === "success"
                    ? "bg-lightgreen/10 border-lightgreen/20 text-softBlack"
                    : "bg-Darkred/10 border-Darkred/20 text-softBlack"
                }`}
                role="status"
              >
                {status.msg}
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-softBlack">
                    Full Name <span className="text-Darkred">*</span>
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="Enter your name"
                    className="mt-2 w-full rounded-xl border border-softgray bg-veryLightgray px-4 py-3 text-sm outline-none focus:border-darkBlue-2 focus:ring-2 focus:ring-darkBlue-2/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-softBlack">
                    Phone <span className="text-Darkred">*</span>
                  </label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    placeholder="Enter phone number"
                    className="mt-2 w-full rounded-xl border border-softgray bg-veryLightgray px-4 py-3 text-sm outline-none focus:border-darkBlue-2 focus:ring-2 focus:ring-darkBlue-2/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-softBlack">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="Enter email (optional)"
                    className="mt-2 w-full rounded-xl border border-softgray bg-veryLightgray px-4 py-3 text-sm outline-none focus:border-darkBlue-2 focus:ring-2 focus:ring-darkBlue-2/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-softBlack">
                    Subject
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    className="mt-2 w-full rounded-xl border border-softgray bg-veryLightgray px-4 py-3 text-sm outline-none focus:border-darkBlue-2 focus:ring-2 focus:ring-darkBlue-2/20"
                  >
                    <option>Admissions Enquiry</option>
                    <option>Course Details</option>
                    <option>Fees & Scholarship</option>
                    <option>Batch Timings</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-softBlack">
                  Message <span className="text-Darkred">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={5}
                  placeholder="Write your message..."
                  className="mt-2 w-full resize-none rounded-xl border border-softgray bg-veryLightgray px-4 py-3 text-sm outline-none focus:border-darkBlue-2 focus:ring-2 focus:ring-darkBlue-2/20"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-gradient-to-r from-DarkBlue to-darkBlue-2 text-white shadow hover:shadow-lg transition"
              >
                <FiSend /> Send Message
              </button>

              <p className="text-xs text-DarkGray">
                By submitting, you agree to be contacted by Sagar Education for this enquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- 5) BANNER ----------------------------- */
const ContactBanner = () => {
  return (
    <section className="py-12 md:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative overflow-hidden rounded-3xl border border-softgray bg-gradient-to-r from-veryLightgray via-white to-veryLightgray p-7 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-darkBlue-2/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-lightgreen/10 blur-3xl" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-DarkBlue">
                Need counselling?
              </p>
              <h3 className="mt-2 text-2xl md:text-3xl font-semibold text-softBlack">
                Book a Free Guidance Call
              </h3>
              <p className="mt-2 text-sm md:text-base text-DarkGray max-w-2xl">
                Get clarity on the best course path (JEE/NEET/Foundation), batch
                timings, and a study plan that fits your goals.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-3">
              <button
                type="button"
                onClick={() => scrollToId("call-card")}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold bg-DarkBlue text-white shadow hover:shadow-lg transition"
              >
                <FiPhone /> Call for Counselling
              </button>
              <button
                type="button"
                onClick={() => scrollToId("form")}
                className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold border border-softgray bg-white hover:bg-veryLightgray transition text-softBlack"
              >
                <FiSend /> Message Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- 6) FAQ (FIXED) ----------------------------- */
/**
 * FIXES:
 * 1) Only ONE question open at a time (global openId).
 * 2) No "adjacent card height issue" in md 2-col view:
 *    we render two independent vertical columns (flex stacks),
 *    so opening left doesn't stretch right.
 */
const ContactFAQ = () => {
  const faqs = useMemo(
    () => [
      {
        id: "faq-1",
        q: "How soon will I get a response?",
        a: "We typically respond within 24 hours on working days. For urgent queries, please call the office during working hours.",
      },
      {
        id: "faq-2",
        q: "Can I visit the office without an appointment?",
        a: "Yes, walk-ins are welcome. However, during peak hours we recommend booking a counselling slot for faster assistance.",
      },
      {
        id: "faq-3",
        q: "Do you provide fee details and scholarship guidance on call?",
        a: "Yes. Our team can explain fee structure, payment options, and scholarship criteria. Final confirmation may require a visit/document verification.",
      },
      {
        id: "faq-4",
        q: "Which courses can I enquire about here?",
        a: "You can enquire about Foundation, 11th/12th Science coaching, JEE/NEET/MHT-CET preparation, and repeater batches.",
      },
    ],
    []
  );

  const [openId, setOpenId] = useState(faqs[0]?.id);

  const leftFaqs = faqs.filter((_, i) => i % 2 === 0);
  const rightFaqs = faqs.filter((_, i) => i % 2 === 1);

  const Item = ({ f }) => {
    const isOpen = openId === f.id;
    return (
      <div className="rounded-2xl border border-softgray bg-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden">
        <button
          type="button"
          onClick={() => setOpenId(isOpen ? null : f.id)}
          className="w-full flex items-center justify-between gap-4 p-4 text-left"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-3">
            <div className="mt-0.5 h-9 w-9 rounded-xl bg-darkBlue-2/10 border border-darkBlue-2/15 grid place-items-center text-DarkBlue">
              <FiHelpCircle />
            </div>
            <p className="font-semibold text-softBlack">{f.q}</p>
          </div>
          <FiChevronDown
            className={`shrink-0 text-DarkGray transition ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            size={18}
          />
        </button>

        {/* keep content mounted for smoother layout, but hidden when closed */}
        <div
          className={`px-5 md:px-6  text-sm md:text-[15px] text-DarkGray leading-relaxed transition-[max-height,opacity] duration-300 ${
            isOpen ? "opacity-100 py-2" : "opacity-0"
          }`}
          style={{
            maxHeight: isOpen ? 300 : 0,
            overflow: "hidden",
          }}
        >
          {f.a}
        </div>
      </div>
    );
  };

  return (
    <section className="py-14 md:py-16 bg-veryLightgray">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm md:text-base text-DarkGray">
            Quick answers to common contact & visit questions.
          </p>
        </div>

        {/* FIXED LAYOUT: two independent columns on md+ */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-start">
          <div className="flex flex-col gap-5 md:gap-6">
            {leftFaqs.map((f) => (
              <Item key={f.id} f={f} />
            ))}
          </div>
          <div className="flex flex-col gap-5 md:gap-6">
            {rightFaqs.map((f) => (
              <Item key={f.id} f={f} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------------------- 7) EXTRA SECTION: HELP DESK ---------------------- */
const HelpDeskSection = () => {
  const items = useMemo(
    () => [
      {
        title: "Admissions Desk",
        desc: "Course selection, fee structure, scholarship guidance.",
        chip: "Admissions",
        action: { label: "Scroll to Call", to: "call-card" },
        icon: <FiUsers size={20} />,
      },
      {
        title: "Academic Coordinator",
        desc: "Batch allocation, timetable, test schedule, doubt sessions.",
        chip: "Academics",
        action: { label: "Scroll to Form", to: "form" },
        icon: <FiBookOpen size={20} />,
      },
      {
        title: "WhatsApp Support",
        desc: "Quick responses for timings, location, and required documents.",
        chip: "Chat",
        action: { label: "WhatsApp", href: "https://wa.me/919999999999" },
        icon: <FaWhatsapp size={20} />,
      },
    ],
    []
  );

  return (
    <section className="py-14 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-semibold text-DarkBlue">Help Desk</h2>
        <p className="mt-2 text-sm md:text-base text-DarkGray">
          Contact the right team for faster resolution.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {items.map((it, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-2xl border border-softgray bg-veryLightgray p-6 md:p-7 shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
            >
              <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-darkBlue-2/10 blur-3xl" />

              <div className="flex items-start justify-between gap-4">
                <div className="h-11 w-11 rounded-xl bg-white border border-softgray grid place-items-center text-DarkBlue">
                  {it.icon}
                </div>

                <span className="inline-flex items-center rounded-full border border-softgray bg-white px-3 py-1 text-[11px] font-semibold text-DarkBlue">
                  {it.chip}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold text-softBlack">{it.title}</h3>
              <p className="mt-2 text-sm text-DarkGray">{it.desc}</p>

              <div className="mt-5">
                {"to" in it.action ? (
                  <button
                    type="button"
                    onClick={() => scrollToId(it.action.to)}
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-gradient-to-r from-DarkBlue to-darkBlue-2 text-white shadow hover:shadow-lg transition"
                  >
                    {it.action.label}
                  </button>
                ) : (
                  <a
                    href={it.action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold bg-lightgreen text-white shadow hover:shadow-lg transition"
                  >
                    {it.action.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ----------------------------- MAIN WRAP ----------------------------- */
const ContactUsPage = () => {
  return (
    <main className="bg-white">
      <ContactHero />
      <OfficeDetails />
      <OfficeLocationMap />
      <MailUsForm />
      <ContactBanner />
      <ContactFAQ />
      <HelpDeskSection />
    </main>
  );
};

export default ContactUsPage;