import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout.jsx'
import LandingPage from './pages/LandingPage.jsx'
import AboutusPage from './pages/AboutusPage.jsx'
import DemoVideoPage from './pages/DemoVideoPage.jsx'
import MaterialPage from './pages/MaterialPage.jsx'
import { LinkSubmissionPage } from './pages/LinkSubmissionPage.jsx'

const router=createBrowserRouter(createRoutesFromElements(
  <>
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<LandingPage/>} />
    <Route path="aboutus" element={<AboutusPage/>} />
    <Route path="demo" element={<DemoVideoPage/>} />
    <Route path="material/:type" element={<MaterialPage/>}/>
    <Route path="linksubmission" element={<LinkSubmissionPage/>}/>
    {/* <Route path="notes" element={<NotesPage/>}/>
    <Route path="questionpapers" element={<QuestionPapersPage/>}/>
    <Route path="referencebooks" element={<ReferenceBooksPage/>}/> */}

  </Route>
  </>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
