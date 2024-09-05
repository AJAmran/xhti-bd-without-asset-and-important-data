import React from 'react';
import { TbFidgetSpinner } from 'react-icons/tb';

const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
    <TbFidgetSpinner className="animate-spin text-blue-500 text-6xl" />
  </div>
);

export default LoadingSpinner;
