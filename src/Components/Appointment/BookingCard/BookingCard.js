import React, { useState } from 'react';
import AppointmentFrom from '../AppointmentFrom/AppointmentFrom';

const BookingCard = ({booking,date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal(){
      setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="card shadow-sm my-3 mx-3">
                 <div className="card-body text-center mb-5 py-3">
                     <h3 className="card-title">{booking.subject}</h3>
                     <p>{booking.visitingHour}</p>
                     <small>{booking.totalSpace} Space Available</small>
                     <button onClick={openModal} style={{marginLeft:50,marginRight:50,marginTop:10}} className="btn btn-brand">BOOK APPOINTMENT</button>
                 </div>
                  <AppointmentFrom modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentFrom>
            </div>
            
        </div>
    );
};

export default BookingCard;