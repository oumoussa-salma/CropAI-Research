import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, ChevronRight, Globe, BarChart3, TrendingUp, MapPin, Eye, Activity } from 'lucide-react';
import { bavarianGallery } from '../components/bavarianGalleryData';
import { breizhGallery } from '../components/BreizhGalleryData';
import Gallery from '../components/Gallery';




const datasetMap = {
  bavarian: [
    { id: 'all', name: 'All crops', file: 'files/bavarian/2map_all.html', count: '12.5K fields' },
    { id: 'clover', name: 'Clover', file: 'files/bavarian/2map_clover.html', count: '1.2K fields' },
    { id: 'corn', name: 'Corn', file: 'files/bavarian/2map_corn.html', count: '3.8K fields' },
    { id: 'meadow', name: 'Meadow', file: 'files/bavarian/2map_meadow.html', count: '2.1K fields' },
    { id: 'spring_barley', name: 'Spring Barley', file: 'files/bavarian/2map_spring_barley.html', count: '1.8K fields' },
    { id: 'winter_barley', name: 'Winter Barley', file: 'files/bavarian/2map_winter_barley.html', count: '1.5K fields' },
    { id: 'triticale', name: 'Triticale', file: 'files/bavarian/2map_triticale.html', count: '0.9K fields' },
    { id: 'wheat', name: 'Wheat', file: 'files/bavarian/2map_wheat.html', count: '2.7K fields' },
  ],
  breizh: [
    { id: 'barley', name: 'Barley', file: 'files/breizh/breizh_map_barley.html', count: '1.4K fields' },
    { id: 'corn', name: 'Corn', file: 'files/breizh/breizh_map_corn.html', count: '3.2K fields' },
    { id: 'nuts', name: 'Nuts', file: 'files/breizh/breizh_map_nuts.html', count: '0.8K fields' },
    { id: 'orchards', name: 'Orchards', file: 'files/breizh/breizh_map_orchards.html', count: '1.1K fields' },
    { id: 'permanent_meadows', name: 'Permanent Meadows', file: 'files/breizh/breizh_map_permanent_meadows.html', count: '2.5K fields' },
    { id: 'rapeseed', name: 'Rapeseed', file: 'files/breizh/breizh_map_rapeseed.html', count: '1.9K fields' },
    { id: 'sunflower', name: 'Sunflower', file: 'files/breizh/breizh_map_sunflower.html', count: '1.3K fields' },
    { id: 'temporary_meadows', name: 'Temporary Meadows', file: 'files/breizh/breizh_map_temporary_meadows.html', count: '2.8K fields' },
    { id: 'wheat', name: 'Wheat', file: 'files/breizh/breizh_map_wheat.html', count: '2.1K fields' },
  ],
};

const datasetStats = {
  bavarian: {
    correct: 75.4,
    misclassified: 10.6,
    noData: 14.0,
    totalFields: '12.5K',
    region: 'Bavaria, Germany'
  },
  breizh: {
    correct: 68.5,
    misclassified: 20.0,
    noData: 11.5,
    totalFields: '15.2K',
    region: 'Brittany, France'
  }
};

