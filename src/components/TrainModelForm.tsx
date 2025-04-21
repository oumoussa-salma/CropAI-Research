import React, { useState, ChangeEvent } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Sparkles, Loader2, Settings2 } from 'lucide-react';

type TrainParams = {
  dataset: string;
  alpha: number;
  epsilon: number;
  learning_rate: number;
  weight_decay: number;
  patience: number;
  device: string;
  epochs: number;
  sequencelength: number;
  batchsize: number;
  dataroot?: string;
  snapshot?: string;
  resume: boolean;
};

type TrainResult = {
  message?: string;
  snapshot?: string;
  visdom?: string;
  error?: string;
};

const defaultParams: TrainParams = {
  dataset: 'bavariancrops',
  alpha: 0.5,
  epsilon: 10,
  learning_rate: 0.001,
  weight_decay: 0,
  patience: 30,
  device: 'cpu',
  epochs: 100,
  sequencelength: 70,
  batchsize: 256,
  dataroot: '',
  snapshot: '',
  resume: false,
};

const numericFields = [
  { name: 'alpha', label: 'Alpha', step: '0.1' },
  { name: 'epsilon', label: 'Epsilon', step: '1' },
  { name: 'learning_rate', label: 'Learning Rate', step: '0.0001' },
  { name: 'weight_decay', label: 'Weight Decay', step: '0.0001' },
  { name: 'patience', label: 'Patience', step: '1' },
  { name: 'epochs', label: 'Epochs', step: '1' },
  { name: 'sequencelength', label: 'Sequence Length', step: '1' },
  { name: 'batchsize', label: 'Batch Size', step: '1' },
];

const TrainModelForm: React.FC = () => {
  const [formData, setFormData] = useState<TrainParams>(defaultParams);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<TrainResult | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value,
    }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await axios.post<TrainResult>('http://localhost:8000/train', formData);
      setResult(res.data);
    } catch (error) {
      console.error('Training failed:', error);
      setResult({ error: 'Failed to start training. Please check the backend or logs.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white shadow-lg rounded-xl p-6"
    >
      <div className="flex items-center space-x-3 mb-6">
        <Settings2 className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Training Configuration</h2>
      </div>

      <div className="space-y-6">
        {/* Dataset */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Dataset Selection</h3>
          <select
            name="dataset"
            value={formData.dataset}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            {['bavariancrops', 'breizhcrops', 'ghana', 'southsudan', 'unitedstates'].map((d) => (
              <option key={d} value={d}>
                {d.charAt(0).toUpperCase() + d.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Numeric Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {numericFields.map(({ name, label, step }) => (
            <div key={name} className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">{label}</label>
              <input
                type="number"
                step={step}
                name={name}
                value={formData[name as keyof TrainParams]}
                onChange={handleChange}
                className="w-full border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white"
                />
            </div>
          ))}
        </div>

        {/* Other Fields */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Device</label>
            <select
              name="device"
              value={formData.device}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              <option value="cpu">CPU</option>
              <option value="cuda">CUDA (GPU)</option>
            </select>
          </div>

          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              name="resume"
              checked={formData.resume}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
            />
            <span className="text-gray-700">Resume Training</span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition"
        >
          {loading ? (
            <>
              <Loader2 className="animate-spin mr-2 h-5 w-5" />
              Initializing...
            </>
          ) : (
            <>
              <Sparkles className="mr-2 h-5 w-5" />
              Start Training
            </>
          )}
        </button>

        {/* Result Alert */}
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg border ${
              result.error
                ? 'bg-red-50 border-red-300 text-red-700'
                : 'bg-green-50 border-green-300 text-green-700'
            }`}
          >
            {result.error ? (
              <p>{result.error}</p>
            ) : (
              <>
                <p className="font-medium mb-1">✅ Training started successfully!</p>
                <p className="text-sm">📦 Snapshot: <code className="bg-green-100 px-2 py-1 rounded">{result.snapshot}</code></p>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TrainModelForm;
