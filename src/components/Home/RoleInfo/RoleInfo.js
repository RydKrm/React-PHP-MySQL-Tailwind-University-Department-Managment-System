import React from 'react';
import './RoleInfo.css';
import {
  MdOutlineAdminPanelSettings,
  MdOutlineNaturePeople,
} from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
const RoleInfo = () => {
    return (
      <section className="flex md:h-screen justify-center bg-dark-black">
        <div className="flex flex-rows-3 sm:flex-row-1 gap-4 text-white font-roboto items-center">
          {/* item -1 */}
          <div class=" bg-dark-black  ring-1 ring-green w-72  rounded-xl text-center font-roboto font-light">
            <MdOutlineAdminPanelSettings className="text-8xl role-icon  text-green rounded-xl font-light m-2 p-2 ml-10 mr-10" />
            <h2 className="text-2xl text-green font-normal">ADMIN</h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-light-black">
              Admin could control everything in a website. In this system admin can see all student list,all course list, all teacher list. And also Create course which is created by year, semester, course code, and existing teacher list. 
            </p>
          </div>

          {/* item - 2 */}
          <div class=" bg-dark-black ring-2 ring-dark-green w-72 rounded-xl text-center font-roboto font-light">
            <MdOutlineNaturePeople className="text-8xl role-icon text-green rounded-3xl font-light m-2 p-2 ml-10 mr-10" />
            <h2 className="text-2xl text-green font-normal">TEACHERS </h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-light-black">
              Teachers are another part of system. He could add class test mark in course specific. He also could add present of course checking student present or not.
              He could see all student mark and all teacher mark.
            </p>
          </div>
          {/* item - 3 */}
          <div class=" bg-dark-black ring-1 ring-green w-72 rounded-xl text-center font-roboto font-light">
            <IoIosPeople className="text-8xl role-icon text-green rounded-3xl font-light m-2 p-2 ml-10 mr-10" />
            <h2 className="text-2xl text-green font-normal">STUDENTS </h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-light-black">
              Student is lower part of this system. He cannot add or mordify the system. He only view their present and class test mark. In a Course many class text are taken but total mark is 14. So All mark are converted to 14. 
            </p>
          </div>
        </div>
      </section>
    );
};

export default RoleInfo; 