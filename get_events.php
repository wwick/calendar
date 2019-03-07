<?php

require 'database.php';

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$user_id = $json_obj['user_id'];
$date = $json_obj['date'];

$result = $mysqli->query("SELECT title, time FROM events WHERE user_id=\"{$user_id}\" AND date=\"{$date}\"");
$rows = array();

while($row = $result->fetch_assoc()) {
	$rows[] = $row;
}

echo json_encode($rows);
?>
