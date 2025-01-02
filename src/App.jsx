import React from 'react'
import LandingPage from './Pages/LandingPage'
import AdminPage from './Pages/AdminPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuizPage from './Pages/QuizPage'
import Login from './components/Login'

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

