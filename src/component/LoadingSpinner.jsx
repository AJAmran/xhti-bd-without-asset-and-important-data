import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
    <FaSpinner className="animate-spin text-6xl mb-4" />
    <h1 className="text-2xl font-semibold text-center">
      Welcome to Xinxian Hospitality Training Institute!
    </h1>
    <p className="mt-2 text-lg text-center">Loading your experience...</p>
  </div>
);

export default LoadingSpinner;
