
import { useState } from 'react';
import './index.css';
import styled from 'styled-components';
import Addpatients from './Component/Addpatients'
import Loginform from './Component/Loginform';
import Registrationform from './Component/Registrationform'

import Appointment from './Component/Appointment';
import Adddoctor from './Component/Adddoctor';
import Sidebar from './Component/Sidebar';
import React, { Component }  from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {


  return (
    <Router>
    
      <Registrationform/>

    </Router>
     );
}



export default App;
