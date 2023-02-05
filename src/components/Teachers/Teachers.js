import React from "react";
import teacherData from "../../fakeData/TeachersData.json";
import Teacher from "../Teachers/Teacher/Teacher";
const Teachers = () => {
  return (
    <div>
      <h2 className="container">
        <div className="row">
          {teacherData.map((tec) => (
            <Teacher key={tec.id} teacher={tec}></Teacher>
          ))}
        </div>
      </h2>
    </div>
  );
};

export default Teachers;
