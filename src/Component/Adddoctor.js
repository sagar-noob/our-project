import React, { Component } from 'react'
class Adddoctor extends Component {
    render() {
        return (
            <section>
                <h2>Add Doctor</h2>
                <form>
                    <div className='form-inner'>
                    <h4>Doctor information</h4>
                        <div className="row">
                            <div className="col">
                                <label htmlFor='Name'>First Name</label>
                                <input type="text" class="form-control" placeholder="First name" aria-label="First name" />
                            </div>
                            <div className="col">
                                <label htmlFor='Last name'>Last Name</label>
                                <input type="text" class="form-control" placeholder="Last Name" aria-label="Last Name" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='Email address'>Email Address</label>
                                    <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>
                                <div className="col">
                                <label htmlFor='phone number'>Phone Number</label>
                                <input type="text" class="form-control" placeholder="Phone Number" aria-label="Phone number" />
                            </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                <label for="admitdate" class="form-label">Join Date  </label>
                                        <input type="date" class="form-control" id="admitdate" required />

                                </div>
                                <div className="col">
                                <label for="admittime" class="form-label">Join time  </label>
                                        <input type="time" class="form-control" id="admittime" required />
                            </div>
                            </div>
                            <div className='row'>
                            <div className="col">
                            <label for="admittime" class="form-label">Document Upload </label>
                            <input type="file" class="form-control" id="inputGroupFile02"/>
                            
                            </div>
                            <div className='col'>
                            <label htmlFor='Gender'>Gender</label>
                                    <div className="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Male
                                        </label>
                                    </div>
                                    <div class="form-check ">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
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