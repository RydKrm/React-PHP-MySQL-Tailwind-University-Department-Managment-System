import './PresentSystem.css';
import React, { useEffect, useState } from "react";
import axios from "axios";

const PresentSystem = () => {

  
  const [course, setCourse] = useState([]);
  const [message, setMessage] = useState("");
  const [select_course, set_select_course] = useState({});
  const [students, setStudent] = useState([]);
  const [is_student, set_is_students] = useState(false);

   const obj = JSON.parse(localStorage.getItem("ICE_dept"));
   const teacher_id = obj.id;
  const getCourse = () => {
    axios
      .post(`http://localhost/dept_project/get_course.php`, teacher_id)
      .then((res) => {
        if (res.data.success) {
          setCourse(res.data.course_list.all_data);
          console.log(res.data.course_list.all_data);
        } else {
          setMessage("Not Course Found");
        }
      });
  };

  useEffect(getCourse, []);

  const on_course_select = (event) => {
    set_select_course(course[event.target.value]);
    set_select_course((values) => ({ ...values, teacher_id: teacher_id }));
  };


  const onFormSubmit = (event) => {
    event.preventDefault();
    event.persist();
   // console.log(select_course);
    axios
      .post(
        `http://localhost/dept_project/present_system_get_all_student.php`,
        select_course
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setStudent(res.data.student_list.all_data);
        //  console.log(res.data.student_list.all_data);
         // console.log("Get All Students");
          set_is_students(true);
        } else {
          console.log("server not connected");
        }
      });
  };

 console.log("IS STudent => ", is_student);

  const onMarkSubmit = () => {
    axios
      .post(`http://localhost/dept_project/present_adding.php`, students)
      .then((res) => {

       // console.log("check for success => ",res.data);
      //  console.log("CT Mark added");
      //  if (res.data.success) { 
     //   }

         set_is_students(false);
        setMessage("Mark added!!");
      });
  };

 const present_adding = (id, present) => {
   const next_student = students.map(std => {
     if(std.student_id===id){
       return {
        ...std, is_present : present,
       };
     } else 
      return std;
    }
   );
   setStudent(next_student);
  };

 // console.log("All students", students);

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3
                  className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary 
                     text-4xl font-roboto font-normal animate-bounce "
                >
                  Present System
                </h3>
                <form method="post" onSubmit={onFormSubmit}>
                  <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-5 mb-5 ml-7 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <select
                          name="Index"
                          onChange={on_course_select}
                          className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                        >
                          <option>Select Course </option>
                          {course.map((crs, index) => (
                            <option
                              className="font-roboto text-sky-700 "
                              key={index}
                              value={index}
                            >
                              {crs.course_name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div></div>
                  <input
                    className="btn btn-danger btn-lg font-roboto text-lg font-dark text-white
                           hover:ring-1 duration-200 hover:bg-slate-800 hover:delay-800"
                    type="submit"
                    value="submit"
                  />
                </form>

                <h2>{message}</h2>
                {is_student === true && (
                  <div className="overflow-x-auto mt-5">
                    <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lsm font-roboto ">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th className="w-2/5">Name</th>
                          <th className="w-1/5">Roll number</th>
                          <th className="w-1/5">present</th>
                        </tr>
                      </thead>
                      <tbody>
                        {students.map((std, index) => (
                          <tr className="border-2 border-slate-200" key={index}>
                            <td>
                              {std.first_name} {std.last_name}
                            </td>
                            <td>{std.roll_number}</td>
                            <td>
                              {std.is_present === "not present" && (
                                <button
                                  name="marks"
                                  className="btn bg-rose-500 ring-1 border-white"
                                  onClick={() =>
                                    present_adding(std.student_id, "present")
                                  }
                                >
                                  {std.is_present}
                                </button>
                              )}
                              {std.is_present === "present" && (
                                <button
                                  name="marks"
                                  className="btn btn-success text-white"
                                  onClick={() =>
                                    present_adding(
                                      std.student_id,
                                      "not present"
                                    )
                                  }
                                >
                                  {std.is_present}
                                </button>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <input
                      className="btn btn-danger btn-lg mt-5"
                      type="submit"
                      value="submit"
                      onClick={onMarkSubmit}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PresentSystem;


