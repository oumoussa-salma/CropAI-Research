{/* import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Image as ImageIcon,
  Play,
  ChevronDown,
  ChevronUp,
  Clock,
  Percent,
  BarChart3, Loader2, Sparkles
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data for the confusion matrix
const mockConfusionMatrix = [
  { name: 'Maize', actual: 85, predicted: 80 },
  { name: 'Wheat', actual: 90, predicted: 88 },
  { name: 'Rice', actual: 78, predicted: 75 },
  { name: 'Soybean', actual: 92, predicted: 89 },
];

// Sample images for testing
const sampleImages = [
  {
    id: 1,
    name: 'Maize Field',
    url: 'https://images.unsplash.com/photo-1601506521793-dc748fc80b67?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Wheat Field',
    url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Rice Paddy',
    url: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=80',
  },
];

const TestModel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [selectedSample, setSelectedSample] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setShowResults(false);
    }
  };

  const handleSampleSelect = (sample) => {
    setSelectedSample(sample);
    setPreviewUrl(sample.url);
    setSelectedFile(null);
    setShowResults(false);
  };

  const handleRunInference = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Test the Model
          </h1>
          <p className="text-xl text-gray-600">
            Upload an image or choose a sample to test our crop classification model
          </p>
        </motion.div>
     
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
 
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Upload Input</h2>


            <div className="mb-6">
              <label
                htmlFor="file-upload"
                className="block w-full p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-green-500 transition-colors duration-200"
              >
                <div className="flex flex-col items-center">
                  <Upload className="h-12 w-12 text-gray-400" />
                  <span className="mt-2 text-sm text-gray-500">
                    Drop your file here or click to upload
                  </span>
                  <span className="mt-1 text-xs text-gray-400">
                    Supported formats: .jpg, .png, .tiff, .npy
                  </span>
                </div>
                <input
                  id="file-upload"
                  type="file"
                  className="hidden"
                  onChange={handleFileChange}
                  accept=".jpg,.jpeg,.png,.tiff,.npy"
                />
              </label>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium mb-4">Or choose a sample:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {sampleImages.map((sample) => (
                  <button
                    key={sample.id}
                    onClick={() => handleSampleSelect(sample)}
                    className={`relative rounded-lg overflow-hidden hover:ring-2 hover:ring-green-500 transition-all duration-200 ${selectedSample?.id === sample.id ? 'ring-2 ring-green-500' : ''
                      }`}
                  >
                    <img
                      src={sample.url}
                      alt={sample.name}
                      className="w-full h-24 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs p-1">
                      {sample.name}
                    </div>
                  </button>
                ))}
              </div>
            </div>
            {previewUrl && (
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Preview:</h3>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            <button
              onClick={handleRunInference}
              disabled={!previewUrl || isLoading}
              className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin -ml-1 mr-2 h-5 w-5" />
                  Processing...
                </>
              ) : (
                <>
                  <Play className="mr-2 h-5 w-5" />
                  Run Inference
                </>
              )}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Results</h2>

            {showResults ? (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Predicted Crop</span>
                      <ImageIcon className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="mt-1 text-2xl font-semibold">Wheat</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Confidence</span>
                      <Percent className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="mt-1 text-2xl font-semibold">94.5%</p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Inference Time</span>
                      <Clock className="h-5 w-5 text-green-600" />
                    </div>
                    <p className="mt-1 text-2xl font-semibold">1.2s</p>
                  </div>
                </div>

                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="flex items-center justify-between w-full px-4 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <span className="font-medium">Advanced Metrics</span>
                  {showAdvanced ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </button>

                {showAdvanced && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Confusion Matrix</h3>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={mockConfusionMatrix}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="actual" fill="#059669" name="Actual" />
                            <Bar dataKey="predicted" fill="#34D399" name="Predicted" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-2">Additional Metrics</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4">
                          <span className="text-sm text-gray-500">Precision</span>
                          <p className="mt-1 text-xl font-semibold">0.92</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <span className="text-sm text-gray-500">Recall</span>
                          <p className="mt-1 text-xl font-semibold">0.89</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <span className="text-sm text-gray-500">F1 Score</span>
                          <p className="mt-1 text-xl font-semibold">0.90</p>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <span className="text-sm text-gray-500">Accuracy</span>
                          <p className="mt-1 text-xl font-semibold">0.91</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <BarChart3 className="h-16 w-16 mb-4" />
                <p>Upload an image and run inference to see results</p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestModel;*/}import React from 'react';
import { motion } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

const TestModel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Multimodal Crop Classification</span>
            <span className="block text-green-600">using 3D CNN with ConvLSTMs</span>
          </h1>
        </motion.div>

        {/* Coming Soon Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <div className="flex flex-col items-center mb-6">
            <Sparkles className="h-10 w-10 text-green-500 animate-pulse" />
            <h2 className="text-2xl font-bold text-gray-800 mt-4">Test the Model</h2>
          </div>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Soon, you'll be able to upload or select remote sensing samples and test the model performance live. This will include crop prediction, confidence scores, inference speed, and advanced evaluation metrics.
          </p>
          <div className="inline-flex items-center px-6 py-3 bg-white border border-green-200 shadow rounded-full">
            <Loader2 className="animate-spin h-5 w-5 text-green-500 mr-2" />
            <span className="text-green-600 font-medium">Coming Soon</span>
          </div>
        </motion.div>

        {/* Uncomment when model is live */}
        {/**
          <ActualModelComponent />
        */}
      </div>
    </div>
  );
};

export default TestModel;
