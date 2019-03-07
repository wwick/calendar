<?php
//creates a new user
require 'database.php';
header("Content-Type: applicaton/json");

$json_str = file_get_contents('php://input');
$json_obj = json_decode($json_str, true);

$user = $json_obj['user'];
$password1 = $json_obj["password1"];
$password2 = $json_obj["password2"];
if ($password1 != $password2) {//if your passwords don't match, gives you another shot to correct it
    header("Location:homepage.php");
}
$password = $password1;
$hashedPass = password_hash($password, PASSWORD_DEFAULT);
//hashes your new pass
$taken = false;
$stmt = $mysqli->prepare("select user from users");
if (!$stmt) {
    printf("Query Prep Failed: %s\n", $mysqli->error);
    exit;
}
$stmt->execute();
$stmt->bind_result($tableUser);
while($stmt->fetch()){//checks if username is taken
    if($user === $tableUser){
        $taken = true;
        break;        
    }
}
if ($taken) {//if user is taken, you are redirected to create new user again
    echo "This username is taken. <a href=\"homepage.php\"> Try again? </a>";
} else { //inserts new user into table
    $stmt->close();
    $stmt = $mysqli->prepare("insert into users (user, password) values ('$user', '$hashedPass')");
    if(!$stmt){
        printf("Query Prep Failed: %s\n", $mysqli->error);
        exit;
    }
    $stmt->execute();
    $stmt->close();

    $stmt = $mysqli->prepare("select user_id from users where user=\"".$user."\"");
    if(!$stmt){
        printf("Query Prep Failed: %s\n", $mysqli->error);
        exit;
    }
    $stmt->execute();
    $stmt->bind_result($id);
    while ($stmt->fetch()) {
        $user_id = $id;
    }
    $stmt->close();

    session_start();
    $_SESSION['user'] = $user_id;
    echo json_encode(array(
	    "success" => true
    ));
}

?>
