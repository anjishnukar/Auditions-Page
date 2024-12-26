import React from 'react'
import LandingPage from './Pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import QuizPage from './Pages/QuizPage'
import Login from './Components/Login'

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
      element: <Login/>
    }
  ])
  return(
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App

