import './App.css';

import { Route, Routes } from "react-router-dom";
import Header from'./components/Header/Header';
import Home from './components/Home/Home';
import Students from './components/Students/Students';
import Courses from './components/Courses/Courses';
import Teachers from './components/Teachers/Teachers';
import About from './components/About/About';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import CreateCourse from './components/Courses/Create_course/Create_course';
import ClassTest from './components/Class_Test/Class_Test';
import PresentSystem from './components/PresentSystem/PresentSystem';
import Profile from './components/Profile/Profile';
import MyPresents from './components/MyPresents/MyPresents';
import MyClassTestMarks from './components/MyClassTestMarks/MyClassTestMarks';
import ProfileSingle from './components/Common/ProfileSingle/ProfileSingle';
import EditProfile from './components/Common/EditProfile/EditProfile';
import ViewAllPresent from './components/ViewAllPresent/ViewAllPresent';
import ViewAllMark from './components/ViewAllMark/ViewAllMark';
import { createContext, useState } from 'react';

export const UserContext = createContext("none");

function App() {
  const [checkUser,setCheckUser] = useState({userRole:"none"})
  
  return (
    <UserContext.Provider value={[checkUser, setCheckUser]}>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/students" element={<Students></Students>}></Route>
          <Route path="/teachers" element={<Teachers></Teachers>}></Route>
          <Route path="/courses" element={<Courses></Courses>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route
            path="/create_course"
            element={<CreateCourse> </CreateCourse>}
          ></Route>
          <Route path="/class_test" element={<ClassTest />}></Route>
          <Route path="/present_system" element={<PresentSystem />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/my_presents" element={<MyPresents />}></Route>
          <Route path="/my_ct_marks" element={<MyClassTestMarks />}></Route>
          <Route path="/profile_single" element={<ProfileSingle />}></Route>
          <Route path="/edit_profile" element={<EditProfile />}></Route>
          <Route path="/view_all_present" element={<ViewAllPresent />}></Route>
          <Route path="/view_all_mark" element={<ViewAllMark />}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>

        <Footer></Footer>
      </div>
    </UserContext.Provider>
  );
}

export default App;
