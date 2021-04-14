import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Nav from '../../Shared/Navbar/Nav';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookingAppointment from '../BookingAppointment/BookingAppointment';

const Appointment = () => {
    const [selectedDate,setSelectedDate] = useState(new Date())
    const handleChange = date =>{
          setSelectedDate(date);
    }
    return (
        <div>
            <Nav></Nav>
            <AppointmentHeader handleChange={handleChange}></AppointmentHeader>
            <BookingAppointment date={selectedDate}></BookingAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointment;