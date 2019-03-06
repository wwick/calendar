<?php
// session_start();
// if (isset($_SESSION['user'])) {//displays a welcome message if you are logged in
	// $user_set = true;
	require 'database.php';
	// $user_id=$_SESSION['user'];
	$user_id=1;
	$result = mysqli_query("SELECT event_id, title, date, time FROM events WHERE user_id=\"{$user_id}\"");
	$rows = array();
	while($r = mysqli_fetch_assoc($result)) {
		$rows[] = $r;
	}
	echo json_encode($rows);
// }
?>
