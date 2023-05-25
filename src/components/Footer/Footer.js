import './Footer.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
/*
import logo from '../../img/logo.png'
import { BsAlarmFill, BsAlignTop, BsFacebook } from "react-icons/bs";
import { FaAddressBook } from "react-icons/fa";
*/
const Footer = () => {
    return (
      <div className="footer-container bg-slate-300 font-roboto">
        <div className="text-center bg-dark-black text-light-black p-3 bottom-0">
          © 2022 Copyright:
          <NavLink  to="/home">
            ICE, RU
          </NavLink>
        </div>
      </div>
    );
};

export default Footer;