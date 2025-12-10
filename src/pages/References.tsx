import React, { useState } from "react";
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';
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
      
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-48 -translate-x-48" />
        
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <BookOpen className="w-5 h-5 mr-2" />
              <span className="font-semibold">Research Sources</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">References & Citations</h1>

            <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
              A curated collection of academic sources supporting the CropID project
            </p>

            <div className="mt-8 inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3 backdrop-blur-sm">
              <span className="font-semibold">{references.length} Publications</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 -mt-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentReferences.map((ref, index) => (
            <motion.div
              key={ref.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-green-600 hover:border-orange-500"
            >
              <div className="mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                {ref.title}
              </h3>

              <p className="text-gray-700 text-sm mb-2">
                <span className="font-medium">Authors:</span> {ref.authors}
              </p>

              <p className="text-gray-600 text-sm mb-4">
                <span className="font-medium">{ref.journal}</span> • {ref.year}
              </p>

              {/* FIXED: Proper anchor tag */}
              <a
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 group-hover:scale-105"
              >
                Access Publication
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-green-600 hover:text-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[120px]"
          >
            ← Previous
          </button>

          <div className="flex items-center gap-2">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => handlePageChange(idx + 1)}
                className={`w-10 h-10 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === idx + 1
                    ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-green-600 hover:text-green-600'
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-orange-500 hover:text-orange-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-w-[120px]"
          >
            Next →
          </button>
        </motion.div>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl shadow-md p-8 border border-green-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About Our References</h3>

              <p className="text-gray-700 leading-relaxed">
                These publications form the scientific foundation of the CropID project, covering topics in 
                precision agriculture, remote sensing, AI, and sustainable farming. Each reference supports 
                our methodology and validates the technical approach behind CropID.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default References;
