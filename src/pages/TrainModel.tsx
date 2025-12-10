import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, AlertTriangle } from 'lucide-react';
import TrainModelForm from '../components/TrainModelForm';
import DashboardFrame from '../components/DashbordFrame';

const TrainModel: React.FC = () => {
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
              <PlayCircle className="w-5 h-5 mr-2" />
              <span className="font-semibold">Training Interface</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Model Training Dashboard</h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
              Configure and monitor your deep learning model training in real-time with our intuitive interface.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8 relative z-10">
        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-50 to-yellow-50 border-l-4 border-orange-500 p-6 rounded-xl shadow-md mb-12"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-orange-600" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-orange-800 mb-2">🚧 Prototype Mode</h3>
              <p className="text-sm text-orange-700 leading-relaxed">
                This interface is part of a <span className="font-semibold">proof of concept</span> project.
                The backend is not currently deployed, and the training features shown here are for
                demonstration purposes only. A detailed video walkthrough has been submitted as part of the POC evaluation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Training Form */}
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-green-600">
              <div className="bg-gradient-to-r from-green-600 to-orange-500 p-4">
                <h2 className="text-xl font-bold text-white">Training Configuration</h2>
                <p className="text-green-50 text-sm mt-1">Set up your model parameters and hyperparameters</p>
              </div>
              <TrainModelForm />
            </div>
          </div>

          {/* Dashboard Frame */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-orange-500">
            <div className="bg-gradient-to-r from-orange-500 to-green-600 p-4">
              <h2 className="text-xl font-bold text-white">Training Metrics</h2>
              <p className="text-orange-50 text-sm mt-1">Monitor your model's performance in real-time</p>
            </div>
            <DashboardFrame />
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 bg-gradient-to-br from-green-50 to-orange-50 rounded-xl shadow-md p-8 border border-green-200"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
              <PlayCircle className="w-6 h-6 text-white" />
            </div>
            About Model Training
          </h3>
          <p className="text-gray-700 leading-relaxed">
            The CropID platform leverages advanced deep learning architectures including <span className="font-semibold text-green-600">3D CNNs</span> and 
            <span className="font-semibold text-orange-600"> ConvLSTMs</span> to process multi-temporal satellite imagery. 
            This training interface allows researchers to configure model parameters, select appropriate datasets, 
            and monitor training metrics such as accuracy, loss, and convergence patterns in real-time.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainModel;