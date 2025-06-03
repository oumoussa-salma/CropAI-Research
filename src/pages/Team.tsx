import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 to-emerald-500 py-16">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2 mb-6 backdrop-blur-sm text-white">
              <span className="font-medium">Behind the Project</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">
              Meet the <span className="text-green-200">Team</span>
            </h1>
            <p className="text-xl text-green-100 max-w-2xl mx-auto">
              Researchers, supervisors, and institutions behind the CropID prototype
            </p>
          </motion.div>
        </div>
      </div>

      {/* Researcher Card */}
      <div className="max-w-7xl mx-auto px-4 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-12"
        >
          <div
            className="absolute inset-0 bg-[url('/files/imgs/background.png')] bg-cover bg-center opacity-20 z-0"
          />
          <div className="relative z-10 p-8 md:p-12 bg-white/70 backdrop-blur-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-green-100 w-48 h-48 shadow-md">
                    <img
                      src="/files/imgs/salmaoumoussa.png"
                      alt="Salma Oumoussa"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Salma Oumoussa</h2>
                <p className="text-green-600 font-medium mb-2">Research Assistant</p>
                <p className="text-gray-600 italic mb-4">"Building tech that grows with nature 🌱 + 🤖"</p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="text-gray-500 hover:text-green-600"><Github className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-500 hover:text-green-600"><Linkedin className="h-6 w-6" /></a>
                  <a href="#" className="text-gray-500 hover:text-green-600"><Mail className="h-6 w-6" /></a>
                </div>
              </div>
              <div className="prose max-w-none text-gray-700">
                <p className="mb-4">
                  I'm a software engineering student at ENSAB, currently completing my
                  end-of-studies internship at UM6P, where I designed and implemented this
                  intelligent crop classification system powered by deep learning.
                </p>
                <ul className="space-y-1 text-sm list-disc list-inside">
                  <li>🎓 Software Engineering Student @ ENSAB</li>
                  <li>💼 Intern @ UM6P College of Computing — SDAS Group</li>
                  <li>📚 Passionate about AI, sustainability, and practical innovation</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Supervisors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Supervisors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              {
                name: "Diego Peluffo",
                role: "Head of SDAS Group | Assistant Professor @ UM6P",
                img: "/files/imgs/diego.png",
                linkedin: "https://www.linkedin.com/in/diego-peluffo/",
                mail: "mailto:diego.peluffo@sdas-group.com",
                site: "https://www.diegopeluffo.com/"
              },
              {
                name: "Khalid Bouihat",
                role: "Professor @ ENSAB | University Hassan 1st",
                img: "/files/imgs/khalidbouihat.png",
                linkedin: "https://www.linkedin.com/in/khalid-bouihat-ab3b57a0/",
                mail: "mailto:khalid.bouihat@uhp.ac.ma",
                site: "https://www.researchgate.net/profile/Khalid-Bouihat"
              }
            ].map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-gray-600 mb-4">{person.role}</p>
                <div className="flex justify-center space-x-4 text-green-600">
                  <a href={person.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 hover:text-green-700" /></a>
                  <a href={person.mail}><Mail className="h-5 w-5 hover:text-green-700" /></a>
                  <a href={person.site} target="_blank" rel="noopener noreferrer"><ExternalLink className="h-5 w-5 hover:text-green-700" /></a>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Institutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "University Mohammed VI Polytechnic | College of Computing",
                logo: "https://cc.um6p.ma/assets/images/logo-cc-v2.png",
                desc: "A Moroccan university driving innovation through applied research in agriculture, water, AI, and sustainability.",
                link: "https://cc.um6p.ma/mission"
              },
              {
                name: "ENSA Berrechid",
                logo: "https://www-ensab.uh1.ac.ma/Site/assets/images/logo-ensa-berrechid.png",
                desc: "The National School of Applied Sciences of Berrechid, focused on engineering excellence and innovation.",
                link: "https://www-ensab.uh1.ac.ma/"
              },
              {
                name: "SDAS Group",
                logo: "https://www.sdas-group.com/static/libs/img/logo_2.png",
                desc: "A research-driven company offering smart agriculture solutions powered by data science, IoT, and AI.",
                link: "https://www.sdas-group.com"
              }
            ].map((inst, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center">
                <img src={inst.logo} alt={inst.name} className="h-20 mb-6 mx-auto object-contain" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{inst.name}</h3>
                <p className="text-gray-600 mb-4">{inst.desc}</p>
                <a
                  href={inst.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-green-600 hover:text-green-700"
                >
                  Learn More <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
