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
      description:
        "Combines satellite time-series (Sentinel-1/2, Landsat), vegetation indices, and auxiliary field data to build a rich, unified view of each parcel.",
      delay: 0.2,
    },
    {
      icon: Layers,
      title: "Advanced Deep Learning",
      description:
        "Uses state-of-the-art 3D CNNs and ConvLSTMs to learn spatial, spectral, and temporal patterns for robust crop type identification.",
      delay: 0.3,
    },
    {
      icon: MapPin,
      title: "Early-Season Identification",
      description:
        "Detects crop types early in the season from satellite time-series, enabling proactive decision-making and better planning.",
      delay: 0.4,
    },
    {
      icon: Droplets,
      title: "Field-Level Monitoring",
      description:
        "Tracks crop dynamics over time, helping farmers and agronomists follow growth stages, spot anomalies, and prioritize interventions.",
      delay: 0.5,
    },
    {
      icon: Sprout,
      title: "Farmer & Researcher Friendly",
      description:
        "Designed for both practitioners and scientists, offering intuitive views for farmers and detailed analytics for research teams.",
      delay: 0.6,
    },
    {
      icon: TrendingUp,
      title: "Toward Sustainable Agriculture",
      description:
        "Supports data-driven decisions that improve yield stability, reduce waste, and promote long-term sustainability.",
      delay: 0.7,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-green-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16A34A 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-orange-100 px-4 py-2 rounded-full mb-6 border border-green-200"
            >
              <Sprout className="h-5 w-5 text-green-600" />
              <span className="text-sm font-semibold text-gray-700">
                Multi-Modal Crop Identification Platform
              </span>
            </motion.div>

            {/* Main Heading */}
            <h1 className="text-5xl tracking-tight font-extrabold text-gray-900 sm:text-6xl md:text-7xl">
              <span className="block mb-2">Welcome to</span>
              <span className="block bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                CropID
              </span>
            </h1>

            {/* Research-Oriented Tagline (Option 2) */}
            <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-700 leading-relaxed sm:text-2xl">
              Multi-modal deep learning for early-season crop identification using satellite time-series
              and spatial–spectral analysis.
            </p>

            {/* Accessible description */}
            <p className="mt-4 max-w-2xl mx-auto text-base text-gray-500 leading-relaxed">
              CropID turns raw satellite imagery into clear crop maps and timelines. Farmers, agronomists,
              and researchers can see what is growing, where, and how it evolves — without needing to handle
              the complexity of the underlying AI models.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/test-model')}
                className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              >
                <span>View Model Results</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/about')}
                className="px-8 py-4 bg-white border-2 border-orange-500 text-orange-600 font-semibold rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                Learn More About CropID
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
                <div className="text-sm text-gray-600 mt-1">Satellite & Field Data</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">Time-Series</div>
                <div className="text-sm text-gray-600 mt-1">Temporal Crop Dynamics</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">Early</div>
                <div className="text-sm text-gray-600 mt-1">Season Identification</div>
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
                CropID is an AI-powered crop identification platform that fuses satellite imagery and
                contextual data to map crop types over time. It is designed to serve both the scientific
                community and the agricultural sector by providing reliable, interpretable crop maps and
                time-series analytics.
              </p>
              <p className="mt-4 text-base text-gray-500 leading-relaxed">
                For researchers, CropID offers a testbed for multimodal, spatiotemporal models in precision
                agriculture. For farmers and agronomists, it translates complex remote sensing and deep
                learning outputs into simple answers to practical questions like “What is growing here?” and
                “How is it evolving across the season?”.
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
              Platform <span className="text-orange-500">Capabilities</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From satellite time-series to easy-to-read crop maps, CropID bridges advanced deep learning
              with everyday agricultural needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="relative group"
              >
                <div className="h-full bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-8 border border-gray-100">
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-green-100 to-orange-100 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="h-10 w-10 text-green-600" />
                    </div>
                  </div>

                  {/* Title + Description */}
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
              Explore Model Performance
            </h2>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Visualize classification maps, inspect accuracy metrics, and compare model behavior across
              regions, seasons, and crop types.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="flex flex-col gap-2 text-left bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white max-w-md">
                <h3 className="font-semibold text-lg mb-2">On the results page, you can:</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Browse interactive maps of model predictions.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Inspect detailed accuracy metrics and confusion matrices.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Explore visual galleries of correct and challenging cases.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-orange-300 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Compare different models and scenarios side-by-side.</span>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/test-model')}
                className="px-10 py-5 bg-white text-green-700 font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-3"
              >
                <span>Go to Model Results</span>
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
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
                    Temporal–Spatial Feature Fusion Architectures
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-orange-50 to-white rounded-xl border-2 border-orange-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Data Sources</h3>
                <ul className="text-left space-y-2 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Sentinel-1 & Sentinel-2 Satellite Imagery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Landsat Multi-Spectral Data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    Derived Vegetation Indices & Field Context Data
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
