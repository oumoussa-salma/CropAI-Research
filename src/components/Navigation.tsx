import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  FileText,
  Home as HomeIcon,
  Info as InfoIcon,
  PlayCircle,
  Menu,
  X,
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

const navItems = [
  { to: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5 mr-1" /> },
  { to: '/about', label: 'About', icon: <InfoIcon className="h-5 w-5 mr-1" /> },
  { to: '/train-model', label: 'Train Model', icon: <PlayCircle className="h-5 w-5 mr-1" /> },
  { to: '/test-model', label: 'Test Model', icon: <PlayCircle className="h-5 w-5 mr-1" /> },
  { to: '/team', label: 'Team', icon: <Users className="h-5 w-5 mr-1" /> },
  { to: '/appendices', label: 'Appendices', icon: <FileText className="h-5 w-5 mr-1" /> },
  { to: '/references', label: 'References', icon: <FileText className="h-5 w-5 mr-1" /> },
];


  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left - Logo */}
          <NavLink to="/" className="flex items-center space-x-2">
  <img src="/icons/crop-icon.svg" alt="CropAI Logo" className="h-7 w-7" />
  <span className="text-xl font-semibold text-gray-900">CropAI Research</span>
</NavLink>


          {/* Right - Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `inline-flex items-center px-1 pt-1 text-sm font-medium ${
                    isActive
                      ? 'text-green-600 border-b-2 border-green-600'
                      : 'text-gray-500 hover:text-gray-700'
                  }`
                }
              >
                {icon}
                {label}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          {navItems.map(({ to, label, icon }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block w-full py-2 px-3 rounded-md text-base font-medium ${
                  isActive
                    ? 'text-green-600 bg-gray-100'
                    : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                }`
              }
            >
              <div className="flex items-center">
                {icon}
                {label}
              </div>
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
