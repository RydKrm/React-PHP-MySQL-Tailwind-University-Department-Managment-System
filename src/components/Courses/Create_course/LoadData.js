import axios from 'axios';
import React, { useEffect, useState } from 'react';

const LoadData = () => {
  const [data,setData] = useState({});   
  const find_all_teacher = () => {
    axios
      .get(`http://localhost/dept_project/find_all_teacher.php`)
      .then((res) => {
       // console.log(res.data.user_data.all_data);
        setData(res.data.user_data.all_data);
      });
  };
  console.log(data)
   useEffect(find_all_teacher,[]);

  return <div></div>;
};

export default LoadData;