import React from 'react';

const Nav = () => {
    let link="#";
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                          <a class="nav-link ms-5 active" aria-current="page" href={link}>Home</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ms-5" href={link}>About</a>
                        </li>
                        <li class="nav-item">
                           <a class="nav-link ms-5" href={link}>Doctors Services</a>
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