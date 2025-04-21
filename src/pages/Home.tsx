import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane as Plant, Brain, Satellite } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      {/* Hero Section */}
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
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Leveraging Remote Sensing Data and Deep Learning to Transform Agricultural Predictions
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                onClick={() => navigate('/test-model')}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10"
              >
                Test the Model
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Satellite className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Multimodal Data Integration</h3>
              <p className="mt-2 text-base text-gray-500">
                Combining diverse satellite data sources for a holistic and comprehensive analysis, allowing accurate crop classification through integration of temporal and spatial features.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Brain className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Advanced Deep Learning</h3>
              <p className="mt-2 text-base text-gray-500">
                Employing cutting-edge algorithms to effectively capture temporal dependencies and spatial features in satellite imagery for accurate crop classification at an early stage.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <Plant className="h-16 w-16 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900">Precision Agriculture</h3>
              <p className="mt-2 text-base text-gray-500">
                Enabling smarter agricultural practices by delivering early crop-type predictions, helping farmers optimize resource usage, monitor crop health, and improve overall yield.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
