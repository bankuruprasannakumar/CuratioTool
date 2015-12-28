function getProductsCM() {
    var i, block = 1;
    for (i = 0; i < productCMList.length; i++) {
        productCMList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "productCM#" + i;

        document.getElementById("productCM").appendChild(newCard);

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "productCM#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'productCM_image" + i + "'></center>";

        document.getElementById("productCM#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("productCM_image" + i);
        newImage.className = "images";
        var image_url = productCMList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "productCM_productName" + i;
        newTitle.href = productCMList[i].productUrl;
        newTitle.innerHTML = productCMList[i].productName;
        
        document.getElementById("productCM#" + i).appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "productCM_rating" + i;
        newRating.innerHTML = "<b>Rating:</b> N/A";
        if (productCMList[i].rating != null) {
            newRating.innerHTML = "<b>Rating:</b> N/A" + productCMList[i].rating;
        }
        document.getElementById("productCM#" + i).appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "productCM_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "<b>Price:</b> N/A";
        if (productCMList[i].productPrice != null) {
            newPrice.innerHTML = "<b>Price: </b>" + productCMList[i].productPrice;
        }
        document.getElementById("productCM#" + i).appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "productCM_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "<b>Discount:</b> N/A";
        if (productCMList[i].discountedPercentage != null) {
            newPerc.innerHTML = "<b>Discount: </b>" + productCMList[i].discountedPercentage;
        }
        document.getElementById("productCM#" + i).appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "productCM_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "<b>Merchant:</b> N/A";
        if (productCMList[i].merchantName != null) {
            newMerchant.innerHTML = "<b>Merchant: </b>" + productCMList[i].merchantName;
        }
        document.getElementById("productCM#" + i).appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "productCM_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "<b>Size:</b> N/A";
        if (productCMList[i].size != null) {
            newSize.innerHTML = "<b>Size: </b>" + productCMList[i].size;
        }
        document.getElementById("productCM#" + i).appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "productCM_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "<b>Color:</b> N/A";
        if (productCMList[i].color != null) {
            newColor.innerHTML = "<b>Color:</b> " + productCMList[i].color;
        }
        document.getElementById("productCM#" + i).appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "productCM_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "<b>Brand:</b> N/A";
        if (productCMList[i].brandName != null) {
            newBrand.innerHTML = "<b>Brand:</b> N/A" + productCMList[i].brandName;
        }
        document.getElementById("productCM#" + i).appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "productCM_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "<b>Location:</b> N/A";
        if (productCMList[i].location != null) {
            newLocation.innerHTML = "<b>Location:</b> N/A" + productCMList[i].location;
        }
        document.getElementById("productCM#" + i).appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "productCM_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "<b>Cuisines:</b> N/A";
        if (productCMList[i].cuisines != null) {
            newCuisines.innerHTML = "<b>Cuisines:</b> N/A" + productCMList[i].cuisines;
        }
        document.getElementById("productCM#" + i).appendChild(newCuisines);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "productCM_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "<b>Features:</b><br>N/A";
        if (productCMList[i].features != null && productCMList[i].features != []) {
            for (var num = 0; num < productCMList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productCMList[i].features[num] + "</p>";
            }
        }
        document.getElementById("productCM#" + i).appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "productCM_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "<b>Description:</b> N/A";
        if (productCMList[i].productCMDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productCMList[i].productCMDesc;
        }
        document.getElementById("productCM#" + i).appendChild(newDesc);
    }
}