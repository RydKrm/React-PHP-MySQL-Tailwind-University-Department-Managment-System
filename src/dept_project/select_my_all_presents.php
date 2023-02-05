<?php 
require 'db_connection.php';
 
$data = file_get_contents("php://input");
if(isset($data) && !empty($data)){
    $request = json_decode($data);
    $year = $request->year;
    $semester = $request->semester;
    $student_id = $request->student_id;
    $course_id = $request->course;
    $course_section = $request->section;

    $sql = "SELECT is_present,present_date 
            FROM present 
            WHERE course_year='$year' && course_semester='$semester' && course_id = '$course_id' && course_section='$course_section' && student_id='$student_id'   ";
    
    $check = mysqli_query($db,$sql); 
    // print_r($check);
    if($check && mysqli_num_rows($check)){
      while($row = mysqli_fetch_array($check)){
        $viewjson["student_id"] = $student_id;
        $viewjson["course_year"] = $year;
        $viewjson["course_id"] = $course_id;
        $viewjson["course_semester"] = $semester;
        $viewjson["course_section"] = $course_section;
        $viewjson["is_present"] = $row["is_present"];
        $viewjson["present_date"] = $row["present_date"];
        $json_array["all_data"][] = $viewjson; 
      }
    }


    if($check && mysqli_num_rows($check)>0)  
      echo json_encode(["success"=>true, "present_list"=> $json_array]);
   // else if(mysqli_num_rows($check)==0){
   //   echo json_encode(["success"=>'not_present']);
  //  }
    else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 