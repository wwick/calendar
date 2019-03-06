<?php
    //ensures that session variables are erased
    session_start();
    session_destroy();
    header("Location:homepage.php");
?>
