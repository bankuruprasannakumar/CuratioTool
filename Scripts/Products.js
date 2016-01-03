function getProducts() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("product_card_col_" + i).innerHTML = "";
    }
    
    for (var i = 0; i < productList.length; i++) {
        productList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "product#" + i;

        document.getElementById("product").appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var element = document.getElementById("product#" + i);
        
        if (selected_items_id.indexOf("product#" + i) != -1) {
            element.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
            element.style.background = "rgba(0, 0, 0, 0.1)";
        }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "product#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'product_image" + i + "'></center>";

        element.appendChild(newSelectBar);

        var newImage = document.getElementById("product_image" + i);
        newImage.className = "images";
        var image_url = productList[i].images[0];
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "product_productName" + i;
        newTitle.href = productList[i].productUrl;
        newTitle.innerHTML = productList[i].productName;
        
        element.appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "product_rating" + i;
        newRating.innerHTML = "";
        if (productList[i].rating != null && productList[i].rating != "") {
            newRating.innerHTML = "<b>Rating:</b> " + productList[i].rating;
        }
        element.appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "product_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "";
        if (productList[i].productPrice != null && productList[i].productPrice != "") {
            newPrice.innerHTML = "<b>Price:</b> " + productList[i].productPrice;
        }
        element.appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "product_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "";
        if (productList[i].discountedPercentage != null && productList[i].discountedPercentage != "") {
            newPerc.innerHTML = "<b>Discount:</b> " + productList[i].discountedPercentage;
        }
        element.appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "product_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "";
        if (productList[i].merchantName != null && productList[i].merchantName != "") {
            newMerchant.innerHTML = "<b>Merchant:</b> " + productList[i].merchantName;
        }
        element.appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "product_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "";
        if (productList[i].size != null && productList[i].size != "") {
            newSize.innerHTML = "<b>Size:</b> " + productList[i].size;
        }
        element.appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "product_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "";
        if (productList[i].color != null && productList[i].color != "") {
            newColor.innerHTML = "<b>Color:</b> " + productList[i].color;
        }
        element.appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "product_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "";
        if (productList[i].brandName != null && productList[i].brandName != "") {
            newBrand.innerHTML = "<b>Brand:</b> " + productList[i].brandName;
        }
        element.appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "product_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "";
        if (productList[i].location != null && productList[i].location != "") {
            newLocation.innerHTML = "<b>Location:</b> " + productList[i].location;
        }
        element.appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "product_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "";
        if (productList[i].cuisines != null && productList[i].cuisines != "") {
            newCuisines.innerHTML = "<b>Cuisines:</b> " + productList[i].cuisines;
        }
        element.appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.id = "product_material" + i;
        newMaterial.className = "details";
        newMaterial.innerHTML = "";
        if (productList[i].material != null && productList[i].material != "") {
            newCuisines.innerHTML = "<b>Material:</b> " + productList[i].material;
        }
        element.appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.id = "product_style" + i;
        newStyle.className = "details";
        newStyle.innerHTML = "";
        if (productList[i].style != null && productList[i].style != "") {
            newStyle.innerHTML = "<b>Style:</b> " + productList[i].style;
        }
        element.appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.id = "product_aspectRatio" + i;
        newRatio.className = "details";
        newRatio.innerHTML = "";
        if (productList[i].aspectRatio != null && productList[i].aspectRatio != "") {
            newRatio.innerHTML = "<b>Aspect Ratio:</b> " + productList[i].aspectRatio;
        }
        element.appendChild(newRatio);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "product_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "";
        if (productList[i].features != []) {
            newFeatures.innerHTML = "<b>Features:</b>";
            for (var num = 0; num < productList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productList[i].features[num] + "</p>";
            }
        }
        element.appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "product_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "";
        if (productList[i].productDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productList[i].productDesc;
        }
        element.appendChild(newDesc);
        
        var newReviews = document.createElement("DIV");
        newReviews.setAttribute("style", "font-size: 14px;");
        newReviews.id = "product_reviews" + i;
        newReviews.className = "details";
        newReviews.innerHTML = "";
        if (productList[i].reviews != []) {
            newReviews.innerHTML = "<b>Reviews:</b>";
            for (var num = 0; num < productList[i].reviews.length; num++) {
                newReviews.innerHTML += "<p>" + productList[i].reviews[num] + "</p>";
            }
        }
        element.appendChild(newReviews);
        
        document.getElementById("product#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}