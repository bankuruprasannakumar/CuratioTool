function getAppsCM() {
    
    document.getElementById("appCM").innerHTML = "";
    var block = 1;
    for (var i = 0; i < appCMList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "appCM#" + i;
        
        document.getElementById("appCM").appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("appCM#" + i);
        
        if (selected_items_id.indexOf("appCM#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "appCM#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'appCM_image" + i + "'></center>";

        document.getElementById("appCM#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("appCM_image" + i);
        newImage.className = "images";
        var image_url = appCMList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "appCM_productName" + i;
        newTitle.href = appCMList[i].productUrl;
        newTitle.innerHTML = appCMList[i].productName;
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newRating.className = "details";
        newRating.id = "appCM_rating" + i;
        newRating.innerHTML = "";
        if (appCMList[i].rating != null) {
            newRating.innerHTML = appCMList[i].rating + "<br>";
            element.appendChild(newRating);
        }
        
        var newPrice = document.createElement("DIV");
        newPrice.setAttribute("style", "width: calc(100% - 10px); text-align: right;");
        newPrice.id = "appCM_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (appCMList[i].productPrice != null) {
            newPrice.innerHTML = appCMList[i].productPrice;
            document.getElementById("appCM#" + i).appendChild(newPrice);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "appCM_productDesc" + i;
        newDesc.innerHTML = "<b>Details:</b><br>" + appCMList[i].productDesc;
        element.appendChild(newDesc);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.setAttribute("style", "font-size: 14px;");
        newFeatures.id = "appCM_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (appCMList[i].features != []) {
            newFeatures.innerHTML = "<b>Newly Added Features:</b>";
            for (var num = 0; num < appCMList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + appCMList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "appCM_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (appCMList[i].reviews != []) {
        newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < appCMList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + appCMList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("appCM#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}