import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Search, 
  Bell, 
  LogOut,
  Menu,
  Plus
} from 'lucide-react';
import ProjectCreationModal from '../projects/ProjectCreationModal';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const navigate = useNavigate();
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/70 backdrop-blur-lg border-b border-orange-500/10 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-8">
              <Link to="/dashboard" className="text-xl font-bold text-orange-500">
                Clarity CMS
              </Link>
              
              <div className="hidden md:flex items-center space-x-6">
                <Link 
                  to="/dashboard" 
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  Dashboard
                </Link>
                <Link 
                  to="/clients" 
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  Clients
                </Link>
                <Link 
                  to="/projects" 
                  className="text-white hover:text-orange-500 transition-colors"
                >
                  Projects
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-gray-900/50 rounded-lg px-3 py-1.5">
                <Search className="w-4 h-4 text-white/60" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-transparent border-none focus:ring-0 text-sm w-40 text-white placeholder-white/40"
                />
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <button
                  onClick={() => setIsProjectModalOpen(true)}
                  className="bg-gray-900/50 hover:bg-gray-900/70 text-white px-3 py-1.5 rounded-lg transition-colors flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Project</span>
                </button>
                <Link
                  to="/clients/new"
                  className="bg-orange-500 text-white px-3 py-1.5 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-1"
                >
                  <Plus className="w-4 h-4" />
                  <span>New Client</span>
                </Link>
              </div>

              <button className="relative">
                <Bell className="w-5 h-5 text-white hover:text-orange-500 transition-colors" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="w-6 h-6 text-white hover:text-orange-500 transition-colors" />
              </button>

              <button
                onClick={handleLogout}
                className="hidden md:flex items-center space-x-1 text-white hover:text-orange-500 transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-64' : 'max-h-0'} overflow-hidden bg-gray-900/70 backdrop-blur-lg`}>
          <div className="px-4 py-2 space-y-2">
            <Link 
              to="/dashboard" 
              className="block px-3 py-2 text-white hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link 
              to="/clients" 
              className="block px-3 py-2 text-white hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Clients
            </Link>
            <Link 
              to="/projects" 
              className="block px-3 py-2 text-white hover:text-orange-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <button
              onClick={handleLogout}
              className="block w-full text-left px-3 py-2 text-white hover:text-orange-500"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      <main className="pt-20 p-4">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

      <ProjectCreationModal 
        isOpen={isProjectModalOpen} 
        onClose={() => setIsProjectModalOpen(false)} 
      />
    </div>
  );
};