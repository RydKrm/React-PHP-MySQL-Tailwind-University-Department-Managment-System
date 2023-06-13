import React, { useContext} from 'react';
import { NavLink } from'react-router-dom';
import './Header.css';
import { UserContext } from '../../App';

const Header = () => {

 const [checkUser, setCheckUser] = useContext(UserContext);
 const userRole = checkUser.userRole;
  
    return (
      <div>
        {
          <nav className="navbar navbar-expand-lg bg-black">
            <div className="container">
              <NavLink
                className="navbar-brand text-green text-2xl font-roboto"
                to="/home"
              >
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
                  <NavLink
                    className="nav-item nav-link active font-oxygen"
                    to="/home"
                  >
                    Home
                  </NavLink>
                  {userRole === "admin" && (
                    <NavLink className="nav-item nav-link" to="/teachers">
                      Teachers
                    </NavLink>
                  )}

                  {userRole === "admin" && (
                    <NavLink className="nav-item nav-link" to="/students">
                      Students
                    </NavLink>
                  )}
                  {userRole === "admin" && (
                    <NavLink className="nav-item nav-link" to="/courses">
                      Courses
                    </NavLink>
                  )}
                  {userRole !== "none" && (
                    <NavLink className="nav-item nav-link" to="/profile">
                      Profile
                    </NavLink>
                  )}
                  {userRole === "none" && (
                    <NavLink className="nav-item nav-link" to="/login">
                      Login
                    </NavLink>
                  )}
                  {userRole === "none" && (
                    <NavLink className="nav-item nav-link" to="/register">
                      Register
                    </NavLink>
                  )}

                  {userRole === "admin" && (
                    <NavLink className="nav-item nav-link" to="/register">
                      Register
                    </NavLink>
                  )}
                  {userRole === "admin" && (
                    <NavLink className="nav-item nav-link" to="/create_course">
                      Create Course
                    </NavLink>
                  )}
                  {userRole === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/class_test">
                      Class Test
                    </NavLink>
                  )}
                  {userRole === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/present_system">
                      Present System
                    </NavLink>
                  )}
                  {userRole === "teacher" && (
                    <NavLink
                      className="nav-item nav-link"
                      to="/view_all_present"
                    >
                      All Present
                    </NavLink>
                  )}
                  {userRole === "teacher" && (
                    <NavLink className="nav-item nav-link" to="/view_all_mark">
                      All Mark
                    </NavLink>
                  )}
                  {userRole === "student" && (
                    <NavLink className="nav-item nav-link" to="/my_presents">
                      My Presents
                    </NavLink>
                  )}
                  {userRole === "student" && (
                    <NavLink className="nav-item nav-link" to="/my_ct_marks">
                      Class Tests Marks
                    </NavLink>
                  )}
                </div>
              </div>
            </div>
          </nav>
        }
      </div>
    );
};

export default Header;