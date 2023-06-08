import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ClassTestTable from './ClassTestTable';

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
      <section className="flex flex-row content-center items-center  h-auto md:min-h-max justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:min-h-max flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
            <h2 className="text-3xl my-3 text-green text-center">
              Class Test Marks
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
                  className="font-roboto border-green border-b w-40  bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                >
                  <option>Select Course </option>
                  {course.map((crs, index) => (
                    <option key={index} value={index}>
                      {crs.course_name}
                    </option>
                  ))}
                </select>
                <input
                  onChange={add_total_mark}
                  type="text"
                  name="total_mark"
                  placeholder="Total Mark"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />

                <input
                  onChange={add_total_mark}
                  type="text"
                  name="class_test_number"
                  placeholder="Class Test Number"
                  required
                  className="font-roboto border-green border-b mt-4 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />
              </div>

              <div className="my-5">
                <input
                  className="btn font-roboto font-light w-40  text-neutral-400 hover:text-neutral-100 hover:border-white hover:bg-light-black bg-dark-black border-1 md:mb-10 mt-2 transition duration-0 hover:duration-700"
                  type="submit"
                  value="submit"
                />
              </div>
            </form>

            <h2>{message}</h2>
            {is_student && (
              <ClassTestTable
                mark_adding={mark_adding}
                students={students}
                onMarkSubmit={onMarkSubmit}
              ></ClassTestTable>
            )}
          </div>
        </div>
      </section>
    );
};

export default Class_Test;