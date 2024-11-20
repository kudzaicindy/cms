import React from 'react';
import { Users, BarChart2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            About Clarity Smarttech
          </h1>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Clarity Smarttech revolutionizes client relationship management with our cutting-edge CMS platform. We empower businesses to build stronger client relationships and deliver exceptional results through streamlined project management and collaboration tools.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Client Management Card */}
          <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all group hover:transform hover:scale-[1.02] duration-300">
            <div className="bg-orange-500/10 p-3 rounded-lg w-fit mb-6">
              <Users className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Client Management</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Comprehensive client management tools that help you maintain detailed records and strengthen relationships.
            </p>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white/90">Key Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Profile Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Contact Details</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Smart Tagging</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Note Taking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Project Tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Priority Management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Project Management Card */}
          <div className="bg-black/40 backdrop-blur-lg p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all group hover:transform hover:scale-[1.02] duration-300">
            <div className="bg-orange-500/10 p-3 rounded-lg w-fit mb-6">
              <BarChart2 className="h-8 w-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-6 text-orange-500">Project Management</h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Powerful project management tools designed to keep your team organized and projects on track.
            </p>
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-white/90">Core Features:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/70">
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Project Creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Team Assignment</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Progress Tracking</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Resource Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Timeline Planning</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
                  <span>Collaboration Tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
