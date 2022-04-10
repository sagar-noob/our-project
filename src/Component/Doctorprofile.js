import React, { Component } from 'react'
import Appointment from './Appointment';
class Doctorprofile extends Component {
    render() {
        return (
            <section>
                
                <form style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: '5px',

                }}>
                    <div class="body d-flex py-3">
                        <div class="container-xxl">

                            <div class="row g-3">
                                <div class="col-xl-12 col-lg-12 col-md-12">
                                    <div class="card teacher-card  mb-3">
                                        <div class="card-body d-flex teacher-fulldeatil">
                                            <div class="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                                <a href="#">
                                                    <img src='sss.jpg' width="200" height="200" />
                                                </a>
                                                <div class="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                                    <span class="text-muted small">Doctor ID : PXL-0001</span>
                                                </div>
                                            </div>
                                            <div class="teacher-info border-start ps-xl-4 ps-md-4 ps-sm-4 ps-4 w-100">
                                                <h6 class="mb-0 mt-2  fw-bold d-block fs-6"> Dr. Urmila Kumar Shrestha</h6>
                                                <span class="py-1 fw-bold small-11 mb-0 mt-1 text-muted">Heart Surgeon</span>
                                                <p style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    marginTop: '5px',
                                                 }}>
                                                    Senior Consultant Physician, Best Gastroenterologist and Hepatologist in Nepal<br />
                                                    Department : General Physician | Gastroenterology | Hepatology<br />
                                                    NMC No : 1833<br />
                                                    Qualification : MD (Internal Medicine), PHD (Gastroenterology , Hepatology)<br />
                                                    OPD Schedule : Sun - Fri : 5:30 pm to 8 pm</p>
                                                <div class="row g-2 pt-2">
                                                    <div class="col-xl-5">
                                                        <div class="d-flex align-items-center">
                                                            <span class="ms-2">202-555-0174 </span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <div class="d-flex align-items-center">

                                                            <span class="ms-2">Urmila@gmail.com</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <div class="d-flex align-items-center">

                                                            <span class="ms-2">19/03/1980</span>
                                                        </div>
                                                    </div>
                                                    <div class="col-xl-5">
                                                        <div class="d-flex align-items-center">
                                                            <i class="icofont-address-book"></i>
                                                            <span class="ms-2">2734</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
             
                
                <div style={{align:'center', dispaly:'flex',marginLeft: "300px" ,height:"40px" ,width:"100px",marginTop: "18px"  }}>
                <button type="button" class="btn btn-primary" mx-3 data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    Edit
                </button>
                </div>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <form>
                                    <div class="mb-3">
                                        <label for="text" class="form-label">Full name</label>
                                        <input type="text" class="form-control" id="text" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label">Phone Number</label>
                                        <input type="phonenumber" class="form-control" id="exampleInputPassword1" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="Textarea" className="form-label">Add Note</label>
                                        <textarea className="form-control" id="Textarea" rows="3"></textarea>
                                    </div>



                                </form>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Save Changes</button>

                            </div>
                        </div>
                    </div>
                </div>
                
                <form  style={{
                    display: 'flex',
                    height: '200px',
                    justifyContent: 'center',
                    
        
                

                }}>
                <div class="body d-flex py-3">
                
                    <div class="container-xxl">

                        <div class="row g-3">
                            <div class="col-xl-12 col-lg-12 col-md-12">
                                <div class="card teacher-card  mb-3">
                                <h6 style={{textAlign: "center" ,lineHeight:"50px", flex:"1", fontWeight:"bold"}}>Appointment</h6>
                                
                                <div class="table-responsive-sm">
                                    <table class="table table-bordered border-dark">
                                        <thead  class="table-success">
                                            <tr>

                                     <th scope="col">#</th>
                                                <th scope="col">Patients</th>
                                                <th scope="col">Appointment</th>
                                                <th scope="col">Last vistit</th>
                                                <th scope="col">Age</th>
                                                <th scope="col">Number</th>
                                                <th scope="col">Address</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">Po15</th>
                                                <td>Mark</td>
                                                <td>jan 11,2022</td>
                                                <td>dec 20,2021</td>
                                                <td>20</td>
                                                <td>9849008739</td>
                                                <td>New road</td>
                                               

                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>


                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td ></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                            <tr>
                                                <th scope="row"></th>
                                                <td ></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>
                                                <td></td>

                                            </tr>
                                        </tbody>
                                    </table>
                                  
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </form>
                



            </section>


        );
    }
}


export default Doctorprofile;