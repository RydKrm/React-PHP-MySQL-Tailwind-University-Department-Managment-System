<?php 
require 'db_connection.php';
 
$data = file_get_contents("php://input");
if(isset($data) && !empty($data)){
    $request = json_decode($data);
    $year = $request->year;
    $semester = $request->semester;

    $sql = "SELECT course_name,course_id,course_year,course_semester 
            FROM courses 
            WHERE course_year='$year' && course_semester='$semester'";
    
    $check = mysqli_query($db,$sql); 

    if($check && mysqli_num_rows($check)){
      while($row = mysqli_fetch_array($check)){
        $viewjson["course_name"] = $row["course_name"];
        $viewjson["course_year"] = $row["course_year"];
        $viewjson["course_id"] = $row["course_id"];
        $viewjson["course_semester"] = $row["course_semester"];
        $json_array["all_data"][] = $viewjson; 
      }
    }


    if($check && mysqli_num_rows($check)>0)  
      echo json_encode(["success"=>true, "course_list"=> $json_array]);

    else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 