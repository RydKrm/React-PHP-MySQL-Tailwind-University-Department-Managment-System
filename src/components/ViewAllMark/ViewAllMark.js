import React, { useEffect, useState } from "react";
import SubmitButton from "../Common/SubmitButton";
import axios from "axios";
import AllPresentTable from "./AllPresentTable";

const ViewAllMark = () => {
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
    console.log(select_course);
    axios
      .post(
        `http://localhost/dept_project/view_all_mark(teacher).php`,
        select_course,
        { mode: "cors" }
      )
      .then((res) => {
        console.log("All students", res.data);
        if (res.data.success) {
          setStudent(res.data.student_list.all_data);
          set_is_students(true);
        } else {
          console.log("server not connected");
        }
      });
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-12 col-lg-9 col-xl-7">
            <div className="card shadow-2-strong card-registration">
              <div className="card-body p-4 p-md-5">
                <h3
                  className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary 
                     text-4xl font-roboto font-normal"
                >
                  All Marks
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
                  <SubmitButton
                    ButtonHandle={onFormSubmit}
                    ButtonValue={"Submit"}
                  ></SubmitButton>
                </form>

                <h2>{message}</h2>
                {is_student && (
                  <AllPresentTable students={students}></AllPresentTable>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewAllMark;
