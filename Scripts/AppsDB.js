function getAppsDB() {
    var i, block = 1;
    var a = [0, 0, 0, 0];
    for (i = 0; i < appDBList.length; i++) {
        console.log(appDBList[i]);
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "appDB#" + i;
        
        document.getElementById("appDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("appDB#" + i);
        
        var newSelectBar = document.createElement("DIV");
        newSelectBar.setAttribute("style", "width: 100%; min-height: 20px; margin-bottom: 20px; background: (0, 0, 0, 0.05);");
        newSelectBar.id = "appDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        element.appendChild(newSelectBar);
        
        var newImage = document.createElement("IMG");
        newImage.className = "images";
        newImage.id = "appDB_image" + i;
        var image_url = appDBList[i].images[0];
        if (image_url[0] != 'h') {
            image_url = "https:" + image_url;
        }
        newImage.src = image_url;
        
        document.getElementById("appDB#select#" + i).appendChild(newImage);
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "appDB_productName" + i;
        newTitle.href = appDBList[i].productUrl;
        newTitle.innerHTML = appDBList[i].productName;
        element.appendChild(newTitle);
        
        if (appDBList[i].rating != null) {
            var newRating = document.createElement("DIV");
            newRating.setAttribute("style", "width: 100%; text-align: right; font-size: 14px;")
            newRating.className = "ratings";
            newRating.id = "appDB_rating" + i;
            newRating.innerHTML = appDBList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        if (appDBList[i].productPrice != null) {
            var newPrice = document.createElement("DIV");
            newPrice.setAttribute("style", "width: 100%; text-align: right; font-size: 14px;")
            newPrice.id = "appDB_productPrice" + i;
            newPrice.className = "productPrice";
            newPrice.innerHTML = appDBList[i].productPrice;
            document.getElementById("appDB#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "descriptions";
        newDesc.id = "appDB_desc" + i;
        newDesc.innerHTML = "<b>Details: </b><br><br>" + appDBList[i].productDesc;
        element.appendChild(newDesc);
        
        if (appDBList[i].features != null && appDBList[i].features != []) {
            var newFeatures = document.createElement("DIV");
            newFeatures.setAttribute("style", "font-size: 14px;");
            newFeatures.id = "appDB_features" + i;
            newFeatures.className = "features";
            newFeatures.innerHTML = "<b>Newly Added Features:</b><br>"
            for (var num = 0; num < appDBList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + appDBList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        if (appDBList[i].reviews != null && appDBList[i].reviews != []) {
            var newReviews = document.createElement("DIV");
            newReviews.setAttribute("style", "font-size: 14px;");
            newReviews.id = "appDB_reviews" + i;
            newReviews.className = "reviews";
            newReviews.innerHTML = "<b>Reviews:</b><br>"
            for (var num = 0; num < appDBList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + appDBList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
            
        document.getElementById("appDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}