import './MyClassTestMarks.css';

import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectOption from '../Common/Select_option/SelectOption';
import ClassTestTable from './ClassTestTable';
import SubmitButton from '../Common/SubmitButton';

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
    axios.post(
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
                        <SelectOption
                          handle_option={on_year_select}
                          name={"year"}
                          options={[
                            ["1", "First Year"],
                            ["2", "Second Year"],
                            ["3", "Third Year"],
                            ["4", "fourth Year"],
                          ]}
                        ></SelectOption>
                      </div>
                    </div>
                    <div className="col-md-6 mb-6 d-flex align-items-center">
                      <div className="form-outline datepicker w-100">
                        <SelectOption
                          handle_option={on_semester_select}
                          name={"semester"}
                          options={[
                            ["odd", "Odd"],
                            ["even", "Even"],
                          ]}
                        ></SelectOption>
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
                  <SubmitButton 
                  ButtonHandle={on_course_submit} 
                  ButtonValue={"Submit"}>                 
                  </SubmitButton>
                </form>

                <h2>{message}</h2>
                {is_ct && (
                  <ClassTestTable class_test={class_test}></ClassTestTable>
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