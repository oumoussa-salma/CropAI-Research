
/*
import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

const TestModel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Multimodal Crop Classification</span>
            <span className="block text-green-600">Harnessing Deep learning Models</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col items-center mb-6">
            <Sparkles className="h-10 w-10 text-green-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Test the Model</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Soon, you'll be able to upload or select remote sensing samples and test the model performance live. This will include crop prediction, confidence scores, inference speed, and advanced evaluation metrics.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white border border-green-200 shadow rounded-full">
            <Loader2 className="animate-spin h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Coming Soon</span>
          </div>
        </motion.div>

        
      </div>
    </div>
  );
};

export default TestModel;
*/
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, ChevronRight } from 'lucide-react';

const cropMaps = [
  { id: 'clover', name: 'Clover', file: 'files/bavarian/2map_clover.html' },
  { id: 'corn', name: 'Corn', file: 'files/bavarian/2map_corn.html' },
  { id: 'meadow', name: 'Meadow', file: 'files/bavarian/2map_meadow.html' },
  { id: 'spring_barley', name: 'Spring Barley', file: 'files/bavarian/2map_spring_barley.html' },
  { id: 'winter_barley', name: 'Winter Barley', file: 'files/bavarian/2map_winter_barley.html' },
  { id: 'triticale', name: 'Triticale', file: 'files/bavarian/2map_triticale.html' },
  { id: 'wheat', name: 'Wheat', file: 'files/bavarian/2map_wheat.html' },
  {id:'all', name: 'All crops', file: 'files/bavarian/2map_all.html'},
];

const TestModel: React.FC = () => {
  const [activeCrop, setActiveCrop] = useState(cropMaps[0].id);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Results by Crop</h1>
          <p className="text-xl text-gray-600">Interactive visualization of crop classification results</p>
        </motion.div>

        {/* Main Content */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
            {cropMaps.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setActiveCrop(crop.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                  activeCrop === crop.id
                    ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                    : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Map className={`h-4 w-4 mr-2 ${
                  activeCrop === crop.id ? 'text-green-600' : 'text-gray-400'
                }`} />
                {crop.name}
                {activeCrop === crop.id && (
                  <ChevronRight className="h-4 w-4 ml-2 text-green-600" />
                )}
              </button>
            ))}
          </div>

          {/* Map Display */}
          <div className="relative w-full" style={{ height: 'calc(100vh - 300px)' }}>
            {cropMaps.map((crop) => (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: activeCrop === crop.id ? 1 : 0,
                  display: activeCrop === crop.id ? 'block' : 'none'
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <iframe
                  src={crop.file}
                  title={`${crop.name} Test Results`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Legend or Additional Info */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Map Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Correct Classifications</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Misclassifications</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              <span className="text-sm text-gray-600">No Data Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestModel;