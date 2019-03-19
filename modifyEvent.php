<?php
require 'database.php';
header("Content-Type: application/json");
session_start();
if (isset($_SESSION['user'])) {
	echo json_encode(array(
		"success" => false
	));
	exit;
}

$user_id = $_SESSION["user"];
$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$title = $json_obj["title"];
$date = $json_obj["date"];
$time = $json_obj["time"];
$event_id = $jsob_obj["id"];

$stmt = $mysqli->prepare("UPDATE events SET title=[{$title}], date=[{$date}], time=[{$time}] WHERE user_id={$user_id} AND event_id={$event_id}");
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
