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
    $data = mysqli_query($conn, "SELECT c.idcaceria,c.nombre,(SELECT ruta from caceria_imagenes as i where c.idcaceria=i.idcaceria order by i.idcaceria limit 1) as img FROM caceria as c where c.activo=1 ORDER by c.idcaceria");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
