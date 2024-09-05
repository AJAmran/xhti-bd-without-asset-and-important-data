import { motion } from "framer-motion";
import { FaAngleRight, FaBriefcase, FaBullseye, FaChartLine, FaDollarSign, FaGlobe, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Card = ({ title, children, delay }) => (
  <motion.div
    className="flex flex-col justify-center p-6 rounded-md shadow-md"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={imageVariants}
    transition={{ delay, duration: 0.5 }}
  >
    <motion.h3 className="text-xl font-semibold mb-4" variants={textVariants}>
      {title}
    </motion.h3>
    {children}
  </motion.div>
);

const AtAGlanceSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={textVariants}
      className="pt-4 pb-12"
    >
      <div className="">
        <motion.h2
          className="text-3xl font-bold mb-4 font-heading text-gray-800 text-center"
          variants={textVariants}
        >
          At A Glance
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card title="Mission" delay={0.2} className="bg-white">
            <p className="text-gray-700 mb-6">
              Deliver top-notch training in a respectful, inclusive environment and laying the groundwork for lifelong learning.
            </p>
            <motion.h3 className="text-xl font-semibold mb-4" variants={textVariants}>
              Vision
            </motion.h3>
            <p className="text-gray-700 mb-6">
              Build ourselves as the pioneer of Hospitality Training Institute.
            </p>
            <div className="flex items-center mb-4">
              <FaBullseye className="text-gray-500 mr-2" />
              <p className="text-gray-700">Focus on practical training</p>
            </div>
            <div className="flex items-center mb-4">
              <FaGlobe className="text-gray-500 mr-2" />
              <p className="text-gray-700">Global perspective</p>
            </div>
            <Link to="/about/why-choose-us">
              <motion.button
                className="bg-primary text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Why Choose Us <FaAngleRight className="inline-block" />
              </motion.button>
            </Link>
          </Card>
          <Card title="Key Factors of Hospitality Training" delay={0.4} className="bg-white">
            <ul className="text-gray-700 mb-6">
              <li className="flex items-center mb-2">
                <FaUsers className="text-gray-500 mr-2" />
                Industry-specific knowledge
              </li>
              <li className="flex items-center mb-2">
                <FaBriefcase className="text-gray-500 mr-2" />
                Multidisciplinary approach
              </li>
              <li className="flex items-center mb-2">
                <FaDollarSign className="text-gray-500 mr-2" />
                Huge Job Market
              </li>
              <li className="flex items-center mb-2">
                <FaChartLine className="text-gray-500 mr-2" />
                Flourishing Economy
              </li>
            </ul>
            <motion.h3 className="text-xl font-semibold mb-4" variants={textVariants}>
              Purpose of Program
            </motion.h3>
            <p className="text-gray-700 text-justify">
              The courses are designed to give trainees the relevant technical, vocational & managerial skills for a career in the tourism & hospitality industry. The curriculum focuses on key competencies related to hospitality business, communication, and leadership. Through this program, students will develop skills applicable to various service sectors worldwide.
            </p>
          </Card>
        </div>
      </div>
    </motion.section>
  );
};

export default AtAGlanceSection;
