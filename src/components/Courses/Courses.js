import React, { useEffect, useState } from 'react';
import './Courses.css';
import courseData from '../../fakeData/courseData.json'
import Course from './Course/Course';
import axios from 'axios';
const Courses = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost/dept_project/view_all_course.php`)
      .then((res) => {
        console.log("Course data", res.data);
        if (res.data.success) {
          setCourse(res.data.user_data.all_data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="bg-dark-black border-2 border-t-green">
      <div className="container">
        <div className="grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-4">
          {course.map((crs) => (
            <Course key={crs.course_code} course={crs}></Course>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;