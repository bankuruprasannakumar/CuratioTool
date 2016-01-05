<html>
    <head>
        <title>Curation Tool - MainScreen</title>
        
        <link rel = "stylesheet" type = "text/css" href = "Styles/Layout.css">
        <style type = "text/css">
            body {
                font-family: Helvetica;
                font-size: 17px;
                font-variant-caps: small-caps;
                font-weight: 200;
                margin: 0px;
            }
        </style>
        
        <script type = "text/javascript" src = "Scripts/Layout.js"> </script>
        <script type = "text/javascript" src = "Scripts/Database.js"> </script>
        <script type = "text/javascript" src = "Scripts/Apps.js"> </script>
        <script type = "text/javascript" src = "Scripts/AppsDB.js"> </script>
        <script type = "text/javascript" src = "Scripts/AppsCM.js"> </script>
        <script type = "text/javascript" src = "Scripts/Articles.js"> </script>
        <script type = "text/javascript" src = "Scripts/ArticlesDB.js"> </script>
        <script type = "text/javascript" src = "Scripts/ArticlesCM.js"> </script>
        <script type = "text/javascript" src = "Scripts/Products.js"> </script>
        <script type = "text/javascript" src = "Scripts/ProductsDB.js"> </script>
        <script type = "text/javascript" src = "Scripts/ProductsCM.js"> </script>
        <script type = "text/javascript" src = "Scripts/Music.js"> </script>
        <script type = "text/javascript" src = "Scripts/MusicDB.js"> </script>
        <script type = "text/javascript" src = "Scripts/MusicCM.js"> </script>
        <script type = "text/javascript" src = "Scripts/Preview.js"> </script>
        <script type = "text/javascript" src = "Scripts/Edit.js"> </script>
        <script type = "text/javascript" src = "Scripts/ContentMap.js"> </script>
        <script type = "text/javascript" src = "Scripts/NewCards.js"> </script>
        <script type = "text/javascript" src = "Scripts/lastfm.api.md5.js"> </script>
        <script type = "text/javascript" src = "Scripts/lastfm.api.js"> </script>
        <script type = "text/javascript" src = "https://connect.soundcloud.com/sdk/sdk-3.0.0.js"> </script>
        
        <script type = "text/javascript">
            var search_query = '';
            var appList = [];
            var articleList = [];
            var productList = [];
            var musicList = [];
            var contentIdGlobal = '';
            var category = '';
        </script>
        
        <?php
            echo "<script type = 'text/javascript'>";
            $q = "";
            $cId = "";
            $category = "";
            if (isset($_POST['query'])) {
                $q = $_POST['query'];
                echo "search_query = '$q';";
            }
            if (isset($_POST['contentId'])) {
                $cId = $_POST['contentId'];
                echo "contentIdGlobal = '$cId';";
            }
            $category = "fashion";
            if (isset($_POST['category'])) {
                $category = $_POST['category'];
                echo "category = '$category';";
            }
            $merchant = "all";
           if (isset($_POST['merchant'])) {
                $merchant = $_POST['merchant'];
                echo "merchant = '$merchant';";
            }
            echo "</script>";
        ?>
        
    </head>
    
    <body onload = "onCreate()">
        
        <script type = "text/javascript">
            function onCreate() {
                createContentColumn();
                if (search_query != "") {
                    var productList1 = '[]', productList2 = '[]', productList3 = '[]';
                    
                    var productRequest1 = new XMLHttpRequest;
                    productRequest1.open("post", "http://appdemo.ops.ev1.inmobi.com:4020/search", true);
                    productRequest1.onreadystatechange = function () {
                        if (productRequest1.readyState == 4 && productRequest1.status == 200) {
                            productList1 = JSON.parse(productRequest1.responseText);
                            productList = productList.concat(productList1.productsForBuyIt);
                            articleList = articleList.concat(productList1.productsForReadIt);
                            getProducts();
                            getArticles();
                            alert("Products Loaded");
                        }
                    }
                     var JSONObj = { "keyword":search_query, "category":category, "merchant":merchant};
                     productRequest1.send(JSON.stringify(JSONObj)); 
                    
                    var articleRequest = new XMLHttpRequest;
                    articleRequest.open("get", "GetArticles.php?q=" + search_query + "&category=" + category, true);
                    articleRequest.onreadystatechange = function () {
                        if (articleRequest.readyState == 4 && articleRequest.status == 200) {
                            articleList = articleList.concat(JSON.parse(articleRequest.responseText));
                            getArticles();
                            alert("Articles Loaded");
                        }
                    }
                    articleRequest.send();
                    
                    var appRequest = new XMLHttpRequest;
                    appRequest.open("get", "GetApps.php?q=" + search_query, true);
                    appRequest.onreadystatechange = function () {
                        if (appRequest.readyState == 4 && appRequest.status == 200) {
                            appList = JSON.parse(appRequest.responseText);
                            getApps();
                            alert("Apps Loaded");
                        }
                    }
                    appRequest.send();
                    
                    if (category == 'fashion') {
                        var productRequest2 = new XMLHttpRequest;
                        productRequest2.open("get", "GetProductsJabong.php?q=" + search_query, true);
                        productRequest2.onreadystatechange = function () {
                            if (productRequest2.readyState == 4 && productRequest2.status == 200) {
                                productList2 = JSON.parse(productRequest2.responseText);
                                productList = productList.concat(productList2);
                                getProducts();
                            }
                        }
                        productRequest2.send();
                    }
                    
                    if (category == 'home') {
                        var productRequest3 = new XMLHttpRequest;
                        productRequest3.open("get", "GetProductsFabFurnish.php?q=" + search_query, true);
                        productRequest3.onreadystatechange = function () {
                            if (productRequest3.readyState == 4 && productRequest3.status == 200) {
                                productList3 = JSON.parse(productRequest3.responseText);
                                productList = productList.concat(productList3);
                                getProducts();
                            }
                        }
                        productRequest3.send();
                    }
                    
                    getMusic();
                    
                }
            }
        </script>
    <!-- ################################  Sidebar ################################ -->
        
        <div id = "content_id_bar">
            
        </div>
        
        <div style = "top: 70px; left: 0px; position: absolute; width: 10px; height: 100%;"> &nbsp; </div>
        
        <input type = "button" class = "edit_buttons" id = "sidebar_button" style = "float: none; position: absolute; background-image: url('http://findicons.com/files/icons/2711/free_icons_for_windows8_metro/256/refresh.png'); background-color: rgb(202, 202, 202); top: 10px; left: 0px; padding: 3px;" onclick = "switchSearch()">

    <!-- #############################  Preview Screen ############################ -->
        
        <div id = "preview" style = "display:none;">
            <span style = "color: white; font-family: Arial; font-size: 30px; float: left; margin-left: 30px;">PREVIEW SCREEN</span>
            <input type = "button" value = "Done" onclick = "uploadItems()" style = "width: 170px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            <input type = "button" value = "Back" onclick = "hidePreview()" style = "width: 170px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            <input type = "button" value = "ReOrder" onclick = "orderPreview()" style = "width: 170px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            <input type = "button" value = "Add Card" onclick = "addCard()" style = "width: 170px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
        </div>
            
    <!-- ###############################  Edit Screen ############################# -->
        
        <div id = "edit" style = "display:none;">
            <span style = "color: white; font-family: Geneva; font-size: 30px; float: left; margin-left: 30px;">EDIT SCREEN</span>
            <input type = "button" value = "Save" id = "edit_save" onclick = "saveEdit()" style = "width: 200px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            <input type = "button" value = "Cancel" id = "edit_cancel" onclick = "cancelEdit()" style = "width: 200px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
        </div>
            
    <!-- #############################  New Card Screen ########################### -->
        
        <div id = "newCard" style = "display:none;">
            <span style = "color: white; font-family: Geneva; font-size: 30px; float: left; margin-left: 30px;">NEW CARD SCREEN</span>
            
            <input type = "button" value = "Save" onclick = "createCard()" style = "width: 200px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            <input type = "button" value = "Cancel" onclick = "cancelCard()" style = "width: 200px; font-size: 17px; float: right; margin: 7px 10px 0px 10px;">
            
            <div style = "width: 100%; position: absolute; top: 40px; height: calc(100% - 40px); overflow: scroll; background: rgba(211, 212, 229, 0.9);">
                
                <center>
                    
                    <span style = "font-size: 15px; font-weight: 500px; color: blue; position: absolute; top: 150px; left: 170px;">PRODUCT URL: </span>
                    <input type = "text" id = "new_card_url" style = "width: 300px; left: 200px; top: 200px; position: absolute;">
                    
                    <span style = "font-size: 15px; font-weight: 500px; color: blue; position: absolute; top: 250px; left: 170px;">PRODUCT NAME: </span>
                    <input type = "text" id = "new_card_name" style = "width: 300px; left: 200px; top: 300px; position: absolute;">
                    
                    <span style = "font-size: 15px; font-weight: 500px; color: blue; position: absolute; top: 350px; left: 170px;">MAIN IMAGE URL: </span>
                    <input type = "text" id = "new_card_image" style = "width: 300px; left: 200px; top: 400px; position: absolute;">
                    
                    <select id = "new_card_combo" class = "params" style = "left: 200px; top: 100px; position: absolute; width: 200px;">
                        <option value = "product">Product</option>
                        <option value = "article">Article</option>
                        <option value = "app">App</option>
                        <option value = "music">Music</option>
                    </select>
                </center>
                
            </div>
        </div>


    <!-- ################################  Search Bar  ############################# -->
        
        <form id = "search_bar" method = "post">
            
            <input type = "text" id = "query" name = "query" value = "<?php echo $q; ?>">
            
            <input type = "text" id = "contentId" name = "contentId" value = "<?php echo $cId; ?>">
            
            <input type = "text" id = "category" name = "category" value = "<?php echo $category; ?>">
            
            <input type = "submit" value = "Search" id = "search">
            
            <div style = "top: 50px; position: absolute; width: 75%;">
                <div class = "param">RATING: &nbsp;
                    <select>
                        <option value = "0" selected>All</option>
                        <option value = "1">1+</option>
                        <option value = "2">2+</option>
                        <option value = "3">3+</option>
                        <option value = "4">4+</option>
                        <option value = "5">5</option>
                    </select>
                </div>


                <div class = "param">Merchant: &nbsp;
                    <select name = "merchant" onchange = "setMerchant(this.value)">
                        <option value = "bingProducts" <?php if ($merchant == "bingProducts") { echo "selected"; } ?>>Bing Products</option>
                        <option value = "bingArticles" <?php if ($merchant == "bingArticles") { echo "selected"; } ?>>Bing Articles</option>
                        <option value = "all" <?php if ($merchant == "all") { echo "selected"; } ?>>ALL</option>
