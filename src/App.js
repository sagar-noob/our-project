
import { useState } from 'react';
import './index.css';
import styled from 'styled-components';
import Addpatients from './Component/Addpatients'
import Loginform from './Component/Loginform';
import Registrationform from './Component/Registrationform'
import Appointment from './Component/Appointment';
import Adddoctor from './Component/Adddoctor';
import Sidebar from './Component/Sidebar';
import Alldoctor from './Component/Alldoctor';

import React, { Component }  from 'react';


import Doctorschedule from './Component/Doctorschedule'



import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AllDoctor from './Component/Alldoctor';



function App() {


  return (
    <Router>
    
    <AllDoctor/>

    
    

    </Router>
     );
}



export default App;
