import React, { Component } from 'react';
import { useState } from 'react';
import  './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import styled from 'styled-components';
import Addpatients from './Component/Addpatients';
import Loginform from './Component/Loginform';
import Registrationform from './Component/Registrationform'
import Appointment from './Component/Appointment';
import Adddoctor from './Component/Adddoctor';
import Sidebar from './Component/Sidebar';
import AllDoctor from './Component/Alldoctor';
import Doctorschedule from './Component/Doctorschedule'
import Index from './Component/Index';
import Contactus from './Component/common/Contactus';
import Doctorprofile from './Component/Doctorprofile';



function App() {


  return (
    <>
      <Router>
        <Doctorprofile />

         <Routes>
           
           
      
 <Route path="/#about" element={<Index />} />
          <Route path="/#appointment" element={<Index />} />
          <Route path="/#alldoctor" element={<Index />} />

          <Route path="/#register" element={<Index />} />
          <Route path="/doctor/" element={<AllDoctor />} />
          
          <Route path="/doctor/alldoctor" element={<Loginform />} />
          <Route path="/registration" element={<Registrationform />} />
         
        </Routes>
        
        
      </Router>
    
    </>

  );
}



export default App;

