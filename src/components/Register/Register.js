import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
// import useNavigate from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import SelectOption from '../Common/Select_option/SelectOption';
import SubmitButton from '../Common/SubmitButton';

const Register = () => {
    const [userRole,setRole] = useState('teacher');
    const [userInfo, setUserInfo] = useState({ role: "teacher" });
    const [message,setMessage] = useState('');
    
  const navigate = useNavigate();

    const onBlurChange=(event)=>{
        //console.log('Change update');
        setUserInfo(values =>({...values,[event.target.name]:event.target.value}));
       // console.log(userInfo);
    }


    const onClickChange = (event)=>{ 
      setRole(event.target.value); 
      userInfo.role = event.target.value;
    }

    const onSubmitChange=(event)=>{
      event.preventDefault();
      event.persist();
     
      if(userInfo.password !== userInfo.confirmPassword){
        setMessage("Two password is not matched !! ");
        return;
      }

      axios.post(`http://localhost/dept_project/register.php`, userInfo)
        .then((res) => {
          console.log(res.data);
          // setUserInfo({});
          console.log(userInfo);
          console.log("Sent data  fully");
          setMessage("user Created !!");
         // navigate('/home');
          return;
        });
    }

    return (
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration">
                  <div className="card-body p-4 p-md-5">
                    <h3
                      className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary 
                     text-4xl font-roboto font-normal animate-bounce "
                    >
                      Registration Form
                    </h3>
                    <form onSubmit={onSubmitChange} method="post">
                      <div className="row">
                        {/* First Name */}
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              onChange={onBlurChange}
                              type="text"
                              id="firstName"
                              placeholder="First Name"
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                              name="first_name"
                              required
                            />
                          </div>
                        </div>

                        {/* Last Name */}
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              onChange={onBlurChange}
                              type="text"
                              id="lastName"
                              name="last_name"
                              placeholder="Last Name"
                              required
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 d-flex align-items-center">
                          <div className="form-outline datepicker w-100">
                            <input
                              onChange={onBlurChange}
                              type="text"
                              name="phone"
                              placeholder="Phone"
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                              id="phone number"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              onChange={onBlurChange}
                              type="email"
                              id="emailAddress"
                              placeholder="Email"
                              name="email"
                              required
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                            />
                          </div>
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              onChange={onBlurChange}
                              type="password"
                              id="password"
                              name="password"
                              placeholder="Password"
                              required
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              onChange={onBlurChange}
                              type="password"
                              id="confirmPassword"
                              name="confirmPassword"
                              placeholder="Confirm password"
                              required
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                            />
                          </div>
                        </div>

                        <div className="col-md-12 mb-4">
                          <h6 className="mb-2 pb-1">Role</h6>

                          <div className="form-check form-check-inline">
                            <input
                              onChange={onClickChange}
                              className="form-control form-control-lg radio radio-info"
                              type="radio"
                              name="role"
                              value="teacher"
                            />
                            <span>Teacher</span>
                            <input
                              onChange={onClickChange}
                              className="form-control form-control-lg radio radio-info ml-3"
                              type="radio"
                              name="role"
                              value="student"
                            />
                            <span>Student</span>
                          </div>
                        </div>
                      </div>
                      {/* conditional rendering */}
                      {userRole === "student"&&
                        <div className="row">
                          <div className="col-md-6 mb-4 pb-2">
                            <div className="form-outline">
                              <input
                                onChange={onBlurChange}
                                type="tel"
                                id="RollNumber"
                                placeholder="Roll Number"
                                name="roll_number"
                                required
                                className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                              />
                            </div>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <SelectOption
                              handle_option={onBlurChange}
                              name={"year"}
                              options={[
                                ["1", "First Year"],
                                ["2", "Second Year"],
                                ["3", "Third Year"],
                                ["4", "fourth Year"],
                              ]}
                              >
                            </SelectOption>
                          </div>
                          <div className="col-md-6 mb-4 pb-2">
                            <SelectOption
                              handle_option={onBlurChange}
                              name={"semester"}
                              options={[
                                ["odd", "Odd"],
                                ["even", "Even"],
                              ]}
                            ></SelectOption>
                          </div>
                        </div>
                      }

                      <div className="mt-4 pt-2">

                        <SubmitButton ButtonHandle={onSubmitChange} 
                        ButtonValue={"Register"}></SubmitButton>
                        <h2>{message}</h2>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Register;