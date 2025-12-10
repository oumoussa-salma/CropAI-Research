import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, MapPin, ExternalLink, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">CropID</span>
            </div>
            <p className="text-sm leading-relaxed max-w-md">
              Advanced precision agriculture platform leveraging deep learning and 
              multi-modal data integration for sustainable crop management and 
              tailored fertilizer recommendations.
            </p>
            <div className="mt-4 flex gap-3">
              <a 
                href="https://github.com/your-org/cropid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/cropid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 bg-gray-800 rounded-lg hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-green-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-400 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/test-model" className="hover:text-green-400 transition-colors">
                  Evaluate Models
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-green-400 transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/references" className="hover:text-green-400 transition-colors">
                  References
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span>
                  Mohammed VI Polytechnic University
                  <br />
                  Ben Guerir, Morocco
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-green-500" />
                <a 
                  href="mailto:peluffo.diego@um6p.ma" 
                  className="hover:text-green-400 transition-colors"
                >
                  peluffo.diego@um6p.ma
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 text-green-500" />
                <span>OCP Nutricrops Initiative</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} CropID Platform. All rights reserved. 
            <span className="mx-2">|</span>
            Developed at UM6P College of Computing
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
