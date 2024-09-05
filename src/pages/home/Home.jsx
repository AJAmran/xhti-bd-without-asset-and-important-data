import React, { useState, useCallback, useMemo } from "react";
import OurValue from "../../component/OurValue";
import HeroSlider from "../../component/HeroSlider";
import LocationAddressCard from "../../component/LocationAddressCard";
import AffiliateSlider from "../../component/AffiliateSlider";
import { Courses } from "../../data/Data";
import Faq from "../../component/Faq";
import { Link } from "react-router-dom";
import StudentServicesSection from "../../component/StudentServicesSection";
import { Helmet } from "react-helmet";
import useNotices from "../../hooks/useNotices";
import Marquee from "react-fast-marquee";
import useScrollToSection from "../../utils/HashedValue";
import CourseCard from "../../component/CourseCard";

const Ldata = {
  text1: "Our Courses",
  text2: "Registration",
  link1: "/courses",
  link2: "/admission",
};

const Home = () => {
  useScrollToSection();
  const [showAll, setShowAll] = useState(false);
  const { notices } = useNotices();

  const toggleShowAll = useCallback(() => {
    setShowAll((prev) => !prev);
  }, []);

  const diplomaCourses = useMemo(
    () => Courses.filter((course) => course.type === "diploma"),
    [Courses]
  );
  const professionalCourses = useMemo(
    () => Courses.filter((course) => course.type === "professional"),
    [Courses]
  );

  return (
    <>
      <Helmet>
        <title>XHTIBD || Home</title>
        <meta
          name="description"
          content="Xinxian Hospitality Training Institute"
        />
      </Helmet>
      <div className="flex text-sm font-semibold items-center">
        <p className="bg-primary p-1 text-gray-50">Notice: </p>
        {notices.length > 0 && (
          <Marquee className="text-red-600 bg-yellow-100 p-1">
            {notices[0].text}
          </Marquee>
        )}
      </div>
      <HeroSlider />
      <AffiliateSlider />
      <div className="container mx-auto p-4">
        <section id="diploma-courses" className="py-12">
          <div className="mb-10 text-center">
            <h2 className="mb-5 text-2xl font-bold text-gray-700 md:text-4xl font-heading">
              Diploma Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {diplomaCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        <section id="professional-courses" className="pt-5">
          <div className="mb-10 text-center">
            <h2 className="mb-5 text-2xl font-bold text-gray-700 md:text-4xl font-heading">
              Professional Courses
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {professionalCourses.slice(0, 3).map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </section>
        <div className="text-center my-10">
          <Link to="/courses">
            <button
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700"
              onClick={toggleShowAll}
            >
              Show All Courses
            </button>
          </Link>
        </div>
        <section id="student-services">
          <StudentServicesSection />
        </section>
        {/* <AccreditationRecognitionSection /> */}
        <div className="bg-gray-100" id="our-value">
          <OurValue />
        </div>
        <section id="faq">
          <Faq />
        </section>
        <LocationAddressCard />
      </div>
    </>
  );
};

export default Home;
