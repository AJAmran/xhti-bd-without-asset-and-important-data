import { motion } from "framer-motion";
import { AiOutlineWarning } from "react-icons/ai";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center h-screen bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex items-center justify-center bg-red-500 text-white rounded-full w-16 h-16 mb-8"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AiOutlineWarning className="text-3xl" />
      </motion.div>
      <motion.h1
        className="text-5xl font-bold text-gray-800 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        404 - Page Not Found
      </motion.h1>
      <motion.p
        className="text-lg text-gray-600 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        The page you are looking for might have been removed or doesn't exist.
        Please check the URL or go back to the homepage.
      </motion.p>
      <Link
        to="/"
        className="bg-primary hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-md transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        Go back to Home Page
      </Link>
    </motion.div>
  );
};

export default ErrorPage;
