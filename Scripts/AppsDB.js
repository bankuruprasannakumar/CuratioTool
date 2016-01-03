function getAppsDB() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("appDB_card_col_" + i).innerHTML = "";
    }
    var block = 1;
    for (var i = 0; i < appDBList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "appDB#" + i;
        
        document.getElementById("appDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("appDB#" + i);
        
        if (selected_items_id.indexOf("appDB#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "appDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'appDB_image" + i + "'></center>";

        document.getElementById("appDB#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("appDB_image" + i);
        newImage.className = "images";
        var image_url = appDBList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "appDB_productName" + i;
        newTitle.href = appDBList[i].productUrl;
        newTitle.innerHTML = appDBList[i].productName;
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newRating.className = "details";
        newRating.id = "appDB_rating" + i;
        newRating.innerHTML = "";
        if (appDBList[i].rating != null) {
            newRating.innerHTML = appDBList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        var newPrice = document.createElement("DIV");
        newPrice.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newPrice.id = "appDB_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (appDBList[i].productPrice != null) {
            newPrice.innerHTML = appDBList[i].productPrice;
            document.getElementById("appDB#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "appDB_productDesc" + i;
        newDesc.innerHTML = "<b>Details:</b><br>" + appDBList[i].productDesc;
        element.appendChild(newDesc);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.setAttribute("style", "font-size: 14px;");
        newFeatures.id = "appDB_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (appDBList[i].features != []) {
            newFeatures.innerHTML = "<b>Newly Added Features:</b>";
            for (var num = 0; num < appDBList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + appDBList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "appDB_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (appDBList[i].reviews != []) {
        newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < appDBList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + appDBList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("appDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}