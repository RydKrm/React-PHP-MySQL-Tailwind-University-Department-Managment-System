import './PresentSystem.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import TablePresent from './TablePresent';
import SubmitButton from '../Common/SubmitButton';

const PresentSystem = () => {
  const [course, setCourse] = useState([]);
  const [message, setMessage] = useState("");
  const [select_course, set_select_course] = useState({});
  const [students, setStudent] = useState([]);
  const [is_student, set_is_students] = useState(false);

  const obj = JSON.parse(localStorage.getItem("ICE_dept"));
  const teacher_id = obj.id;
  const getCourse = () => {
    axios.post(`http://localhost/dept_project/get_course.php`, teacher_id)
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
    axios.post(`http://localhost/dept_project/present_system_get_all_student.php`,
        select_course
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          setStudent(res.data.student_list.all_data);
          set_is_students(true);
        } else {
          console.log("server not connected");
        }
      });
  };

  const onMarkSubmit = () => {
    axios
      .post(`http://localhost/dept_project/present_adding.php`, students)
      .then((res) => {
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
    <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
      <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
        <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
          <h2 className="text-3xl my-3 text-green text-center">
            Present System
          </h2>
          <form
            method="post"
            className="flex flex-col items-center justify-center"
            onSubmit={onFormSubmit}
          >
            <div>
              <select
                name="Index"
                onChange={on_course_select}
                className="font-roboto border-green border-b w-56  bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-5"
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
            <input
              className="btn font-roboto font-light w-40  text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
              type="submit"
              value="submit"
            />
          </form>

          <h2>{message}</h2>
          {is_student && (
            <TablePresent
              present_adding={present_adding}
              onMarkSubmit={onMarkSubmit}
              students={students}
            ></TablePresent>
          )}
        </div>
      </div>
    </section>
  );
};

export default PresentSystem;
