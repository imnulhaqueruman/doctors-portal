import React from 'react';

const TestiMonail = ({testimonial}) => {
    return (
            <div className="col-md-4">
                <div  className="card  m-1 shadow-sm">
                    <div className="card-body">
                        <p className="card-text text-center">{testimonial.quote}</p>
                    </div>
                    <div className="card-footer d-flex align-items-center">
                        <img className="mx-3" src={testimonial.img} alt="" width="60px" />
                        <div>
                            <p className="text-info">{testimonial.name}</p>
                            <p className='m-0'>{testimonial.from}</p>
                        </div>
                    
                    </div>
                 </div>
       
            </div>
    );
};

export default TestiMonail;