import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Map, ChevronRight, Globe } from 'lucide-react';
import Gallery from '../components/Gallery';
import { bavarianGallery } from '../components/bavarianGalleryData';
import { breizhGallery } from '../components/BreizhGalleryData';


const datasetMap = {
  bavarian: [
    { id: 'all', name: 'All crops', file: 'files/bavarian/2map_all.html' },
    { id: 'clover', name: 'Clover', file: 'files/bavarian/2map_clover.html' },
    { id: 'corn', name: 'Corn', file: 'files/bavarian/2map_corn.html' },
    { id: 'meadow', name: 'Meadow', file: 'files/bavarian/2map_meadow.html' },
    { id: 'spring_barley', name: 'Spring Barley', file: 'files/bavarian/2map_spring_barley.html' },
    { id: 'winter_barley', name: 'Winter Barley', file: 'files/bavarian/2map_winter_barley.html' },
    { id: 'triticale', name: 'Triticale', file: 'files/bavarian/2map_triticale.html' },
    { id: 'wheat', name: 'Wheat', file: 'files/bavarian/2map_wheat.html' },
  ],
  breizh: [
    { id: 'barley', name: 'Barley', file: 'files/breizh/breizh_map_barley.html' },
    { id: 'corn', name: 'Corn', file: 'files/breizh/breizh_map_corn.html' },
    { id: 'nuts', name: 'Nuts', file: 'files/breizh/breizh_map_nuts.html' },
    { id: 'orchards', name: 'Orchards', file: 'files/breizh/breizh_map_orchards.html' },
    { id: 'permanent_meadows', name: 'Permanent Meadows', file: 'files/breizh/breizh_map_permanent_meadows.html' },
    { id: 'rapeseed', name: 'Rapeseed', file: 'files/breizh/breizh_map_rapeseed.html' },
    { id: 'sunflower', name: 'Sunflower', file: 'files/breizh/breizh_map_sunflower.html' },
    { id: 'temporary_meadows', name: 'Temporary Meadows', file: 'files/breizh/breizh_map_temporary_meadows.html' },
    { id: 'wheat', name: 'Wheat', file: 'files/breizh/breizh_map_wheat.html' },
  ],
};

const TestModel: React.FC = () => {
  const [activeDataset, setActiveDataset] = useState<'bavarian' | 'breizh'>('bavarian');
  const [activeCrop, setActiveCrop] = useState(datasetMap['bavarian'][0].id);

  const crops = datasetMap[activeDataset];

  const handleDatasetSwitch = (dataset: 'bavarian' | 'breizh') => {
    setActiveDataset(dataset);
    setActiveCrop(datasetMap[dataset][0].id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Test Results by Crop</h1>
          <p className="text-xl text-gray-600">
            Interactive visualization of crop classification results
          </p>
        </motion.div>

        {/* Dataset Selector */}
        <div className="flex justify-center gap-6 mb-6">
          {(['bavarian', 'breizh'] as const).map((dataset) => (
            <button
              key={dataset}
              onClick={() => handleDatasetSwitch(dataset)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-all ${activeDataset === dataset
                ? 'bg-green-600 text-white'
                : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                }`}
            >
              <Globe className="w-4 h-4 mr-2" />
              {dataset.charAt(0).toUpperCase() + dataset.slice(1)}
            </button>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex overflow-x-auto border-b border-gray-200 scrollbar-hide">
            {crops.map((crop) => (
              <button
                key={crop.id}
                onClick={() => setActiveCrop(crop.id)}
                className={`flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-colors duration-200 ${activeCrop === crop.id
                  ? 'text-green-600 border-b-2 border-green-600 bg-green-50'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
              >
                <Map
                  className={`h-4 w-4 mr-2 ${activeCrop === crop.id ? 'text-green-600' : 'text-gray-400'
                    }`}
                />
                {crop.name}
                {activeCrop === crop.id && (
                  <ChevronRight className="h-4 w-4 ml-2 text-green-600" />
                )}
              </button>
            ))}
          </div>

          {/* Map Display */}
          <div className="relative w-full" style={{ height: 'calc(100vh - 300px)' }}>
            {crops.map((crop) => (
              <motion.div
                key={crop.id}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCrop === crop.id ? 1 : 0,
                  display: activeCrop === crop.id ? 'block' : 'none',
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <iframe
                  src={crop.file}
                  title={`${crop.name} Test Results`}
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
        {activeDataset === 'bavarian' && <Gallery data={bavarianGallery} />}
        {activeDataset === 'breizh' && <Gallery data={breizhGallery} />}

        {/* Legend */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Map Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-green-500 rounded-full" />
              <span className="text-sm text-gray-600">
                Correct Classifications
                {activeDataset === 'bavarian' && ' (75.4%)'}
                {activeDataset === 'breizh' && ' (68.5%)'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-red-500 rounded-full" />
              <span className="text-sm text-gray-600">
                Misclassifications
                {activeDataset === 'bavarian' && ' (10.6%)'}
                {activeDataset === 'breizh' && ' (20.0%)'}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full" />
              <span className="text-sm text-gray-600">
                No Data Available
                {activeDataset === 'bavarian' && ' (14.0%)'}
                {activeDataset === 'breizh' && ' (11.5%)'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TestModel;
