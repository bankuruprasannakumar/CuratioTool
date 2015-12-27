<?php 
    $q = $_GET['q'];
    exec("python Apps/GetApps.py $q", $apps);
    $appList = json_encode(json_decode($apps[0]));
    echo $appList;
?>