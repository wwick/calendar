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
$shared_user = $json_obj["shared_user"];
$group_num = $json_obj["group_num"];

if ($shared_user === ""){
	if ($group_num === "") {
		$stmt = $mysqli->prepare("insert into events (user_id, title, date, time) values ('$user_id', '$title', '$date', '$time')");
		if(!$stmt){
			printf("Query Prep Failed: %s\n", $mysqli->error);
			echo json_encode(array(
				"success" => false
			));
			exit;
		} 
	} else {
		$stmt = $mysqli->prepare("insert into events (user_id, title, date, time, group_id) values ('$user_id', '$title', '$date', '$time', '$group_num')");
	}

	$stmt->execute();
	$stmt->close();
} else {
	$stmt = $mysqli->prepare("select user_id from users where user=\"{$shared_user}\"");
	$stmt->execute();
	$stmt->bind_result($shared_user_id);

	while($stmt->fetch()){
		$shared_user = $shared_user_id;
	}

	if ($group_num ==="") {
		$stmt = $mysqli->prepare("insert into events (user_id, title, date, time, shared_users) values ('$user_id', '$title', '$date', '$time', '$shared_user')");
		if(!$stmt){
			printf("Query Prep Failed: %s\n", $mysqli->error);
			echo json_encode(array(
				"success" => false
			));
			exit;
		}
	} else {
		$stmt = $mysqli->prepare("insert into events (user_id, title, date, time, shared_users, group_id) values ('$user_id', '$title', '$date', '$time', '$shared_user', '$group_num')");

	}
	$stmt->execute();
	$stmt->close();

}
echo json_encode(array(
	"success" => true
));
?>
