import React from 'react';

const AppointmentshortList = ({appointments}) => {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       appointments.map(app => 
                        <tr>
                    
                        <td>{app.name}</td>
                        <td>{app.phone}</td>
                        <td>{app.email}</td>
                        </tr>
                       )
                   }
                   
                </tbody>
            </table>
        </div>
    );
};

export default AppointmentshortList;