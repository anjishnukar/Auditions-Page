import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer } from 'react-toastify';

// Page imports
import LandingPage from './Pages/LandingPage';
import AdminPage from './Pages/AdminPage';
import QuizPage from './Pages/QuizPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ErrorPage from './Pages/ErrorPage';
import AdminDetails from './Pages/AdminDetails';
import ComingSoon from './Pages/ComingSoon';

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('accessToken');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const userRole = decodedToken.is_club_member ? 'admin' : 'user';
    
    if (requiredRole && userRole !== requiredRole) {
      return <Navigate to="/" replace />;
    }
    
    return children;
  } catch (error) {
    console.error('Token decode error:', error);
    localStorage.removeItem('accessToken');
    return <Navigate to="/login" replace />;
  }
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/quiz" 
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/results" element={<ComingSoon />} />
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/:id" 
          element={
            <ProtectedRoute requiredRole="admin">
              <AdminDetails />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;