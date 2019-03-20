<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Calendar</title>
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="login.js"></script>
		<script src="createHTML.js"></script>
		<script src="createCalendar.js"></script>
		<script src="checkLogin.js"></script>
		<script src="createUser.js"></script>
		<script src="createEvent.js"></script>
		<script src="modifyEvent.js"></script>
		<script src="shareCal.js"></script>
		<script src="joinGroup.js"></script>
		<script src="validateTime.js"></script>
		<script src="validDate.js"></script>
	</head>
	<body>

<script>

document.addEventListener("DOMContentLoaded", checkLogin, false);
				
</script>
	<input type="hidden" name="token" id="token" value="<?php session_start(); echo $_SESSION["token"]; ?>" />
</body>
</html>
