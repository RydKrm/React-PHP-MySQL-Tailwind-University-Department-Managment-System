<?php 
require 'db_connection.php';
 
$all_students = json_decode(file_get_contents("php://input")); //php object arrat 
 if(isset($all_students) && !empty($all_students)){
  foreach($all_students as $cur => $val){

  $first_name = $val->first_name;
  $last_name = $val->last_name;
  $teacher_id = $val->teacher_id;
  $course_id = $val->course_id;
  $student_id = $val->student_id;
  $course_section = $val->course_section;
  $course_name = $val->course_name;
  $course_year = $val->course_year;
  $course_semester = $val->course_semester;
  $is_present = $val->is_present;

  $roll_number = $val->roll_number;
  $date = date("jS  F Y") ;

  $sql = "INSERT INTO present(first_name,last_name,course_id,student_id,teacher_id,course_section,course_name,course_year,course_semester,is_present,roll_number,present_date) 
      VALUES ('$first_name','$last_name','$course_id','$student_id','$teacher_id','$course_section','$course_name','$course_year','$course_semester','$is_present','$roll_number','$date')";

     $check = mysqli_query($db,$sql);

      if($check){
    echo json_encode(["success"=>true]);
    }else {
      echo json_encode(["success"=>false]);
    }

 }
}      

   


  

?> 