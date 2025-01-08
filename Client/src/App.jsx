import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Landing from './homepage/Landing'
import Login from './login/signup/Login'
import TumorDetection from './Scanpage'
import Signup from './login/signup/Signup';
import ContactUs from './Contactus';
import AboutUs from './About';


function App() {
 

  return (
   <Router>
    <Routes>
      <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<AboutUs/>} /> 
      <Route path="/contact_us" element={<ContactUs/>} /> 
      <Route path="/product" element={<TumorDetection/>} />
      <Route  path="/login" element={<Login/>} />
      <Route  path="/signup" element={<Signup/>} />
    </Routes>
   
  </Router>
  )
}

export default App;





