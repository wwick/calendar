<?php

require 'database.php';

if(!isset($_SESSION['user'])) {
	error_log("Please Log in");
	header("Location:calendar.html");
}

$user_id = $_SESSION['user'];
$date = file_get_contents('php://input');

$result = $mysqli->query("SELECT title, time FROM events WHERE user_id=\"{$user_id}\" AND date=\"{$date}\" ORDER BY time");
$rows = array();

while($row = $result->fetch_assoc()) {
	$rows[] = $row;
}

echo json_encode($rows);
?>
