<?php 
require 'db_connection.php';
 
$selected_course = file_get_contents("php://input");

if(isset($selected_course) && !empty($selected_course)){
    $request = json_decode($selected_course);
  $teacher_id = $request->teacher_id;
  $course_id = $request->course_id;
  $course_section = $request->course_section;
  $course_name = $request->course_name;
  $course_year = $request->course_year;
  $course_semester = $request->course_semester;

 //$sql = "SELECT id,first_name,last_name,roll_number 
   //         FROM students
     //       WHERE year='$course_year' && semester='$course_semester'";

     $sql = "SELECT roll_number,SUM(is_present='present'), COUNT(is_present) 
             FROM present 
             WHERE course_section='$course_section' AND course_name = '$course_name'
             GROUP BY roll_number";
   
    $check = mysqli_query($db,$sql);

    if($check && mysqli_num_rows($check)){
     
      while($row = mysqli_fetch_array($check)){
        $viewjson["roll_number"] = $row["roll_number"];
        $viewjson["total_present"] = $row["SUM(is_present='present')"];
        $viewjson["total_class"] = $row["COUNT(is_present)"];
        $json_array["all_data"][] = $viewjson; 
      }
    echo json_encode(["success"=>true,"student_list"=>$json_array]);
    }else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 