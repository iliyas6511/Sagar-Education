import { useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";

const menuItems = [
  {
    name: "Home",
    submenu: ["Overview", "Why Choose Us", "Achievements"],
  },
  {
    name: "Courses",
    submenu: ["Foundation", "NEET", "JEE", "Crash Course"],
  },
  {
    name: "Student Information",
    submenu: ["Admissions", "Results", "Study Material"],
  },
  {
    name: "About Us",
    submenu: ["Our Story", "Faculty", "Infrastructure"],
  },
  {
    name: "Blog",
    submenu: ["Latest News", "Exam Tips", "Success Stories"],
  },
  {
    name: "Contact Us",
    submenu: null,
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-full mx-auto px-4 md:px-10">
        <div className="flex justify-between items-center h-20 md:h-26">

          {/* Logo */}
          <div className="h-full w-[100px] md:w-[150px]">
            <img
              src="/Images/Sagar education Logo.jpeg"
              alt="Sagar Education"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center gap-1 font-medium text-black hover:text-[var(--color-DarkBlue)]">
                  {item.name}
                  {item.submenu && <FiChevronDown size={14} />}
                </button>

                {/* Dropdown */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-3 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href="#"
                        className="block px-4 py-3 text-sm text-black hover:bg-[var(--color-DarkBlue)] hover:text-white transition"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex gap-4 text-[var(--color-LogoBlue)]">
            <FaFacebookF size={26} />
            <FaWhatsapp size={26} />
            <FaInstagram size={26} />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 h-full">
          <div className="px-6 py-4 flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <div key={index}>
                <button
                  className="w-full flex justify-between items-center font-medium"
                  onClick={() =>
                    setActiveMobileMenu(
                      activeMobileMenu === index ? null : index
                    )
                  }
                >
                  {item.name}
                  {item.submenu && <FiChevronDown />}
                </button>

                {/* Mobile Dropdown */}
                {item.submenu && activeMobileMenu === index && (
                  <div className="mt-2 ml-3 flex flex-col gap-2">
                    {item.submenu.map((sub, i) => (
                      <a
                        key={i}
                        href="#"
                        className="text-sm text-gray-700"
                      >
                        {sub}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Social Icons */}
            <div className="flex gap-4 pt-4 text-[var(--color-LogoBlue)]">
              <FaFacebookF size={22}/>
              <FaWhatsapp size={22}/>
              <FaInstagram size={22}/>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
