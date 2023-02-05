<?php 
require 'db_connection.php';

 $sql = "select teacher_id,first_name,last_name from teachers";
 
 $check = mysqli_query($db,$sql);

 if($check && mysqli_num_rows($check)>0){
 	while($row = mysqli_fetch_array($check)){
 		$view_json["teacher_id"] = $row["teacher_id"];
 		$view_json["first_name"] = $row["first_name"];
 		$view_json["last_name"]  = $row["last_name"];
 		$list_data["all_data"][] = $view_json;
 	}
 	echo json_encode(["success"=>true,"user_data"=>$list_data]);
 } else {
 	echo json_encode(["success"=>false]);
 }

 ?>