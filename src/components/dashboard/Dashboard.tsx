import  { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus,   Calendar,ArrowUpRight, ArrowDownRight,
  
} from 'lucide-react';
import { SlPeople } from "react-icons/sl";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import ProjectCreationModal from '../projects/ProjectCreationModal';
import { FaTasks } from "react-icons/fa";

const Dashboard = () => {
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  return (
    <div className="space-y-6 min-h-screen bg-gray-900 text-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400">Welcome back, John!</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* */}
          </div>
          
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10 hover:border-primary/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Total Clients</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white mt-1">124</h3>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-xs">12%</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <SlPeople className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10 hover:border-primary/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Active Projects</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white mt-1">45</h3>
                <div className="flex items-center text-red-500">
                  <ArrowDownRight className="w-4 h-4" />
                  <span className="text-xs">5%</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <AiOutlineFundProjectionScreen className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '45%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10 hover:border-primary/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Tasks Completed</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white mt-1">89%</h3>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-xs">8%</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <FaTasks className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '89%' }}></div>
            </div>
          </div>
        </div>

        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10 hover:border-primary/20 transition-all">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-white/60">Revenue</p>
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-bold text-white mt-1">$52.5k</h3>
                <div className="flex items-center text-green-500">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-xs">15%</span>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 p-3 rounded-lg">
              <Calendar className="w-6 h-6 text-primary" />
            </div>
          </div>
          <div className="mt-4">
            <div className="w-full bg-gray-800 rounded-full h-1.5">
              <div className="bg-primary h-1.5 rounded-full" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex space-x-4">
        <button
          onClick={() => setIsProjectModalOpen(true)}
          className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition-colors"
        >
          <Plus className="w-5 h-5" />
          <span>New Project</span>
        </button>
        <Link
          to="/clients/new"
          className="flex items-center space-x-2 bg-dark-secondary text-white px-6 py-3 rounded-lg border border-primary/20 hover:bg-primary hover:border-transparent transition-all"
        >
          <Plus className="w-5 h-5" />
          <span>New Client</span>
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Clients */}
        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Recent Clients</h3>
            <Link to="/clients" className="text-primary hover:text-secondary">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {/* Example Recent Client */}
            <div className="flex items-center justify-between p-4 bg-dark-primary rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                  JD
                </div>
                <div>
                  <p className="text-white font-medium">John Doe</p>
                  <p className="text-sm text-white/60">Tech Industry</p>
                </div>
              </div>
              <span className="text-xs text-primary">New</span>
            </div>
          </div>
        </div>

        {/* Active Projects */}
        <div className="bg-dark-secondary p-6 rounded-xl border border-muted/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-white">Active Projects</h3>
            <Link to="/projects" className="text-primary hover:text-secondary">
              View All
            </Link>
          </div>
          <div className="space-y-4">
            {/* Example Active Project */}
            <div className="p-4 bg-dark-primary rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-medium text-white">Website Redesign</h4>
                <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                  In Progress
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <p className="text-white/60">Progress</p>
                <p className="text-primary">75%</p>
              </div>
              <div className="mt-2 h-1.5 bg-dark-secondary rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectCreationModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />
    </div>
  );
};

export default Dashboard;