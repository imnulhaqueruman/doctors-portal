import React, { useEffect, useState } from 'react';
import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://hidden-sea-69527.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="my-5 doctor">
            <div>
                <div className="text-info text-center">
                    <h4>Our Doctors</h4>
        
                </div>
                <div className="d-flex my-3 px-5">
                    <div className="row mx-5 px-5">
                        {
                            doctors.map(doctor => <Doctor key={doctor._id} doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Doctors;