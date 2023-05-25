import './Profile.css';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';

const Profile = () => {
  const [checkUser, setCheckUser] = useContext(UserContext);
    const navigate = useNavigate();
    const onLogOut = ()=>{
        setCheckUser({userRole:"none"});
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
                        <tr>
                          <td>ID</td>
                          <td>{obj.id}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>
                            {obj.first_name} {obj.last_name}
                          </td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{obj.email}</td>
                        </tr>
                        <tr>
                          <td>Phone</td>
                          <td>{obj.phone}</td>
                        </tr>
                        <tr>
                          <td>Role</td>
                          <td>{obj.role}</td>
                        </tr>
                      </tbody>
                    </table>

                    <button className="btn btn-primary mb-5" onClick={onLogOut}>
                      Logout
                    </button>
               
                  ;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Profile;