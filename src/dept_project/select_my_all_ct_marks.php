<?php 
require 'db_connection.php';
 
$data = file_get_contents("php://input");
if(isset($data) && !empty($data)){
    $request = json_decode($data);
    $year = $request->year;
    $semester = $request->semester;
    $student_id = $request->student_id;
    $course_id = $request->course;

   $sql = "SELECT class_test_number,course_name,course_section,total_mark,mark 
            FROM class_test 
            WHERE course_year='$year' && course_semester='$semester' && course_id = '$course_id' && student_id='$student_id'   ";
    
    $check = mysqli_query($db,$sql); 
    if($check && mysqli_num_rows($check)){
      while($row = mysqli_fetch_array($check)){
        $viewjson["course_name"] = $row['course_name'];
        $viewjson["course_section"] = $row['course_section'];
        $viewjson["class_test_number"] = $row["class_test_number"];
        $viewjson["total_mark"] = $row["total_mark"];
        $viewjson["mark"] = $row["mark"];
        $json_array["all_data"][] = $viewjson; 
      }
    }


    if($check && mysqli_num_rows($check)>0)  
      echo json_encode(["success"=>true, "present_list"=> $json_array]);
    else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 