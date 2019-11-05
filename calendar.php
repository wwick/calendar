<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		
	<meta name="token" id="token" content="<?php session_start(); echo $_SESSION["token"]; ?>" >
		<title>Calendar</title>
		<link rel="stylesheet" type="text/css" href="stylesheet.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="src/login/login.js"></script>
		<script src="src/content/pageElements.js"></script>
		<script src="src/content/createCalendar.js"></script>
		<script src="src/login/checkLogin.js"></script>
		<script src="src/login/createUser.js"></script>
		<script src="src/requests/createEvent.js"></script>
		<script src="src/requests/modifyEvent.js"></script>
		<script src="src/misc/validateInput.js"></script>
	</head>
	<body>

<script>

document.addEventListener("DOMContentLoaded", checkLogin, false);
				
</script>
</body>
</html>
