<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

$json = array();

if(isset($_GET['limit'])){
    $limit = (int)$_GET['limit'];
  //  $data = mysqli_query($conn,"SELECT * FROM noticias order by id DESC limit ".$limit."");
}else{
    $data = mysqli_query($conn, "SELECT * FROM `centros_locales` where idcentro = ".$_GET['id']."");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
