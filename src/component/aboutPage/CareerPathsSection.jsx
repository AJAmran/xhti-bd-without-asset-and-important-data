import CarrerPathImage from "../../assets/carrer path.jpg";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const CareerPathsSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const onScroll = () => {
      const topOffset = section.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight / 1.3;

      if (topOffset < scrollPosition) {
        controls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [controls]);

  return (
    <motion.section
      ref={sectionRef}
      animate={controls}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="py-4 md:py-16 "
    >
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
          <div className="text-center md:text-left mb-8">
            <h2 className="text-3xl font-bold mb-4 text-gray-800 font-heading">
              Career Paths of Hospitality Training Institute
            </h2>
            <p className="text-gray-700">
              Explore the diverse career paths available after completing your
              training at XINXIAN Hospitality Training Institute.
            </p>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="flex justify-center">
            <img
              src={CarrerPathImage}
              alt="Career Paths"
              className="max-w-full h-auto rounded-lg shadow object-cover md:max-h-96"
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CareerPathsSection;
