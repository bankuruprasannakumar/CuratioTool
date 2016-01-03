function addCard() {
    document.getElementById("newCard").style.display = "block";
    hidePreview();
    document.body.style.overflow = "hidden";
    document.getElementById("search_card_holder").style.opacity = .3;
    document.getElementById("searchDB_card_holder").style.opacity = .3;
}

function cancelCard() {
    createPreview();
    document.getElementById("newCard").style.display = "none";
}

function createCard() {
    var type = document.getElementById("new_card_combo").value;
    var url = document.getElementById("new_card_url").value;
    var image = document.getElementById("new_card_image").value;
    var name = document.getElementById("new_card_name").value;
    
    createPreview();
    
    if (type == "app") {
        var jsonObj = JSON.parse('{"productName" : "' + name + '", "productUrl" : "' + url + '", "productDesc" : "", "images" : ["' + image + '", "", "", ""], "reviews" : [], "features" : []}');
        var len = appCMList.length;
        selectItem("appCM#select#" + len);
        appCMList.push(jsonObj);
        getAppsCM();
        editElement(type + "CM#edit#" + (selected_items_id.length-1).toString());
    }
    if (type == "article") {
        var jsonObj = JSON.parse('{"productName" : "' + name + '", "productUrl" : "' + url + '", "textArea" : "", "image" : "' + image + '"}');
        var len = articleCMList.length;
        selectItem("articleCM#select#" + len);
        articleCMList.push(jsonObj);
        getArticlesCM();
        editElement(type + "CM#edit#" + (selected_items_id.length-1).toString());
    }
    if (type == "music") {
        var jsonObj = JSON.parse('{"productName" : "' + name + '", "productUrl" : "' + url + '", "productDesc" : "", "image" : "' + image + '"}');
        var len = musicCMList.length;
        selectItem("musicCM#select#" + len);
        musicCMList.push(jsonObj);
        getMusicCM();
        editElement(type + "CM#edit#" + (selected_items_id.length-1).toString());
    }
    if (type == "product") {        
        var jsonObj = JSON.parse('{"productName" : "' + name + '", "productUrl" : "' + url + '", "productDesc" : "", "images" : ["' + image + '"], "reviews" : [], "rating" : "", "productPrice" : "", "discountedPercentage" : "", "merchantName" : "", "size" : "", "material" : "", "color" : "", "brandName" : "", "location" : "", "cuisines" : "", "style" : "", "aspectRatio" : "", "features" : []}');
        var len = productCMList.length;
        selectItem("productCM#select#" + len);
        productCMList.push(jsonObj);
        getProductsCM();
        editElement(type + "CM#edit#" + (selected_items_id.length-1).toString());
    }
    document.getElementById("newCard").style.display = "none";
}