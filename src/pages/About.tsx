import React, { useState } from 'react';
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
  Activity,
  Users,
  TrendingUp,
  Calendar,
  DollarSign,
  Layers,
  MapPin,
  Database,
  BarChart3
} from 'lucide-react';

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const challenges = [
    { 
      title: 'Inaccurate Crop Classification', 
      desc: 'Existing methods rely on single-source data or outdated techniques, limiting classification accuracy and crop health insights.', 
      icon: Target 
    },
    { 
      title: 'Inefficient Fertilizer Use', 
      desc: 'Non-targeted fertilizer application wastes resources, reduces farmer returns, and contributes to environmental degradation.', 
      icon: Droplet 
    },
    { 
      title: 'Lack of Farmer-Centric Solutions', 
      desc: 'Large-scale agronomic tools fail to deliver actionable, tailored insights for individual farmers.', 
      icon: Users 
    },
    { 
      title: 'Data Integration Challenges', 
      desc: 'Multi-temporal and multi-sensor data remain underutilized due to complexity in integration and analysis.', 
      icon: Database 
    }
  ];

  const projectPhases = [
    { 
      phase: 'Q1-Q2', 
      title: 'Foundation', 
      desc: 'Requirement assessment, data collection, and initial model development',
      icon: Microscope,
      color: 'blue'
    },
    { 
      phase: 'Q3-Q4', 
      title: 'Development', 
      desc: 'Platform prototype, field trials, and model refinement',
      icon: Brain,
      color: 'purple'
    },
    { 
      phase: 'Q5-Q6', 
      title: 'Enhancement', 
      desc: 'Mobile app development and advanced features integration',
      icon: Rocket,
      color: 'orange'
    },
    { 
      phase: 'Q7-Q8', 
      title: 'Deployment', 
      desc: 'Testing, optimization, and full-scale launch with user training',
      icon: CheckCircle,
      color: 'green'
    }
  ];

  const objectives = [
    {
      icon: Target,
      title: 'Farmer-Centric Platform',
      desc: 'Integrate multi-modal data sources including remote sensing, soil health metrics, and crop phenology to classify crops and optimize fertilizer application for improved agricultural productivity.'
    },
    {
      icon: Satellite,
      title: 'Early Crop Identification',
      desc: 'Leverage multi-temporal satellite data (Sentinel-1, Sentinel-2, Landsat) to provide early crop type and growth stage identification, enabling precise, timely fertilizer recommendations.'
    },
    {
      icon: Brain,
      title: 'Advanced Predictive Models',
      desc: 'Develop cutting-edge deep learning models (3D CNNs, ConvLSTMs) and visualization tools for both crop classification and fertilizer recommendations.'
    },
    {
      icon: Users,
      title: 'Actionable Insights',
      desc: 'Provide real-time, actionable insights through a user-friendly platform designed to support farmers, agronomists, and agricultural decision-makers.'
    }
  ];

  const features = [
    {
      icon: Layers,
      title: 'Multi-Modal Data Integration',
      desc: 'Seamlessly fuses remote sensing imagery (Sentinel-1/2, Landsat), soil health data (pH, nutrients, moisture), and crop phenology for comprehensive agricultural analysis and decision-making.'
    },
    {
      icon: Brain,
      title: 'Deep Learning Architecture',
      desc: 'Specialized 3D CNNs and ConvLSTMs capture spatial, spectral, and temporal features, enhancing crop identification accuracy and predicting growth stages more reliably than traditional methods.'
    },
    {
      icon: Droplet,
      title: 'Tailored Fertilizer Recommendations',
      desc: 'Integrates real-time soil health data with crop phenological stages to deliver customized OCP Nutricrops fertilizer solutions, optimizing nutrient delivery and reducing environmental impact.'
    },
    {
      icon: MapPin,
      title: 'Regional Scalability',
      desc: 'Multi-temporal and multi-sensor data enables prediction and adjustment for regional variations, ensuring fertilizers are applied at the right time and in the right amount across diverse geographies.'
    }
  ];

  const innovation = [
    {
      icon: TrendingUp,
      title: 'Precision Agriculture',
      desc: 'Enables precise crop and variety selection, enhances yield prediction accuracy, and supports data-driven decision-making for modern agriculture.'
    },
    {
      icon: Shield,
      title: 'Sustainable Productivity',
      desc: 'Empowers farmers with tailored fertilizer strategies, aligning with OCP Nutricrops\' vision for sustainable productivity and optimized resource use.'
    },
    {
      icon: Activity,
      title: 'Real-Time Intelligence',
      desc: 'Unlike large-scale agronomic tools, CropID delivers actionable, real-time insights tailored for individual farmers through a user-friendly platform.'
    },
    {
      icon: Globe,
      title: 'Ecosystem Integration',
      desc: 'Designed for seamless integration with other agronomic initiatives, enhancing utility as part of a broader agricultural ecosystem.'
    }
  ];

  const roadmapItems = [
    {
      quarter: 'Q1-Q3',
      title: "Platform Foundation & Prototyping",
      desc: "Stakeholder engagement, data collection, initial ML models, and functional platform prototype with basic crop classification capabilities.",
      status: "in-progress"
    },
    {
      quarter: 'Q4-Q5',
      title: "Field Validation & Mobile Development",
      desc: "Conduct field trials across diverse crops and regions, refine models, and develop mobile application for enhanced farmer accessibility.",
      status: "planned"
    },
    {
      quarter: 'Q6-Q7',
      title: "Advanced Features & Optimization",
      desc: "Integrate yield prediction and growth-stage tracking tools, enhance user interface, conduct broad-scale testing, and optimize algorithms.",
      status: "planned"
    },
    {
      quarter: 'Q8',
      title: "Launch & Deployment",
      desc: "Final product launch with comprehensive training materials, user onboarding sessions, and post-launch support infrastructure.",
      status: "planned"
    }
  ];

  const projectStats = [
    { label: 'Project Duration', value: '2 Years', icon: Calendar },
    { label: 'Total Budget', value: '5M MAD', icon: DollarSign },
    { label: 'Team Members', value: '6+', icon: Users },
    { label: 'Project Phases', value: '8 Quarters', icon: BarChart3 }
  ];

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
              <Sprout className="w-5 h-5 mr-2" />
              <span className="font-semibold">Research & Innovation Project</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About CropID</h1>
            <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
              Advanced precision agriculture platform for tailored fertilizer recommendations through intelligent multi-modal data integration
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">UM6P</div>
                <div className="text-sm text-green-100">Lead Institution</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">OCP</div>
                <div className="text-sm text-green-100">Industry Partner</div>
              </div>
              <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold">TRL 2→4</div>
                <div className="text-sm text-green-100">Technology Level</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8 relative z-10">
        {/* Project Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-green-600"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-5 py-2 mb-4">
              <Globe className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-800 font-semibold">Research Initiative</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              CropID: <span className="bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">Vision & Mission</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              The CropID project is a <span className="font-bold text-green-600">2-year research initiative</span> led by 
              Mohammed VI Polytechnic University's <span className="font-bold">College of Computing</span>, in partnership with 
              <span className="font-bold text-orange-600"> OCP Nutricrops</span>. Our mission is to develop an advanced, 
              farmer-centric crop classification and optimization system that integrates multi-modal remote sensing data, 
              soil health indicators, and crop phenology insights to enable precise customization of fertilizer solutions.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {projectStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200"
              >
                <stat.icon className="w-8 h-8 text-green-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Problem Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-red-100 rounded-full px-5 py-2 mb-4">
              <Target className="w-5 h-5 text-red-600 mr-2" />
              <span className="text-red-800 font-semibold">Problem Statement</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Agricultural Challenges</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Agricultural productivity faces critical challenges from increasing food demand, climate change, 
              and environmental degradation. CropID addresses these persistent issues:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-l-4 border-red-500"
              >
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-4">
                  <challenge.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{challenge.title}</h3>
                <p className="text-gray-600 leading-relaxed">{challenge.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Objectives */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-blue-100 rounded-full px-5 py-2 mb-4">
              <Target className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-blue-800 font-semibold">Project Objectives</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Strategic Goals</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CropID pursues four core objectives to transform precision agriculture and deliver sustainable solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {objectives.map((objective, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                  <objective.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{objective.title}</h3>
                <p className="text-gray-600 leading-relaxed">{objective.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Technical Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-green-100 rounded-full px-5 py-2 mb-4">
              <Brain className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">Technical Excellence</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Platform Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leveraging cutting-edge technology to deliver unprecedented agricultural intelligence
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className={`w-16 h-16 bg-gradient-to-br rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                  activeFeature === index 
                    ? 'from-green-500 to-orange-500 scale-110' 
                    : 'from-green-100 to-orange-100'
                }`}>
                  <feature.icon className={`w-8 h-8 transition-colors duration-300 ${
                    activeFeature === index ? 'text-white' : 'text-green-600'
                  }`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Innovation & Originality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-br from-orange-50 to-white rounded-2xl shadow-xl p-8 md:p-12 mb-16 border-t-4 border-orange-500"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-orange-100 rounded-full px-5 py-2 mb-4">
              <Star className="w-5 h-5 text-orange-600 mr-2" />
              <span className="text-orange-800 font-semibold">Innovation</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Makes CropID Unique?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              CropID stands out through its integration of cutting-edge technologies and farmer-focused design
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {innovation.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="flex items-start p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-purple-100 rounded-full px-5 py-2 mb-4">
              <Calendar className="w-5 h-5 text-purple-600 mr-2" />
              <span className="text-purple-800 font-semibold">Project Timeline</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Phases</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              8-quarter structured methodology ensuring systematic platform evolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectPhases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className={`w-20 h-20 bg-${phase.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <phase.icon className={`w-10 h-10 text-${phase.color}-600`} />
                </div>
                <div className={`text-sm font-bold text-${phase.color}-600 mb-2`}>{phase.phase}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-sm text-gray-600">{phase.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Roadmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-green-100 rounded-full px-5 py-2 mb-4">
              <Rocket className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-green-800 font-semibold">Implementation Roadmap</span>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Path Forward</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Detailed roadmap from concept to deployment across 8 project quarters
            </p>
          </div>

          <div className="space-y-6">
            {roadmapItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                className="relative"
              >
                <div className={`flex items-start p-8 rounded-xl border-2 transition-all duration-300 ${
                  item.status === 'in-progress' 
                    ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-300 shadow-lg' 
                    : 'bg-gray-50 border-gray-200 hover:border-green-300 hover:shadow-md'
                }`}>
                  <div className="flex-shrink-0 mr-6">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                      item.status === 'in-progress' ? 'bg-orange-500' : 'bg-gray-300'
                    }`}>
                      {item.status === 'in-progress' ? (
                        <Activity className="w-8 h-8 text-white animate-pulse" />
                      ) : (
                        <Star className="w-8 h-8 text-gray-600" />
                      )}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`text-sm font-bold px-3 py-1 rounded-full ${
                        item.status === 'in-progress' 
                          ? 'bg-orange-200 text-orange-800' 
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {item.quarter}
                      </span>
                      {item.status === 'in-progress' && (
                        <span className="text-sm font-semibold text-orange-600">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Project Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="bg-gradient-to-br from-green-600 via-green-700 to-orange-500 rounded-2xl shadow-2xl p-8 md:p-12 text-white mb-16"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-5 py-2 mb-6 backdrop-blur-sm">
              <TrendingUp className="w-5 h-5 mr-2" />
              <span className="font-semibold">Project Impact</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">Benefits to OCP & Morocco</h2>
            <p className="text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
              CropID empowers farmers and agronomists with tailored fertilizer strategies, aligning with 
              OCP Nutricrops' vision for sustainable productivity and optimized resource use. By enabling 
              precise crop and variety selection, the platform enhances yield prediction accuracy and 
              supports data-driven decision-making in modern agriculture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-300" />
              <h3 className="text-xl font-bold mb-2">Sustainable Agriculture</h3>
              <p className="text-green-100">Reducing environmental impact through optimized resource utilization</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-300" />
              <h3 className="text-xl font-bold mb-2">Farmer Empowerment</h3>
              <p className="text-green-100">Real-time insights for improved crop yields and profitability</p>
            </div>
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-orange-300" />
              <h3 className="text-xl font-bold mb-2">Scientific Innovation</h3>
              <p className="text-green-100">Advancing multimodal data analysis and AI in agriculture</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.href = '/test-model'}
            className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Explore the Platform
            <ArrowRight className="ml-3 w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;