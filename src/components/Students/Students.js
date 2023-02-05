import React from "react";
import "./Students.css";
import studentData from "../../fakeData/studentsData.json";
import Student from "./Student/Student";
const Students = () => {
  return (
    <div>
      <h2 className="container">
        <div className="row">
          {studentData.map((std) => (
            <Student key={std.id} student={std}></Student>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Students;
