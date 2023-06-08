import React, { useEffect, useState } from "react";
// import teacherData from "../../fakeData/TeachersData.json";
import Teacher from "../Teachers/Teacher/Teacher";
import axios from "axios";
const Teachers = () => {
  const [teacher,setTeacher] = useState([]);
  useEffect(()=>{
     axios
       .get(
         `http://localhost/dept_project/view_all_teacher.php`)
       .then((res) => {
         console.log("Present data", res.data);
         if (res.data.success) {
           setTeacher(res.data.user_data.all_data);
         } 
       })
       .catch((err)=>{
         console.log(err);
       });
  },[])
  return (
    <div className="bg-dark-black border-2 border-t-green">
      <div className="container">
        <div className="grid grid-flow-row gap-4 grid-cols-1 md:grid-cols-4">
          {teacher.map((tec) => (
            <Teacher key={tec.last_name} teacher={tec}></Teacher>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
