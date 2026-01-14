import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },

  // Dropdown (only)
  {
    label: "Courses",
    submenu: [
      // All course items go to /coursedetail (you can make it dynamic later)
      { label: "Foundation", to: "/coursedetail?course=foundation" },
      { label: "NEET", to: "/coursedetail?course=neet" },
      { label: "JEE", to: "/coursedetail?course=jee" },
      { label: "Crash Course", to: "/coursedetail?course=crash-course" },
    ],
  },

  // Dropdown (only)
  {
    label: "Student Information",
    submenu: [
      { label: "Admissions", to: "/admission" },
      // Routes not provided, so keeping inside admission page as anchors (safe + works)
      { label: "Results", to: "/admission#results" },
      { label: "Study Material", to: "/admission#study-material" },
    ],
  },

  { label: "About Us", to: "/aboutus" },
  { label: "Blog", to: "/blogs" },
  { label: "Contact Us", to: "/contact-us" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkBase =
    "text-[16px] font-medium tracking-wide text-black hover:text-[var(--color-DarkBlue)] transition-colors";

  const activeLink = "text-DarkBlue";

  return (
    <header
      className={[
        "sticky top-0 z-[9999] w-full",
        "bg-white/90 backdrop-blur-md",
        "border-b border-slate-100",
        scrolled ? "shadow-lg shadow-slate-200/70" : "shadow-none",
      ].join(" ")}
      style={{ overflow: "visible" }} // helps dropdowns render above sections
    >
      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <div className="flex py-2 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="h-12 w-20 md:h-20 md:w-34 overflow-hidden flex justify-center rounded-md">
              <img
                src="/Images/Sagar education Logo.jpeg"
                alt="Sagar Education"
                className="h-full w-full object-cover"
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => {
              const hasDropdown = !!item.submenu?.length;

              if (!hasDropdown) {
                return (
                  <NavLink
                    key={index}
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkBase} ${isActive ? activeLink : ""}`
                    }
                  >
                    {item.label}
                  </NavLink>
                );
              }

              return (
                <div key={index} className="relative group">
                  <button
                    type="button"
                    className={`${linkBase} inline-flex items-center gap-1`}
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    {item.label}
                    <FiChevronDown size={16} className="mt-[1px]" />
                  </button>

                  {/* Dropdown */}
                  <div
                    className={[
                      "absolute left-0 top-full mt-3 w-60",
                      "rounded-xl border border-slate-100 bg-white shadow-xl",
                      "opacity-0 invisible translate-y-1",
                      "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0",
                      "transition-all duration-200",
                      "z-[10000]", // make sure it stays above hero sections
                    ].join(" ")}
                    role="menu"
                  >
                    <div className="py-2">
                      {item.submenu.map((sub, i) => (
                        <NavLink
                          key={i}
                          to={sub.to}
                          className={({ isActive }) =>
                            [
                              "block px-4 py-2.5 text-sm font-medium",
                              isActive
                                ? "text-[var(--color-DarkBlue)] bg-slate-50"
                                : "text-slate-700",
                              "hover:bg-[var(--color-DarkBlue)] hover:text-white transition-colors",
                            ].join(" ")
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </nav>

          {/* Social Icons (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#"
              className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
              aria-label="Facebook"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={24} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
              aria-label="Instagram"
            >
              <FaInstagram size={24} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-slate-100 transition"
            onClick={() => {
              setMobileOpen((s) => !s);
              if (mobileOpen) setActiveMobileMenu(null);
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => {
                const hasDropdown = !!item.submenu?.length;

                if (!hasDropdown) {
                  return (
                    <NavLink
                      key={index}
                      to={item.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        [
                          "px-3 py-3 rounded-lg font-semibold",
                          isActive
                            ? "bg-slate-50 text-[var(--color-DarkBlue)]"
                            : "text-slate-800 hover:bg-slate-50",
                          "transition",
                        ].join(" ")
                      }
                    >
                      {item.label}
                    </NavLink>
                  );
                }

                const open = activeMobileMenu === index;

                return (
                  <div key={index} className="px-1">
                    <button
                      className="w-full px-2 py-3 rounded-lg flex items-center justify-between font-semibold text-slate-800 hover:bg-slate-50 transition"
                      onClick={() =>
                        setActiveMobileMenu(open ? null : index)
                      }
                    >
                      <span>{item.label}</span>
                      <FiChevronDown
                        className={`transition-transform ${open ? "rotate-180" : ""}`}
                      />
                    </button>

                    {open && (
                      <div className="ml-2 mt-1 mb-2 flex flex-col gap-1">
                        {item.submenu.map((sub, i) => (
                          <NavLink
                            key={i}
                            to={sub.to}
                            onClick={() => setMobileOpen(false)}
                            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-[var(--color-DarkBlue)] hover:text-white transition"
                          >
                            {sub.label}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-2 pt-3 px-2">
                <a
                  href="#"
                  className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
                  aria-label="Facebook"
                >
                  <FaFacebookF size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-full text-[var(--color-LogoBlue)] hover:bg-slate-100 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;