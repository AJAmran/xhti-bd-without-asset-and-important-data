import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import ResultTable from '../../component/ResultTable';
import SearchForm from '../../component/SearchForm';


const SearchResult = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setError('');
    setResult(null);

    const { name, regNo } = data;

    try {
      const response = await fetch(`https://script.google.com/macros/s/AKfycbzh66nyEmidICAYwLo6Pt0xmcDJINB7YTQh4XAhuY8xieYvVi4vDbN7XnuiqQopB3nipw/exec?name=${name}&regNo=${regNo}`);
      const resultData = await response.json();

      if (resultData && resultData.Name) {
        setResult(resultData);
        toast.success('Result found!');
      } else {
        setError('No results found for the given name and registration number.');
        toast.error('No results found.');
      }
    } catch (err) {
      setError('An error occurred while fetching the data.');
      toast.error('An error occurred.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setError('');
  };

  return (
    <div className="py-16 flex flex-col items-center justify-center bg-gray-50 px-6 print:bg-white">
      <Toaster />
      {!result ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h1 className="text-2xl font-semibold mb-4 text-center text-gray-900">Search Student Result</h1>
          {error && (
            <p className="text-red-500 text-center mb-4">{error}</p>
          )}
          <SearchForm onSubmit={onSubmit} loading={loading} />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-4xl"
        >
          <ResultTable result={result} onReset={handleReset} />
        </motion.div>
      )}
    </div>
  );
};

export default SearchResult;
