import React, { useState } from 'react';
import Sidebar from '../../DashBoard/Sidebar/Sidebar';

const AddDoctor = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState(null)
    const handleBlur = e =>{
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }
     const handleFileChange = e =>{
         const newFile = e.target.files[0]
         setFile(newFile);
     }
     const handleSubmit = () =>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone',info.phone)
      
        fetch('https://hidden-sea-69527.herokuapp.com/addADoctor', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
     }

    return (
        <section className="container-fluid row">
            <div className="px-0 col-md-2">
               <Sidebar></Sidebar>
            </div>
           
            <div className="col-md-10 p-5 px-5" style={{position:'absolute',right:'0',zIndex:-1, backgroundColor:"#F4FDFB"}}>
                <h1 className="text-info">AddDoctor</h1>
                <form onSubmit={handleSubmit}>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email address</label>
                            <input onBlur={handleBlur} type="email" class="form-control" name="email" placeholder="your email"/>
                           
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Name</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="name" placeholder="your name"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Phone</label>
                            <input onBlur={handleBlur} type="text" class="form-control" name="phone" placeholder="your number"/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputPassword1" class="form-label">Upload Image </label>
                            <input onChange={handleFileChange} type="file" class="form-control" id="exampleInputPassword1"/>
                        </div>
                       
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
            </div>
           
        </section>
    );
};

export default AddDoctor;