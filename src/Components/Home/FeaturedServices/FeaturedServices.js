import React from 'react';
import feature from '../../../images/Mask Group 3.png';
import './FeaturedServices.css';
const FeaturedServices = () => {
    return (
       <section className="pb-0 pb-md-5 pt-5 my-5">
           <div className="container mb-5">
                <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0">
                            <img className="img-fluid" src={feature} alt=""/>
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h1>Exceptional Dental Care,On Your Terms</h1>
                            <p className="text-secondary my-5 ">It is a long established fact that a reader will be distracted by
                                the readable content of a page when looking at its layout. 
                                The point of using Lorem Ipsum is that it has a more-or-less normal
                                    distribution of letters, as opposed to using 'Content here, content here',
                                    making it look like readable English. Many desktop publishing packages 
                                    and web page editors now use Lorem Ipsum as their default model text, and 
                                    a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                                    Various versions have evolved over the years, sometimes by accident, 
                                    sometimes on purpose (injected humour and the like)</p>
                            <button className="btn grad-btn">Learn More</button>
                        </div>
                </div>
           </div>
           
       </section>
    );
};

export default FeaturedServices;