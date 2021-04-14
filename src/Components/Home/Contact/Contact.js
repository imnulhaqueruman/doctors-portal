import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <div className="text-center py-5">
                    <h5 className="text-info">CONTACT US</h5>
                    <h1 className="text-white">Always Contact with Us</h1>
                </div>
                <div className="col-md-9 mx-auto my-5 " >
                    <form action="">
                       <div className="form-group py-3">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group py-3">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group py-3">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center py-5">
                           <button type="button" className="btn btn-primary"> Submit </button>
                       </div>
                   </form>
                </div>

            </div>

        </section>
    );
};

export default Contact;