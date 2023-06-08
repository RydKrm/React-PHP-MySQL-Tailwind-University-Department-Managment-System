<?php 
require 'db_connection.php';

 $sql = "select course_name,course_year,course_code,course_semester,course_sec_a_teacher,course_sec_b_teacher from courses";
 $check = mysqli_query($db,$sql);

 if($check && mysqli_num_rows($check)>0){
  while($row = mysqli_fetch_array($check)){
    $view_json["course_name"] = $row["course_name"];
    $view_json["course_year"]  = $row["course_year"];
    $view_json["course_code"]  = $row["course_code"];
    $view_json["course_semester"]  = $row["course_semester"];
    $view_json['sec_a'] = $row["course_sec_a_teacher"];
    $view_json['sec_b'] = $row["course_sec_b_teacher"];

    $list_data["all_data"][] = $view_json;
  }
  echo json_encode(["success"=>true,"user_data"=>$list_data]);
 } else {
  echo json_encode(["success"=>false]);
 }

 ?>