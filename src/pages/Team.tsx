import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet the Team</h1>
          <p className="text-xl text-gray-600">The minds behind the research</p>
        </motion.div>

        {/* Team Member */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-8 mb-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="mb-6">
                <div className="inline-block rounded-full overflow-hidden border-4 border-green-100 w-48 h-48">
                  <img
                    src="https://media.licdn.com/dms/image/v2/D4D03AQGqLNBWUeucMQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1684249313328?e=1748476800&v=beta&t=SxL5qrwVxRfnLizgVu0D3OuXQ33EpfXToQOSCOsEH20"
                    alt="Salma Oumoussa"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Salma Oumoussa</h2>
              <p className="text-green-600 font-medium mb-4">Research Assistant</p>
              <p className="text-gray-600 italic mb-4">"Building tech that grows with nature 🌱 + 🤖"</p>
              <div className="flex justify-center md:justify-start space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Github className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div>
              <div className="prose max-w-none">
                <p className="text-gray-600 mb-4">
                  Software Engineering Student @ENSAB, currently completing my end-of-studies internship
                  at UM6P where I implemented this crop classification project.
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>🎓 Software Engineering Student @ENSAB</p>
                  <p>💼 @UM6P College of Computing | @SDAS Group</p>
                  <p>📚 Teaching Assistant</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Supervisors */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supervisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Diego Peluffo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQH47HyiBMH08w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718251249128?e=1748476800&v=beta&t=4GCkHtRlv2bCxlkEpIrdHDtfVqe3I9dln3Baj39XECU"
                alt="Diego Peluffo"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Diego Peluffo</h3>
              <p className="text-gray-600 mb-4">Head and Founder at SDAS Research Group | Assistant Professor At UM6P CC </p>
              <div className="flex justify-center space-x-4 text-green-600">
                <a href="https://www.linkedin.com/in/diego-peluffo/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-green-700" />
                </a>
                <a href="mailto:diego.peluffo@sdas-group.com">
                  <Mail className="h-5 w-5 hover:text-green-700" />
                </a>
                <a href="https://www.diegopeluffo.com/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 hover:text-green-700" />
                </a>
              </div>
            </motion.div>

            {/* Khalid Bouihat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6 text-center"
            >
              <img
                src="https://media.licdn.com/dms/image/v2/C4D03AQFBGo6WMk3ihA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1598385825108?e=1748476800&v=beta&t=VffKOW650w64H7Rv0liadc0zhcXOvEPM_wKV_Ez77lQ"
                alt="Khalid Bouihat"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">Khalid Bouihat</h3>
              <p className="text-gray-600 mb-4">Professor (Mathematics Department) | ENSAB | University Hassan 1st (UH1)</p>
              <div className="flex justify-center space-x-4 text-green-600">
                <a href="https://www.linkedin.com/in/khalid-bouihat-ab3b57a0/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-green-700" />
                </a>
                <a href="mailto:khalid.bouihat@uhp.ac.ma">
                  <Mail className="h-5 w-5 hover:text-green-700" />
                </a>
                <a href="https://www.researchgate.net/profile/Khalid-Bouihat" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5 hover:text-green-700" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>



        {/* Institutions */}
        <div className="mb-12">

          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* UM6P */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://cc.um6p.ma/assets/images/logo-cc-v2.png"
                  alt="UM6P Logo"
                  className="h-22 mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  University Mohammed VI Polytechnic | College of computing
                </h3>
                <p className="text-gray-600 mb-4">
                  A Moroccan university driving innovation through applied research in agriculture,
                  water, AI, and sustainability.
                </p>
                <a
                  href="https://cc.um6p.ma/mission"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn More <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>

     {/* ENSA Berrechid */}
     <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www-ensab.uh1.ac.ma/Site/assets/images/logo-ensa-berrechid.png"
                  alt="ENSAB Logo"
                  className="h-17 mb-6"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">ENSA Berrechid</h3>
                <p className="text-gray-600 mb-4">
                  The National School of Applied Sciences of Berrechid, focused on engineering excellence and innovation.
                </p>
                <a
                  href="https://www-ensab.uh1.ac.ma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn More <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>


            {/* SDAS Group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src="https://www.sdas-group.com/static/libs/img/logo_2.png"
                  alt="SDAS Logo"
                  className="h-28 mb-2"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">SDAS Group</h3>
                <p className="text-gray-600 mb-4">
                  A research-driven company offering smart agriculture solutions powered by data science,
                  IoT, and AI.
                </p>
                <a
                  href="https://www.sdas-group.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn More <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Team;