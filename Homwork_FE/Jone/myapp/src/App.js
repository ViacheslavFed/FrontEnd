import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import HomePage from './Pages/HomePage/HomePage'
import WorksPage from './Pages/WorksPage/WorksPage'
import BlogPage from './Pages/BlogPage/BlogPage'
import ContactPage from './Pages/ContactePage/ContactPage'
import './App.css' 
import WorkInfoPage from './Pages/WorkInfoPage/WorkInfoPage'
import Modale from './Components/Modale/Modale'

function App() {
  const [active, setActive]=useState(false)
  return (
    <div>
      <Modale active={active} setActive={setActive}/>
      <Header active={active} setActive={setActive}/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/works' element={<WorksPage/>}/>
        <Route path='/works/:id' element={<WorkInfoPage/>}/>
        <Route path='/blog' element={<BlogPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App