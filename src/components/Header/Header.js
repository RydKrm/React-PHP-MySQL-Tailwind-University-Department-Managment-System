import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from'react-router-dom';
import './Header.css';

const Header = () => {
 const [is_logged_in,set_is_log_in] = useState(false);
 const [user_role,set_user_role] = useState('');

const container = ()=>{
  if(localStorage.getItem("ICE_dept")){
   set_is_log_in(true);
     if(localStorage.ICE_dept){
      var obj = JSON.parse(localStorage.getItem("ICE_dept"));
    const is_role = obj.role;
     if ( is_role === "teacher"){
      set_user_role("teacher");
     } else if(is_role==='student'){
      set_user_role("student");
     }
     }
   
  } else {
    set_is_log_in(false);
  }
}

useEffect(container,[]);
//  console.log("USER ROLE =>",user_role);

  
    return (
      <div>
        {
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
              <NavLink className="navbar-brand text-primary" to="/home">
                ICE
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <NavLink className="nav-item nav-link active" to="/home">
                    Home
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/teachers">
                    Teachers
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/students">
                    Students
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/courses">
                    Courses
                  </NavLink>
                  <NavLink className="nav-item nav-link" to="/about">
                    About
                  </NavLink>
                  {is_logged_in ? (
                    <NavLink className="nav-item nav-link" to="/profile">
                      Profile
                    </NavLink>
                  ) : (
                    <NavLink className="nav-item nav-link" to="/login">
                      Login
                    </NavLink>
                  )}

                  {user_role === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/register">
                      Register
                    </NavLink>
                  )}
                  {user_role === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/create_course">
                      Create Course
                    </NavLink>
                  )}
                  {user_role === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/class_test">
                      Class Test
                    </NavLink>
                  )}
                  {user_role === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/present_system">
                      Present System
                    </NavLink>
                  )}
                  {user_role === "student" && (
                    <NavLink className="nav-item nav-link" to="/my_presents">
                      My Presents
                    </NavLink>
                  )}
                  {user_role === "student" && (
                    <NavLink className="nav-item nav-link" to="/my_ct_marks">
                      Class Tests Marks
                    </NavLink>
                  )}
                  <NavLink class=" nav-item nav-link btn btn-primary">
                    Get started
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        }
      </div>
    );
};

export default Header;