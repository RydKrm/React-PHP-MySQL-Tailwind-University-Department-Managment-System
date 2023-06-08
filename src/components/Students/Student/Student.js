import React from "react";

const Student = (props) => {
  const { first_name, last_name,roll_number, email, phone } = props.student;
  return (
   <div className="border-2 mt-3 border-green">
      <div className="card text-size bg-dark-black my-3">
        <ul className=" bg-dark-black font-roboto text-md text-center">
          <li className="h-10 items-center text-base font-roboto text-neutral-300">
            Name: {first_name} {last_name}
          </li>
          <li className="h-10 items-center text-base font-roboto text-neutral-300">
            Roll : {roll_number}
          </li>
          <li className="h-10 items-center text-base font-roboto text-neutral-300">
            Email : {email}{" "}
          </li>
          <li className="h-10 items-center text-base font-roboto text-neutral-300">
            Phone : {phone}{" "}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Student;
