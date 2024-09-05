import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { navLinksdata } from "../../data/Data";

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

const Footer = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
  };

  const linkVariants = {
    hover: {
      scale: 1.1,
    },
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <ul className="text-sm">
              <li className="flex items-center font-bold mb-2">
                XINXIAN Hospitality Training Institute
              </li>
              <li className="flex items-center mb-2">
                <FaMapMarkerAlt size={18} className="mr-2" />
                Agargaon, Sher-E-Bangla Nagar, <br /> Dhaka-1207, Bangladesh
              </li>
              <li className="flex items-center mb-2">
                <FaPhone className="mr-2" />
                <MotionLink
                  to="https://wa.me/+8801332-505246"
                  className="hover:underline"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  +8801332-505246
                </MotionLink>
              </li>
              <li className="flex items-center mb-2">
                <FaEnvelope className="mr-2" />
                <MotionLink
                  to="mailto:info@xhtibd.com"
                  className="hover:underline"
                  variants={linkVariants}
                  whileHover="hover"
                >
                  info@xhtibd.com
                </MotionLink>
              </li>
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
            <ul className="text-sm">
              {navLinksdata.map((item) => (
                <li key={item._id} className="mb-2">
                  <MotionLink
                    to={item.link}
                    className="hover:underline"
                    variants={linkVariants}
                    whileHover="hover"
                  >
                    {item.title}
                  </MotionLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
            <div className="flex items-center space-x-4">
              <MotionLink
                to="https://www.facebook.com/xhtibd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaFacebook />
              </MotionLink>
              <MotionLink
                to="#"
                className="text-xl"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaLinkedin />
              </MotionLink>
              <MotionLink
                to="#"
                className="text-xl"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaInstagram />
              </MotionLink>
              <MotionLink
                to="#"
                className="text-xl"
                variants={linkVariants}
                whileHover="hover"
              >
                <FaYoutube />
              </MotionLink>
            </div>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Newsletter</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-800 text-white w-full px-4 py-2 rounded-md mb-2"
              />
              <motion.button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-md"
                whileHover={{ scale: 1.1 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-800 pt-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} XINXIAN Hospitality Training
          Institute. All rights reserved.
        </p>
      </div>
      {/* Sticky WhatsApp Icon */}
      <a
        href="https://wa.me/+8801332-505246"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-4 right-4 bg-green-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:bg-green-700 transition-colors duration-300"
      >
        <FaWhatsapp size={24} />
      </a>
    </footer>
  );
};

export default Footer;
