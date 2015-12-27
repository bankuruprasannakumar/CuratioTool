<?php 
    $q = $_GET['q'];
    exec("python Products/GetProductsJabong.py $q", $products);
    echo $products[0];
?>