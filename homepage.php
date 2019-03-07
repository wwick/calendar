<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Fake News</title>
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
	<script src="login.js"></script>
	<script src="create.js"></script>
	<script src="hidden.js"></script>
	<script src="show.js"></script>
</head>
<body>
<div id='main'>

<?php
//checks to see if you are logged in
session_start();
$user_set = false;
if (isset($_SESSION['user'])) {//displays a welcome message if you are logged in
	$user_set = true;
	require 'database.php';
	$user_id=$_SESSION['user'];
	$stmt = $mysqli->prepare("select user from users where user_id=\"".$user_id."\"");
	if(!$stmt){
		header("Location:abort.php");
	}
	$stmt->execute();
	$stmt->bind_result($user);
	if($stmt->fetch()){
		printf("<p>You are now logged in as user %s</p>", htmlspecialchars($user));
	}
	$stmt->close();
	$mysqli->close();


} else {//if you are not logged in, creates forms to log in or create a new user

	echo "	
		<div class=\"hidden\">
		Username: <input type=\"text\" id=\"new_user\"><br>
		Password: <input type=\"password\" id=\"new_password\"><br>
		Confirm Password: <input type=\"password\" id=\"confirm\"><br>
		<button class=\"button\" type=\"submit\" id=\"create_btn\">Create User</button><br>
		<br>";

echo "
		Username: <input type=\"text\" id=\"user\"><br>
		Password: <input type=\"password\" id=\"password\"><br>
		<input class=\"button\" type=\"submit\" value=\"Login\" id=\"login\"><br>
		</form>
		<br>
		</div>
		";

}

?>
		<div class="show" style="display: none">
		Title: <input type="text" id="event"><br>
		Date: <input type="date" id="date"><br>
		Time: <input type="time" id="time"><br>
		</div>


	<div class="show" style="display: none">
	<a href="abort.php" class="button">Logout</a>
	</div>



</div>

</body>
</html>
