import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Users, Building2, Award } from 'lucide-react';

const Team = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-orange-500 py-20">
        <div className="absolute inset-0 bg-black opacity-5" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full translate-y-48 -translate-x-48" />

        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-5 py-2.5 mb-6 backdrop-blur-sm text-white">
              <Users className="w-5 h-5 mr-2" />
              <span className="font-semibold">Behind the Project</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Meet the <span className="text-orange-200">Team</span>
            </h1>
            <p className="text-xl text-green-50 max-w-2xl mx-auto leading-relaxed">
              Researchers, supervisors, and institutions behind the CropID project
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lead Researcher */}
      <div className="max-w-7xl mx-auto px-4 py-16 -mt-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border-t-4 border-green-600 mb-16"
        >
          <div
            className="absolute inset-0 bg-[url('/files/imgs/background.png')] bg-cover bg-center opacity-10 z-0"
          />
          <div className="relative z-10 p-8 md:p-12 bg-white backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-5 py-2 mb-4">
                <Award className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-800 font-semibold">Lead Researcher</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

              {/* Image + Info */}
              <div className="text-center md:text-left">
                <div className="mb-6">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-gradient-to-r from-green-600 to-orange-500 w-48 h-48 shadow-xl relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-orange-500 p-1 rounded-full">
                      <div className="w-full h-full rounded-full overflow-hidden bg-white">
                        <img
                          src="/files/imgs/salmaoumoussa.png"
                          alt="Salma Oumoussa"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-2">Salma Oumoussa</h2>
                <p className="text-lg font-semibold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-2">
                  PhD Applicant
                </p>
                <p className="text-gray-600 italic mb-6">
                  "Building tech that grows with nature 🌱 + 🤖"
                </p>

                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#" className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="#" className="p-3 bg-gray-100 rounded-lg text-gray-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300">
                    <Mail className="h-6 w-6" />
                  </a>
                </div>
              </div>

              {/* Description */}
              <div className="prose max-w-none text-gray-700">
                <p className="text-lg mb-6 leading-relaxed">
                  I'm a Pre-doctoral student at UM6P College of Computing, working on the CropID research project,
                  where I designed and implemented the intelligent crop classification system powered by deep learning.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">🎓</span>
                    <span className="text-gray-700">Pre-doctoral Student @ UM6P</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                    <span className="text-2xl">💼</span>
                    <span className="text-gray-700">Research Analyst & Assistant @ SDAS Group</span>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                    <span className="text-2xl">📚</span>
                    <span className="text-gray-700">Passionate about AI, sustainability, and innovation</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
{/* Principal Investigator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-5 py-2 mb-4">
              <Users className="w-5 h-5 text-blue-600 mr-2" />
              <span className="text-gray-800 font-semibold">Principal Investigator</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Project Leadership</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {[
              {
                name: "Diego Hernán Peluffo-Ordóñez",
                role: "Head of SDAS Group | Assistant Professor @ UM6P",
                img: "/files/imgs/diego.png",
                linkedin: "https://www.linkedin.com/in/diego-peluffo/",
                mail: "mailto:peluffo.diego@um6p.ma",
                site: "https://www.diegopeluffo.com/"
              }
            ].map((person, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-white rounded-2xl shadow-xl border-t-4 border-blue-600 p-8 text-center hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="mb-6">
                  <div className="inline-block rounded-full overflow-hidden border-4 border-blue-200 w-32 h-32 shadow-lg">
                    <img src={person.img} alt={person.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-600 mb-6">{person.role}</p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={person.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-lg text-blue-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>

                  <a
                    href={person.mail}
                    className="p-3 bg-blue-100 rounded-lg text-blue-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300"
                  >
                    <Mail className="h-6 w-6" />
                  </a>

                  <a
                    href={person.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-blue-100 rounded-lg text-blue-600 hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Team Members */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.25 }}
  className="mb-16"
>
  <div className="text-center mb-10">
    <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-5 py-2 mb-4">
      <Users className="w-5 h-5 text-green-600 mr-2" />
      <span className="text-gray-800 font-semibold">Contributors</span>
    </div>
    <h2 className="text-3xl font-bold text-gray-900">Team Members</h2>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
    {[
      { name: "Hicham Moad Safhi", role: "AI Engineer" },
      { name: "Khalid Mezouari", role: "Digital Solution Manager" },
      { name: "Mohammed Doukali", role: "Software Developer" }
    ].map((person, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + index * 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-green-600 hover:shadow-xl transition-all duration-300"
      >
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-600 to-orange-500 flex items-center justify-center text-white text-2xl font-bold shadow-md">
          {person.name.charAt(0)}
        </div>

        <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
        <p className="text-gray-600 mt-1">{person.role}</p>
      </motion.div>
    ))}
  </div>
</motion.div>


        
        {/* Partner Institutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-orange-100 rounded-full px-5 py-2 mb-4">
              <Building2 className="w-5 h-5 text-green-600 mr-2" />
              <span className="text-gray-800 font-semibold">Partner Institutions</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Collaborative institutions driving innovation in precision agriculture and sustainable farming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "UM6P College of Computing",
                logo: "https://cc.um6p.ma/assets/images/logo-cc-v2.png",
                desc: "A Moroccan university driving innovation through applied research in AI, agriculture, and sustainability.",
                link: "https://cc.um6p.ma/mission",
                borderColor: "border-green-600"
                          },
                          {
              name: "OCP Nutricrops",
              logo: "/icons/nutricrops.jpg",
              desc: "OCP Nutricrops develops tailored crop nutrition programs powered by precision agriculture and scientific research.",
              link: "https://www.ocpnutricrops.com/",
              borderColor: "border-orange-600",
              logoSize: "w-40 h-40"
            }
            ,
              {
                name: "SDAS Group",
                logo: "https://www.sdas-group.com/static/libs/img/logo_2.png",
                desc: "Smart agriculture solutions powered by data science, remote sensing, IoT, and AI.",
                link: "https://www.sdas-group.com",
                borderColor: "border-blue-600"
              }
            ].map((inst, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg border-t-4 ${inst.borderColor} p-8 text-center hover:shadow-xl transition-all duration-300 group`}
              >
                <div className="mb-6 h-24 flex items-center justify-center">
                  <img
                    src={inst.logo}
                    alt={inst.name}
                   className="max-h-48 max-w-full object-contain group-hover:scale-110 transition-transform duration-300"

                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{inst.name}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{inst.desc}</p>

                <a
                  href={inst.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Learn More
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
