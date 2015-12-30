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

        document.getElementById("productDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "productDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'productDB_image" + i + "'></center>";

        document.getElementById("productDB#" + i).appendChild(newSelectBar);

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
        
        document.getElementById("productDB#" + i).appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "details";
        newRating.id = "productDB_rating" + i;
        newRating.innerHTML = "<b>Rating:</b> N/A";
        if (productDBList[i].rating != null) {
            newRating.innerHTML = "<b>Rating:</b> N/A" + productDBList[i].rating;
        }
        document.getElementById("productDB#" + i).appendChild(newRating);

        var newPrice = document.createElement("DIV");
        newPrice.id = "productDB_productPrice" + i;
        newPrice.className = "details";
        newPrice.innerHTML = "<b>Price:</b> N/A";
        if (productDBList[i].productPrice != null) {
            newPrice.innerHTML = "<b>Price: </b>" + productDBList[i].productPrice;
        }
        document.getElementById("productDB#" + i).appendChild(newPrice);
        
        var newPerc = document.createElement("DIV");
        newPerc.id = "productDB_perc" + i;
        newPerc.className = "details";
        newPerc.innerHTML = "<b>Discount:</b> N/A";
        if (productDBList[i].discountedPercentage != null) {
            newPerc.innerHTML = "<b>Discount: </b>" + productDBList[i].discountedPercentage;
        }
        document.getElementById("productDB#" + i).appendChild(newPerc);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.id = "productDB_merchantName" + i;
        newMerchant.className = "details";
        newMerchant.innerHTML = "<b>Merchant:</b> N/A";
        if (productDBList[i].merchantName != null) {
            newMerchant.innerHTML = "<b>Merchant: </b>" + productDBList[i].merchantName;
        }
        document.getElementById("productDB#" + i).appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.id = "productDB_size" + i;
        newSize.className = "details";
        newSize.innerHTML = "<b>Size:</b> N/A";
        if (productDBList[i].size != null) {
            newSize.innerHTML = "<b>Size: </b>" + productDBList[i].size;
        }
        document.getElementById("productDB#" + i).appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.id = "productDB_color" + i;
        newColor.className = "details";
        newColor.innerHTML = "<b>Color:</b> N/A";
        if (productDBList[i].color != null) {
            newColor.innerHTML = "<b>Color:</b> " + productDBList[i].color;
        }
        document.getElementById("productDB#" + i).appendChild(newColor);
        
        var newBrand = document.createElement("DIV");
        newBrand.id = "productDB_brandName" + i;
        newBrand.className = "details";
        newBrand.innerHTML = "<b>Brand:</b> N/A";
        if (productDBList[i].brandName != null) {
            newBrand.innerHTML = "<b>Brand:</b> N/A" + productDBList[i].brandName;
        }
        document.getElementById("productDB#" + i).appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.id = "productDB_location" + i;
        newLocation.className = "details";
        newLocation.innerHTML = "<b>Location:</b> N/A";
        if (productDBList[i].location != null) {
            newLocation.innerHTML = "<b>Location:</b> N/A" + productDBList[i].location;
        }
        document.getElementById("productDB#" + i).appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.id = "productDB_cuisines" + i;
        newCuisines.className = "details";
        newCuisines.innerHTML = "<b>Cuisines:</b> N/A";
        if (productDBList[i].cuisines != null) {
            newCuisines.innerHTML = "<b>Cuisines:</b> N/A" + productDBList[i].cuisines;
        }
        document.getElementById("productDB#" + i).appendChild(newCuisines);
        
        var newFeatures = document.createElement("DIV");
        newFeatures.id = "productDB_features" + i;
        newFeatures.className = "details";
        newFeatures.innerHTML = "<b>Features:</b><br>N/A";
        if (productDBList[i].features != null && productDBList[i].features != []) {
            for (var num = 0; num < productDBList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productDBList[i].features[num] + "</p>";
            }
        }
        document.getElementById("productDB#" + i).appendChild(newFeatures);
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "productDB_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = "<b>Description:</b> N/A";
        if (productDBList[i].productDBDesc != null) {
            newDesc.innerHTML = "<b>Description:</b><br>" + productDBList[i].productDBDesc;
        }
        document.getElementById("productDB#" + i).appendChild(newDesc);
        
        document.getElementById("productDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}