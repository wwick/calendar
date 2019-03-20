<?php

require 'database.php';
session_start();
if(!isset($_SESSION['user'])) {
	echo json_encode(array(
		error => "not logged in"
	));
	exit;
}

header('Content-Type: application/json');
$json_str = file_get_contents('php://input');
//This will store the data into an associative array
$json_obj = json_decode($json_str, true);

//Variables can be accessed as such:
$date = $json_obj['date'];
$user_id = $_SESSION['user'];

$stmt = $mysqli->prepare("select owner_user_id from viewable where shared_user_id={$user_id}");
$stmt->execute();
$stmt->bind_result($id);
$ids = array();

while($stmt->fetch()){
	$ids[] = $id;
}
$stmt->close();

$ids = implode(",", $ids);
$ids = $ids.",{$user_id}";
$ids = "(".$ids.")";

$result = $mysqli->query("SELECT title, time, event_id FROM events WHERE user_id in {$ids} AND date=\"{$date}\" ORDER BY time");
$rows = array();

while($row = $result->fetch_assoc()) {
	$rows[] = $row;
}

echo json_encode($rows);
?>
