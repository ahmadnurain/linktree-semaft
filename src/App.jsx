import { motion } from "framer-motion";
import Social from "./components/Social";
import { MdOutlineMail, MdGroups } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { useState } from "react";
import "./App.css";

const LinkTree = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="flex flex-col items-center min-h-screen p-4 py-14 bg-[url('/modern-banner-with-3d-flow-shape-gradient-fluid-wave-background_331749-573.jpg')] bg-cover bg-center">
      {/* Profile Section */}
      <motion.div className="bg-white rounded-xl shadow-lg p-6 text-center w-full max-w-lg" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <img src="/LOGO KABINET.png" alt="Profile" className="w-32 h-32 rounded-full mx-auto" />
        <motion.h1
          className="text-xl font-bold mt-4"
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and moved down
          animate={{ opacity: 1, y: 0 }} // Animate to visible and move up
          transition={{ duration: 0.7 }} // Animation duration
        >
          Senat Mahasiswa Fakultas Teknik
        </motion.h1>

        <motion.p
          className="text-gray-600 text-sm mt-2"
          initial={{ opacity: 0, y: 20 }} // Initial state: hidden and moved down
          animate={{ opacity: 1, y: 0 }} // Animate to visible and move up
          transition={{ duration: 0.7, delay: 0.3 }} // Animation duration with a delay for sequential appearance
        >
          Senat mahasiswa fakultas teknik universitas majalengka.
        </motion.p>
        {/* Social Icons */}
        <Social />
        {/* Map Section */}
        <div className="mt-6">
          <div className="w-full h-48 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.496650158!2d108.2122187!3d-6.8328649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f2f451bdd07cf%3A0xbe4247edd1a34a4b!2sUniversitas%20Majalengka!5e0!3m2!1sen!2sid!4v1706638897156!5m2!1sen!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Website and Email Buttons */}
        <motion.a
          href="mailto:semaft@unma.ac.id"
          className="mt-6 relative overflow-hidden bg-black bg-opacity-50 text-white py-3 px-6 rounded-lg w-full font-medium flex items-center justify-between"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ease-in-out transform scale-x-0 hover:scale-x-100 hover:translate-x-0 hover:animate-glass-effect"></span>
          <MdOutlineMail className="text-xl" />
          <span className="absolute inset-0 flex items-center justify-center">Email</span>
        </motion.a>

        {/* Button to Open Modal */}
        <motion.button
          className="mt-6 relative overflow-hidden bg-black bg-opacity-50 text-white lg:py-3 md:py-3 py-6 px-6 rounded-lg w-full font-medium flex items-center justify-between cursor-pointer"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          onClick={() => setIsModalOpen(true)}
        >
          <MdGroups className="text-xl" />
          <span className="absolute inset-0 flex items-center justify-center">
            Struktural Senat Mahasiwa <br className="block lg:hidden md:hidden" />
            Fakultas Teknik
          </span>
        </motion.button>

        {/* Modal */}
        {isModalOpen && (
          <motion.div className="fixed inset-0 backdrop-blur-lg bg-opacity-50 flex justify-center items-center p-4 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div className="bg-white rounded-lg overflow-hidden shadow-lg p-6 max-w-lg w-full relative" initial={{ scale: 0.8 }} animate={{ scale: 1 }} transition={{ duration: 0.3 }}>
              {/* Image */}
              <img src="/Stuktural SEMA.png" alt="Aspirasi Mahasiswa" className="w-full rounded-lg" />

              {/* Close Button - Positioned Below Image */}
              <div className="flex justify-center mt-4">
                <button className="relative overflow-hidden bg-black bg-opacity-50 text-white lg:py-5 md:py-5 py-6 px-6 rounded-lg w-full font-medium flex items-center cursor-pointer" onClick={() => setIsModalOpen(false)}>
                  <span className="absolute inset-0 flex items-center justify-center">Close</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
        <motion.a
          href="https://docs.google.com/forms/d/e/1FAIpQLScuOfKDK57v9Z2GO1zw9UgrT0Gej0uqUaYOHUz_7pVrfUr3Ag/viewform?usp=sf_link"
          target="_blank"
          className="mt-6 relative overflow-hidden bg-black bg-opacity-50 text-white lg:py-3 md:py-3 py-6 px-6 rounded-lg w-full font-medium flex items-center justify-between"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-300 ease-in-out transform scale-x-0 hover:scale-x-100 hover:translate-x-0 hover:animate-glass-effect"></span>
          <FaWpforms className="text-xl" />
          <span className="absolute inset-0 flex items-center justify-center">
            Aspirasi Mahasiswa <br className="block lg:hidden md:hidden" />
            Fakultas Teknik Unma
          </span>
        </motion.a>
      </motion.div>
    </div>
  );
};

export default LinkTree;
