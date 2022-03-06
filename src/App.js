
import { useState } from 'react';
import './index.css';

import styled from 'styled-components';
import Navbar from './Component/Navbar';
import Loginform from './Component/Loginform';
import Appointment from './Component/Appointment';
import Adddoctor from './Component/Adddoctor';
import Sidebar from './Component/Sidebar';
import React, { Component }  from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



function App() {


  return (
    <Router>
    
      <Appointment/>

    </Router>
     );
}



export default App;
