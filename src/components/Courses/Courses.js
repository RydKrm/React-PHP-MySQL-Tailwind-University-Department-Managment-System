import React from 'react';
import './Courses.css';
import courseData from '../../fakeData/courseData.json'
import Course from './Course/Course';
const Courses = () => {
    return (
      <div>
        <h2 className="container">
          <div className="row">
            {courseData.map((crs) => (
              <Course key={crs.id} course={crs}> </Course>
              
            ))}
          </div>
        </h2>
      </div>
    );
};

export default Courses;