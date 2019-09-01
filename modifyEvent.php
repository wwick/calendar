<?php

require 'database.php';
header("Content-Type: application/json");
session_start();

if (!isset($_SESSION['user'])) {
	echo json_encode(array(
		"success" => false
	));
	exit;
}

$user_id = $_SESSION["user"];
$server_token = $_SESSION["token"];
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);
$event_id = $json_obj["event_id"];
$token = $json_obj["token"];

if(!hash_equals($server_token, $token)){
	echo json_encode(array(
		"success" => false
	));
	exit;
}

$stmt = $mysqli->prepare("delete from events where user_id={$user_id} and event_id={$event_id}");
if(!$stmt){
	echo json_encode(array(
		"success" => false
	));
	exit;
}

$stmt->execute();
$stmt->close();
echo json_encode(array(
	"success" => true
));

?>
