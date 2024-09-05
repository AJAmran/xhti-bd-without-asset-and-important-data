import { motion } from "framer-motion";
import { FiClock } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import { Courses } from "../../data/Data";

const CourseDetails = () => {
  const { id } = useParams();
  const course = Courses.find((course) => course.id === parseInt(id));

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto my-10 p-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <motion.img
            src={course.Image}
            alt={course.CourseName}
            className="object-cover w-full h-auto rounded-lg shadow-lg"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="text-gray-600 font-sans">
          <h1 className="text-3xl font-bold mb-4 font-heading">
            {course.CourseName}
          </h1>
          <p className="mb-4">
            Duration: {course.Duration}
            <br />
            Admission Requirement: {course.Admission_Requirement}
          </p>
          <p className="text-gray-800 mb-4">{course.Purpose}</p>
          <h2 className="text-xl font-bold mb-2">Learning Schedule:</h2>
          <p className="text-gray-800 mb-4">{course.Learning_Schedule}</p>
          <h2 className="text-xl font-bold mb-2">Learning Outcome:</h2>
          <ul className="list-disc list-inside text-gray-800 mb-4">
            {course.Learning_Outcome.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600 flex items-center font-bold">
                <FiClock className="mr-2" /> Course Fee: {course.Course_Fee} TK
              </p>
            </div>
            <Link
              to="https://forms.gle/N6vbf3GbN4LEAGuJ9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-primary font-sans text-white px-4 font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
              >
                Enroll Now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseDetails;
