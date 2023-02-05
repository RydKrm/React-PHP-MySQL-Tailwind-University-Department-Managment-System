import './MyClassTestMarks.css';

import React, { useEffect, useState } from "react";
import axios from "axios";

const MyClassTestMarks = () => {
  const [course, set_Course] = useState([]);
  const [message, setMessage] = useState("");
  const [select_course, set_select_course] = useState({});
  const [have_course, set_have_course] = useState(false);
  const [class_test, set_class_test] = useState([]);
  const [is_ct, set_is_ct] = useState(false);
 // const [course_name, set_course_name] = useState("");

  const on_year_select = (event) => {
    set_select_course((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const get_course = () => {
    axios
      .post(
        `http://localhost/dept_project/my_present_get_course.php`,
        select_course
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          set_Course(res.data.course_list.all_data);
          set_have_course(true);
        } else {
          setMessage("Course Not Found");
        }
      });
  };

  const on_semester_select = (event) => {
    set_select_course((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(get_course, [select_course]);

  //console.log("Selected Course",select_course);

  const on_course_select = (event) => {
    set_select_course((values) => ({
      ...values,
      [event.target.name]: course[event.target.value].course_id,
    }));
   // set_course_name(course[event.target.value].course_name);
    const obj = JSON.parse(localStorage.getItem("ICE_dept"));

    set_select_course((values) => ({
      ...values,
      student_id: obj.id,
    }));
  };

  console.log("class test ",class_test);

  const on_course_submit = (event) => {
    event.preventDefault();
    event.persist();
    axios
      .post(
        `http://localhost/dept_project/select_my_all_ct_marks.php`,
        select_course
      )
      .then((res) => {
        console.log("Present data", res.data);
        if (res.data.success) {
          set_class_test(res.data.present_list.all_data);
          set_is_ct(true);
           setMessage("Marks found ");
        } else {
           setMessage("Marks not found ");
          set_is_ct(false);
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
                     text-4xl font-roboto font-normal animate-bounce "
                >
                  Class Test Marks
                </h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-6 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <select
                          name="year"
                          onChange={on_year_select}
                          className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                        >
                          <option value="">Select Course </option>
                          <option value="1">First Year </option>
                          <option value="2">Second Year </option>
                          <option value="3">Third Year </option>
                          <option value="4">Fourth Year </option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6 mb-6 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <select
                          name="semester"
                          onChange={on_semester_select}
                          className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                        >
                          <option value="odd">Odd </option>
                          <option value="even">Even </option>
                        </select>
                      </div>
                    </div>

                    {have_course && (
                      <div className="col-md-6 mb-6 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <select
                            name="course"
                            onChange={on_course_select}
                            className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                          >
                            <option value="">Select Course </option>
                            {course.map((crs, index) => (
                              <option key={index} value={index}>
                                {crs.course_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800"
                    type="submit"
                    value="submit"
                    onClick={on_course_submit}
                  />
                </form>

                <h2>{message}</h2>

                {is_ct && (
                  <div className="overflow-x-auto mt-5">
                    <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
                      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                          <th className="w-1/6"> Course Name</th>
                          <th className="w-1/6">Course Section</th>
                          <th className="w-1/6">CT Number</th>
                          <th className="w-1/6">Total mark</th>
                          <th className="w-1/6">My Mark</th>
                        </tr>
                      </thead>
                      <tbody>
                        {class_test.map((ct, index) => (
                          <tr key={index} className="border-2 border-slate-200">
                            <td>{ct.course_name}</td>
                            <td>{ct.course_section}</td>
                            <td>{ct.class_test_number}</td>
                            <td>{ct.total_mark}</td>
                            <td>{ct.mark}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default MyClassTestMarks;