import './Course.css';
import React from 'react';

const Course = (props) => {
   const {
     course_name,
     course_year,
     course_semester,
     course_code,
     sec_a,
     sec_b,
   } = props.course;
   return (
     <div className="border-2 mt-3 border-green">
       <div className="card text-size bg-dark-black my-3">
         <ul className=" bg-dark-black font-roboto text-md text-center">
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             Course Name: {course_name}
           </li>
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             Course Year: {course_year}
           </li>
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             semester : {course_semester }
           </li>
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             Course Code : {course_code}
           </li>
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             Section A Teacher : {sec_a}
           </li>
           <li className="h-10 items-center text-base font-roboto text-neutral-300">
             Section B Teacher : {sec_b}
           </li>
         </ul>
       </div>
     </div>
   );
};

export default Course;