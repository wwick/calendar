<?php
require 'database.php';
header("Content-Type: application/json");
session_start();
$user_id = $_SESSION["user"];

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$join_group = $json_obj["join_group"];
if ($join_group !== ""){

	$stmt = $mysqli->prepare("update users set group_id={$join_group} where user_id={$user_id}");
} else {
	$stmt = $mysqli->prepare("update users set group_id=null where user_id={$user_id}");

}

$stmt->execute();
$stmt->close();

echo json_encode(array(
	"success" => true
));


?>
