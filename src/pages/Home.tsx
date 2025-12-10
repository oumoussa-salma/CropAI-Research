import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sprout, Database, Droplets, MapPin, TrendingUp, Layers } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Database,
      title: "Multi-Modal Data Integration",
      description: "Seamlessly integrates satellite imagery (Sentinel-1/2, Landsat), soil health metrics, and crop phenology data for comprehensive agricultural insights.",
      delay: 0.2
    },
    {
      icon: Layers,
      title: "Advanced Deep Learning",
      description: "Leverages state-of-the-art 3D CNNs and ConvLSTMs to capture spatial, spectral, and temporal patterns for precise crop classification and growth stage prediction.",
      delay: 0.3
    },
    {
      icon: Droplets,
      title: "Tailored Fertilizer Recommendations",
      description: "Delivers customized, data-driven fertilizer strategies optimized for specific crop needs, phenological stages, and real-time soil conditions.",
      delay: 0.4
    },
    {
      icon: MapPin,
      title: "Early-Season Identification",
      description: "Enables timely crop type detection and growth monitoring through multi-temporal remote sensing analysis, supporting proactive agricultural decisions.",
      delay: 0.5
    },
    {
      icon: Sprout,
      title: "Farmer-Centric Platform",
      description: "Provides actionable, real-time insights through an intuitive interface designed specifically for farmers, agronomists, and agricultural decision-makers.",
      delay: 0.6
    },
    {
      icon: TrendingUp,
      title: "Sustainable Agriculture",
      description: "Optimizes resource utilization, reduces environmental impact, and maximizes crop yields while promoting sustainable farming practices.",
      delay: 0.7
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #3FA34D 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Logo/Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-green-200"
            >
              <Sprout className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">Precision Agriculture Platform</span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block mb-2">Welcome to</span>
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                CropID
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-600 leading-relaxed sm:text-2xl">
              Advanced crop classification platform for tailored fertilizer recommendations 
              through intelligent multi-modal data integration
            </p>

            {/* Description */}
            <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 leading-relaxed">
              Leveraging cutting-edge deep learning, remote sensing, and soil health analytics 
              to empower farmers with precise, real-time agricultural insights
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/test-model')}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Evaluate Models</span>
                <svg 
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Multi-Modal</div>
                <div className="text-sm text-gray-600 mt-1">Data Integration</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">Real-Time</div>
                <div className="text-sm text-gray-600 mt-1">Insights & Predictions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Sustainable</div>
                <div className="text-sm text-gray-600 mt-1">Agriculture Focus</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* What is CropID Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What is <span className="text-green-600">CropID</span>?
            </h2>
            <div className="mt-4 max-w-3xl mx-auto">
              <p className="text-lg text-gray-600 leading-relaxed">
                CropID is an innovative precision agriculture platform that revolutionizes crop management 
                through intelligent data fusion and advanced machine learning. By integrating multi-temporal 
                satellite imagery, soil health metrics, and crop phenology data, CropID enables accurate 
                crop classification and delivers customized fertilizer recommendations tailored to specific 
                field conditions and growth stages.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
              Platform <span className="text-orange-500">Features</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive capabilities designed to transform agricultural decision-making
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                  {/* Icon Container */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-10 w-10 text-green-600" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-orange-500 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Model Evaluation Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Ready to Evaluate Our Models?
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Test our trained deep learning models with your crop data, visualize predictions, 
              and compare model performances in real-time
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col gap-2 text-left bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white max-w-md">
                <h3 className="font-semibold text-lg mb-2">What you can do:</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Upload satellite imagery or sample crop data</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Run inference with trained models</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Visualize crop classification results</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compare performance across different models</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/test-model')}
                className="px-10 py-5 bg-white text-green-700 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Start Evaluation</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
              Powered by <span className="text-orange-500">Advanced Technology</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="p-6 bg-gradient-to-br from-green-50 to-white rounded-xl border-2 border-green-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Deep Learning Models</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    3D Convolutional Neural Networks (3D CNNs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Convolutional LSTMs (ConvLSTMs)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                    Temporal-Spatial Feature Fusion
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Data Sources</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Sentinel-1 & Sentinel-2 Imagery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Landsat Multi-Spectral Data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Soil Health & Phenology Metrics
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;