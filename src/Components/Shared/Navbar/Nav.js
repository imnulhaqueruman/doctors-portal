import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    let link="#";
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                          <Link to="/home" class="nav-link ms-5 active" aria-current="page" >Home</Link>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ms-5" href={link}>About</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ms-5" href={link}>Doctors Services</a>
                        </li>
                        <li className="nav-item">
                          <Link to="/dashboard/appointment" class="nav-link ms-5 active" aria-current="page" >Dashboard</Link>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ms-5 text-white" href={link}>Reviews</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ms-5 text-white" href={link}>Blogs</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link ms-5 text-white" href={link}>Contact Us </a>
                        </li>
                         
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Nav;