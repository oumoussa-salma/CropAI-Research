import React from 'react';
import { MonitorCheck } from 'lucide-react';

const DashboardFrame: React.FC = () => {

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-full">

      {/* 🧭 Visdom Dashboard Header */}
      <div className="bg-gray-800 text-white px-4 py-3 flex items-center space-x-2 mt-6">
        <MonitorCheck className="h-5 w-5" />
        <h2 className="text-lg font-semibold">Visdom Dashboard</h2>
      </div>

      {/* 📊 Visdom Iframe */}
      <div className="flex-1">
        <iframe
          src="http://localhost:8097"
          className="w-full h-full border-0"
          title="Visdom Dashboard"
        />
      </div>
    </div>
  );
};

export default DashboardFrame;
