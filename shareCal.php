<?php
require 'database.php';
header("Content-Type: application/json");
session_start();
$user_id = $_SESSION["user"];

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$cal_user = $json_obj["cal_user"];


$stmt = $mysqli->prepare("select user_id from users where user=\"{$cal_user}\"");
if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
	echo json_encode(array(
		"success" => false
	));
	exit;
}

//echo json_encode(array("user_id"=>true));
$stmt->execute();
$stmt->bind_result($shared_user);

$stmt->fetch();
$stmt->close();
$cal_user = $shared_user;


$stmt = $mysqli->prepare("insert into viewable (shared_user_id, owner_user_id) values ({$cal_user}, {$user_id})");


if(!$stmt){
	printf("Query Prep Failed: %s\n", $mysqli->error);
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
