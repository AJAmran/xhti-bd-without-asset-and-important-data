import { FaGraduationCap } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";

const WhatWeOffer = () => {
  return (
    <section className="bg-white py-20 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="p-5 bg-blue-100 rounded-lg transform transition-transform duration-500 hover:scale-105">
            <FaGraduationCap className="text-5xl text-blue-600 mb-3 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              What We Offer
            </h2>
            <p className="text-gray-700">
              Comprehensive courses designed to equip students with necessary
              skills and knowledge for a successful career in the hospitality
              industry.
            </p>
          </div>
          <div className="p-5 bg-green-100 rounded-lg transform transition-transform duration-500 hover:scale-105">
            <GiTeacher className="text-5xl text-green-600 mb-3 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              Experienced Faculty
            </h2>
            <p className="text-gray-700">
              Experienced faculty members dedicated to providing hands-on
              training and personalized guidance to students.
            </p>
          </div>
          <div className="p-5 bg-yellow-100 rounded-lg transform transition-transform duration-500 hover:scale-105">
            <AiFillLike className="text-5xl text-yellow-600 mb-3 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              State-of-the-Art Facilities
            </h2>
            <p className="text-gray-700">
              State-of-the-art facilities and resources to facilitate effective
              learning and skill development.
            </p>
          </div>
          <div className="p-5 bg-purple-100 rounded-lg transform transition-transform duration-500 hover:scale-105">
            <BsPeopleFill className="text-5xl text-purple-600 mb-3 mx-auto" />
            <h2 className="text-xl md:text-2xl font-bold mb-3 text-gray-800">
              Vibrant Community
            </h2>
            <p className="text-gray-700">
              A vibrant and diverse community where students can thrive and grow
              personally and professionally.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
