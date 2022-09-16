import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './pages/Home'
import OnlineStore from './components/onlineStore/OnlineStore'


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/store' element={<OnlineStore />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
