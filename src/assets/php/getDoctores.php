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
    $data = mysqli_query($conn, "SELECT c.idhospital,c.nombre,c.*,h.nombre as tipo,(SELECT ruta from hospitales_imagenes as i where c.idhospital=i.idhospital order by i.idhospital limit 1) as img FROM hospitales as c inner join hospitales_tipos as h on c.idhospital_tipo= h.idhospital_tipo where c.activo=1 ORDER by c.idhospital");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
