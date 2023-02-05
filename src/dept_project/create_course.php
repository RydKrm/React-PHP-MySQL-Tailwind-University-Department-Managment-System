<?php 
require 'db_connection.php';
 
$post_data = file_get_contents("php://input");
if(isset($post_data) && !empty($post_data)){
    $request = json_decode($post_data);

    $course_name = $request->course_name;
    $course_code = $request->course_code;
    $semester = $request->semester;
    $year = $request->year;
    $sec_a = $request->sec_a_teacher;
    $sec_b = $request->sec_b_teacher;

    $sql = "INSERT INTO courses (course_name,course_code,course_year,course_semester,course_sec_a_teacher,course_sec_b_teacher) VALUES (
    '$course_name','$course_code','$year','$semester','$sec_a','$sec_b'
)"; 

 if(mysqli_query($db,$sql)){
 	echo 'Data Update';
 } else {
 	echo 'Internal Server Error';
 }


    }




?>