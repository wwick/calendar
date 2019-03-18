<?php

require 'database.php';

if(!isset($_SESSION['user'])) {
	error_log("Please Log in");
	header("Location:calendar.html");
}

header('Content-Type:text/plain');

$user_id = $_SESSION['user'];
$date = file_get_contents('php://input');

$result = $mysqli->query("SELECT title, time FROM events WHERE user_id=\"{$user_id}\" AND date=\"{$date}\"");
$rows = array();

while($row = $result->fetch_assoc()) {
	$rows[] = $row;
}

echo json_encode($rows);
?>
