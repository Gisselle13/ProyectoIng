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
    $data = mysqli_query($conn, "SELECT h.idhospital,h.nombre,(SELECT ruta from hospitales_imagenes as i where h.idhospital=i.idhospital order by i.idhospital limit 1) as img FROM hospitales as h where h.activo=1 ORDER by h.idhospital
");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
