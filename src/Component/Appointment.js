import React, { Component } from 'react'
class Appointment extends Component {
    render() {
        return (
            <section>
                  <h2 style={{textAlign: "center" , flex:"1", lineHeight:"100px", fontWeight:"bold"}}>Appointment Booking</h2>
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px',
                    
                }}>
                    <div className='form-inner'>
                    <h4 style={{textAlign: "center" ,  flex:"1", lineHeight:"50px",fontWeight:"bold"}}> Basic Information</h4>
                        <div className="row">
                            <div className="col">
                                <label htmlFor='Name'>Full Name</label>
                                <input type="text" className="form-control" placeholder="Full name" aria-label="Full name" />
                            </div>
                            <div className="col">
                                <label htmlFor='Phone number'>Phone number</label>
                                <input type="text" className="form-control" placeholder="Phone number" aria-label="phone number" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='Email address'>Email Address</label>
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>

                                <div className="col">
                                    <label htmlFor='Gender'>Gender</label>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label className="form-check-label" for="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label className="form-check-label" for="flexRadioDefault2">
                                            Female
                                        </label>
                                    </div>
                                </div>


                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor='Select Reason'>Select Reason</label>
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Select Reason</option>
                                            <option value="1">Radiologist</option>
                                            <option value="2">Internal Medicine</option>
                                            <option value="3">Gynecologist</option>
                                            <option value="3">Breast Cancer Specilist</option>
                                            <option value="3">Pediatrician</option>
                                            <option value="3">Neuropsychaiatrist</option>
                                            <option value="3">ENT</option>

                                        </select>
                                    </div>
                                    <div className='col'>
                                        <label htmlFor='Select Doctor'>Select Doctor</label>
                                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Select Doctor</option>
                                            <option value="1">DR.Mahesh Dahal</option>
                                            <option value="2">DR.Apekshya Shrestha</option>
                                            <option value="3">DR.Barnit Shakya</option>
                                            <option value="4">DR.Isha Karki</option>
                                            <option value="5">DR.Parag Karki</option>
                                            <option value="6">DR.Aparna Amatya</option>
                                            <option value="7">DR.Banira Karki</option>
                                            <option value="8">DR.Priyank Sharma</option>
                                            
                                            
                                            


                                        </select>
                                    </div>
                                    <div className='row'>
                                    <div className='col'>
                                        <label for="admitdate" className="form-label">Appointment Date  </label>
                                        <input type="date" className="form-control" id="admitdate" required />

                                    </div>
                                    <div className='col'>
                                    <label for="admittime" className="form-label">Appointment time  </label>
                                        <input type="time" className="form-control" id="admittime" required />

                                    </div>

                                    </div>

                                    
                                    
                                    

                                    <div className="mb-3">
                                        <label for="Textarea" className="form-label">Add Note</label>
                                        <textarea className="form-control" id="Textarea" rows="3"></textarea></div>
                                </div>

                                

                            </div>
                        </div>
                        
                        <input type="submit" value="Submit"></input>
                    </div>


                </form>
            </section>
        );

    }

}
export default Appointment;