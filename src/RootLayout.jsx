import React from 'react'
import { Outlet } from 'react-router-dom'
import Navibar from './components/Navibar'
import Footer from './components/Footer'

function RootLayout() {
  return (
    <div>
        <Navibar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout