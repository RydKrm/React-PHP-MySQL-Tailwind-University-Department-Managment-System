import React from 'react';
import Banner from './Banner/Banner';
import './Home.css'
import RoleInfo from './RoleInfo/RoleInfo';
import SystemInfo from './SystemInfo/SystemInfo';
import Statistics from './Statictics/Statictics';
const Home = () => {
    return (
      <div>
        <Banner></Banner> 
        <Statistics></Statistics>
        <RoleInfo></RoleInfo>
        <SystemInfo></SystemInfo>

     
      </div>
    );
};

export default Home;