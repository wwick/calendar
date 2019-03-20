<?php
//Checks to make sure you are indeed a registered user
require 'database.php';
header("Content-Type: application/json");
session_start();

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$user = $json_obj["user"];
$password = $json_obj["password"];
//hashes your password to be compared against the hash stored in the table later
$hashedPass = password_hash($password, PASSWORD_DEFAULT);

$stmt = $mysqli->prepare("select user_id, user, password from users");
if(!$stmt){
	header("Location:calendar.php");
}
$stmt->execute();
$stmt->bind_result($user_id, $tableUser, $tablePass);
while($stmt->fetch()){
	if($user === $tableUser){//checks if password hashes match
		if(password_verify($password, $tablePass)){
			$_SESSION["user"] = $user_id;
			$token = bin2hex(random_bytes(32));

			$_SESSION["token"] = $token;
			echo json_encode(array(
				"success" => true,
				"user" => array(
					"user" => $tableUser,
					"user_id" => $user_id,
					"token" => $token
				)
			));
			exit;
		} else {
			echo json_encode(array(
				"success" => false
			));
			exit;
		}
	}
}
$stmt->close();

?>
