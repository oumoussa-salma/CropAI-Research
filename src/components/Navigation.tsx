import React from 'react';
import { NavLink } from 'react-router-dom';
import { Users, FileText } from 'lucide-react';


const Navigation = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <NavLink to="/" className="flex items-center">
              <svg
                fill="#16a34a"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
              >
                <title>microscope</title>
                <path d="M28.5 29.25h-4.313c0.914-0.518 1.696-1.142 2.367-1.87l0.006-0.007c1.672-1.925 2.69-4.455 2.69-7.224 0-0.052-0-0.105-0.001-0.157l0 0.008c0.004-0.101 0.006-0.22 0.006-0.339 0-5.601-4.436-10.167-9.987-10.375l-0.019-0.001v-2.286c-0.005-1.247-0.84-2.298-1.981-2.628l-0.019-0.005v-2.367c-0-0.414-0.336-0.75-0.75-0.75h-4c-0.414 0-0.75 0.336-0.75 0.75v0 2.367c-1.161 0.335-1.996 1.386-2 2.632v12.001c0.002 1.518 1.232 2.748 2.75 2.75h4c1.518-0.002 2.748-1.232 2.75-2.75v-8.178c4.735 0.177 8.507 4.058 8.507 8.821 0 0.125-0.003 0.25-0.008 0.374l0.001-0.018c0.001 0.044 0.001 0.097 0.001 0.149 0 2.386-0.875 4.567-2.322 6.24l0.010-0.012c-1.643 1.774-3.985 2.88-6.585 2.88-0.125 0-0.249-0.003-0.372-0.008l0.018 0.001h-15c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h25c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM13.25 2.75h2.5v1.5h-2.5zM17.75 19c-0.001 0.69-0.56 1.249-1.25 1.25h-4c-0.69-0.001-1.249-0.56-1.25-1.25v-12c0.001-0.69 0.56-1.249 1.25-1.25h4c0.69 0.001 1.249 0.56 1.25 1.25v0zM8.5 26.244h12c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-12c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0z" />
              </svg>
              <span className="ml-2 text-xl font-semibold text-gray-900">CropAI Research</span>
            </NavLink>


          </div>
          <div className="flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/test-model"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              Test Model
            </NavLink>
            <NavLink
              to="/team"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <Users className="h-4 w-4 mr-1" />
              Team
            </NavLink>
            <NavLink
              to="/appendices"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              <FileText className="h-4 w-4 mr-1" />
              Appendices
            </NavLink>
            <NavLink
              to="/References"
              className={({ isActive }) =>
                `inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-500 hover:text-gray-700'
                }`
              }
            >
              References
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;