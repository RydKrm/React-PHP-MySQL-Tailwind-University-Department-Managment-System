import './Register.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import SelectOption from '../Common/Select_option/SelectOption';
import SubmitButton from '../Common/SubmitButton';

const Register = () => {
    const [userRole,setRole] = useState('teacher');
    const [userInfo, setUserInfo] = useState({ role: "teacher" });
    const [message,setMessage] = useState('');
    
  const navigate = useNavigate();

    const onBlurChange=(event)=>{
        setUserInfo(values =>({...values,[event.target.name]:event.target.value}));
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
      <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
            <h2 className="text-3xl my-3 text-green text-center">Register</h2>
            <form
              onSubmit={onSubmitChange}
              className="flex flex-col items-center justify-center"
              method="post"
            >
              <div>
                {/* First Name */}
                <input
                  onChange={onBlurChange}
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="first_name"
                  required
                />

                {/* Last Name */}
                <input
                  onChange={onBlurChange}
                  type="text"
                  id="lastName"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />

                <input
                  onChange={onBlurChange}
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  id="phone number"
                  required
                />
              </div>
              <div >
                <input
                  onChange={onBlurChange}
                  type="email"
                  id="emailAddress"
                  placeholder="Email"
                  name="email"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />

                <input
                  onChange={onBlurChange}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />
                <input
                  onChange={onBlurChange}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />
               </div> 
               <div>
                <div className="col-md-12 mb-4 ml-14">
                  <div className="form-check form-check-inline mt-4">
                    <h6 className="mr-2 font-roboto text-lg text-neutral-300">
                      Role
                    </h6>
                    <input
                      onChange={onClickChange}
                      className="form-check-input radio radio-info"
                      type="radio"
                      name="role"
                      value="teacher"
                    />
                    <label className="form-check-label font-roboto text-base mr-3 text-neutral-300">
                      Teacher
                    </label>

                    <input
                      onChange={onClickChange}
                      className="form-check-input radio radio-info"
                      type="radio"
                      name="role"
                      value="student"
                    />
                    <label className="form-check-label font-roboto text-base mr-3 text-neutral-300">
                      Student
                    </label>
                  </div>
                </div>
              </div>
              {/* conditional rendering */}
              {userRole === "student" && (
                <div>
                  <input
                    onChange={onBlurChange}
                    type="tel"
                    id="RollNumber"
                    placeholder="Roll Number"
                    name="roll_number"
                    required
                    className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  />
                  <SelectOption
                    handle_option={onBlurChange}
                    name={"year"}
                    options={[
                      ["1", "First Year"],
                      ["2", "Second Year"],
                      ["3", "Third Year"],
                      ["4", "fourth Year"],
                    ]}
                  ></SelectOption>
                  <SelectOption
                    handle_option={onBlurChange}
                    name={"semester"}
                    options={[
                      ["odd", "Odd"],
                      ["even", "Even"],
                    ]}
                  ></SelectOption>
                </div>
              )}

              <div className="mt-4 pt-2">
                <SubmitButton
                  ButtonHandle={onSubmitChange}
                  ButtonValue={"Register"}
                ></SubmitButton>
                <h2>{message}</h2>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Register;