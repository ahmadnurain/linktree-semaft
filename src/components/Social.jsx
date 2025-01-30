import { FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { useState } from "react";
import PropTypes from "prop-types"; // ✅ Add this
import { motion } from "framer-motion";

const SocialIcons = () => {
  return (
    <motion.div
      className="flex justify-center space-x-12 my-7"
      initial="hidden"
      animate="show"
      variants={{
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { staggerChildren: 0.3 } },
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <SocialIcon href="https://www.instagram.com/sema_ftunma/" icon={<FaInstagram />} label="Instagram" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <SocialIcon href="https://www.youtube.com/@senatfakultasteknik_unma" icon={<FaYoutube />} label="YouTube" />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        }}
      >
        <SocialIcon href="https://www.tiktok.com/@sema_ftunma?_t=ZS-8tV7Tk5xIDY&_r=1" icon={<FaTiktok />} label="TikTok" />
      </motion.div>
    </motion.div>
  );
};

const SocialIcon = ({ href, icon, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex flex-col items-center">
      {/* Label with smooth appearance on hover */}
      <div
        className={`absolute -top-8 bg-black text-white text-xs px-2 py-1 rounded-lg 
          ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"} 
           duration-300`}
      >
        {label}
      </div>
      <a href={href} target="_blank" className="text-black lg:text-3xl md:text-2xl text-2xl transition-transform duration-300 hover:scale-110" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        {icon}
      </a>
    </div>
  );
};

// ✅ Add prop types validation
SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
};

export default SocialIcons;
