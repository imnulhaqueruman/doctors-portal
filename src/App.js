import React, { createContext, useState } from 'react';
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
import AddDoctor from './Components/AddDoctor/AddDoctor/AddDoctor';
import Login from './Components/Home/Login/Login';
import PrivateRoute from './Components/Home/PrivateRoute/PrivateRoute';
export const UserContext = createContext()
function App() {
  const[loggedInUser,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
        <Router>
          <Switch>
            <PrivateRoute path="/dashboard/appointment">
                <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/doctor/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <Route path="/dashboard/allPatients">
                  <AllPatients></AllPatients>
            </Route>
            <Route path="/dashboard/addDoctor">
                <AddDoctor></AddDoctor>
            </Route>
            <Route path="/login">
               <Login></Login>
            </Route>
            <Route path="/home">
                <Home></Home>
            </Route>
            <Route exact path="/">
                <Home></Home>
            </Route>
          </Switch>
        </Router>
    </UserContext.Provider>
  );
}

export default App;
