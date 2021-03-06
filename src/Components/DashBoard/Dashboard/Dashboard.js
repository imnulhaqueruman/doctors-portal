import React, { useContext, useEffect, useState } from 'react';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
const containerStyle={
    backgroundColor:"#F4FDFB",
    height:'100%'
}
const Dashboard = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    const [selectedDate,setSelectedDate] = useState(new Date())
    const[appointments,setAppointments] = useState([])
    const handleChange = date =>{
          setSelectedDate(date);
    }
    useEffect(() => {
        
        fetch('https://hidden-sea-69527.herokuapp.com/appointmentsByDate',{
            method:'POST',
            headers:{'content-type':'application/json'},
            body:JSON.stringify({date: selectedDate,email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[selectedDate])
    return (
        <section>
            <div style={containerStyle} className="container-fluid row">
                 <div className="col-md-3 px-0 mx-0">
                     <Sidebar></Sidebar>

                 </div>
                 <div className="col-md-4 py-2">
                 <Calendar
                        onChange={handleChange}
                        value={new Date()}
                 />
                 </div>
                 <div className="col-md-5">
                   <AppointmentsByDate appointments={appointments} date={selectedDate}></AppointmentsByDate>
                 </div>
            </div>
        </section>
    );
};

export default Dashboard;