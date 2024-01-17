<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

$json = array();


    $data = mysqli_query($conn, "SELECT *, e.nombre as name FROM turismo_religioso as e INNER JOIN turismo_religioso_imagenes as i on e.idturismo_religioso = i.idturismo_religioso where e.idturismo_religioso='".$_GET['id']."'");


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
