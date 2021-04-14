import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Dashboard from './Components/DashBoard/Dashboard/Dashboard';
import AllPatients from './Components/AllPatients/AllPatients/AllPatients';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact  path="/">
            <Home></Home>
        </Route>
        <Route path="/dashboard/appointment">
             <Dashboard></Dashboard>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/allPatients">
               <AllPatients></AllPatients>
        </Route>
      </Switch>
     
    </Router>
  );
}

export default App;
