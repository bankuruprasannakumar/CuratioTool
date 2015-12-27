var productDBList = [];
var articleDBList = [];
var appDBList = [];
var musicDBList = [];

function getDatabase() {
    for (var i = 1; i < 5; i++) {
        document.getElementById("productDB_card_col_" + i).innerHTML = "";
        document.getElementById("appDB_card_col_" + i).innerHTML = "";
        document.getElementById("articleDB_card_col_" + i).innerHTML = "";
        document.getElementById("musicDB_card_col_" + i).innerHTML = "";
    }
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://appdemo.ops.ev1.inmobi.com:4020/previewProducts", false);
    xhr.send(search_query);
    
    var itemList = JSON.parse(xhr.responseText);
    
    productDBList = itemList.productsForBuyIt;
    articleDBList = itemList.productsForReadIt;
    appDBList = itemList.productsForDownload;
    musicDBList = itemList.productsForListenIt;
    
    getProductsDB();
    getArticlesDB();
    getAppsDB();
    getMusicDB();
    
    switchSearch();
}