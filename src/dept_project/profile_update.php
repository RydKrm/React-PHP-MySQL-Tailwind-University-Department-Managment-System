<?php 
require 'db_connection.php';
 
$post_data = file_get_contents("php://input");

if(isset($post_data) && !empty($post_data)){
    $request = json_decode($post_data);

    $profile_id = $request->id;
    $role = $request->role;
    if(isset($request->image)){
       //  $image = $request->image;
      // $image = $request->$_FILES['image']['name'];
      //  $image_temp = $_FIlES['image']['temp_name'];
    }
     else $image = "not_found";
     }

     echo $image;

    if(isset($request->home_district)) $home_district = $request->home_district;
     else $home_district = "not_found";
    
    if(isset($request->thana)) $thana = $request->thana;
    else $thana = "not_found";

    if(isset($request->collage)) $collage = $request->collage;
    else $collage = "not_found";

    if(isset($request->fb_profile)) $fb_profile = $request->fb_profile;
    else $fb_profile = "not_found";

    if(isset($request->linkedin_profile)) $linkedin_profile = $request->linkedin_profile;
    else $linkedin_profile = "not_found";
    
    if(isset($request->bio)) $bio = $request->bio;
    else $bio = "not_found";

    if(isset($request->session)) $session = $request->session;
    else $session = "not_found";
    
    if(isset($request->project)) $project = $request->project;
    else $project = "not_found";

    if(isset($request->thesis)) $thesis = $request->thesis;
    else $thesis = "not_found";

    if(isset($request->research_field)) $research_field = $request->research_field;
    else $research_field = "not_found";

    $sql = "INSERT INTO update_profile (id,role,profile_id,image,home_district,thana,collage,fb_profile,linkedin_profile,bio,session,project,thesis,research_field) VALUES ('$profile_id','$role','$profile_id','$image','$home_district','$thana','$collage','$fb_profile','$linkedin_profile','$bio','$session','$project','$thesis','$research_field')";

  
    if(mysqli_query($db,$sql)){
       // http_response_code(201);
        $destination = $_SERVER['DOCUMENT_ROOT'].'/image/'.$image;
        move_upload_file($image_temp,$destination);
        echo 'Server Updatee';
    }
    else{
        // http_response_code(422); 
         echo 'Server error';
    }
         
}
?> 

