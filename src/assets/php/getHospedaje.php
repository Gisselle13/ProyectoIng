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
    $data = mysqli_query($conn, "SELECT h.idhospedaje,h.nombre,h.idhospedaje_clasificacion,c.estrellas,
(SELECT ruta from hospedaje_imagenes as i where h.idhospedaje=i.idhospedaje order by i.idhospedaje limit 1) as img
FROM hospedaje as h
inner join hospedaje_clasificaciones as c on  h.idhospedaje_clasificacion= c.idhospedaje_clasificacion
where h.activo=1 ORDER by h.idhospedaje");
}


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
