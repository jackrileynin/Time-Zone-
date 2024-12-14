import { useState } from 'react'
import {useEffect} from 'react'
import HomePage from './homePage'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ip from './ip'
// create an api for ip address 

function App() {
  
 return ( 
    <div>
  
      
        <Routes>
          <Route path="/" element={<HomePage  />} />
          <Route path="/ip/:ip" element={<Ip />} />
        </Routes>
    </div>
    
 )
   
}

export default App
