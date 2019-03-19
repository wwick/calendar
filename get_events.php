<?php

require 'database.php';
session_start();
if(!isset($_SESSION['user'])) {
	echo json_encode(array(
		error => "not logged in"
	));
}

header('Content-Type: application/json');
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
$date = $json_obj['date'];
$user_id = $_SESSION['user'];

$result = $mysqli->query("SELECT title, time FROM events WHERE user_id=\"{$user_id}\" AND date=\"{$date}\" ORDER BY time");
$rows = array();

while($row = $result->fetch_assoc()) {
	$rows[] = $row;
}

echo json_encode($rows);
?>
