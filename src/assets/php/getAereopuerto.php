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
    $data = mysqli_query($conn, "SELECT c.idviaje,c.nombre,(SELECT ruta from viajes_imagenes as i where c.idviaje=i.idviaje order by i.idviaje limit 1) as img FROM viajes as c where c.activo=1 and c.idviaje_tipo=2 ORDER by c.idviaje LIMIT 1");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
