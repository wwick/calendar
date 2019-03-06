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
	header("Location:homepage.php");
}
$stmt->execute();
$stmt->bind_result($user_id, $tableUser, $tablePass);
while($stmt->fetch()){
	if($user === $tableUser){//checks if password hashes match
		if(password_verify($password, $tablePass)){
			$_SESSION["user"] = $user_id;

			echo json_encode(array(
				"success" => true
			));
			exit;
		} else {
			echo json_encode(array(
				"success" => false,
				"message" => "Incorrect Username or Password"
			));
			exit;
		}
	}
}
$stmt->close();

?>
