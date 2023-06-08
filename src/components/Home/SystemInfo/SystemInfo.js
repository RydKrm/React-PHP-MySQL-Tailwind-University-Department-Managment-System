import React from 'react';
import './SystemInfo.css'
import {BsFillFileEarmarkBarGraphFill,} from "react-icons/bs";
import {SiMinetest} from 'react-icons/si'

const SystemInfo = () => {
    return (
      <section className="flex md:h-screen justify-center bg-medium-black">
        <div className="flex flex-rows-2 sm:flex-row-1 gap-4 text-white font-roboto items-center">
          {/* item -1 */}
          <div class=" bg-medium-black w-96 ring-2 ring-dark-green text-center system-info rounded-xl font-roboto font-light">
            <SiMinetest className="text-8xl role-icon text-green rounded-xl  m-2 p-2 system-icon" />
            <h2 className="text-2xl text-green font-normal">PRESENT SYSTEM</h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-white">
              Teacher add class student present according to their present.
              Teacher select the course which he want to give present and mark
              as present is the student is present. System update that data
              according to student Id and teacher Id. And show student their
              present.
            </p>
          </div>

          {/* item - 2 */}
          <div class=" bg-medium-black w-96 ring-2 ring-dark-green text-center system-info rounded-xl font-roboto font-light">
            <BsFillFileEarmarkBarGraphFill className="text-8xl role-icon text-green rounded-xl  m-2 p-2 system-icon" />
            <h2 className="text-2xl text-green font-normal"> MARK SYSTEM</h2>
            <p className="text-sm m-3 tracking-wide leading-6 font-extralight text-white">
              Teacher add class test mark according to exam.
              Teacher also add test number, total mark and given mark. Those data update to the database according to student and teacher Id. Show to the student. Total mark is 14. But many class test are taken and marks are converted to 14 for each student
            </p>
          </div>
          {/* item - 3 */}
        </div>
      </section>
    );
};

export default SystemInfo;