import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { supabase } from './config/supabase';

// Component imports
import LoginForm from './components/auth/LoginForm';
import SignupForm from './components/auth/SignupForm';
import LandingPage from './components/layout/LandingPage';
import { MainLayout } from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';
import ProjectList from './components/projects/ProjectList';
import ClientList from './components/clients/ClientList';
import ClientForm from './components/clients/ClientForm';
import About from './components/shared/About';

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setLoading(false);
    };

    checkAuth();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
};

const App = () => {
  const [clients, setClients] = useState<any[]>([]);

  const handleClientSubmit = (client: any) => {
    setClients([...clients, { ...client, id: Date.now() }]);
  };

  const handleClientEdit = (client: any) => {
    setClients(clients.map(c => c.id === client.id ? client : c));
  };

  const handleClientDelete = (clientId: number) => {
    setClients(clients.filter(c => c.id !== clientId));
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />

        {/* Auth Routes - Protected */}
        <Route path="/login" element={<LoginForm />
        } />
        <Route path="/signup" element={ <SignupForm />
         
        } />

        {/* Protected Routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </ProtectedRoute>
        } />

        <Route path="/projects" element={
          <ProtectedRoute>
            <MainLayout>
              <ProjectList />
            </MainLayout>
          </ProtectedRoute>
        } />

        <Route path="/clients" element={
          <ProtectedRoute>
            <MainLayout>
              <ClientList 
                clients={clients} 
                onEdit={handleClientEdit} 
                onDelete={handleClientDelete} 
              />
            </MainLayout>
          </ProtectedRoute>
        } />

        <Route path="/clients/new" element={
          <ProtectedRoute>
            <MainLayout>
              <ClientForm 
                onSubmit={handleClientSubmit}
                onClose={() => {}}
                isOpen={true}
              />
            </MainLayout>
          </ProtectedRoute>
        } />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
