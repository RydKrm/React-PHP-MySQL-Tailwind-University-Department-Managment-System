import './Banner.css';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Banner = () => {
   const [checkUser, setCheckUser] = useContext(UserContext);
    const userRole = checkUser.userRole;
    return (
      <div id="intro-example" className="p-5 text-center bg-black">
        <div className="mask hero_color ">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-green hover:text-green">
              <h1 className="mb-3 text-4xl text-white md:mt-20">
                Online Present System and Class Test Mark Distribution
              </h1>
              <h5 className="my-5 ml-12">
                Best & free guide of responsive web design
              </h5>
              {userRole === "none" && (
                <Link
                  className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 ml-5 hover:no-underline hover:bg-medium-black m-2 ring-1 ring-primary-content"
                  to="/login"
                >
                  Login
                </Link>
              )}
              {userRole === "student" && (
                <Link
                  className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 hover:no-underline mr-2 hover:bg-medium-black my-2 ring-1 ring-primary-content"
                  to="/my_presents"
                >
                  Course Present
                </Link>
              )}
              {userRole === "student" && (
                <Link
                  className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 hover:no-underline hover:bg-medium-black my-2 ring-1 ring-primary-content"
                  to="/my_ct_marks"
                >
                  Class Test Mark
                </Link>
              )}
              {userRole === "teacher" && (
                <Link
                  className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 hover:no-underline hover:bg-medium-black my-2 mr-3 ring-1 ring-primary-content"
                  to="/class_test"
                >
                  Class Test Mark
                </Link>
              )}
              {userRole === "teacher" && (
                <Link
                  className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 hover:no-underline hover:bg-medium-black my-2 ring-1 ring-primary-content"
                  to="/present_system"
                >
                  Present System
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
