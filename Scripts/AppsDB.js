function getAppsDB() {
    var block = 1;
    for (var i = 0; i < appDBList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "appDB#" + i;
        
        document.getElementById("appDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("appDB#" + i);

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
        
        if (appDBList[i].rating != null) {
            var newRating = document.createElement("DIV");
            newRating.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
            newRating.className = "details";
            newRating.id = "appDB_rating" + i;
            newRating.innerHTML = appDBList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        if (appDBList[i].productPrice != null) {
            var newPrice = document.createElement("DIV");
            newRating.setAttribute("style", "width: calc(100% - 10px); text-align: right;")
            newRating.className = "details";
            newPrice.id = "appDB_productPrice" + i;
            newPrice.innerHTML = appDBList[i].productPrice;
            document.getElementById("appDB#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "appDB_productDesc" + i;
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