import React from 'react';
import TrainModelForm from '../components/TrainModelForm'
import DashboardFrame from '../components/DashbordFrame';

const TrainModel: React.FC = () => {
  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Model Training Dashboard</h1>
          <p className="text-gray-600">Configure and monitor your model training in real-time</p>
        </header>
        {/* Disclaimer for POC */}
<div className="mt-12">
  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg shadow-sm">
    <h3 className="text-lg font-semibold text-yellow-700 mb-2">🚧 Prototype Mode</h3>
    <p className="text-sm text-yellow-700">
      This interface is part of a <span className="font-medium">proof of concept</span> project.
      The backend is not currently deployed, and the training features shown here are for
      demonstration purposes only. A detailed video walkthrough has been submitted as part of the POC evaluation.
    </p>
  </div>
</div>


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="lg:sticky lg:top-8 lg:h-fit">
            <TrainModelForm />
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <DashboardFrame />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainModel;
