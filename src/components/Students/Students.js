import React, { useEffect, useState } from "react";
import "./Students.css";
// import studentData from "../../fakeData/studentsData.json";
import Student from "./Student/Student";
import axios from "axios";
const Students = () => {
 const [student,setStudent] = useState([]);
   useEffect(() => {
     axios
       .get(`http://localhost/dept_project/view_all_student.php`)
       .then((res) => {
         console.log("Student data", res.data);
         if (res.data.success) {
           setStudent(res.data.user_data.all_data);
         }
       })
       .catch((err) => {
         console.error(err);
       });
   }, []);

  return (
    <div className="bg-dark-black border-2 border-t-green">
      <div className="container">
        <div className="grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-4">
          {student.map((std) => (
            <Student key={std.id} student={std}></Student>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Students;
