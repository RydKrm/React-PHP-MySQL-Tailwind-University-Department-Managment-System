import './MyPresents.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import SelectOption from '../Common/Select_option/SelectOption';
import TablePresent from './TablePresent';

const MyPresents = () => {
  const [course, set_Course] = useState([]);
  const [message, setMessage] = useState("");
  const [select_course, set_select_course] = useState({});
  const [have_course,set_have_course] = useState(false); 
  const [present, set_present] = useState([]);
  const [is_present,set_is_present] = useState(false);
  const[course_name,set_course_name] = useState('');
  const on_year_select = (event) => {
    set_select_course((values) => ({ ...values, [event.target.name]: event.target.value }));
  };
 const get_course = ()=>{
     axios.post(
        `http://localhost/dept_project/my_present_get_course.php`,
        select_course
      )
      .then(res => {
          console.log(res.data);
        if (res.data.success) {
           set_Course(res.data.course_list.all_data);
           set_have_course(true);
        } else {
          setMessage("Course Not Found");
        }
      })
  }

  const on_semester_select = (event)=>{
    set_select_course((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  }

    useEffect(get_course,[select_course]);
  const on_course_select = (event)=>{
     set_select_course((values) => ({
       ...values,
       [event.target.name]: course[event.target.value].course_id,
     }));
    set_course_name(course[event.target.value].course_name);
     const obj = JSON.parse(localStorage.getItem("ICE_dept"));

    set_select_course((values) => ({
   ...values, student_id: obj.id
 })); 
  }
  

  const on_course_submit = (event)=>{
     event.preventDefault();
     event.persist();
    axios.post(`http://localhost/dept_project/select_my_all_presents.php`,select_course)
    .then(res=>{
        console.log("Present data", res.data);
       if(res.data.success){
        set_present(res.data.present_list.all_data);
        set_is_present(true);
       } else if(res.data.success==='not_present'){
         setMessage("present not found ");
       } else {
         setMessage("False");
       }
    })
  }

  return (
    <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
      <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
        <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
          <h2 className="text-3xl my-3 text-green text-center">
            Class Presents
          </h2>
          <form className="flex flex-col items-center justify-center">
            <div className="row">
              
                  <SelectOption
                    handle_option={on_year_select}
                    name={"year"}
                    options={[
                      ["1", "first year"],
                      ["2", "second year"],
                      ["3", "third year"],
                      ["4", "fourth year"],
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

              {have_course && (

                    <SelectOption
                      handle_option={on_year_select}
                      name={"section"}
                      options={[
                        ["a", "Section A"],
                        ["b", "Section B"],
                      ]}
                    ></SelectOption>
              )}
            </div>
            <input className="btn font-roboto font-light w-40  text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
              type="submit"
              value="submit"
              onClick={on_course_submit}
            />
          </form>
          <h2>{message}</h2>
          {is_present && (
            <TablePresent
              course_name={course_name}
              present={present}
            ></TablePresent>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyPresents;