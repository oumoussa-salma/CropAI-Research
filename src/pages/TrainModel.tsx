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
        <div className="bg-red-600 text-white text-center py-2">
        <p className="text-sm font-semibold">
          <strong>Disclaimer:</strong> The backend is still not deployed. We are working on it. Please bear with us.
        </p>
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
