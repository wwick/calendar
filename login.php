<?php
//Checks to make sure you are indeed a registered user
require 'database.php';
session_start();
$user = $_POST["user"];
$password = $_POST["password"];
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
		}
	}
}
$stmt->close();
header("Location:homepage.php");//redirects to homepage after login

?>
