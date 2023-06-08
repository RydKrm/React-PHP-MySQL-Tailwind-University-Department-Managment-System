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
      <section className="flex flex-row content-center items-center  h-auto md:h-screen justify-center border-y border-green font-roboto bg-image">
        <div className="img-overlay w-full h-auto md:h-screen flex items-center justify-center bg-dark-black opacity-95">
          <div className="md:border flex flex-col justify-center border-green p-8 my-4 md:my-0 w-2/5 ">
            <h2 className="text-3xl text-green text-center"> Profile </h2>
            <table border={2} className="table table-striped mt-5 ">
              <thead className="thead-dark"></thead>
              <tbody className="bg-dark-black table-bg">
                <tr>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    ID
                  </td>
                  <td className="bg-dark-black text-neutral-400 text-base font-light  border-b border-green">
                    {obj.id}
                  </td>
                </tr>
                <tr>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    Name
                  </td>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    {obj.first_name} {obj.last_name}
                  </td>
                </tr>
                <tr>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    Email
                  </td>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    {obj.email}
                  </td>
                </tr>
                <tr>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    Phone
                  </td>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    {obj.phone}
                  </td>
                </tr>
                <tr>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    Role
                  </td>
                  <td className="bg-dark-black text-neutral-400 text-base font-light border-b border-green">
                    {obj.role}
                  </td>
                </tr>
              </tbody>
            </table>
            <input
              className="btn font-roboto font-light text-neutral-400 hover:text-green hover:border-green bg-dark-black border md:mb-10 mt-2 transition duration-0 hover:duration-700"
              htmlFor="login-modal"
              type="submit"
              value="Logout"
              onClick={onLogOut}
            />
          </div>
        </div>
      </section>
    );
};

export default Profile;