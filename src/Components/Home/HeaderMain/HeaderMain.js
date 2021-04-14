import React from 'react';
import { Link } from 'react-router-dom';
import chair from '../../../images/chair.png.png';
import './HeaderMain.css'
const HeaderMain = () => {
    return (
        <main style={{height:'600px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1">
                 <h1 style={{color:' #3a4256'}}>Your New Smile <br/>Starts Here</h1>
                 <p className="text-secondary">There is our doctors Portal for district and it is useful for this lockdown time .</p>
                 <button className="btn grad"><Link to="/appointment">GET APPOINTMENT</Link></button>
            </div>
            <div className="col-md-6 ">
               <img src={chair} alt="" className="img-fluid" />
            </div>

        </main>
    );
};

export default HeaderMain;