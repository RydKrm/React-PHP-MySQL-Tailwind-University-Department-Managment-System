<?php 
require 'db_connection.php';
 
$post_data = file_get_contents("php://input");

if(isset($post_data) && !empty($post_data)){
    $request = json_decode($post_data);

    $first_name = $request->first_name;
    $last_name = $request->last_name;
    $email = $request->email;
    $phone = $request->phone;
    $password = $request->password;
    $confirm_password = $request->confirmPassword;
     $role = $request->role;
    

     if($role=='teacher'){
        $sql = "INSERT INTO teachers (first_name,last_name,email,phone,role,password,confirm_password) VALUES ('$first_name','$last_name','$email','$phone','$role','$password','$confirm_password')";
        echo "server Testing here  " ;
       // echo $sql;
     } else {
         $roll_number = $request->roll_number;
         $year = $request->year;
         $semester = $request->semester;
         echo "server Testing here  2   " ;

         $sql = "INSERT INTO students (first_name,last_name,email,phone,password,confirm_password,role,roll_number,year,semester) VALUES ('$first_name','$last_name','$email','$phone','$password','$confirm_password','$role','$roll_number','$year','$semester')";
     }
  
    if(mysqli_query($db,$sql)){
       // http_response_code(201);
        echo 'Server Updatee';
    }
    else{
        // http_response_code(422); 
         echo 'Server error';
    }
         
}
?> 

