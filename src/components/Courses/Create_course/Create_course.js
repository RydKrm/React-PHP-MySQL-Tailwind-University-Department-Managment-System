import './Create_course.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import SubmitButton from '../../Common/SubmitButton';

const Create_course = () => {
    const [message,setMessage] = useState('');
    const [courseInfo,setCourseInfo] = useState({});
    const [allTeacher, setAllTeacher] = useState([]); 
     

   const find_all_teacher = () => {
     axios.get(`http://localhost/dept_project/find_all_teacher.php`)
       .then((res) => {
         console.log(res.data.user_data.all_data);
         setAllTeacher(res.data.user_data.all_data);
         
       });
   }

   useEffect(find_all_teacher,[]); 
  // console.log("All teacher", allTeacher);  
   
    const onContentChange = (event) => {
      setCourseInfo((values) => ({
        ...values,
        [event.target.name]: event.target.value,
      }));
    //  find_all_teacher();
    };

      console.log("content update");
      console.log(courseInfo);

    const onSubmitChange = (event)=>{
      event.preventDefault();
      event.persist();
      
      axios.post(`http://localhost/dept_project/create_course.php`,courseInfo)
      .then(res=>{
        console.log('Course Created successfully');
        console.log(courseInfo);
        setMessage("Course Created successfully ");
       // setCourseInfo({});
        console.log(res.data);
      })    
    } 


    return (
      <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border border-green p-8 my-4 md:my-0 md:w-3/6 ">
            <h2 className="text-3xl my-3 text-green text-center">
              Create Course
            </h2>
            <form
              onSubmit={onSubmitChange}
              className="flex flex-col items-center justify-center"
              method="post"
            >
              <div className="row">
                {/* course Name */}

                <input
                  onChange={onContentChange}
                  type="text"
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="course_name"
                  placeholder="Course Name"
                  required
                />

                {/* Course Code */}
                <input
                  onChange={onContentChange}
                  type="text"
                  name="course_code"
                  placeholder="Course code"
                  required
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                />

                <select
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="year"
                  onChange={onContentChange}
                >
                  <option> Select Year </option>
                  <option value="1" className="font-roboto text-sky-700 ">
                    First Year
                  </option>
                  <option value="2" className="font-roboto text-sky-700 ">
                    Second Year
                  </option>
                  <option value="3" className="font-roboto text-sky-700 ">
                    Third Year
                  </option>
                  <option value="4" className="font-roboto text-sky-700">
                    Fourth Year
                  </option>
                </select>
              </div>

              <div className="row">
                <select
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="semester"
                  onChange={onContentChange}
                >
                  <option> Select Course Semester </option>
                  <option value="odd">Odd</option>
                  <option value="even">Even</option>
                </select>

                <select
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="sec_a_teacher"
                  onChange={onContentChange}
                >
                  <option> Select Teacher </option>
                  {allTeacher.map((tec) => (
                    <option
                      className="font-roboto text-sky-700"
                      value={tec.teacher_id}
                      key={tec.teacher_id}
                    >
                      {tec.first_name} {tec.last_name}
                    </option>
                  ))}
                </select>
                <select
                  className="font-roboto mt-4 border-green border-b mx-3 w-40 bg-dark-black text-sm font-thin text-neutral-400 focus:ring-green focus:bg-dark-black p-2 transition duration-0 hover:duration-700 hover:bg-medium-black focus:border focus:rounded-sm h-10 focus:outline-none my-3"
                  name="sec_b_teacher"
                  onChange={onContentChange}
                >
                  <option className="font-roboto text-sky-700">
                    Select Course Semester
                  </option>
                  {allTeacher.map((tec) => (
                    <option
                      className="font-roboto text-sky-700"
                      value={tec.teacher_id}
                      key={tec.teacher_id}
                    >
                      {tec.first_name} {tec.last_name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-4 pt-2">
                <SubmitButton
                  // ButtonHandle={onFormSubmit}
                  ButtonValue={"Create"}
                ></SubmitButton>

                <h2>{message}</h2>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
};

export default Create_course;
