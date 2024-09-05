import { motion } from "framer-motion";

const variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.3,
    },
  },
};

const ServiceCard = ({ title, icon }) => {
  return (
    <motion.div
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      className="bg-white p-6 rounded-md shadow-md flex items-center justify-center"
      aria-label={title}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-2xl mb-2">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
