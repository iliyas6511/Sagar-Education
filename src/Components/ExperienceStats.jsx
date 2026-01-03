import { BsPatchCheckFill } from "react-icons/bs";
import {
  FaUserGraduate,
  FaCheckCircle,
  FaBookOpen,
  FaChalkboardTeacher,
  FaGraduationCap,
} from "react-icons/fa";

const stats = [
  {
    icon: FaUserGraduate,
    value: "10,000+",
    label: "Students Taught",
  },
  {
    icon: BsPatchCheckFill,
    value: "95%",
    label: "Success rate",
  },
  {
    icon: FaGraduationCap ,
    value: "50+",
    label: "Courses & Programs",
  },
  {
    icon: FaChalkboardTeacher,
    value: "100+",
    label: "Expert Faculty",
  },
];

const ExperienceStats = () => {
  return (
    <section className="bg-[var(--color-white)] py-16 px-4">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-darkBlue-2)]">
          7+ Years of Experience
        </h2>
        <p className="mt-4 text-[var(--color-DarkGray)] text-sm md:text-base">
          Building trust through academic excellence, expert faculty,
          proven results, and consistent student success
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="bg-[var(--color-LogoBlue)] rounded-lg hover:shadow-2xl p-10 flex flex-col items-center justify-center text-center min-h-[220px] shadow-sm"
            >
              <Icon className="text-[var(--color-white)] text-6xl mb-6" />

              <h3 className="text-[var(--color-white)] text-3xl font-bold">
                {item.value}
              </h3>

              <p className="mt-2 text-[var(--color-white)] text-lg">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExperienceStats;
