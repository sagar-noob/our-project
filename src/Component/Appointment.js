import React, { Component } from 'react'
class Appointment extends Component {
    render() {
        return (
            <section>
                <h2>Appointment Booking</h2>
                <form>
                    <div className='form-inner'>


                        <h4>Basic information</h4>
                        <div className="row">
                            <div className="col">
                                <label htmlFor='Name'>Full Name</label>
                                <input type="text" class="form-control" placeholder="Full name" aria-label="Full name" />
                            </div>
                            <div className="col">
                                <label htmlFor='Phone number'>Phone number</label>
                                <input type="text" class="form-control" placeholder="Phone number" aria-label="phone number" />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor='Email address'>Email Address</label>
                                    <input type="text" class="form-control" placeholder="Email Address" aria-label="Email Address" />
                                </div>

                                <div className="col">
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


                                <div className='row'>
                                    <div className='col'>
                                        <label htmlFor='Select Reason'>Select Reason</label>
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Select Reason</option>
                                            <option value="1">Surgery</option>
                                            <option value="2">Body Checkup</option>
                                            <option value="3">Gynecologist</option>
                                            <option value="3">Other Service</option>

                                        </select>
                                    </div>
                                    <div className='col'>
                                        <label htmlFor='Select Doctor'>Select Doctor</label>
                                        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
                                            <option selected>Select Doctor</option>
                                            <option value="1">DR.Peter</option>
                                            <option value="2">DR.Mary</option>
                                            <option value="3">DR.Zoe</option>
                                            <option value="3">DR.Lily</option>

                                        </select>
                                    </div>
                                    <div className='row'>
                                    <div className='col'>
                                        <label for="admitdate" class="form-label">Appointment Date  </label>
                                        <input type="date" class="form-control" id="admitdate" required />

                                    </div>
                                    <div className='col'>
                                    <label for="admittime" class="form-label">Appointment time  </label>
                                        <input type="time" class="form-control" id="admittime" required />

                                    </div>

                                    </div>

                                    
                                    
                                    

                                    <div class="mb-3">
                                        <label for="Textarea" class="form-label">Add Note</label>
                                        <textarea class="form-control" id="Textarea" rows="3"></textarea></div>
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