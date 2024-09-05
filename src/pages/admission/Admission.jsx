import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import HeroSection from "../../component/HeroSection";
import LocationAddressCard from "../../component/LocationAddressCard";
import AdmissionImag from "../../assets/hotel_management.jpg";
import { Helmet } from "react-helmet";

// Define a motion-enhanced Link component
const MotionLink = motion(Link);

const Ldata = {
  text1: "Our Courses",
  text2: "Contact Us",
  link1: "/courses",
  link2: "/contact-us",
};

const AdmissionsPage = () => {
  const data = {
    image: AdmissionImag,
    title: "Join Us and Shape Your Future in Hospitality",
    description:
      "Explore our admission process and take the first step towards an exciting career in the hospitality industry.",
    link: "/about",
    btn: "About Us",
    secondButton: "Get Started",
  };

  return (
    <>
      <Helmet>
        <title>XHTI || Admission</title>
        <meta
          name="description"
          content="Admission Xinxian Hospitality Training Institute"
        />
      </Helmet>
      <HeroSection data={data} />
      <div className="container mx-auto p-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          className="py-16"
        >
          <div className="">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5 text-2xl font-bold text-gray-700 md:text-4xl font-heading text-center"
            >
              Admissions
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-white rounded-md p-6 shadow-md"
            >
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-xl font-semibold mb-4"
              >
                Admission Process:
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-gray-700 mb-6"
              >
                Complete the online application form. Submit required documents.
                Receive an offer of admission and complete enrollment
                procedures.
              </motion.p>
              <MotionLink
                to="https://forms.gle/RqcDmcWpB8TBg1pYA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-primary text-white px-6 py-3 rounded-md hover:bg-indigo-600 transition duration-300"
                  aria-label="Apply Now"
                >
                  Apply Now
                </motion.button>
              </MotionLink>
            </motion.div>
          </div>
        </motion.div>
        <LocationAddressCard Ldata={Ldata} />
      </div>
    </>
  );
};

export default AdmissionsPage;
