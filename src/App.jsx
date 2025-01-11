import React from 'react';
import LandingPage from './Pages/LandingPage';
import AdminPage from './Pages/AdminPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizPage from './Pages/QuizPage';
import Login from './Pages/Login';
import AdminDetails from './Pages/AdminDetails';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { ToastContainer } from 'react-toastify';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: '/quiz',
      element: (
        <ProtectedRoute>
          <QuizPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/admin',
      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminPage />
        </ProtectedRoute>
      )
    },
    {
      path: '/admin/:id',
      element: (
        <ProtectedRoute requiredRole="admin">
          <AdminDetails />
        </ProtectedRoute>
      )
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;

const ProtectedRoute = ({ children, requiredRole }) => {
  const token = localStorage.getItem('accessToken');

  if (!token) {
    return <Navigate to="/login" />;
  }

  const decodedToken = jwtDecode(token);
  const userRole = decodedToken.is_club_member ? 'admin' : 'user';
  // const userRole = 'admin';

  console.log(decodedToken, userRole);

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
};
