<?php 
    $q = $_GET['q'];
    exec("python Products/GetProductsFabFurnish.py $q", $products);
    echo $products[0];
?>