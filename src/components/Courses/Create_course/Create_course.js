import './Create_course.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

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
      <div>
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
                      Create Course
                    </h3>
                    <form onSubmit={onSubmitChange} method="post">
                      <div className="row">
                        {/* course Name */}
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              onChange={onContentChange}
                              type="text"
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                              name="course_name"
                              placeholder="Course Name"
                              required
                            />
                          </div>
                        </div>

                        {/* Course Code */}
                        <div className="col-md-6 mb-4">
                          <div className="form-outline">
                            <input
                              onChange={onContentChange}
                              type="text"
                              name="course_code"
                              placeholder="Course code"
                              required
                              className="form-control form-control-lg input-bordered input-info text-sky-600 text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 pb-2">
                          <select
                            className="select form-control-lg select-info w-full max-w-xs font-roboto 
                                       text-sm font-light hover:ring-1 duration-200 "
                            name="year"
                            onChange={onContentChange}
                          >
                            <option> Select Year </option>
                            <option
                              value="1"
                              className="font-roboto text-sky-700 "
                            >
                              First Year
                            </option>
                            <option
                              value="2"
                              className="font-roboto text-sky-700 "
                            >
                              Second Year
                            </option>
                            <option
                              value="3"
                              className="font-roboto text-sky-700 "
                            >
                              Third Year
                            </option>
                            <option
                              value="4"
                              className="font-roboto text-sky-700"
                            >
                              Fourth Year
                            </option>
                          </select>
                        </div>
                        <div className="col-md-6 mb-4 pb-2">
                          <select
                            className="select form-control-lg select-info w-full max-w-xs 
                            hover:ring-1 duration-200 font-roboto text-sm font-light"
                            name="semester"
                            onChange={onContentChange}
                          >
                            <option> Select Course Semester </option>
                            <option value="odd">Odd</option>
                            <option value="even">Even</option>
                          </select>
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <select
                            className="select form-control-lg select-info w-full 
                            hover:ring-1 duration-200 max-w-xs font-roboto text-sm font-light"
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
                        </div>

                        <div className="col-md-6 mb-4 pb-2">
                          <select
                            className="select form-control-lg select-info 
                            hover:ring-1 duration-200 w-full max-w-xs font-roboto text-sm font-light"
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
                      </div>

                      <div className="mt-4 pt-2">
                        <input
                          className="btn btn-info btn-lg font-roboto text-lg font-light text-white
                           hover:ring-1 duration-200 hover:bg-sky-500 hover:delay-800"
                          type="submit"
                          value="Register"
                        />
                        <h2>{message}</h2>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Create_course;
