<?php

// makes sure that you log in as a valid user
require 'database.php';
header("Content-Type: application/json");
session_start();
if (!isset($_SESSION["user"])){
	echo json_encode(array(
		"loggedIn" => false
	));

} else {
	$stmt = $mysqli->prepare("select user from users where user_id={$_SESSION['user']}");
	if(!$stmt){
		echo json_encode(array(
			"loggedIn" => false
		));
	}
	$stmt->execute();
	$stmt->bind_result($user_name);
	$stmt->fetch();
	echo json_encode(array(
		"loggedIn" => true,
		"user" => $user_name,
		"user_id" => $_SESSION["user"]
	));

$stmt->close();
}
?>
