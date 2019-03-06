<?php
//info for php to be able to manipulate the databases
    $mysqli = new mysqli('localhost', 'module5', 'module5', 'module5');
    if($mysqli->connect_errno){
    printf("Connection Failed: %s\n", $mysqli->connect_error);
    exit;
    }
?>
