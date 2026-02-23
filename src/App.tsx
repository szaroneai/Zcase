import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CustomBuild from './pages/CustomBuild';
import ProductDetail from './pages/ProductDetail';
import AboutUs from './pages/AboutUs';
import SplashScreen from './components/SplashScreen';
import ChatWidget from './components/ChatWidget';

// Admin Imports
import AdminLayout from './layouts/AdminLayout';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import AdminContent from './pages/admin/Content';
import AdminSettings from './pages/admin/Settings';
import AdminUsers from './pages/admin/Users';
import AdminProducts from './pages/admin/Products';
import AdminOrders from './pages/admin/Orders';
import AdminComments from './pages/admin/Comments';
import AdminAnalytics from './pages/admin/Analytics';
import AdminSupport from './pages/admin/Support';
import AdminIntegrations from './pages/admin/Integrations';

import Portal from './pages/Portal';
import Presentation from './pages/Presentation';

// Wrapper for public content to handle splash screen and layout
const PublicLayout = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [location]);

  const handleSplashComplete = () => {
    setShowSplash(false);
    sessionStorage.setItem('hasVisitedZcase', 'true');
  };

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <div className={`min-h-screen bg-zcase-base flex flex-col font-sans text-zcase-text transition-opacity duration-1000 ${showSplash ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/custom-build" element={<CustomBuild />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Catch-all for public routes */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Portal (Entry Point) */}
        <Route path="/" element={<Portal />} />
        
        {/* Presentation Page */}
        <Route path="/presentation" element={<Presentation />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="orders" element={<AdminOrders />} />
          <Route path="comments" element={<AdminComments />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="support" element={<AdminSupport />} />
          <Route path="integrations" element={<AdminIntegrations />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        {/* Public Routes - Everything else goes here */}
        <Route path="/shop/*" element={<PublicLayout />} />
        <Route path="/*" element={<PublicLayout />} />
      </Routes>
    </Router>
  );
}

export default App;
