import React, { useState } from 'react';
import SingleInput from './SingleInput';
import SubmitButton from '../SubmitButton';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const EditProfile = () => {
 
 const [message,setMessage] = useState('');
 const navigate = useNavigate();
 const obj = JSON.parse(localStorage.getItem("ICE_dept"));
 const [updateInfo, setUpdateInfo] = useState({"id":obj.id,"role":obj.role});
  const onBlurChange = (event) => {
    setUpdateInfo((val) => ({
      ...val,
      [event.target.name]: event.target.value,
    }));
  };

 const onSubmitChange = (event) => {
     event.preventDefault();
     event.persist();
     
     console.log(updateInfo);
    axios
      .post(`http://localhost/dept_project/profile_update.php`, updateInfo)
      .then((res) => {
        console.log(res.data); 
        console.log("Profile Updated");
        setMessage("Profile Update");
       // navigate("/home");
        return;
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
                    Update Profile {message}
                  </h3>

                  <form onSubmit={onSubmitChange} method="post">
                    <div className="row">
                      <SingleInput
                        type="text"
                        name="home_district"
                        place="Home District"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="thana"
                        place="Thana"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="collage"
                        place="Collage Name"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="fb_profile"
                        place="Facebook Profile"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="linkedin_profile"
                        place="Linkedin Profile"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="project"
                        place="Project"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="bio"
                        place="Your Bio"
                        handle={onBlurChange}
                      ></SingleInput>

                      <SingleInput
                        type="text"
                        name="session"
                        place="Session"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="thesis"
                        place="Thesis"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="text"
                        name="research_field"
                        place="Research Field"
                        handle={onBlurChange}
                      ></SingleInput>
                      <SingleInput
                        type="file"
                        name="image"
                        place="Profile Picture"
                        handle={onBlurChange}
                      ></SingleInput>

                      <div className="col-md-12 mt-4 pt-2">
                        <SubmitButton
                          ButtonHandle={onSubmitChange}
                          ButtonValue={"Update"}
                        ></SubmitButton>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default EditProfile;