const TestModel: React.FC = () => {
  const [activeDataset, setActiveDataset] = useState<'bavarian' | 'breizh'>('bavarian');
  const [activeCrop, setActiveCrop] = useState(datasetMap['bavarian'][0].id);
  const [isLoading, setIsLoading] = useState(false);

  const crops = datasetMap[activeDataset];
  const stats = datasetStats[activeDataset];

  const handleDatasetSwitch = (dataset: 'bavarian' | 'breizh') => {
    setIsLoading(true);
    setActiveDataset(dataset);
    setActiveCrop(datasetMap[dataset][0].id);
    // Simulate loading
    setTimeout(() => setIsLoading(false), 500);
  };

  const handleCropChange = (cropId: string) => {
    setIsLoading(true);
    setActiveCrop(cropId);
    setTimeout(() => setIsLoading(false), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 py-16">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        
        <div className="relative max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <Activity className="w-5 h-5 mr-2" />
              <span className="font-medium">Model Testing Results</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">
              Crop Classification <span className="text-green-200">Analytics</span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Interactive visualization and performance analysis of our EarlyRNN model across different regions and crop types
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        {/* Enhanced Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-green-100">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">{stats.correct}%</span>
            </div>
            <h3 className="font-semibold text-gray-900">Accuracy</h3>
            <p className="text-sm text-gray-500">Correct classifications</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <MapPin className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">{stats.totalFields}</span>
            </div>
            <h3 className="font-semibold text-gray-900">Total Fields</h3>
            <p className="text-sm text-gray-500">Analyzed parcels</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-2xl font-bold text-orange-600">{stats.misclassified}%</span>
            </div>
            <h3 className="font-semibold text-gray-900">Errors</h3>
            <p className="text-sm text-gray-500">Misclassifications</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
            </div>
            <h3 className="font-semibold text-gray-900">Region</h3>
            <p className="text-sm text-gray-500">{stats.region}</p>
          </div>
        </motion.div>

        {/* Enhanced Dataset Selector */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center mb-8"
        >
        <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100 flex gap-x-2">
  {(['bavarian', 'breizh'] as const).map((dataset) => (
    <motion.button
      key={dataset}
      onClick={() => handleDatasetSwitch(dataset)}
      className={`relative flex items-center px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
        activeDataset === dataset
          ? 'bg-green-600 text-white shadow-lg'
          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
      }`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Globe className="w-4 h-4 mr-2" />
      {dataset.charAt(0).toUpperCase() + dataset.slice(1)}
      {activeDataset === dataset && (
        <motion.div
          layoutId="activeDataset"
          className="absolute inset-0 bg-green-600 rounded-xl -z-10"
          initial={false}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
    </motion.button>
  ))}
</div>

        </motion.div>

        {/* Enhanced Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
        >
          {/* Enhanced Tabs */}
          <div className="border-b border-gray-100 bg-gray-50">
            <div className="flex overflow-x-auto scrollbar-hide px-6">
              {crops.map((crop) => (
                <motion.button
                  key={crop.id}
                  onClick={() => handleCropChange(crop.id)}
                  className={`relative flex items-center px-6 py-4 text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                    activeCrop === crop.id
                      ? 'text-green-600 bg-white'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  <Map className={`h-4 w-4 mr-3 ${
                    activeCrop === crop.id ? 'text-green-600' : 'text-gray-400'
                  }`} />
                  <div className="text-left">
                    <div>{crop.name}</div>
                    <div className="text-xs opacity-60">{crop.count}</div>
                  </div>
                  {activeCrop === crop.id && (
                    <>
                      <ChevronRight className="h-4 w-4 ml-3 text-green-600" />
                      <motion.div
                        layoutId="activeCrop"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"
                        initial={false}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    </>
                  )}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Enhanced Map Display */}
          <div className="relative bg-gray-50" style={{ height: 'calc(100vh - 300px)' }}>
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-white"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 border-3 border-green-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-gray-600 font-medium">Loading visualization...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeDataset}-${activeCrop}`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <iframe
                    src={crops.find(c => c.id === activeCrop)?.file}
                    title={`${crops.find(c => c.id === activeCrop)?.name} Test Results`}
                    className="w-full h-full border-0 rounded-b-3xl"
                    loading="lazy"
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Floating Action Button */}
            <motion.button
              className="absolute top-4 right-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 hover:bg-opacity-100 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5 text-gray-600" />
            </motion.button>
          </div>
        </motion.div>

        {/* Enhanced Legend */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Classification Legend</h2>
            <div className="flex items-center text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              {activeDataset === 'bavarian' ? 'Bavaria Dataset' : 'Breizh Dataset'}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="flex items-center justify-between p-4 bg-green-50 rounded-xl border border-green-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-green-500 rounded-full mr-3 shadow-sm" />
                <div>
                  <div className="font-semibold text-gray-900">Correct Classifications</div>
                  <div className="text-sm text-gray-600">Model predictions match ground truth</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-green-600">{stats.correct}%</div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between p-4 bg-red-50 rounded-xl border border-red-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full mr-3 shadow-sm" />
                <div>
                  <div className="font-semibold text-gray-900">Misclassifications</div>
                  <div className="text-sm text-gray-600">Incorrect model predictions</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-red-600">{stats.misclassified}%</div>
            </motion.div>

            <motion.div 
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center">
                <div className="w-6 h-6 bg-gray-400 rounded-full mr-3 shadow-sm" />
                <div>
                  <div className="font-semibold text-gray-900">No Data Available</div>
                  <div className="text-sm text-gray-600">Insufficient data for classification</div>
                </div>
              </div>
              <div className="text-2xl font-bold text-gray-600">{stats.noData}%</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Gallery Section */}
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ delay: 0.6 }}
          >
            {activeDataset === 'bavarian' && <Gallery data={bavarianGallery} />}
            {activeDataset === 'breizh' && <Gallery data={breizhGallery} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TestModel;