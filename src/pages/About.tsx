import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
  Building2,
  Users,
  Rocket
} from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const Section = ({ title, children, icon: Icon, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-white rounded-lg shadow-sm p-6 mb-6"
  >
    <div className="flex items-center mb-4">
      <Icon className="h-6 w-6 text-green-600 mr-2" />
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </motion.div>
);

const Feature = ({ icon: Icon, title, description }) => (
  <div className="flex items-start p-4">
    <div className="flex-shrink-0">
      <Icon className="h-6 w-6 text-green-600" />
    </div>
    <div className="ml-4">
      <h3 className="text-lg font-medium text-gray-900">{title}</h3>
      <p className="mt-1 text-gray-500">{description}</p>
    </div>
  </div>
);

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          {...fadeIn}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-4">
            Smarter Farming with AI
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A Multimodal Crop Classification Project at the intersection of Precision Agriculture and Deep Learning
          </p>
        </motion.div>

        {/* About the Project */}
        <Section title="About the Project" icon={Sprout} delay={0.1}>
          <div className="prose max-w-none">
            <p className="text-gray-600 leading-relaxed">
              This project explores the cutting-edge intersection of <strong>Precision Agriculture</strong> and <strong>Deep Learning</strong>. 
              Developed within <strong>University Mohammed VI Polytechnic (UM6P)</strong> in collaboration with <strong>SDAS Group</strong>, 
              our research focuses on advanced Crop Classification using Multimodal Data, powered by sophisticated 3D CNNs and ConvLSTMs.
            </p>
          </div>
        </Section>

        {/* Objective */}
        <Section title="Objective" icon={Target} delay={0.2}>
          <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded">
            <p className="text-lg text-gray-700 italic">
              "Leverage multimodal satellite data and deep learning models to accurately classify crop types and support sustainable agricultural practices."
            </p>
          </div>
        </Section>

        {/* Scope */}
        <Section title="Technical Scope" icon={Microscope} delay={0.3}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Feature
              icon={Satellite}
              title="Multimodal Data"
              description="Integration of Sentinel-2, SAR, and Hyperspectral satellite imagery"
            />
            <Feature
              icon={Brain}
              title="Deep Learning"
              description="Advanced 3D CNN architecture with ConvLSTM layers"
            />
            <Feature
              icon={LineChart}
              title="Public Testing"
              description="Open model testing platform for research validation"
            />
            <Feature
              icon={Shield}
              title="Real-world Applications"
              description="Monitoring, estimation, and land-use classification"
            />
          </div>
        </Section>


        {/* Impact */}
        <Section title="Why It Matters" icon={Users} delay={0.5}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Feature
              icon={Sprout}
              title="Crop Health"
              description="Early detection of crop types and stress indicators"
            />
            <Feature
              icon={Droplet}
              title="Resource Optimization"
              description="Guided irrigation and resource allocation"
            />
            <Feature
              icon={Shield}
              title="Food Security"
              description="Enhanced monitoring for sustainable agriculture"
            />
          </div>
        </Section>

        {/* Future Directions */}
        <Section title="What's Next" icon={Rocket} delay={0.6}>
          <div className="space-y-4">
            <div className="flex items-center">
              <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-gray-600">Development of comprehensive regional crop maps</p>
            </div>
            <div className="flex items-center">
              <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-gray-600">Integration with drone technology and IoT sensors</p>
            </div>
            <div className="flex items-center">
              <ArrowRight className="h-5 w-5 text-green-600 mr-2" />
              <p className="text-gray-600">Implementation of user-friendly monitoring dashboards</p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-12"
        >
          <Link
            to="/test-model"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
          >
            Test the Model
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default About;