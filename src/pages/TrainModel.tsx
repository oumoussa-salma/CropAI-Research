import React from 'react';
import { motion } from 'framer-motion';
import TrainModelForm from '../components/TrainModelForm';
import DashboardFrame from '../components/DashbordFrame';

const TrainModel: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
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
              <span className="font-medium">Training Interface</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Model Training Dashboard</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Configure and monitor your model training in real-time.
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
          className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm mb-12"
        >
          <h3 className="text-lg font-semibold text-yellow-700 mb-2">🚧 Prototype Mode</h3>
          <p className="text-sm text-yellow-700">
            This interface is part of a <span className="font-medium">proof of concept</span> project.
            The backend is not currently deployed, and the training features shown here are for
            demonstration purposes only. A detailed video walkthrough has been submitted as part of the POC evaluation.
          </p>
        </motion.div>

        {/* Grid Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <TrainModelForm />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <DashboardFrame />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TrainModel;
