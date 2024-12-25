import React from 'react'
import LandingPage from './Pages/LandingPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path:'/',
      element: <LandingPage/>
    },
  ])
  return(
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App

