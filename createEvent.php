<?php
require 'database.php';
header("Content-Type: application/json");
session_start();
$user_id = $_SESSION["user"];

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$title = $json_obj["title"];
$date = $json_obj["date"];
$time = $json_obj["time"];

$stmt = $mysqli->prepare("insert into events (user_id, title, date, time) values ('$user_id', '$title', '$date', '$time')");
if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
	header("Location:https://www.google.com/");
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
