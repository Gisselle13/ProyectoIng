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
    $data = mysqli_query($conn, "SELECT * FROM `hospedaje_rel_servicios` as h inner join servicios_hospedaje as s on s.idservicio = h.idservicio where h.idhospedaje = ".$_GET['id']."");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
