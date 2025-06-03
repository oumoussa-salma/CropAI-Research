import React, { useState } from "react";
import { motion } from 'framer-motion';
import { references } from '../components/references';

const References = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentReferences = references.slice(startIndex, endIndex);
  const totalPages = Math.ceil(references.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Unified Gradient Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 py-16">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <span className="font-medium">Research Sources</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">References & Citations</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              A curated collection of academic sources supporting the CropID project.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 -mt-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentReferences.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300 border border-green-100"
            >
              <p className="text-lg font-semibold text-gray-900 mb-2">{ref.title}</p>
              <p className="text-gray-700 text-sm italic mb-1">{ref.authors}</p>
              <p className="text-gray-600 text-sm mb-2">{ref.journal} ({ref.year})</p>
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 font-medium text-sm hover:underline"
              >
                Access Publication ↗
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="flex items-center justify-center text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default References;
