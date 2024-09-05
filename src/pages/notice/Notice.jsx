import { useState } from "react";
import { motion } from "framer-motion";
import { FaFileDownload } from "react-icons/fa";
import TableSkeleton from "../../component/TableSkeleton";
import useNotices from "../../hooks/useNotices";

const Notice = () => {
  const { notices, loading } = useNotices();
  const [currentPage, setCurrentPage] = useState(1);
  const noticesPerPage = 10;

  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  const totalPages = Math.ceil(notices.length / noticesPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <motion.h1
        className="text-2xl md:text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Notices
      </motion.h1>

      {loading ? (
        <TableSkeleton rows={10} columns={4} />
      ) : (
        <>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300">
              <thead>
                <tr>
                  <th className="py-2 px-2 md:px-4 border">#</th>
                  <th className="py-2 px-2 md:px-4 border">Date</th>
                  <th className="py-2 px-2 md:px-4 border">Text</th>
                  <th className="py-2 px-2 md:px-4 border">File</th>
                </tr>
              </thead>
              <tbody>
                {currentNotices.map((notice, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-100"
                  >
                    <td className="py-2 px-2 md:px-4 border text-center">{notice.sl}</td>
                    <td className="py-2 px-2 md:px-4 border text-center">
                      {new Date(notice.date).toLocaleDateString()}
                    </td>
                    <td className="py-2 px-2 md:px-4 border">{notice.text}</td>
                    <td className="py-2 px-2 md:px-4 border text-center">
                      <a
                        href={notice.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700"
                      >
                        <FaFileDownload className="inline-block mr-1" /> Download
                      </a>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center mt-4">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 bg-gray-200 rounded mb-2 md:mb-0 ${
                currentPage === 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
            >
              Previous
            </button>
            <span className="text-center mb-2 md:mb-0">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 bg-gray-200 rounded ${
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-300"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Notice;
