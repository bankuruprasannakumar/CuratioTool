function getProducts() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("product_card_col_" + i).innerHTML = "";
    }
    var i, block = 1;
    for (i = 0; i < productList.length; i++) {
        productList[i].contentType = "BUY";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "product#" + i;

        document.getElementById("product_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.setAttribute("style", "width: 100%; min-height: 20px; margin-bottom: 20px; background: (0, 0, 0, 0.05);");
        newSelectBar.id = "product#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        document.getElementById("product#" + i).appendChild(newSelectBar);

        var newImage = document.createElement("IMG");
        newImage.className = "images";
        newImage.id = "product_image" + i;
        var image_url = productList[i].images[0];
        newImage.src = image_url;

        document.getElementById("product#select#" + i).appendChild(newImage);

        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "product_productName" + i;
        newTitle.href = productList[i].productUrl;
        newTitle.innerHTML = productList[i].productName;
        
        document.getElementById("product#" + i).appendChild(newTitle);
        
        var newRating = document.createElement("DIV");
        newRating.className = "ratings";
        newRating.id = "product_rating" + i;
        newRating.innerHTML = "N/A";
        if (productList[i].rating != null) {
            newRating.innerHTML = productList[i].rating;
        }
        document.getElementById("product#" + i).appendChild(newRating);
        
        if (productList[i].productPrice != null) {
            var newPrice = document.createElement("DIV");
            newPrice.id = "product_productPrice" + i;
            newPrice.className = "productPrice";
            newPrice.innerHTML = productList[i].productPrice;
            document.getElementById("product#" + i).appendChild(newPrice);
        }
        
        if (productList[i].discountedPercentage != null) {
            var newPerc = document.createElement("DIV");
            newPerc.id = "product_perc" + i;
            newPerc.className = "percs";
            newPerc.innerHTML = productList[i].discountedPercentage;
            document.getElementById("product#" + i).appendChild(newPerc);
        }
        
        if (productList[i].merchantName != null) {
            var newMerchant = document.createElement("DIV");
            newMerchant.id = "product_merchantName" + i;
            newMerchant.className = "merchantNames";
            newMerchant.innerHTML = productList[i].merchantName;
            document.getElementById("product#" + i).appendChild(newMerchant);
        }
        
        if (productList[i].size != null) {
            var newSize = document.createElement("DIV");
            newSize.id = "product_size" + i;
            newSize.className = "sizes";
            newSize.innerHTML = productList[i].size;
            document.getElementById("product#" + i).appendChild(newSize);
        }
        
        if (productList[i].color != null) {
            var newcolor = document.createElement("DIV");
            newcolor.id = "product_color" + i;
            newcolor.className = "color";
            newcolor.innerHTML = productList[i].color;
            document.getElementById("product#" + i).appendChild(newcolor);
        }
        
        if (productList[i].brandName != null) {
            var newBrand = document.createElement("DIV");
            newBrand.id = "product_brandName" + i;
            newBrand.className = "brandNames";
            newBrand.innerHTML = productList[i].brandName;
            document.getElementById("product#" + i).appendChild(newBrand);
        }
        
        if (productList[i].location != null) {
            var newLocation = document.createElement("DIV");
            newLocation.id = "product_location" + i;
            newLocation.className = "locations";
            newLocation.innerHTML = productList[i].location;
            document.getElementById("product#" + i).appendChild(newLocation);
        }
        
        if (productList[i].cuisines != null) {
            var newCuisines = document.createElement("DIV");
            newCuisines.id = "product_cuisines" + i;
            newCuisines.className = "cuisines";
            newCuisines.innerHTML = productList[i].cuisines;
            document.getElementById("product#" + i).appendChild(newCuisines);
        }
        
        if (productList[i].features != null && productList[i].features != []) {
            var newFeatures = document.createElement("DIV");
            newFeatures.id = "product_features" + i;
            newFeatures.className = "descriptions";
            newFeatures.innerHTML = "<b>Features:</b><br>"
            for (var num = 0; num < productList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productList[i].features[num] + "</p>";
            }
            document.getElementById("product#" + i).appendChild(newFeatures);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "product_desc" + i;
        newDesc.className = "descriptions";
        newDesc.innerHTML = productList[i].productDesc;

        document.getElementById("product#" + i).appendChild(newDesc);
        document.getElementById("product#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}