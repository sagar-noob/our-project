import React, { Component } from 'react'

class Addpatients extends Component {
    render() {
        return (
            <section>
                     <h2 style={{textAlign: "center" , flex:"1", lineHeight:"100px", fontWeight:"bold"}}>Add Patients</h2>
                
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px',
                    
                }}>
                    <div className='form-inner'>
                    <h4 style={{ textAlign: "center" , flex:"1", lineHeight:"50px",fontWeight:"bold"}}>Patients Basic Information</h4>
                       
                        <div className="row">
                            <div className="col">
                                <label htmlFor='Name'>First Name</label>
                                <input type="text" className="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label htmlFor='Last name'>Last Name</label>
                                <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" />
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
                                    <input type="file" className="form-control" id="inputGroupFile02" />

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
                
                <h2 style={{textAlign: "center" , flex:"1", lineHeight:"50px", fontWeight:"bold"}}>Registration Information</h2>
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop:'5px'
                }}>
                    <div className='form-inner'>

                        <div className="row">
                            <div className="col">
                                <label htmlFor='Select Reason'>Select Payment Option</label>
                                <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                                    <option selected>Payment Option</option>
                                    <option value="1">Credit Card</option>
                                    <option value="2">Debit Card</option>
                                    <option value="3">Cash Money</option>
                                </select>
                            </div>

                            <div className="col">
                                <label htmlFor='insurance information'>Insurance Information</label>
                                <div className='col'>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1" > Yes I have insurance</label><br/>
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                                    <label className="form-check-label" for="inlineRadio1" > No I haven't insurance</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='Insurance Number'>Insurance Number</label>
                                    <input type="text" className="form-control" placeholder="Insurance Number" aria-label="Insurance Number" />
                                </div>
                                <div className="col">
                                    <label htmlFor='Ward number'>Ward Number</label>
                                    <input type="text" className="form-control" placeholder="Ward NUmber" aria-label="Ward Number" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
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
                                <div className="col">
                                    <label htmlFor='Advance Amount'>Advance Amount</label>
                                    <input type="text" className="form-control" placeholder="Advance Amount" aria-label="Advance Amount" />

                                </div>
                            </div>

                            <div className="col">
                            </div>
                            <input type="submit"  id="bigreko-submit" value="Submit"></input>


                           
                        </div>
                    </div>
                </form>

            </section>
        );

    }

}

export default Addpatients;