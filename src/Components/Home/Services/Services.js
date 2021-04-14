import React from 'react';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teeth from '../../../images/tooth.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
const Services = () => {
    const ServiceData =[
        {
            title:'Fluoride Treatment',
            image: fluoride
        },
        {
            title:'Cavity Filling',
            image:cavity
        },
        {
            title:'Teeth Whitening',
            image:teeth
        }
    ]
    return (
      <section className="services-container">
          <div className='text-center'>
              <h5 style={{color:'#2acbc5'}} className="mt-5">OUR SERVICES</h5>
              <h2>SERVICES WE PROVIDE</h2>
          </div>
          <div className="d-flex justify-content-center">
           <div className="row w-75 mt-5 pt-5">
             {
                ServiceData.map(services => <ServiceDetail service={services}></ServiceDetail>)
             }
           </div>
        </div>
      </section>
    );
};

export default Services;