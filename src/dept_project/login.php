<?php 
require 'db_connection.php';
// echo "check php";
$post_data = file_get_contents("php://input");

if(isset($post_data) && !empty($post_data)){
  
    $request = json_decode($post_data);
     
   $roll_number = $request->roll_number;
   $password = $request->password;
   $role = $request->role;

   if($role=='student'){
     $sql = "SELECT id,roll_number,password,phone,first_name,last_name,email,role,year,semester FROM students where roll_number='$roll_number' && password='$password'";
    
    $check = mysqli_query($db,$sql); 
   
    if($check && mysqli_num_rows($check)){
      while($row = mysqli_fetch_array($check)){
        $viewjson["id"] = $row["id"];
        $viewjson["role"] = $row["role"];
        $viewjson["first_name"] = $row["first_name"];
        $viewjson["last_name"] = $row["last_name"];
        $viewjson["phone"] = $row["phone"];
        $viewjson["email"] = $row["email"];
        $viewjson["year"] = $row["year"];
        $viewjson["semester"] = $row["semester"];       
        $viewjson["roll_number"] = $row["roll_number"];
        $viewjson["password"] = $row["password"];
      //  $json_array["user_data"][] = $viewjson; 
      }
     // echo json_encode(["success"=>true,"user_list"=>$json_array]);
      echo json_encode(["success"=>true,"student_list"=>$viewjson]);
    }
    else{
        echo json_encode(["success"=>false]);
    }
   } else if($role=='teacher') {
        $sql = "SELECT teacher_id,password,first_name,last_name,email,role,phone 
                FROM teachers 
                WHERE roll_number='$roll_number' && password='$password'";
    
    $check = mysqli_query($db,$sql); 
   
    if($check && mysqli_num_rows($check)){
      while($row = mysqli_fetch_array($check)){
        $viewjson["id"] = $row["teacher_id"];
        $viewjson["role"] = $row["role"];
        $viewjson["first_name"] = $row["first_name"];
        $viewjson["last_name"] = $row["last_name"];
        $viewjson["email"] = $row["email"];
        $viewjson["phone"] = $row["phone"];
        $viewjson["password"] = $row["password"];
       // $json_array["user_data"][] = $viewjson; 
      }
     // echo json_encode(["success"=>true,"user_list"=>$json_array]);
      echo json_encode(["success"=>true,"student_list"=>$viewjson]);
    }
    else{
        echo json_encode(["success"=>false]);
    }
   }
    
}
?>  