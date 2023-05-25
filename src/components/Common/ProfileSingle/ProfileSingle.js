import React from 'react';

import { NavLink, useNavigate } from 'react-router-dom';
import TableRow from './TableRow';
const ProfileSingle = () => {

    const navigate = useNavigate();
    const onLogOut = ()=>{
        localStorage.removeItem("ICE_dept");
        navigate('/home');
    } 

    const obj = JSON.parse(localStorage.getItem("ICE_dept"));
    return (
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row justify-content-center align-items-center h-100">
            <div className="col-12 col-lg-9 col-xl-7">
              <div className="card shadow-2-strong card-registration">
                <div className="card-body p-4 p-md-5">
                  <h3 className="mb-4 pb-2 pb-md-0 mb-md-5">
                    Create Course Form
                  </h3>
                  <table border={2} className="table table-striped mt-5">
                    <thead className="thead-dark"></thead>
                    <tbody>
                      <TableRow name="ID" value={obj.id}></TableRow>
                      <TableRow
                        name="Name"
                        value={obj.first_name + " " + obj.last_name}
                      ></TableRow>
                      <TableRow name="Email" value={obj.email}></TableRow>
                      <TableRow name="Phone" value={obj.phone}></TableRow>
                      <TableRow name="Role" value={obj.role}></TableRow>
                      <TableRow
                        name="Home District"
                        value="Sirajgonj"
                      ></TableRow>
                      <TableRow name="Thana" value="Enayetpur"></TableRow>
                      <TableRow
                        name="College"
                        value="Govn. Belkuchi College"
                      ></TableRow>
                      <TableRow
                        name="Facebook Link"
                        value="fb.me/al_riyad_karim"
                      ></TableRow>
                      <TableRow
                        name="Linkedin Link"
                        value="linkedin.com/Riyad_karim"
                      ></TableRow>
                      <TableRow
                        name="Bio"
                        value="programming, web development,UI/UX design"
                      ></TableRow>
                      {/* student */}
                      <TableRow
                        name="Current Year"
                        value="Fourth Year"
                      ></TableRow>
                      <TableRow name="Current Semester" value="Even"></TableRow>
                      <TableRow
                        name="Project"
                        value="Department present and class test mark management system"
                      ></TableRow>
                      <TableRow
                        name="Thesis"
                        value="Database Management System"
                      ></TableRow>
                      {/* Teachers */}
                      <TableRow
                        name="Class List"
                        value="Data Structure, Radio Engineering, Digital Signal Processing"
                      ></TableRow>
                      <TableRow
                        name="Research Field"
                        value="Wave Field generation"
                      ></TableRow>
                    </tbody>
                  </table>
                  <button className="btn btn-primary mb-1" onClick={onLogOut}>
                    Logout
                  </button>
                  <NavLink className="btn btn-accent mb-5" to="/edit_profile">
                    Edit Profile
                  </NavLink>
                  ;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default ProfileSingle;