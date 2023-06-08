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
    <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
      <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
        <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
          <h2 className="text-3xl my-3 text-green text-center">
            Class Test Marks
          </h2>
          <form className="flex flex-col items-center justify-center">
            <div>
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
              <SelectOption
                handle_option={on_semester_select}
                name={"semester"}
                options={[
                  ["odd", "Odd"],
                  ["even", "Even"],
                ]}
              ></SelectOption>
            </div>
            <div>
              {have_course && (
                <select
                  name="course"
                  onChange={on_course_select}
                  className="font-roboto border-green border-b w-40  bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3 mx-3"
                >
                  <option value="">Select Course </option>
                  {course.map((crs, index) => (
                    <option key={index} value={index}>
                      {crs.course_name}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <SubmitButton
              ButtonHandle={on_course_submit}
              ButtonValue={"Submit"}
            ></SubmitButton>
          </form>

          <h2>{message}</h2>
          {is_ct && <ClassTestTable class_test={class_test}></ClassTestTable>}
        </div>
      </div>
    </section>
  );
};

export default MyClassTestMarks;