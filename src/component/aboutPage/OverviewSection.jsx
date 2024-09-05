import { motion } from "framer-motion";
import WhoWeAre from "./WhoWeAre";
import AboutXHTI from "./AboutXHTI";

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const OverviewSection = () => {
  return (
    <section className="py-16 font-sans">
      <div>
        <div className="text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
            className="text-3xl font-bold mb-4 font-heading text-gray-800"
          >
            Overview of XHTI
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <WhoWeAre />
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={textVariants}
          >
            <AboutXHTI />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
