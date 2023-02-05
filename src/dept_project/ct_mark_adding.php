<?php 
require 'db_connection.php';
 
$all_students = json_decode(file_get_contents("php://input")); //php object arrat 
 if(isset($all_students) && !empty($all_students)){
  foreach($all_students as $cur => $val){

  $teacher_id = $val->teacher_id;
  $course_id = $val->course_id;
  $student_id = $val->student_id;
  $course_section = $val->course_section;
  $course_name = $val->course_name;
  $course_year = $val->course_year;
  $course_semester = $val->course_semester;
  $total_mark = $val->total_mark;
  $class_test_number = $val->class_test_number;
  $mark = $val->mark;
  $roll_number = $val->roll_number;

   $sql = "INSERT INTO class_test(course_id,student_id,teacher_id,course_section,course_name,course_year,course_semester,total_mark,class_test_number,mark,roll_number) 
      VALUES ('$course_id','$student_id','$teacher_id','$course_section','$course_name','$course_year','$course_semester','$total_mark','$class_test_number','$mark','$roll_number')";

     $check = mysqli_query($db,$sql);

  

 }
}      

   
    if($check){
    echo json_encode(["success"=>true]);
    }else {
      echo json_encode(["success"=>false]);
    }

  

?> 