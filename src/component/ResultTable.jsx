import React from 'react';

const ResultTable = ({ result, onReset }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl print:bg-white print:shadow-none print:max-w-full">
      <div className="print:flex print:flex-col print:items-center print:justify-center">
        <h1 className="text-3xl font-bold mb-4 text-center text-gray-900 print:text-4xl">Xinxian Hospitality Training Institute</h1>
        <h2 className="text-xl font-semibold mb-8 text-center text-gray-700 print:text-2xl">Student Result Report</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-6 border-b border-gray-200 text-left text-sm font-semibold text-gray-900">Field</th>
              <th className="py-3 px-6 border-b border-gray-200 text-left text-sm font-semibold text-gray-900">Details</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(result).map(([key, value], index) => (
              <tr key={index} className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
                <td className="py-3 px-6 text-sm text-gray-700 font-medium">{key}</td>
                <td className="py-3 px-6 text-sm text-gray-900">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button
        type="button"
        onClick={onReset}
        className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-md print:hidden"
      >
        Search Again
      </button>
    </div>
  );
};

export default ResultTable;
