<?php
    //ensures that session variables are erased
    session_start();
    session_destroy();
    echo json_encode(array(
        success => true
    ));
?>
