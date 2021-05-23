import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faUserMd, faHome } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
import { UserContext } from '../../../App';
const Sidebar = () => {
    const[loggedInUser,setLoggedInUser] = useContext(UserContext)
    const[isDoctor, setIsDoctor] = useState(false)
    useEffect(() => {
        fetch('https://hidden-sea-69527.herokuapp.com/isDoctor',{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify({email:loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setIsDoctor(data))
    },[])
    return (
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-5 ml-0 " style={{height:'100vh'}}>
            <ul className="list-unStyled">
                <li>
                    <Link to="/home">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/doctor/dashboard">
                    <FontAwesomeIcon icon={faGripHorizontal} /> <span>Dashboard</span> 
                    </Link>
                </li>
                {isDoctor && <div>
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
                        <Link to="/dashboard/addDoctor">
                        <FontAwesomeIcon icon={faUserMd} /> <span>AddDoctor</span>
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
                </div>}
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default Sidebar;