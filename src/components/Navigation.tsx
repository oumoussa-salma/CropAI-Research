import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Users,
  FileText,
  Home as HomeIcon,
  Info as InfoIcon,
  PlayCircle,
  TestTube,
  Menu,
  X,
  Sprout,
} from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: <HomeIcon className="h-5 w-5 mr-1.5" /> },
    { to: '/about', label: 'About', icon: <InfoIcon className="h-5 w-5 mr-1.5" /> },
    { to: '/train-model', label: 'Train Model', icon: <PlayCircle className="h-5 w-5 mr-1.5" /> },
    { to: '/test-model', label: 'Evaluate Models', icon: <TestTube className="h-5 w-5 mr-1.5" /> },
    { to: '/team', label: 'Team', icon: <Users className="h-5 w-5 mr-1.5" /> },
    { to: '/appendices', label: 'Appendices', icon: <FileText className="h-5 w-5 mr-1.5" /> },
    { to: '/references', label: 'References', icon: <FileText className="h-5 w-5 mr-1.5" /> },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left - Logo */}
          <NavLink 
            to="/" 
            className="flex items-center gap-2.5 group transition-all duration-300"
          >
            <div className="relative p-2 bg-gradient-to-r from-green-600 to-orange-500 rounded-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-md">
              <Sprout className="h-6 w-6 text-white" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-lg transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent">
                CropID
              </span>
              <span className="text-xs text-gray-500 -mt-1 hidden sm:block">Precision Agriculture</span>
            </div>
          </NavLink>

          {/* Right - Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-green-600 to-orange-500 shadow-md'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:text-gray-900'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {icon}
                    {label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-t-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-green-600 hover:to-orange-500 focus:outline-none transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 bg-gradient-to-b from-white to-green-50 border-t border-gray-100 shadow-inner">
          <div className="space-y-1 pt-2">
            {navItems.map(({ to, label, icon }) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block w-full py-3 px-4 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-green-600 to-orange-500 shadow-md transform scale-[1.02]'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-orange-50 hover:text-gray-900'
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
        </div>
      )}
    </nav>
  );
};

export default Navigation;