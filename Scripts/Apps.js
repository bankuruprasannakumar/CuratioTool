function getApps() {
    
    var i, block = 1;
    var a = [0, 0, 0, 0];
    for (i = 0; i < appList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "app#" + i;
        
        document.getElementById("app_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("app#" + i);
        
        var newSelectBar = document.createElement("DIV");
        newSelectBar.setAttribute("style", "width: 100%; min-height: 20px; margin-bottom: 20px; background: (0, 0, 0, 0.05);");
        newSelectBar.id = "app#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        element.appendChild(newSelectBar);
        
        var newImage = document.createElement("IMG");
        newImage.className = "images";
        newImage.id = "app_image" + i;
        var image_url = appList[i].images[0];
        if (image_url[0] != 'h') {
            image_url = "https:" + image_url;
        }
        newImage.src = image_url;
        
        document.getElementById("app#select#" + i).appendChild(newImage);
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "app_productName" + i;
        newTitle.href = appList[i].productUrl;
        newTitle.innerHTML = appList[i].productName;
        element.appendChild(newTitle);
        
        if (appList[i].rating != null) {
            var newRating = document.createElement("DIV");
            newRating.setAttribute("style", "width: 100%; text-align: right; font-size: 14px;")
            newRating.className = "ratings";
            newRating.id = "app_rating" + i;
            newRating.innerHTML = appList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        if (appList[i].productPrice != null) {
            var newPrice = document.createElement("DIV");
            newPrice.setAttribute("style", "width: 100%; text-align: right; font-size: 14px;")
            newPrice.id = "app_productPrice" + i;
            newPrice.className = "productPrice";
            newPrice.innerHTML = appList[i].productPrice;
            document.getElementById("app#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "descriptions";
        newDesc.id = "app_desc" + i;
        newDesc.innerHTML = "<b>Details: </b><br><br>" + appList[i].productDesc;
        element.appendChild(newDesc);
        
        if (appList[i].features != null && appList[i].features != []) {
            var newFeatures = document.createElement("DIV");
            newFeatures.setAttribute("style", "font-size: 14px;");
            newFeatures.id = "app_features" + i;
            newFeatures.className = "features";
            newFeatures.innerHTML = "<b>Newly Added Features:</b><br>"
            for (var num = 0; num < appList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + appList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        if (appList[i].reviews != null && appList[i].reviews != []) {
            var newReviews = document.createElement("DIV");
            newReviews.setAttribute("style", "font-size: 14px;");
            newReviews.id = "app_reviews" + i;
            newReviews.className = "reviews";
            newReviews.innerHTML = "<b>Reviews:</b><br>"
            for (var num = 0; num < appList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + appList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
            
        document.getElementById("app#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}