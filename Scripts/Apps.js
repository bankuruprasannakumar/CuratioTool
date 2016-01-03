function getApps() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("app_card_col_" + i).innerHTML = "";
    }
    var block = 1;
    for (var i = 0; i < appList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "app#" + i;
        
        document.getElementById("app_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("app#" + i);
        
        if (selected_items_id.indexOf("app#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "app#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'app_image" + i + "'></center>";

        document.getElementById("app#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("app_image" + i);
        newImage.className = "images";
        var image_url = appList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "app_productName" + i;
        newTitle.href = appList[i].productUrl;
        newTitle.innerHTML = appList[i].productName;
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newRating.className = "details";
        newRating.id = "app_rating" + i;
        newRating.innerHTML = "";
        if (appList[i].rating != null) {
            newRating.innerHTML = appList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        var newPrice = document.createElement("DIV");
        newPrice.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newPrice.id = "app_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (appList[i].productPrice != null) {
            newPrice.innerHTML = appList[i].productPrice;
            document.getElementById("app#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "app_productDesc" + i;
        newDesc.innerHTML = "<b>Details:</b><br>" + appList[i].productDesc;
        element.appendChild(newDesc);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.setAttribute("style", "font-size: 14px;");
        newFeatures.id = "app_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (appList[i].features != []) {
            newFeatures.innerHTML = "<b>Newly Added Features:</b>";
            for (var num = 0; num < appList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + appList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "app_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (appList[i].reviews != []) {
        newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < appList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + appList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("app#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
    
    alert("Apps Loaded");
}