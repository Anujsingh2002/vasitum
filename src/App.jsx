import React from 'react'
import Sidebar from './components/sidebar/Sidebar'
import Dashboard from './components/dashboard/Dashboard'
import Navbar from './components/navbar/Navbar'
import { Routes,Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <div className='grid grid-cols-auto1 h-[100vh]'>
        <Sidebar/>
        <div className='px-[4%]'>
          <Navbar/>
          <Dashboard/>
        </div>
        
      </div>
    </>
  )
}

export default App