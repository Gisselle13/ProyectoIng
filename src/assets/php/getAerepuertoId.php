<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

$json = array();


    $data = mysqli_query($conn, "SELECT *, h.nombre as nombreviaje FROM viajes as h INNER JOIN viajes_imagenes as i on h.idviaje = i.idviaje where h.idviaje='".$_GET['id']."'");


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
