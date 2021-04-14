import React from 'react';

const BlogPost = ({news}) => {
    
    return (
        <section className="col-md-4">
            <div className="card shadow-lg my-5 py-5 rounded-3">
                <div className="d-flex px-3">
                    <img src={news.img} alt ="" />
                    <div className="mx-3">
                        <h5>{news.name}</h5>
                        <p>{ (new Date()).getDate()}</p>
                    </div>
                </div>
                <div className="my-3">
                    <div className="card-title text-center">
                    <h4>{news.title}</h4>
                    </div>
                    <div className="card-body text-center">
                        <p className="text-secondary">{news.description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogPost;