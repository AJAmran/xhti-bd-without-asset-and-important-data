import React, { memo } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CourseCard = ({ course }) => {
  if (!course) {
    return null;
  }

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
      <figure>
        <img
          src={course.Image}
          alt={course.CourseName}
          className="w-full h-48 object-cover"
        />
      </figure>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex-grow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            {course.CourseName}
          </h2>
          <p className="text-gray-600 mb-2">Duration: {course.Duration}</p>
          <p className="text-gray-600 mb-4">
            Admission Requirement: {course.Admission_Requirement}
          </p>
        </div>
        <Link to={`/courses/${course.id}`} className="inline-block mt-auto">
          <button className="bg-primary text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Course Detail
          </button>
        </Link>
      </div>
    </div>
  );
};

CourseCard.propTypes = {
  course: PropTypes.shape({
    id: PropTypes.number.isRequired,
    CourseName: PropTypes.string.isRequired,
    Duration: PropTypes.string.isRequired,
    Admission_Requirement: PropTypes.string.isRequired,
    Image: PropTypes.string.isRequired,
  }).isRequired,
};

export default memo(CourseCard);
