import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  FileText,
  Github,
  Image as ImageIcon,
  Link as LinkIcon,
  FileCode,
  BookOpen,
  BarChart,
} from 'lucide-react';

const tasks = [
  {
    title: 'Literature Review & State of the Art',
    status: 'In Progress',
    date: 'March 2024',
    description: `Currently conducting a systematic literature review on crop classification using traditional ML, DL (CNN, RNN, ConvLSTM, 3D CNN), and multimodal fusion methods.`,
  },
  {
    title: 'Problem Definition & Objectives',
    status: 'In Progress',
    date: 'March 2024',
    description: `Currently defining the research problem and setting objectives focused on improving accuracy using multimodal and temporal data.`,
  },
  {
    title: 'Dataset Selection & Preprocessing',
    status: 'In Progress',
    date: 'March 2024',
    description: `Working on selecting and preprocessing Sentinel-2, SAR, and Hyperspectral datasets using normalization, stacking, and alignment techniques.`,
  },
  {
    title: 'Model Design & Architecture',
    status: 'To Be Started',
    date: 'Coming Soon',
    description: `Will be designing a hybrid architecture using 3D CNN for spatiotemporal learning and ConvLSTM for sequence modeling, with early/late fusion blocks.`,
  },
  {
    title: 'Evaluation & Experimentation Plan',
    status: 'To Be Started',
    date: 'Coming Soon',
    description: `Will be defining evaluation metrics (Accuracy, F1-Score, Confusion Matrix) and planning benchmark experiments for model performance.`,
  },
  {
    title: 'Scientific Writing & Reporting',
    status: 'To Be Started',
    date: 'Coming Soon',
    description: `Will begin drafting the research report structure and writing key sections such as Introduction, Methodology, and Results with proper citations.`,
  },
];

const downloadableReports = [
  {
    title: 'Internship Outline',
    url: '/files/internship_outline.pdf', 
    description: 'Overview of objectives, timeline, and scope of the end-of-studies internship.'
  },
  {
    title: 'Dataset Benchmarking Report',
    url: '/files/dataset_benchmarking.pdf',
    description: 'Evaluation and comparison of selected datasets for crop classification.'
  },
  {
    title: 'Draft of the Systematic Literature Review',
    url: '/files/slr_draft.pdf',
    description: 'Preliminary draft of the SLR. Currently being revised with a better methodology for journal submission.'
  }
];


const appendices = [
  {
    title: 'Research Paper',
    icon: BookOpen,
    status: 'Coming Soon',
    description: 'Detailed methodology and findings',
  },
  {
    title: 'GitHub Repository',
    icon: Github,
    status: 'Coming Soon',
    description: 'Source code and implementation details',
  },
  {
    title: 'Technical Documentation',
    icon: FileCode,
    status: 'In Progress',
    description: 'API documentation and setup guide',
  },
  {
    title: 'Results & Visualizations',
    icon: BarChart,
    status: 'In Progress',
    description: 'Detailed performance metrics and visualizations',
  },
];

const Appendices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Project Timeline & Resources</h1>
          <p className="text-xl text-gray-600">Track our progress and access project materials</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tasks Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">My Contributions</h2>
            <div className="space-y-6">
              {tasks.map((task, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 border-l-2 border-green-200 pl-4 pb-6"
                >
                  <div className="flex-shrink-0">
                    {task.status === 'Completed' ? (
                      <CheckCircle className="h-6 w-6 text-green-500" />
                    ) : (
                      <Clock className="h-6 w-6 text-yellow-500" />
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.date}</p>
                    <p className="mt-1 text-gray-600">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>{/* Reports & Appendices in Two Cards (Same Column) */}
          <div className="flex flex-col space-y-8">
            {/* Reports Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <h2 className="text-2xl font-semibold mb-6">Reports</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {downloadableReports.map((item, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                    <a
                      href={item.url}
                      download
                      className="text-sm text-green-700 font-medium hover:underline"
                    >
                      Download ↗
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Appendices Card */}
            <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-sm p-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Appendices</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {appendices.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <Icon className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-gray-900">{item.title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-gray-500">
                      {item.status}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appendices;
