<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Authorization");

include 'db.php';

/*
$post      = file_get_contents("php://input");
$requ      = json_decode($post);
*/

$json = array();


    $data = mysqli_query($conn, "SELECT *, h.nombre as nombrehotel, i.ruta as rutax, h.descripcion as descx FROM hospedaje as h INNER JOIN hospedaje_imagenes as i 
inner join hospedaje_clasificaciones as c
on h.idhospedaje = i.idhospedaje
and h.idhospedaje_clasificacion = c.idhospedaje_clasificacion
where h.idhospedaje='".$_GET['id']."'");


while($obj = $data->fetch_assoc()){
  
  
    $json[] = $obj;

    
}

echo json_encode($json);









?>
