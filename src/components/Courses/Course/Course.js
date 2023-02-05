import './Course.css';
import React from 'react';

const Course = (props) => {
   const { name, image, semistar, year, code, teacher1, teacher2 } =
     props.course;
   return (
     <div className="col-md-4">
       <div className="card text-size my-3">
         <img className="card-img-top" src={image} alt="Teacher_image_here" />
         <div className="card-body">
           <ul className="list-group list-group-flush">
             <li className="list-group-item">Name: {name}</li>
             <li className="list-group-item">First Teacher: {teacher1} </li>
             <li className="list-group-item">Second Teacher: {teacher2} </li>
             <li className="list-group-item">
               Course Code : {year}
               {semistar}
               {code}
             </li>
           </ul>
         </div>
       </div>
     </div>
   );
};

export default Course;