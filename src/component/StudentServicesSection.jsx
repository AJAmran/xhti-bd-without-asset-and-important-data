import { motion } from "framer-motion";
import { FaBriefcase, FaDesktop, FaFlask, FaGlobe, FaLanguage, FaLock } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const StudentServicesSection = () => {
  return (
    <motion.section className="py-16">
      <div className="">
        <h2 className="mb-5 text-2xl font-bold text-center text-gray-700 md:text-4xl font-heading">Student Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ServiceCard
            title="Free English Course"
            icon={<FaLanguage className="text-4xl text-primary" />}
          />
          <ServiceCard
            title="Computer Lab"
            icon={<FaDesktop className="text-4xl text-primary" />}
          />
          <ServiceCard
            title="Practical Lab"
            icon={<FaFlask className="text-4xl text-primary" />}
          />
          <ServiceCard
            title="Tourism Club"
            icon={<FaGlobe className="text-4xl text-primary" />}
          />
          <ServiceCard
            title="Locker Services"
            icon={<FaLock className="text-4xl text-primary" />}
          />
          <ServiceCard
            title="100% Job Assistance"
            icon={<FaBriefcase className="text-4xl text-primary" />}
          />
        </div>
      </div>
    </motion.section>
  );
};
export default StudentServicesSection;
