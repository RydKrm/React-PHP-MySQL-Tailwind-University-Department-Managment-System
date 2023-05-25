import React from "react";
import { NavLink } from "react-router-dom";

const Student = (props) => {
  const { first_name, last_name, email, image,year,project,city } = props.student;
  return (
    <div className="col-md-3">
      <div className="card text-size my-3">
        <img className="card-img-top" src={image} alt="Teacher_image_here" />
        <div className="card-body">
          
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Name: {first_name} {last_name}
          </li>
          <li className="list-group-item">Email : {email} </li>
          <li className="list-group-item">Year : {year} </li>
          <li className="list-group-item">Project: {project}</li>
          <li className="list-group-item">City : {city} </li>
          <li className="list-group-item"><NavLink to="/profile_single"
           className="btn btn-primary">Visit Profile</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Student;
