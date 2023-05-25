import './Banner.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
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
              <Link
                className="items-center mt-3 text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 ml-5 hover:no-underline hover:bg-medium-black m-2 ring-1 ring-primary-content"
                to="/"
              >
                Present System
              </Link>
              <Link
                className="mt-3 items-center text-white font-roboto bg-green text-xl p-2 rounded-lg px-3 py-3 hover:no-underline hover:bg-medium-black m-2 ring-1 ring-primary-content"
                to="/"
              >
                Mark Distribution
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Banner;
