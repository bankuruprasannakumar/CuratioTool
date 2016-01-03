function getProductsDB() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("productDB_card_col_" + i).innerHTML = "";
    }
    
    var block = 1;
    for (var i = 0; i < productDBList.length; i++) {
        productDBList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "productDB#" + i;

        document.getElementById("productDB_card_col_" + block).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("productDB#" + i);
        
        if (selected_items_id.indexOf("productDB#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "productDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'productDB_image" + i + "'></center>";

        element.appendChild(newSelectBar);

        var newImage = document.getElementById("productDB_image" + i);
        newImage.className = "images";
        var image_url = productDBList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "productDB_productName" + i;
        newTitle.href = productDBList[i].productUrl;
        newTitle.innerHTML = productDBList[i].productName;
        
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "productDB_rating" + i;
        newRating.innerHTML = "";
        if (productDBList[i].rating != null && productDBList[i].rating != "") {
            newRating.innerHTML = "<b>Rating:</b> " + productDBList[i].rating;
        }
        element.appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "productDB_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (productDBList[i].productPrice != null && productDBList[i].productPrice != "") {
            newPrice.innerHTML = "<b>Price:</b> " + productDBList[i].productPrice;
        }
        element.appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "productDB_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "";
        if (productDBList[i].discountedPercentage != null && productDBList[i].discountedPercentage != "") {
            newPerc.innerHTML = "<b>Discount:</b> " + productDBList[i].discountedPercentage;
        }
        element.appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "productDB_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "";
        if (productDBList[i].merchantName != null && productDBList[i].merchantName != "") {
            newMerchant.innerHTML = "<b>Merchant:</b> " + productDBList[i].merchantName;
        }
        element.appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "productDB_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "";
        if (productDBList[i].size != null && productDBList[i].size != "") {
            newSize.innerHTML = "<b>Size:</b> " + productDBList[i].size;
        }
        element.appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "productDB_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "";
        if (productDBList[i].color != null && productDBList[i].color != "") {
            newColor.innerHTML = "<b>Color:</b> " + productDBList[i].color;
        }
        element.appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "productDB_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "";
        if (productDBList[i].brandName != null && productDBList[i].brandName != "") {
            newBrand.innerHTML = "<b>Brand:</b> " + productDBList[i].brandName;
        }
        element.appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "productDB_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "";
        if (productDBList[i].location != null && productDBList[i].location != "") {
            newLocation.innerHTML = "<b>Location:</b> " + productDBList[i].location;
        }
        element.appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "productDB_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "";
        if (productDBList[i].cuisines != null && productDBList[i].cuisines != "") {
            newCuisines.innerHTML = "<b>Cuisines:</b> " + productDBList[i].cuisines;

        }
        element.appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.id = "productDB_material" + i;
        newMaterial.className = "details";
        newMaterial.innerHTML = "";
        if (productDBList[i].material != null && productDBList[i].material != "") {
            newCuisines.innerHTML = "<b>Material:</b> " + productDBList[i].material;
        }
        element.appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.id = "productDB_material" + i;
        newMaterial.className = "details";
        newMaterial.innerHTML = "";
        if (productDBList[i].material != null && productDBList[i].material != "") {
            newCuisines.innerHTML = "<b>Material:</b> " + productDBList[i].material;
        }
        element.appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.id = "productDB_style" + i;
        newStyle.className = "details";
        newStyle.innerHTML = "";
        if (productDBList[i].style != null && productDBList[i].style != "") {
            newStyle.innerHTML = "<b>Style:</b> " + productDBList[i].style;
        }
        element.appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.id = "productDB_aspectRatio" + i;
        newRatio.className = "details";
        newRatio.innerHTML = "";
        if (productDBList[i].aspectRatio != null && productDBList[i].aspectRatio != "") {
            newRatio.innerHTML = "<b>Aspect Ratio:</b> " + productDBList[i].aspectRatio;
        }
        element.appendChild(newRatio);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "productDB_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (productDBList[i].features != []) {
            newFeatures.innerHTML = "<b>Features:</b>";
            for (var num = 0; num < productDBList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productDBList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "productDB_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "";
        if (productDBList[i].productDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productDBList[i].productDesc;
        }
        element.appendChild(newDesc);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "productDB_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (productDBList[i].reviews != []) {
            newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < productDBList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + productDBList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("productDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}