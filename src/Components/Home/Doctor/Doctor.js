import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPhone } from '@fortawesome/free-solid-svg-icons'
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 ">
            <div style={{width:'20rem'}} className="card my-5 py-5 ">
                <img src={doctor.img} className="card-img-top img-fluid" style={{height:"250px"}} alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title ">{doctor.name}</h5>
                    <p className="text-info"><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>{doctor.phone}</p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;