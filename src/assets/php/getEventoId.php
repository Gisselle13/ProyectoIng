<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

$json = array();


    $data = mysqli_query($conn, "SELECT *, e.nombre as name FROM eventos as e INNER JOIN eventos_imagenes as i on e.idevento = i.idevento where e.idevento='".$_GET['id']."'");


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
