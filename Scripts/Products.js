function getProducts() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("product_card_col_" + i).innerHTML = "";
    }
    for (var i = 1; i < 5; i++) {
        document.getElementById("product_card_col_" + i).innerHTML = "";
    }
    var block = 1;
    for (var i = 0; i < productList.length; i++) {
        productList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "product#" + i;

        document.getElementById("product_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "product#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'product_image" + i + "'></center>";

        document.getElementById("product#" + i).appendChild(newSelectBar);

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
        
        document.getElementById("product#" + i).appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "product_rating" + i;
        newRating.innerHTML = "<b>Rating:</b> N/A";
        if (productList[i].rating != null) {
            newRating.innerHTML = "<b>Rating:</b> N/A" + productList[i].rating;
        }
        document.getElementById("product#" + i).appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "product_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "<b>Price:</b> N/A";
        if (productList[i].productPrice != null) {
            newPrice.innerHTML = "<b>Price: </b>" + productList[i].productPrice;
        }
        document.getElementById("product#" + i).appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "product_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "<b>Discount:</b> N/A";
        if (productList[i].discountedPercentage != null) {
            newPerc.innerHTML = "<b>Discount: </b>" + productList[i].discountedPercentage;
        }
        document.getElementById("product#" + i).appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "product_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "<b>Merchant:</b> N/A";
        if (productList[i].merchantName != null) {
            newMerchant.innerHTML = "<b>Merchant: </b>" + productList[i].merchantName;
        }
        document.getElementById("product#" + i).appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "product_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "<b>Size:</b> N/A";
        if (productList[i].size != null) {
            newSize.innerHTML = "<b>Size: </b>" + productList[i].size;
        }
        document.getElementById("product#" + i).appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "product_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "<b>Color:</b> N/A";
        if (productList[i].color != null) {
            newColor.innerHTML = "<b>Color:</b> " + productList[i].color;
        }
        document.getElementById("product#" + i).appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "product_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "<b>Brand:</b> N/A";
        if (productList[i].brandName != null) {
            newBrand.innerHTML = "<b>Brand:</b> N/A" + productList[i].brandName;
        }
        document.getElementById("product#" + i).appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "product_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "<b>Location:</b> N/A";
        if (productList[i].location != null) {
            newLocation.innerHTML = "<b>Location:</b> N/A" + productList[i].location;
        }
        document.getElementById("product#" + i).appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "product_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "<b>Cuisines:</b> N/A";
        if (productList[i].cuisines != null) {
            newCuisines.innerHTML = "<b>Cuisines:</b> N/A" + productList[i].cuisines;
        }
        document.getElementById("product#" + i).appendChild(newCuisines);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "product_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "<b>Features:</b><br>N/A";
        if (productList[i].features != null && productList[i].features != []) {
            for (var num = 0; num < productList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productList[i].features[num] + "</p>";
            }
        }
        document.getElementById("product#" + i).appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "product_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "<b>Description:</b> N/A";
        if (productList[i].productDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productList[i].productDesc;
        }
        document.getElementById("product#" + i).appendChild(newDesc);
        
        document.getElementById("product#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}