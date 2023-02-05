import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Class_Test = () => {
 
const [course,setCourse] =useState([]);    
const [message,setMessage] = useState('');
const [select_course,set_select_course] = useState({});
const [students,setStudent] = useState([]);
const [is_student,set_is_students] = useState(false);

 
 const obj = JSON.parse(localStorage.getItem('ICE_dept'));
 const teacher_id = obj.id;
 const getCourse = ()=>{ 

    axios.post(`http://localhost/dept_project/get_course.php`, teacher_id)
        .then((res) => {
            if(res.data.success){
               setCourse(res.data.course_list.all_data)
               console.log(res.data.course_list.all_data); 
               
            } else {
                setMessage('Not Course Found');
            }
            
        });
 }

 useEffect(getCourse,[]);  

 const on_course_select = (event)=>{
    set_select_course(values=> ({...values,'course_id': course[event.target.value].course_id}));
    set_select_course(values=> ({...values,'course_year': course[event.target.value].course_year}));
    set_select_course(values=> ({...values,'course_semester': course[event.target.value].course_semester}));
    set_select_course(values=> ({...values,'course_name': course[event.target.value].course_name}));
    set_select_course(values=> ({...values,'course_section': course[event.target.value].course_section}));

   //set_select_course(course[event.target.value]);
   set_select_course(values=> ({...values,'teacher_id':teacher_id}));
   
 }

 const add_total_mark = (event)=>{
    set_select_course(values=>({...values,[event.target.name]:event.target.value}));
 }
 
const onFormSubmit =(event)=>{  
     event.preventDefault();
     event.persist();

    axios.post(
        `http://localhost/dept_project/class_test_get_all_student.php`,
        select_course)
    .then((res) => {
        console.log(res.data);
        if (res.data.success) {
            setStudent(res.data.student_list.all_data)
          console.log(res.data.student_list.all_data);
          console.log("Get All Students");
          set_is_students(true);
        } else {
          console.log("server not connected");
        }
      });
}
   // console.log("Select Course",select_course);
   const mark_adding=(event,index)=>{
         //console.log('Index number ',event.target.value);
        // setStudent((val) => ({...val, students[index].mark :26}));
        students[index].mark =  event.target.value;

   }  

  const onMarkSubmit = ()=>{
    axios.post(`http://localhost/dept_project/ct_mark_adding.php`,students)
    .then((res)=>{
       console.log(res.data);
       console.log("CT Mark added");
       
       if(res.data.success)set_is_students(false);
       setMessage('Mark added!!')
    })

  }

// console.log('All students', students);

 //console.log(select_course);

    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3
                    className="mb-4 pb-2 pb-md-0 mb-md-5 text-center text-primary 
                     text-4xl font-roboto font-normal "
                  >
                    Mark Distribution
                  </h3>
                  <form method="post" onSubmit={onFormSubmit}>
                    <div className="row">
                      <div className="col-md-4 mb-4 d-flex align-items-center">
                        <div className="form-outline datepicker w-100">
                          <select
                            name="Index"
                            onChange={on_course_select}
                            className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                          >
                            <option>Select Course </option>
                            {course.map((crs, index) => (
                              <option key={index} value={index}>
                                {crs.course_name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            onChange={add_total_mark}
                            type="text"
                            name="total_mark"
                            placeholder="Total Mark"
                            required
                            className="form-control form-control-lg  input-bordered 
                            input-info text-sky-600 text-sm mt-2 pt-3 font-roboto font-light hover:ring-1"
                          />
                        </div>
                      </div>
                      <div className="col-md-4 mb-4 pb-2">
                        <div className="form-outline">
                          <input
                            onChange={add_total_mark}
                            type="text"
                            name="class_test_number"
                            placeholder="Class Test Number"
                            required
                            className="form-control form-control-lg  input-bordered 
                            input-info text-sky-600 text-sm mt-2 pt-3 font-roboto font-light hover:ring-1"
                          />
                        </div>
                      </div>
                    </div>

                    <div></div>
                    <input
                      className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800"
                      type="submit"
                      value="submit"
                    />
                  </form>

                  <h2>{message}</h2>
                  {is_student === true ? (
                    <div className="overflow-x-auto mt-5">
                      <table className="w-full text-left text-gray-500 dark:text-gray-400 text-lg">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                          <tr>
                            <th className="w-2/5">Name</th>
                            <th className="w-1/5" >Roll number</th>
                            <th className="w-1/5">Mark</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map((std, index) => (
                            <tr key={index} className='border-2 border-slate-200'>
                              <td >
                                {std.first_name} {std.last_name}
                              </td>
                              <td>{std.roll_number}</td>
                              <td>
                                <input
                                  type="text"
                                  name="marks"
                                  placeholder='Mark'
                                  className="form-control form-control-lg input-bordered text-sm hover:ring-1 hover:border-sky-500"
                                  onBlur={(event) => mark_adding(event, index)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <input
                        className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800 mt-5"
                        type="submit"
                        value="submit"
                        onClick={onMarkSubmit}
                      />
                    </div>
                  ) : (
                    <span> </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Class_Test;