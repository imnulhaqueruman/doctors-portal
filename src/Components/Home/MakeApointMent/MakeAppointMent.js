import React from 'react';
import './MakeApointMent.css';
import doctor from '../../../images/doctor.png';
const MakeAppointMent = () => {
    return (
       <section className="make-appointment">
           <div className="container">
                <div className="row ml-auto">
                 <div className="col-md-5 d-none d-md-block">
                       <img src={doctor} alt="" />
                 </div>
                 <div className="col-md-7 text-white py-5">
                     <h4 className="text-info text-uppercase ">Appointment</h4>
                     <h1 className="my-4 ">Make an AppointMent <br/> Today</h1>
                     <p>Today from At 5 pm He visit the chamber and check 20 patient</p>
                     <button className="btn btn-info">Learn More</button>
                 </div>

                </div>
           </div>
       </section>
    );
};

export default MakeAppointMent;