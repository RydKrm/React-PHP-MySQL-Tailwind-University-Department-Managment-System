<?php 
require 'db_connection.php';
 
$teacher_id = file_get_contents("php://input");
if(isset($teacher_id) && !empty($teacher_id)){
    //$request = json_decode($course_data);
     
  // $teacher_id = $request->teacher_id;

    $sql = "SELECT course_name,course_id,course_year,course_semester 
            FROM courses 
            WHERE course_sec_a_teacher='$teacher_id'";
    
    $check1 = mysqli_query($db,$sql); 

     $sql = "SELECT course_name,course_id,course_year,course_semester 
            FROM courses 
            WHERE course_sec_b_teacher='$teacher_id'";
    
    $check2 = mysqli_query($db,$sql); 


   
    if($check1 && mysqli_num_rows($check1)){
      while($row = mysqli_fetch_array($check1)){
        $viewjson["course_name"] = $row["course_name"];
        $viewjson["course_year"] = $row["course_year"];
        $viewjson["course_id"] = $row["course_id"];
        $viewjson["course_semester"] = $row["course_semester"];
        $viewjson["course_section"] = 'a';
        $json_array["all_data"][] = $viewjson; 
      }
    }

    if($check2 && mysqli_num_rows($check2)){
      while($row = mysqli_fetch_array($check2)){
        $viewjson["course_name"] = $row["course_name"];
        $viewjson["course_year"] = $row["course_year"];
        $viewjson["course_id"] = $row["course_id"];
        $viewjson["course_semester"] = $row["course_semester"];
        $viewjson["course_section"] = 'b';
        $json_array["all_data"][] = $viewjson; 
      }
    }

    if($check1 && $check2)  echo json_encode(["success"=>true,"course_list"=>$json_array]);
    else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 