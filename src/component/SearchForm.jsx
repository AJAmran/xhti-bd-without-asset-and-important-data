import React from 'react';
import { useForm } from 'react-hook-form';
import { FaSearch } from 'react-icons/fa';

const SearchForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleReset = () => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-semibold text-gray-800">Student Name</label>
        <input
          id="name"
          {...register('name', { required: true })}
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          placeholder="Enter student fullname"
        />
      </div>
      <div>
        <label htmlFor="regNo" className="block font-semibold text-gray-800">Registration Number</label>
        <input
          id="regNo"
          {...register('regNo', { required: true })}
          className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 shadow-sm"
          placeholder="Enter registration number"
        />
      </div>
      <div className="flex justify-between items-center">
        <button
          type="submit"
          className={`flex items-center justify-center bg-primary hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          <FaSearch className="mr-2" />
          {loading ? 'Searching...' : 'Search'}
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-200"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
