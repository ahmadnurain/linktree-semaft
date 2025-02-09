import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaClipboardUser } from "react-icons/fa6";

const VolunteerButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkTime = () => {
      const now = new Date();
      const startDate = new Date("2025-02-09T17:00:00"); // Mulai tampil 9 Feb 2025, 17:00
      const endDate = new Date("2025-02-10T00:00:00"); // Hilang 10 Feb 2025, 00:00

      setShowButton(now >= startDate && now <= endDate);
    };

    checkTime(); // Cek saat komponen pertama kali dimuat

    const interval = setInterval(checkTime, 1000); // Update setiap detik

    return () => clearInterval(interval); // Hapus interval saat komponen unmount
  }, []);

  return showButton ? (
    <motion.a
      href="https://unma.link/volunteer25"
      target="_blank"
      className="mt-6 relative overflow-hidden bg-black bg-opacity-50 text-white lg:py-3 md:py-3 py-6 px-6 rounded-lg w-full font-medium flex items-center justify-between"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.9 }}
    >
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ease-in-out transform scale-x-0 hover:scale-x-100 hover:translate-x-0 hover:animate-glass-effect"></span>
      <FaClipboardUser className="text-xl" />
      <span className="absolute inset-0 flex items-center justify-center lg:text-base md:text-base text-sm">
        Form Pendaftaran Volunteer <br className="block lg:hidden md:hidden" />
        Senat Mahasiswa
      </span>
    </motion.a>
  ) : null;
};

export default VolunteerButton;
