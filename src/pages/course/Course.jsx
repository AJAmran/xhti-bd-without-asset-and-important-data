import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Courses } from "../../data/Data";
import CourseCard from "../../component/CourseCard";
import HeroSection from "../../component/HeroSection";
import LocationAddressCard from "../../component/LocationAddressCard";
import courseImage from "../../assets/slider_Image/happy_waiter.webp";
import { FaFilter, FaSearch } from "react-icons/fa";

const Ldata = {
  text1: "Registration",
  text2: "Contact Us",
  link1: "/admission",
  link2: "/contact-us",
};

const Course = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleTypeSelectChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredCourses = Courses.filter((course) => {
    return (
      course.CourseName.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedType === "" || course.type === selectedType)
    );
  });

  const sortedCourses = filteredCourses.sort((a, b) =>
    a.CourseName.localeCompare(b.CourseName)
  );

  return (
    <>
      <Helmet>
        <title>XHTIBD || Course</title>
        <meta
          name="description"
          content="Xinxian Hospitality Training Institute"
        />
      </Helmet>
      <HeroSection
        data={{
          image: courseImage,
          title: "Unlock Your Potential with Our Premier Courses",
          description:
            "Explore our range of comprehensive courses in hospitality, from culinary arts to hotel management. Tailored to industry demands, our programs propel your career forward.",
          link: "/admission",
          btn: "Admission",
          secondButton: "Get Started",
        }}
      />
      <div className="container mx-auto p-4">
      <section id="courses" className="py-14">
        <div className="mb-10 text-center">
          <h2 className="mb-5 text-2xl font-bold text-gray-800 md:text-4xl font-heading">
            Our Courses
          </h2>
          <div className="flex justify-end items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses"
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            </div>
            <select
              className="ml-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary"
              value={selectedType}
              onChange={handleTypeSelectChange}
            >
              <option value="">All Types</option>
              <option value="diploma">Diploma</option>
              <option value="professional">Professional</option>
            </select>
            <FaFilter className="ml-2 text-gray-500" />
          </div>
        </div>
        {sortedCourses.length === 0 ? (
          <div className="text-center text-gray-600">No courses found</div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
            {sortedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        )}
      </section>
      <LocationAddressCard Ldata={Ldata} />
      </div>
    </>
  );
};

export default Course;
