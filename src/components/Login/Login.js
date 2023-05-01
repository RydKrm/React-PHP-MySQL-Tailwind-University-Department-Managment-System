import './Login.css';
import React,{useEffect, useState} from 'react';
import { useNavigate} from "react-router-dom";
import axios from 'axios';

const Login = () => {
   const [user,set_user] = useState({});
   //const [is_log,set_is_log] = useState(false);
   const [is_message,set_is_message] = useState(false);
   const [login_data,set_login_data] = useState({});
   //const [message,setMessage] = useState('');
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
          set_user(res.data.student_list);
          set_is_message(true);
        // navigate('/home')
        } else {
          set_is_message(false);
        }
   console.log("MESSAGE ",is_message);      
         return;
       });
  }
 


 const call_is_log = ()=>{
   localStorage.setItem("ICE_dept", JSON.stringify(user));
 }
  useEffect(call_is_log,[user]);
  

   //console.log("User logged in data", user);

    return (
      <div>
        <section className="vh-100 gradient-custom">
          <div className="container py-5 h-100 px-20">
            <div className="row justify-content-center align-items-center h-100">
              <div className="col-12 col-lg-9 col-xl-7">
                <div className="card shadow-2-strong card-registration">
                  <div className="card-body p-4 p-md-5">
                    <h3
                      className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary 
                     text-4xl font-roboto font-bold "
                    >
                      Login Form
                    </h3>

                    <form
                      onSubmit={onSubmitChange}
                      method="post"
                      className="px-20"
                    >
                      <div className="row">
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="text"
                              onChange={onChangeItem}
                              placeholder="Roll Number"
                              id="RollNumber"
                              name="roll_number"
                              className="form-control form-control-lg font-roboto input-info input-bordered text-info text-base font-thin
                               "
                            />
                          </div>
                        </div>
                        <div className="col-md-12 mb-4 pb-2">
                          <div className="form-outline">
                            <input
                              type="password"
                              onChange={onChangeItem}
                              placeholder="PassWord"
                              id="password"
                              name="password"
                              className="form-control form-control-lg font-roboto input-info input-bordered text-info text-base font-thin
                               "
                            />
                            <div className="col-md-12 mb-4">
                              <div className="form-check form-check-inline mt-4">
                                <h6 className="mr-2 font-roboto text-lg">
                                  Role
                                </h6>
                                <input
                                  onChange={onChangeItem}
                                  className="form-check-input radio radio-info"
                                  type="radio"
                                  name="role"
                                  value="teacher"
                                />
                                <label className="form-check-label font-roboto text-base mr-3">
                                  Teacher
                                </label>

                                <input
                                  onChange={onChangeItem}
                                  className="form-check-input radio radio-info"
                                  type="radio"
                                  name="role"
                                  value="student"
                                />
                                <label className="form-check-label font-roboto text-base mr-3">
                                  Student
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <input
                          className="btn btn-info btn-lg font-roboto text-lg font-light text-white "
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Login;