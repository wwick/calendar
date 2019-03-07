<?php
session_start();
if (isset($_SESSION['user'])) {
	require 'database.php';
	$user_id=$_SESSION['user'];
	$result = $mysqli->query("SELECT * FROM events WHERE user_id=\"{$user_id}\"");
	$rows = array();
$i=0; 
while($row = $result->fetch_assoc()) {
	$event_id = $row['event_id'];
	$rows[$event_id]['title'] = $row['title'];
	$rows[$event_id]['date'] = $row['date'];
	$rows[$event_id]['time'] = $row['time']; 
	
}

echo json_encode($rows);
?>
