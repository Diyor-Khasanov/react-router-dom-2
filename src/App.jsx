import React from 'react'
import Header from './layouts/Header'
import Footer from './layouts/Footer'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default App