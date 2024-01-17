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
    $data = mysqli_query($conn, "SELECT c.idturismo_religioso,c.nombre,(SELECT ruta from turismo_religioso_imagenes as i where c.idturismo_religioso=i.idturismo_religioso order by i.idturismo_religioso limit 1) as img FROM turismo_religioso as c where c.activo=1 ORDER by c.idturismo_religioso");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
