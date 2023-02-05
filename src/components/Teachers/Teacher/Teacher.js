import './Teacher.css';
import React from 'react';

const Teacher = (props) => {
  const {first_name,last_name,email,image,special} = props.teacher;
    return (
<div className="col-md-3">
  <div className="card text-size my-3" >
  <img className="card-img-top" src={image} alt="Teacher_image_here"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
   <ul className="list-group list-group-flush">
    <li className="list-group-item">Name: {first_name} {last_name}</li>
    <li className="list-group-item">Email : {email} </li>
    <li className="list-group-item">Skill: {special}</li>
  </ul>
</div>
</div>
    );
};

export default Teacher;