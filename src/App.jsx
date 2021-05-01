import React from 'react'
import './App.css'
import Header from './Components/Header'
import Nav from './Components/Nav'
import { BrowserRouter } from 'react-router-dom'
import Router from './Routes/Router'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header/>

        <Nav/>

        <Router/>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
