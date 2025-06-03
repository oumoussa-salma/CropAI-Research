import React from 'react';
import { motion } from 'framer-motion';
import {
  Sprout,
  Target,
  Microscope,
  Satellite,
  Brain,
  LineChart,
  Droplet,
  Shield,
  ArrowRight,
  Rocket,
  Globe,
  Zap,
  CheckCircle,
  Star,
  Activity
} from 'lucide-react';

const About = () => {

  const challenges = [
    { title: 'Low Accuracy', desc: 'Traditional models lack early-season precision', icon: Target },
    { title: 'Late Detection', desc: 'Intervention comes too late for impact', icon: Activity },
    { title: 'Data Silos', desc: 'Fragmented sources limit decision-making', icon: Globe },
    { title: 'Scalability', desc: 'Solutions don\'t generalize across regions', icon: Zap }
  ];

  const timelineSteps = [
    { title: 'EarlyRNN Model', desc: 'Custom deep learning architecture', icon: Brain },
    { title: 'Sentinel-2 Data', desc: 'Multitemporal satellite imagery', icon: Satellite },
    { title: 'BavarianCrops Training', desc: 'Specialized dataset processing', icon: LineChart },
    { title: 'BreizhCrops Testing', desc: 'Cross-region validation', icon: CheckCircle }
  ];



  const features = [
    {
      icon: Satellite,
      title: 'Multitemporal Sensing',
      desc: 'Advanced processing of Sentinel-2 imagery as variable-length sequences for comprehensive seasonal growth modeling.'
    },
    {
      icon: Brain,
      title: 'EarlyRNN Architecture',
      desc: 'Custom deep learning model with sophisticated temporal logic and early-stopping mechanisms for precise crop prediction.'
    },
    {
      icon: Shield,
      title: 'Cross-Region Validation',
      desc: 'Rigorous transfer learning evaluation across different geographical regions to ensure model generalization.'
    },
    {
      icon: Droplet,
      title: 'Multimodal Fusion',
      desc: 'Next-generation integration of soil moisture data, climate trends, and phenological phases for holistic analysis.'
    }
  ];

  const roadmapItems = [
  {
    title: "Multimodal Integration",
    desc: "Incorporate SAR, climate, soil, and UAV data for richer analysis",
    status: "in-progress"
  },
  {
    title: "Dashboard & APIs",
    desc: "Create intuitive interfaces and APIs for end-users",
    status: "planned"
  },
  {
    title: "Regional Generalization",
    desc: "Expand model training to diverse geographies for robustness",
    status: "planned"
  },
  {
    title: "Field Testing",
    desc: "Pilot CropID with farmers and institutions for validation",
    status: "planned"
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header - Same as TrainModel */}
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
              <Sprout className="w-5 h-5 mr-2" />
              <span className="font-medium">AI-Powered Agriculture</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">About CropID</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              A proof of concept platform demonstrating the technical feasibility of AI-driven crop classification and agricultural intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8 relative z-10">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-md p-8 mb-12"
        >
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-4">
              <Sprout className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Proof of Concept</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              CropID: <span className="text-green-600">Vision in Action</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Developed as a <span className="font-semibold text-green-600">proof of concept</span> during my graduation internship, 
              this demo validates the <span className="font-semibold text-green-600">technical feasibility</span> of the CropID platform — 
              a larger-scale initiative led by <span className="font-semibold text-green-600">OCP Nutricrops</span> to deliver smarter crop 
              classification and targeted agricultural recommendations.
            </p>
          </div>
        </motion.div>

        {/* Challenge Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Crop Classification Needs a Rethink</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CropID addresses key pain points in precision agriculture that limit actionable insights and sustainable practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <challenge.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 text-sm">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* PoC Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-md p-8 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-4 py-2 mb-4">
              <Microscope className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-medium">Proof of Concept</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Validating the Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 rounded-full px-4 py-2 mb-4">
              <Brain className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-medium">Technical Excellence</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Cutting-Edge Architecture</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-lg transition-shadow"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white rounded-lg shadow-md p-8 mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-4 py-2 mb-4">
              <Rocket className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-medium">What's Next</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">The Road Ahead</h2>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-center p-6 bg-gray-50 rounded-lg"
              >
                <div className="flex-shrink-0 mr-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    item.status === 'in-progress' ? 'bg-orange-100' : 'bg-gray-200'
                  }`}>
                    {item.status === 'in-progress' ? (
                      <Activity className="w-6 h-6 text-orange-600" />
                    ) : (
                      <Star className="w-6 h-6 text-gray-600" />
                    )}
                  </div>
                </div>
                <div className="flex-grow">
               <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>

                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className=" text-center text-white"
        >
         
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-3 bg-white text-green-600 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Explore the PoC in Action
            <ArrowRight className="ml-3 w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;