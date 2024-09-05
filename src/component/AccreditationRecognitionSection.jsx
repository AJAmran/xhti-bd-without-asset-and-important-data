import { motion } from "framer-motion";
import bteb from "../assets/bteb.jpg";
import nsdab from "../assets/nsdab.png";

const imageVariants = {
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

const AccreditationRecognitionSection = () => {
  return (
    <motion.section className="py-6 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Accreditation and Recognition</h2>
        <div className="flex justify-center items-center gap-6">
          <motion.div
            variants={imageVariants} 
            whileHover="hover"
            whileTap="tap"
            className="overflow-hidden rounded-md shadow-md"
            style={{ width: "200px", height: "200px" }}
          >
            <img src={bteb} alt="Accreditation Image 1" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            variants={imageVariants} 
            whileHover="hover"
            whileTap="tap"
            className="overflow-hidden rounded-md shadow-md"
            style={{ width: "200px", height: "200px" }}
          >
            <img src={nsdab} alt="Accreditation Image 2" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AccreditationRecognitionSection;
