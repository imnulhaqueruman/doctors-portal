import React, { useEffect, useState } from 'react';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';
import PatientTable from '../PatientTable/PatientTable';

const AllPatients = () => {
    const[patients,setPatients] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/appointments')
        .then(res => res.json())
        .then(data => setPatients(data))
    },[])
    return (
        <div className="container-fluid row">
            <div className="col-md-2 px-0">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-10 px-5">
                   <PatientTable patients={patients}></PatientTable>
            </div>
            
        </div>
    );
};

export default AllPatients;