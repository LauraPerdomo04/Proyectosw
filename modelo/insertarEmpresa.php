<?php


$nom_empresa   = $_POST["nombreRazonSocial"];
$nom_comercial = $_POST["nombreComercial"];
$descripccion = NULL;
$cod_empresa_t = 1;
$estado_empresa =NULL;
$camara_comercio=NULL;


$elUsr = "root";
$elPw = "12345678";
$elServer = "localhost:3306";
$laBd = "feriaop_bd";


$conexion = mysqli_connect($elServer, $elUsr, $elPw, $laBd);


$sql = "INSERT INTO MATERIALES VALUES ($cod_material,'$nom_material')";
$resultado = mysqli_query($conexion, $sql);
mysqli_close($conexion);
header("Location: ../vista/Material.php");
PROCEDURE Sp_VXCi;