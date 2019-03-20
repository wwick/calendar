<?php
require 'database.php';
//header("Content-Type: application/json");
session_start();

$_SESSION['user'] = 4;

if (!isset($_SESSION['user'])) {
	echo json_encode(array(
		"success" => false
	));
	exit;
}



$user_id = $_SESSION["user"];
// $json_str = file_get_contents('php://input');

$json_str = "{title:bowling,time:02:03:00,date:2019-03-14,event_id:12}";


$json_obj = json_decode($json_str, true);

$title = $json_obj["title"];
$date = $json_obj["date"];
$time = $json_obj["time"];
$event_id = $jsob_obj["event_id"];
$stmt = $mysqli->prepare("UPDATE events SET title=\"{$title}\", date=\"{$date}\", time=\"{$time}\" WHERE user_id=\"{$user_id}\" AND event_id=\"{$event_id}\"");

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
