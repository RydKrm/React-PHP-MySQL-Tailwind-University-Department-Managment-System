<?php 
require 'db_connection.php';

 $sql = "select first_name,last_name,email,phone from teachers";
 
 $check = mysqli_query($db,$sql);

 if($check && mysqli_num_rows($check)>0){
  while($row = mysqli_fetch_array($check)){
    $view_json["first_name"] = $row["first_name"];
    $view_json["last_name"]  = $row["last_name"];
    $view_json["email"]  = $row["email"];
    $view_json["phone"]  = $row["phone"];

    $list_data["all_data"][] = $view_json;
  }
  echo json_encode(["success"=>true,"user_data"=>$list_data]);
 } else {
  echo json_encode(["success"=>false]);
 }

 ?>