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
  Download,
  Calendar,
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
      'Defined metrics and ran benchmark tests. See "TestModel" page for visualizations.',
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
    color: 'orange',
  },
  {
    title: 'GitHub Repository',
    icon: Github,
    status: 'Coming Soon',
    description: 'Final code will be open-sourced.',
    color: 'blue',
  },
  {
    title: 'Technical Documentation',
    icon: FileCode,
    status: 'In Progress',
    description: 'Includes API setup, modules, and deployment guide.',
    color: 'orange',
  },
  {
    title: 'Results & Visualizations',
    icon: BarChart,
    status: 'Completed',
    description: 'Check "TestModel" for maps, metrics, and gallery.',
    color: 'green',
  },
];

const Appendices = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-48 -translate-x-48" />

        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm">
              <FileText className="w-5 h-5 mr-2" />
              <span className="font-semibold">Documentation & Timeline</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">Project Timeline & Resources</h1>

            <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
              Progress milestones, reports, and appendices from the CropID proof of concept
            </p>
          </motion.div>
        </div>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* TIMELINE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-green-600"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-orange-100 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">My Contributions</h2>
            </div>

            <div className="space-y-6">
              {tasks.map((task, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start space-x-4 border-l-4 border-green-200 pl-6 pb-4 hover:border-green-600 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 mt-1">
                    {task.status === 'Completed' ? (
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <Clock className="w-5 h-5 text-orange-600" />
                      </div>
                    )}
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{task.title}</h3>
                    <p className="text-sm text-orange-600 font-medium mb-2">{task.date}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{task.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* REPORTS + APPENDICES */}
          <div className="flex flex-col space-y-10">

            {/* REPORTS */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-orange-500"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-green-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Reports</h2>
              </div>

              <div className="space-y-4">
                {downloadableReports.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="group bg-gradient-to-br from-gray-50 to-green-50 rounded-xl p-5 hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-400"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-grow">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                            <FileText className="h-5 w-5 text-green-600" />
                          </div>
                          <h3 className="font-bold text-gray-900 text-sm">{item.title}</h3>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed mb-3">{item.description}</p>

                        {/* FIXED <a> TAG */}
                        <a
                          href={item.url}
                          download
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg text-sm font-semibold hover:shadow-md transition-all duration-300"
                        >
                          <Download className="w-4 h-4" />
                          Download
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* APPENDICES */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-blue-600"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Appendices</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {appendices.map(({ icon: Icon, title, description, status, color }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className={`group bg-gradient-to-br ${
                      color === 'green'
                        ? 'from-green-50 to-green-100'
                        : color === 'orange'
                        ? 'from-orange-50 to-orange-100'
                        : 'from-blue-50 to-blue-100'
                    } rounded-xl p-5 hover:shadow-lg transition-all duration-300 border-2 ${
                      color === 'green'
                        ? 'border-green-200 hover:border-green-400'
                        : color === 'orange'
                        ? 'border-orange-200 hover:border-orange-400'
                        : 'border-blue-200 hover:border-blue-400'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="p-2 bg-white rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Icon
                          className={`h-5 w-5 ${
                            color === 'green'
                              ? 'text-green-600'
                              : color === 'orange'
                              ? 'text-orange-600'
                              : 'text-blue-600'
                          }`}
                        />
                      </div>
                      <h3 className="font-bold text-gray-900 text-sm flex-grow">{title}</h3>
                    </div>

                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{description}</p>

                    <span
                      className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
                        status === 'Completed'
                          ? 'bg-green-200 text-green-800'
                          : status === 'In Progress'
                          ? 'bg-orange-200 text-orange-800'
                          : 'bg-blue-200 text-blue-800'
                      }`}
                    >
                      {status}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* INFO BOX */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 bg-gradient-to-r from-green-50 to-orange-50 rounded-2xl shadow-md p-8 border border-green-200"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">About This Documentation</h3>

              <p className="text-gray-700 leading-relaxed">
                This section provides a comprehensive overview of the CropID project development timeline,
                including all major milestones, deliverables, and supporting documentation.
                Reports are available for download to support research transparency and reproducibility.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Appendices;
