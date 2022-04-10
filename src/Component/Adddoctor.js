import React, { Component } from 'react'
class Adddoctor extends Component {
    render() {
        return (
            <section>
                <h2 style={{textAlign: "center" , flex:"1", lineHeight:"100px", fontWeight:"bold"}}>Add Doctor</h2>
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px',
                    
                }}>
                    <div className='form-inner'>
                    <h4 style={{ textAlign: "center" , flex:"1", lineHeight:"50px",fontWeight:"bold"}}>Doctor Information</h4>
                    
                        <div className="row">
                            <div className="col">
                                <label htmlFor='Name'>First Name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label htmlFor='Name'>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name" aria-label="First name" />
                            </div>
                            
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='Email address'>Email Address</label>
                                    <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>
                                <div className="col">
                                <label htmlFor='phone number'>Phone Number</label>
                                <input type="text" className="form-control" placeholder="Phone Number" aria-label="Phone number" />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <label for="admitdate" className="form-label">Join Date  </label>
                                        <input type="date" className="form-control" id="admitdate" required />

                                </div>
                                <div className="col">
                                <label for="admittime" className="form-label">Join time  </label>
                                        <input type="time" className="form-control" id="admittime" required />
                            </div>
                            </div>
                            <div className='row'>
                            <div className="col">
                            <label for="admittime" className="form-label">Document Upload </label>
                            <input type="file" className="form-control" id="inputGroupFile02"/>
                            
                            </div>
                            <div className='col'>
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
                            </div>
                            <input type="submit" value="Submit"></input>
                            

                            </div>
                        </div>

                    

                </form>
            </section>
        );

    }

}
export default Adddoctor;