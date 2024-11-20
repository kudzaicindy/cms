import React, { useState } from 'react';
import { Mail, EyeOff, Eye, ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from 'C:/Users/kudza/my-cms/src/assets/client-meeting.jpg';
import { supabase } from '../../config/supabase';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) {
        throw signInError;
      }

      if (data?.user) {
        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('session', JSON.stringify(data.session));
        navigate('/dashboard');
      }
    } catch (err: any) {
      console.error('Login error:', err);
      setError(err.message || 'Failed to sign in');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="max-w-md w-full space-y-8 bg-black/80 backdrop-blur-lg p-8 rounded-2xl border border-orange-500/20 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="mt-2 text-white/60">Sign in to your account</p>
        </div>

        {error && (
          <div className="bg-red-500/10 border border-red-500/50 text-red-500 p-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-white/80">Email</label>
            <div className="mt-1 relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-white/40"
                placeholder="Enter your email"
                required
                disabled={loading}
              />
              <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500/60 w-5 h-5" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80">Password</label>
            <div className="mt-1 relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-orange-500/20 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-white/40"
                placeholder="Enter your password"
                required
                disabled={loading}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-orange-500/60"
                disabled={loading}
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            <span>{loading ? 'Signing in...' : 'Sign In'}</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-sm text-white/60">
            Don't have an account? <Link to="/signup" className="text-orange-500 hover:text-orange-400">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
