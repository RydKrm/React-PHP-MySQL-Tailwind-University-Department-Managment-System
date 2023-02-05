import './Footer.css';
import React from 'react';
import logo from '../../img/logo.png'
import { NavLink } from 'react-router-dom';
import { BsAlarmFill, BsAlignTop, BsFacebook } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";

const Footer = () => {
    return (
      <div className="footer-container bg-slate-300 font-roboto">
        <div className="container ">
          <div className="row">
            <div className="col-md-3 my-3">
              <img
                className="logo-container image-fluid ml-5"
                src={logo}
                alt="Logo Here"
              />
              <h3 className="ml-3 float-left"> University of Rajshahi</h3>
            </div>

            <div className="col-md-3 my-3">
              <h3>About Us</h3>
              <p className="lead text-rose-600" >
               <BsFacebook></BsFacebook>
               <BsAlignTop></BsAlignTop>
               <BsAlarmFill></BsAlarmFill>
               <FaAddressBook></FaAddressBook>
               
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus eum delectus accusamus.
              </p>
            </div>

            <div className="col-md-3 my-3">
              <h5 className="text-uppercase">Pages</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <NavLink to="/home" className="text-dark">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/students" className="text-dark">
                    Students
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/teachers" className="text-dark">
                    Teachers
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className="text-dark">
                    Courses
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/courses" className="text-dark">
                    About us
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-md-3 my-3">
              <h3>Social</h3>
            </div>

            {/* CopyRight Bar  */}
          </div>
        </div>
        <div className="text-center text-dark p-3 copyright-color">
          © 2022 Copyright:
          <NavLink className="text-dark" to="/home">
            ICE, RU{" "}
          </NavLink>
        </div>
      </div>
    );
};

export default Footer;