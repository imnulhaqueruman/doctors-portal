import React from 'react';
import './Testimonials.css';
import erik from '../../../images/Ellipse 1.png';
import ema from '../../../images/Ellipse 2.png';
import maria from '../../../images/Ellipse 3.png';
import TestiMonail from '../TestiMonial/TestiMonail';
const Testimoinals = () => {
    const testimonailData = [
        {
            name:'Winson Herry',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img: erik,
            from:'Sylhet'
        },
        {
            name:'Winson Herry',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img:ema,
            from:'Sylhet'
        },
        {
            name:'Winson Herry',
            quote:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img:maria,
            from:'Sylhet'
        }
]
    return (
       <section className="testimonial my-5 py-5" >
           <div className="container">
              <div>
                  <h4 className="text-info">TESTIMONIAL</h4>
                  <h1>What's Our Patients <br/> Says</h1>
              </div>
              <div className="d-flex p-5 ">
                  <div className="row mt-5 ">
                     
                         {
                                testimonailData.map(testimonial => <TestiMonail testimonial ={testimonial}></TestiMonail>)
                         } 
                     
                         
                       
                  </div>
                       
              </div>


           </div>  
       </section>
    );
};

export default Testimoinals;