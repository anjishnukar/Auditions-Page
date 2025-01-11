import React from 'react'
import LandingPage from './Pages/LandingPage'
import AdminPage from './Pages/AdminPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuizPage from './Pages/QuizPage'
import Login from './Pages/Login'
import Signup from './Pages/Signup'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <LandingPage/>
    },
    {
      path: '/quiz',
      element: <QuizPage/>
    },
    {
      path: '/login',
      element: <Login/>,
    },
    {
      path: '/signup',
      element: <Signup/>,
    },
    {
      path:'/admin',
      element: <AdminPage/>
    }
  ])
  return(
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App

