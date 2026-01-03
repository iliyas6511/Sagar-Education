import { FaCheckCircle, FaApple, FaGooglePlay } from "react-icons/fa";

const Advertisement = () => {
  return (
    <section className="w-full px-4 md:px-10 py-10">
      <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-700 via-blue-600 to-sky-400">
        
        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 p-6 md:p-10">

          {/* IMAGE COLUMN */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Images/image.png"
              alt="App Preview"
              className="
                w-full h-[360px]
                object-contain rounded-2xl drop-shadow-2xl
              "
            />
          </div>

          {/* TEXT COLUMN */}
          <div className="text-white text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-semibold whi leading-snug">
              Get <span className="font-bold">Sagar E App</span> for JEE & NEET
            </h2>

            <ul className="mt-5 space-y-3 text-sm md:text-base">
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300 text-lg" />
                Access <span className="font-semibold">free videos</span> worth ₹5000
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300 text-lg" />
                Explore core concept videos
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2">
                <FaCheckCircle className="text-yellow-300 text-lg" />
                Clear all your doubts
              </li>
            </ul>
          </div>

          {/* QR + STORE COLUMN */}
          <div className="flex flex-col items-center gap-5">
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=https://example.com"
                alt="QR Code"
                className="w-28 h-full md:w-32"
              />
            </div>

            <div className="flex flex-col gap-3 w-full items-center">
              <button className="flex items-center gap-3 bg-[#1f3c88] text-white px-6 py-3 rounded-xl w-48 justify-center hover:scale-105 transition">
                <FaApple className="text-xl" />
                App Store
              </button>

              <button className="flex items-center gap-3 bg-[#1f3c88] text-white px-6 py-3 rounded-xl w-48 justify-center hover:scale-105 transition">
                <FaGooglePlay className="text-xl" />
                Play Store
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Advertisement;
