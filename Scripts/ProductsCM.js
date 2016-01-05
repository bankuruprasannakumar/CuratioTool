function getProductsCM() {
    
    document.getElementById("productCM").innerHTML = "";
    
    var block = 1;
    for (var i = 0; i < productCMList.length; i++) {
        productCMList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "productCM#" + i;

        document.getElementById("productCM").appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("productCM#" + i);
        
        if (selected_items_id.indexOf("productCM#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "productCM#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'productCM_image" + i + "'></center>";

        element.appendChild(newSelectBar);

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
        
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "productCM_rating" + i;
        newRating.innerHTML = "";
        if (productCMList[i].rating != null && productCMList[i].rating != "") {
            newRating.innerHTML = "<b>Rating:</b> " + productCMList[i].rating;
        }
        element.appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "productCM_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (productCMList[i].productPrice != null && productCMList[i].productPrice != "") {
            newPrice.innerHTML = "<b>Price:</b> " + productCMList[i].productPrice;
        }
        element.appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "productCM_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "";
        if (productCMList[i].discountedPercentage != null && productCMList[i].discountedPercentage != "") {
            newPerc.innerHTML = "<b>Discount:</b> " + productCMList[i].discountedPercentage;
        }
        element.appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "productCM_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "";
        if (productCMList[i].merchantName != null && productCMList[i].merchantName != "") {
            newMerchant.innerHTML = "<b>Merchant:</b> " + productCMList[i].merchantName;
        }
        element.appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "productCM_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "";
        if (productCMList[i].size != null && productCMList[i].size != "") {
            newSize.innerHTML = "<b>Size:</b> " + productCMList[i].size;
        }
        element.appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "productCM_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "";
        if (productCMList[i].color != null && productCMList[i].color != "") {
            newColor.innerHTML = "<b>Color:</b> " + productCMList[i].color;
        }
        element.appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "productCM_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "";
        if (productCMList[i].brandName != null && productCMList[i].brandName != "") {
            newBrand.innerHTML = "<b>Brand:</b> " + productCMList[i].brandName;
        }
        element.appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "productCM_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "";
        if (productCMList[i].location != null && productCMList[i].location != "") {
            newLocation.innerHTML = "<b>Location:</b> " + productCMList[i].location;
        }
        element.appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "productCM_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "";
        if (productCMList[i].cuisines != null && productCMList[i].cuisines != "") {
            newCuisines.innerHTML = "<b>Cuisines:</b> " + productCMList[i].cuisines;
        }
        element.appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.id = "productCM_material" + i;
        newMaterial.className = "details";
        newMaterial.innerHTML = "";
        if (productCMList[i].material != null && productCMList[i].material != "") {
            newCuisines.innerHTML = "<b>Material:</b> " + productCMList[i].material;
        }
        element.appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.id = "productCM_style" + i;
        newStyle.className = "details";
        newStyle.innerHTML = "";
        if (productCMList[i].style != null && productCMList[i].style != "") {
            newStyle.innerHTML = "<b>Style:</b> " + productCMList[i].style;
        }
        element.appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.id = "productCM_aspectRatio" + i;
        newRatio.className = "details";
        newRatio.innerHTML = "";
        if (productCMList[i].aspectRatio != null && productCMList[i].aspectRatio != "") {
            newRatio.innerHTML = "<b>Aspect Ratio:</b> " + productCMList[i].aspectRatio;
        }
        element.appendChild(newRatio);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "productCM_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (productCMList[i].features != []) {
            newFeatures.innerHTML = "<b>Features:</b>";
            for (var num = 0; num < productCMList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productCMList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "productCM_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "";
        if (productCMList[i].productDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productCMList[i].productDesc;
        }
        element.appendChild(newDesc);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "productCM_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (productCMList[i].reviews != []) {
            newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < productCMList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + productCMList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("productCM#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}