<!--                         <option value = "sports" <?php if ($merchant == "sports") { echo "selected"; } ?>>Sports and Fitness</option>
                        <option value = "music" <?php if ($merchant == "music") { echo "selected"; } ?>>Music</option>
                        <option value = "home" <?php if ($merchant == "home") { echo "selected"; } ?>>Home Decor</option>
                        <option value = "life-hacks" <?php if ($merchant == "life-hacks") { echo "selected"; } ?>>Life Hacks</option>
 -->                    </select>
                 </div> 
                <div class = "param">TYPE: &nbsp;
                    <select name = "categoryO" onchange = "setCategory(this.value)">
                        <option value = "fashion" <?php if ($category == "fashion") { echo "selected"; } ?>>Fashion</option>
                        <option value = "travel" <?php if ($category == "travel") { echo "selected"; } ?>>Travel</option>
                        <option value = "food" <?php if ($category == "food") { echo "selected"; } ?>>Food</option>
                        <option value = "sports" <?php if ($category == "sports") { echo "selected"; } ?>>Sports and Fitness</option>
                        <option value = "music" <?php if ($category == "music") { echo "selected"; } ?>>Music</option>
                        <option value = "home" <?php if ($category == "home") { echo "selected"; } ?>>Home Decor</option>
                        <option value = "life-hacks" <?php if ($category == "life-hacks") { echo "selected"; } ?>>Life Hacks</option>
                    </select>
                </div>
            </div>
            
            <input type = "button" value = "Preview" class = "buttons" onclick = "createPreview()">
            <input type = "button" value = "View Database" class = "buttons" style = "top: 50px;" onclick = "getDatabase();">
            
        </form>
        
    <!-- #############################  Card Holders  ############################ -->
        
        <div style = "z-index: -1000; opacity: 0; height: 100px;" id = "productCM"> </div>
        <div style = "z-index: -1000; opacity: 0; height: 100px;" id = "articleCM"> </div>
        <div style = "z-index: -1000; opacity: 0; height: 100px;" id = "appCM"> </div>
        <div style = "z-index: -1000; opacity: 0; height: 100px;" id = "musicCM"> </div>
        
        <div class = "card_holder" id = "search_card_holder">
            <div id = "card_holder_products_tab" class = "selected_tab" style = "left: 0px;" onclick = "changeTab('card_holder_products')">Buy</div>
            <div id = "card_holder_articles_tab" class = "tab" style = "left: 58px;" onclick = "changeTab('card_holder_articles')">Read</div>
            <div id = "card_holder_apps_tab" class = "tab" style = "left: 127px;" onclick = "changeTab('card_holder_apps')">D/L</div>
            <div id = "card_holder_music_tab" class = "tab" style = "left: 182px;" onclick = "changeTab('card_holder_music')">Listen</div>
            
            <div id = "card_holder_products" class = "space">
                <div id = "product_card_col_1" class = "new_card_cols"></div>
                <div id = "product_card_col_2" class = "new_card_cols"></div>
                <div id = "product_card_col_3" class = "new_card_cols"></div>
                <div id = "product_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_articles" class = "space" style = "display: none;">
                <div id = "article_card_col_1" class = "new_card_cols"></div>
                <div id = "article_card_col_2" class = "new_card_cols"></div>
                <div id = "article_card_col_3" class = "new_card_cols"></div>
                <div id = "article_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_apps" class = "space" style = "display: none;">
                <div id = "app_card_col_1" class = "new_card_cols"></div>
                <div id = "app_card_col_2" class = "new_card_cols"></div>
                <div id = "app_card_col_3" class = "new_card_cols"></div>
                <div id = "app_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_music" class = "space" style = "display: none;">
                <div id = "music_card_col_1" class = "new_card_cols"></div>
                <div id = "music_card_col_2" class = "new_card_cols"></div>
                <div id = "music_card_col_3" class = "new_card_cols"></div>
                <div id = "music_card_col_4" class = "new_card_cols"></div>
            </div>
        </div>
        
        
        <span id = "selected_items_num">Number of Selected Items: 0</span>
        
        
        <div class = "card_holder" id = "searchDB_card_holder" style = "display: none;">
            <div id = "card_holder_productsDB_tab" class = "selected_tab" style = "left: 0px;" onclick = "changeTabDB('card_holder_productsDB')">Buy</div>
            <div id = "card_holder_articlesDB_tab" class = "tab" style = "left: 58px;" onclick = "changeTabDB('card_holder_articlesDB')">Read</div>
            <div id = "card_holder_appsDB_tab" class = "tab" style = "left: 127px;" onclick = "changeTabDB('card_holder_appsDB')">D/L</div>
            <div id = "card_holder_musicDB_tab" class = "tab" style = "left: 182px;" onclick = "changeTabDB('card_holder_musicDB')">Listen</div>

            <div id = "card_holder_productsDB" class = "space">
                <div id = "productDB_card_col_1" class = "new_card_cols"></div>
                <div id = "productDB_card_col_2" class = "new_card_cols"></div>
                <div id = "productDB_card_col_3" class = "new_card_cols"></div>
                <div id = "productDB_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_articlesDB" class = "space" style = "display: none;">
                <div id = "articleDB_card_col_1" class = "new_card_cols"></div>
                <div id = "articleDB_card_col_2" class = "new_card_cols"></div>
                <div id = "articleDB_card_col_3" class = "new_card_cols"></div>
                <div id = "articleDB_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_appsDB" class = "space" style = "display: none;">
                <div id = "appDB_card_col_1" class = "new_card_cols"></div>
                <div id = "appDB_card_col_2" class = "new_card_cols"></div>
                <div id = "appDB_card_col_3" class = "new_card_cols"></div>
                <div id = "appDB_card_col_4" class = "new_card_cols"></div>
            </div>

            <div id = "card_holder_musicDB" class = "space" style = "display: none;">
                <div id = "musicDB_card_col_1" class = "new_card_cols"></div>
                <div id = "musicDB_card_col_2" class = "new_card_cols"></div>
                <div id = "musicDB_card_col_3" class = "new_card_cols"></div>
                <div id = "musicDB_card_col_4" class = "new_card_cols"></div>
            </div>
        </div>
            
    </body>
</html>
