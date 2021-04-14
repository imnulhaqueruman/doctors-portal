import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
const Sidebar = () => {
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5 ml-0 " style={{height:'100vh'}}>
            <ul className="list-unStyled">
                <li>
                    <Link to="/doctor/dashboard">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/appointment">
                    <FontAwesomeIcon icon={faCalendar} /> <span>Appointment</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/allPatients">
                    <FontAwesomeIcon icon={faUsers} /> <span>Patients</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/prescription">
                    <FontAwesomeIcon icon={faFileAlt} /> <span>Prescriptions</span>
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/settings">
                    <FontAwesomeIcon icon={faCog} /> <span>Setting</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;