import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Clock,
  FileText,
  Github,
  FileCode,
  BookOpen,
  BarChart,
} from 'lucide-react';


const tasks = [
  {
    title: 'Literature Review & State of the Art',
    status: 'Completed',
    date: 'March–June 2025',
    description:
      'Completed review of crop classification methods (ML, DL, multimodal) to support the proposed approach.',
  },
  {
    title: 'Problem Definition & Objectives',
    status: 'Completed',
    date: 'March 2025',
    description:
      'Defined research goals targeting improved accuracy using multimodal + temporal data.',
  },
  {
    title: 'Dataset Selection & Preprocessing',
    status: 'Completed',
    date: 'April 2025',
    description:
      'Prepared Sentinel-2, SAR, and Hyperspectral data via normalization, stacking, and alignment.',
  },
  {
    title: 'Model Design & Architecture',
    status: 'Completed',
    date: 'April 2025',
    description:
      'Built a hybrid 3D CNN + ConvLSTM architecture for multimodal spatiotemporal fusion.',
  },
  {
    title: 'Evaluation & Experimentation Plan',
    status: 'Completed',
    date: 'June 2025',
    description:
      'Defined metrics and ran benchmark tests. See “TestModel” page for visualizations.',
  },
  {
    title: 'Scientific Writing & Reporting',
    status: 'Completed',
    date: 'June 2025',
    description:
      'Final report complete and submitted. Available in Reports section for download.',
  }
];

const downloadableReports = [
  {
    title: 'PFE Report V02 – Salma Oumoussa',
    url: '/files/PFE_Report_SalmaOumoussa_vf02.pdf',
    description: 'Final engineering thesis with full methodology and results.',
  },
  {
    title: 'Internship Outline',
    url: '/files/internship_outline.pdf',
    description: 'Objectives, timeline, and mission summary.',
  },
  {
    title: 'Dataset Benchmarking Report',
    url: '/files/dataset_benchmarking.pdf',
    description: 'Detailed dataset evaluation for CropID.',
  },
  {
    title: 'Systematic Literature Review Draft',
    url: '/files/slr_draft.pdf',
    description: 'Pre-submission version of SLR draft with references and schema.',
  },
  {
    title: 'PFE Progress Report – April 2025',
    url: '/files/_PFE Progress (21-4-2025).pdf',
    description: 'Work accomplished until April 21st, 2025.',
  },
];

const appendices = [
  {
    title: 'Research Paper',
    icon: BookOpen,
    status: 'In Progress',
    description: 'Drafting stage — targeted for conference submission.',
  },
  {
    title: 'GitHub Repository',
    icon: Github,
    status: 'Coming Soon',
    description: 'Final code will be open-sourced.',
  },
  {
    title: 'Technical Documentation',
    icon: FileCode,
    status: 'In Progress',
    description: 'Includes API setup, modules, and deployment guide.',
  },
  {
    title: 'Results & Visualizations',
    icon: BarChart,
    status: 'Completed',
    description: 'Check “TestModel” for maps, metrics, and gallery.',
  },
];

const Appendices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header with unified design */}
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
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-medium">Documentation & Timeline</span>
            </div>
            <h1 className="text-5xl font-bold mb-4">Project Timeline & Resources</h1>
            <p className="text-lg text-green-100 max-w-2xl mx-auto">
              Progress milestones, reports, and appendices from the CropID proof of concept
            </p>
          </motion.div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-6 border border-green-100"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">My Contributions</h2>
            <div className="space-y-6">
              {tasks.map((task, index) => (
                <div key={index} className="flex items-start space-x-4 border-l-2 border-green-200 pl-4 pb-4">
                  {task.status === 'Completed' ? (
                    <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                  ) : (
                    <Clock className="w-6 h-6 text-yellow-500 mt-1" />
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{task.title}</h3>
                    <p className="text-sm text-gray-500">{task.date}</p>
                    <p className="text-gray-600 mt-1 text-sm">{task.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Reports & Appendices */}
          <div className="flex flex-col space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Reports</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {downloadableReports.map((item, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition">
                    <div className="flex items-center space-x-2 mb-2">
                      <FileText className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-gray-900 text-sm">{item.title}</h3>
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

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-6">Appendices</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appendices.map(({ icon: Icon, title, description, status }, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition"
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <Icon className="h-5 w-5 text-green-600" />
                      <h3 className="font-medium text-gray-900 text-sm">{title}</h3>
                    </div>
                    <p className="text-sm text-gray-600">{description}</p>
                    <span className="mt-2 inline-block text-xs text-gray-500 font-medium">
                      {status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appendices;
