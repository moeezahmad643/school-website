import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './header/navbar'
import Header from './header/header'
import Footer from './Footer/footer'
import { Feature } from './feature/feature'
import { Events } from './events/events'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './dashboard/dashboard'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={
          <>
            <Navbar />
            <Header />
            <Feature />
            <Events />
            <Footer />
          </>
        } />

        <Route path='/dashboard/*' element={
          <>
            <Dashboard />
          </>
        } />

      </Routes>
    </Router>
  </React.StrictMode>,
)
