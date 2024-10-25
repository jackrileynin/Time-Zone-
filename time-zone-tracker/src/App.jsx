import { useState } from 'react'
import {useEffect} from 'react'
import HomePage from './homePage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// create an api for ip address 

function App() {
  
 return ( 
    <div>
  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/" element={<Ip />} />
        </Routes>
      </BrowserRouter>
    </div>
    
 )
   
}

export default App
