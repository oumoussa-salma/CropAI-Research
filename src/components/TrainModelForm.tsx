import React, { useState, useEffect, ChangeEvent } from 'react';
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
  const [log, setLog] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? parseFloat(value) : value,
    }));
  };

  useEffect(() => {
    const logBox = document.querySelector('.terminal-log-box');
    if (logBox) {
      logBox.scrollTop = logBox.scrollHeight;
    }
  }, [log]);
  
  
  const fetchLogs = async () => {
    try {
      const res = await axios.get<{ log: string }>('http://localhost:8000/logs');
      const logContent = res.data.log;
      setLog(logContent);
  
      const epochMatches = logContent.match(/epoch (\d+):/gi);
      if (epochMatches && epochMatches.length > 0) {
        const lastMatch = epochMatches[epochMatches.length - 1];
        const epochNumber = parseInt(lastMatch.match(/(\d+)/)?.[1] || '0');
        const calculated = Math.min(100, Math.round((epochNumber / formData.epochs) * 100));
        setProgress(calculated);
      }
  
      // ✅ Stop polling if training is clearly done
      if (logContent.includes('Training completed successfully') || logContent.includes(`${formData.epochs}/${formData.epochs}`)) {
        clearInterval(logInterval);
      }
  
    } catch (err) {
      console.error('Could not fetch logs');
    }
  };
  


  let logInterval: NodeJS.Timeout;

  const handleSubmit = async () => {
    setLoading(true);
    setProgress(0);
    setLog('');
    setResult(null);
  
    logInterval = setInterval(fetchLogs, 2000); // ⏱️ Start polling logs
  
    try {
      const res = await axios.post<TrainResult>('http://localhost:8000/train', formData);
      setResult(res.data);
    } catch (error) {
      console.error('Training failed:', error);
      setResult({ error: 'Failed to start training. Please check the backend or logs.' });
    } finally {
      setLoading(false);
      // No clearInterval here — wait until training ends
    }
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white shadow-lg rounded-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Settings2 className="h-6 w-6 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800">Training Configuration</h2>
      </div>

      <div className="space-y-6">
        {/* Dataset Selection */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Dataset</h3>
          <select
            name="dataset"
            value={formData.dataset}
            onChange={handleChange}
            className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
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
                className="w-full border border-gray-400 rounded-md px-3 py-2 bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          ))}
        </div>

        {/* Device + Resume */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Device</label>
            <select
              name="device"
              value={formData.device}
              onChange={handleChange}
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-2"
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
              className="h-4 w-4 text-green-600"
            />
            <span className="text-gray-700">Resume Training</span>
          </label>
        </div>

        {/* Start Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
         {loading ? (
  <>
    <Loader2 className="animate-spin mr-2 h-5 w-5" />
    Currently Training...
  </>
) : (
  <>
    <Sparkles className="mr-2 h-5 w-5" />
    Start Training
  </>
)}

        </button>

        {/* Progress Bar */}
        {progress > 0 && (
          <div className="mt-6 w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
            <p className="text-sm text-center mt-1 text-gray-600">{progress}% complete</p>
          </div>
        )}

        {/* Log Output */}
        {log && (
          <div className="mt-6 bg-black text-green-300 p-4 rounded-lg overflow-auto h-64 text-sm font-mono whitespace-pre-wrap">
            {log}
          </div>
        )}


        {/* Result */}
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
                <p className="text-sm">
                  📦 Snapshot:{' '}
                  <code className="bg-green-100 px-2 py-1 rounded">{result.snapshot}</code>
                </p>
              </>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default TrainModelForm;
