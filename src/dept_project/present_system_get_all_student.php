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


    $sql = "SELECT id,first_name,last_name,roll_number 
            FROM students
            WHERE year='$course_year' && semester='$course_semester'";
   
     $check = mysqli_query($db,$sql);
   /* if ($check) {
      echo "check working";
      echo mysqli_num_rows($check);
    } else {
      echo "check not working";
    } */

   
    if($check && mysqli_num_rows($check)){
    // echo "check all data";
      while($row = mysqli_fetch_array($check)){
        $viewjson["student_id"] = $row["id"];
        $viewjson["first_name"] = $row["first_name"];
        $viewjson["last_name"] = $row["last_name"];
        $viewjson["roll_number"] = $row["roll_number"];

        $viewjson["course_name"] = $course_name;
        $viewjson["course_year"] = $course_year;
        $viewjson["course_id"] = $course_id;
        $viewjson["course_semester"] = $course_semester;
        $viewjson["course_section"] = $course_section;
        $viewjson["teacher_id"] = $teacher_id;
        $viewjson["is_present"] = 'present';

        $json_array["all_data"][] = $viewjson; 
      }
    echo json_encode(["success"=>true,"student_list"=>$json_array]);
    }else {
      echo json_encode(["success"=>false]);
    }

         
}
?> 