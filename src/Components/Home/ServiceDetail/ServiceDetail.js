import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'50px'}}src={service.image} alt="" />
            <h5 className="mt-3 mb-3">{service.title}</h5>
            <p className='text-secondary'>services our is better than any dental hospital</p>
        </div>
    );
};

export default ServiceDetail;