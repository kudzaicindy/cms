import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, BarChart2, Shield, Sparkles } from 'lucide-react';
import backgroundImage from 'C:/Users/kudza/my-cms/src/assets/client-meeting.jpg';
import logo from 'C:/Users/kudza/my-cms/src/assets/logo-light4.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-orange-500/10' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Clarity CMS Logo" className="h-24 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">
                  About
                </Link>
                <Link to="/signup" className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Get Started
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-300" /> : <Menu className="h-6 w-6 text-gray-300" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/80 backdrop-blur-lg">
            <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-orange-500">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div 
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Streamline Your Client Management
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Transform your business with our powerful client management system. 
              Keep everything organized, collaborate seamlessly, and grow your business.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                to="/login" 
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center"
              >
                Get Started Free <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-sm">
              <div className="bg-orange-500/10 p-3 rounded-lg w-fit mb-4">
                <Users className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">Client Management</h3>
              <p className="text-gray-400">
                Efficiently organize and manage all your client information in one place.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-sm">
              <div className="bg-orange-500/10 p-3 rounded-lg w-fit mb-4">
                <BarChart2 className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">Project Tracking</h3>
              <p className="text-gray-400">
                Monitor project progress and keep everyone aligned with real-time updates.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-900 p-8 rounded-2xl border border-orange-500/20 hover:border-orange-500/40 transition-all shadow-sm">
              <div className="bg-orange-500/10 p-3 rounded-lg w-fit mb-4">
                <Shield className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-orange-500">Secure & Reliable</h3>
              <p className="text-gray-400">
                Industry-leading security measures to protect your sensitive data.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2 text-white">10k+</div>
                <div className="text-white/80">Active Users</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-white">50k+</div>
                <div className="text-white/80">Projects Managed</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2 text-white">99.9%</div>
                <div className="text-white/80">Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-orange-500/10 text-orange-500 px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-5 w-5" />
            <span className="font-medium">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl font-bold mb-8 text-orange-500">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Join thousands of businesses already using our platform to manage their clients and projects efficiently.
          </p>
          <Link 
            to="/signup" 
            className="inline-flex items-center bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors"
          >
            Get Started Now <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;