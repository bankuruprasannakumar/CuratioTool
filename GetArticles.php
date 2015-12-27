<?php 
    $q = $_GET['q'];
    $c = $_GET['category'];
    exec("python Articles/GetArticles.py $c $q", $articles);
    $articleList = json_encode(json_decode($articles[0]));
    echo $articleList;
?>