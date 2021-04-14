import React from 'react';
import AppointmentshortList from '../AppointmentshortList/AppointmentshortList';


const AppointmentsByDate = ({appointments,date}) => {
    console.log(appointments)
    return (
        <div>
            <div className="py-3">
                <h2 className="text-info float-start">Appointments</h2>
                 <p className="float-end">{date.toDateString()}</p>
                {
                    appointments.length?
                    <AppointmentshortList appointments={appointments}></AppointmentshortList>
                    : 
                    <div className="p-5">
                        <p className="text-center">No Appointments there </p>
                    </div>

                }
            </div>
        </div>
    );
};

export default AppointmentsByDate;