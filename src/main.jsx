import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/LandingPage.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<LandingPage/>} />

  </Route>
  </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
