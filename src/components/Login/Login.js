import './Login.css';
import React,{useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { UserContext } from '../../App';

const Login = () => {
   //const [is_log,set_is_log] = useState(false);
   const [is_message,set_is_message] = useState(false);
   const [login_data,set_login_data] = useState({});
   //const [message,setMessage] = useState('');
   const [checkUser, setCheckUser] = useContext(UserContext);

   const navigate = useNavigate();
   const onChangeItem= (event)=>{
       set_login_data(values=>({...values,[event.target.name]:event.target.value})); 
  } 
  const onSubmitChange = (event)=>{
    event.preventDefault();
    event.persist();
     axios.post(`http://localhost/dept_project/login.php`, login_data)
       .then((res) => {
        if(res.data.success){
          set_is_message(true);
          setCheckUser({ userRole: res.data.student_list.role });
          localStorage.setItem(
            "ICE_dept",
            JSON.stringify(res.data.student_list)
          );
           navigate('/home')
        } else {
          set_is_message(false);
        }
   console.log("MESSAGE ",is_message);      
         return;
       });
  }

    return (
      <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
            <h2 className="text-3xl my-3 text-green text-center">Login</h2>

            <form
              onSubmit={onSubmitChange}
              method="post"
              className="flex flex-col items-center justify-center"
            >
              <div>
                <input
                  type="text"
                  onChange={onChangeItem}
                  placeholder="Enter Roll Number"
                  id="RollNumber"
                  name="roll_number"
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />

                <input
                  type="password"
                  onChange={onChangeItem}
                  placeholder="Enter  Password"
                  id="password"
                  name="password"
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />
                <div className="col-md-12 mb-4 ml-14">
                  <div className="form-check form-check-inline mt-4">
                    <h6 className="mr-2 font-roboto text-lg text-neutral-300">
                      Role
                    </h6>
                    <input
                      onChange={onChangeItem}
                      className="form-check-input radio radio-info"
                      type="radio"
                      name="role"
                      value="teacher"
                    />
                    <label className="form-check-label font-roboto text-base mr-3 text-neutral-300">
                      Teacher
                    </label>

                    <input
                      onChange={onChangeItem}
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

              <div>
                <input
                  className="btn font-roboto font-light w-40  text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
                  htmlFor="login-modal"
                  type="submit"
                  value="Login"
                />

                {is_message && (
                  <div className="alert alert-info shadow-lg">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="stroke-current flex-shrink-0 w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span> Login is successful</span>
                    </div>

                    {!is_message && (
                      <div className="alert alert-error shadow-lg">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current flex-shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span>Error! Task failed successfully.</span>
                        </div>
                      </div>
                    )}
                    {/* end not successful */}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Login;