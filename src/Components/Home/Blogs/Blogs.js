import React from 'react';
import wilson from '../../../images/Ellipse 1.png';
import BlogPost from '../BlogPost/BlogPost';
import './Blog.css';
const Blogs = () => {
    const blognews=[
        {
            name:'Rashed Kabir',
            title:'Check at Least a doctor in year for your teeth',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img:wilson,
        },
        {
            name:'Dr.Caudi',
            title:'2 times of brush in a Day can keep You Healthy',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img:wilson,
        },
        {
            name:'Dr.John Mithcell',
            title:'The Tooth Cancer is Taking a Challenge',
            description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            img:wilson,
        }
    ]
    return (
        <section className="blog">
            <div className="container">
                <div className='text-center'>
                    <h4 className="text-info text-uppercase">Our Blog</h4>
                    <h1>From Our Blog News</h1>

                </div>
                <div className="d-flex my-5">
                        <div className="row">
                            {
                                blognews.map(news => <BlogPost news={news}></BlogPost>)
                            }
                        </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;