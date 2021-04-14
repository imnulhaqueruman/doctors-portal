import React from 'react';
import doctor from '../../../images/doctor.png';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';
const Doctors = () => {
    const doctors =[
        {
            name:'Dr.Caudi',
            img:doctor,
            phone:'01788836781'
        },
        {
            name:'Dr.Caudi',
            img:doctor,
            phone:'01788836781'
        },
        {
            name:'Dr.Caudi',
            img:doctor,
            phone:'01788836781'
        }
    ]
    return (
        <section className="my-5 doctor">
            <div>
                <div className="text-info text-center">
                    <h4>Our Doctors</h4>
        
                </div>
                <div className="d-flex my-3 px-5">
                    <div className="row mx-5 px-5">
                        {
                            doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                        }
                    </div>
                </div>
                </div>
        </section>
    );
};

export default Doctors;