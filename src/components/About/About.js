import React from 'react';
import './About.css'
const About = () => {
    return (
      <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border border-green p-8 my-4 md:my-0 w-2/5 ">
            <h2 className="text-3xl text-green text-center">Log in</h2>
            <form
              // onSubmit={onSubmitChange}
              method="post"
              className="md:px-20 flex flex-col justify-center py-2"
            >
              <div className="flex flex-col  border-0">
                <input
                  type="text"
                  placeholder="Roll Number"
                  // onChange={onChangeItem}
                  id="RollNumber"
                  name="roll_number"
                  className="font-roboto border-green border-b w-64 bg-dark-black text-sm text-green focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border md:w-full focus:rounded-sm h-10 focus:outline-none my-3"
                />
                <input
                  type="password"
                  // onChange={onChangeItem}
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="font-roboto border-green border-b w-64 md:w-full bg-dark-black text-sm font-thin text-green focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />
                {/* Radio Button */}
                <div className="flex flex-row my-3">
                  <p className="text-base text-neutral-400 font-thin ">
                    Role :
                  </p>
                  <input
                    type="radio"
                    // onChange={onChangeItem}
                    name="radio-5"
                    className="radio border-2 border-green mx-2 focus:ring-2 outline-none focus:ring-green"
                  />
                  <p className="text-base text-neutral-400 font-thin ">
                    Teacher
                  </p>
                  <input
                    type="radio"
                    // onChange={onChangeItem}
                    name="radio-5"
                    className="radio border-2 border-green mx-2 focus:ring-2 outline-none focus:ring-green"
                  />
                  <p className="text-base text-neutral-400 font-thin">
                    Student
                  </p>
                </div>
                <input
                  className="btn font-roboto font-light text-neutral-400 hover:text-green hover:border-green bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
                  htmlFor="login-modal"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default About;