import React from 'react';

const PatientTable = ({patients}) => {
    return (
        <div>
            <h2 className="text-info float-start">AllPatients</h2>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Sr no</th>
                    <th scope="col">Name</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Age</th>
                    <th scope="col">Weight</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Service</th>
                   
                    </tr>
                </thead>
                <tbody>
                    {
                        patients.map((patient ,index)=> 
                            <tr>
                            <th scope="row">{index+1}</th>
                            <td>{patient.name}</td>
                            <td>{patient.select}</td>
                            <td>{patient.age}</td>
                            <td>{patient.weight}</td>
                            <td>{patient.phone}</td>
                            <td>{patient.service}</td>
                    </tr>)
                    }
                    
                </tbody>
             </table>
        </div>
    );
};

export default PatientTable;