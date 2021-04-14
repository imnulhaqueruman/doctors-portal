import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
Modal.setAppElement('#root')
const AppointmentFrom = ({modalIsOpen,closeModal,appointmentOn,date}) => {
    const { register, handleSubmit,  formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn
        data.date = date
        data.created = new Date()
         fetch('http://localhost:5000/addAppointment', {
             method :"POST",
             headers:{'content-type' : 'application/json'},
             body: JSON.stringify(data)
         })
         .then(res => res.json())
         .then(success => {
             if(success){
                closeModal();
             }
         })

   

    };
   
    return (
        <div>
           
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

            <h2 className="text-center text-info">{appointmentOn}</h2>
            <p className="text-center text-secondary"><small>ON {date.toDateString()}</small></p>
            <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <input type="text" className="form-control"  {...register("name", { required: true })} name="name" placeholder="your Name"/>
                    {errors.name && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control"  {...register("email", { required: true })} email="email" placeholder="your Email"/>
                    {errors.email && <span>This field is required</span>}
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control"  {...register("phone", { required: true })} phone="phone" placeholder="your Phone"/>
                    {errors.phone && <span>This field is required</span>}
                </div>
                
                <div className="row py-3">
                    <div className="col-4">
                            <select class="form-select" name="gender" {...register("select", { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="not">Other</option>
                            </select>
                            {errors.select && <span>This field is required</span>}
                    </div>
                    <div className="col-4">
                            <input  className="form-control" name="age"{...register("age", { required: true })} placeholder="Your Age" type="number" />
                            {errors.age && <span>This field is required</span>}
                    </div>
                    <div className="col-4">
                            <input {...register('weight', { required: true })} className="form-control" name="weight" placeholder="Weight" type="number" />
                            {errors.weight && <span>This field is required</span>}
                    </div>
                </div>
                
                <div className="text-right">
                        <button type="submit" className="btn btn-brand">Send</button>
                </div>
            </form>
            </Modal>
        </div>
    );
};

export default AppointmentFrom;