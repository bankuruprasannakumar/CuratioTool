function getProductsDB() {
    var i, block = 1;
    var a = [0, 0, 0, 0];
    for (i = 0; i < productDBList.length; i++) {
        productDBList[i].contentType = "BUY"
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "productDB#" + i;

        document.getElementById("productDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.setAttribute("style", "width: 100%; min-height: 20px; margin-bottom: 20px; background: (0, 0, 0, 0.05);");
        newSelectBar.id = "productDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        document.getElementById("productDB#" + i).appendChild(newSelectBar);

        var newImage = document.createElement("IMG");
        newImage.className = "images";
        newImage.id = "productDB_image" + i;
        var image_url = productDBList[i].images[0];
        newImage.src = image_url;

        document.getElementById("productDB#select#" + i).appendChild(newImage);

        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "productDB_productName" + i;
        newTitle.href = productDBList[i].productUrl;
        newTitle.innerHTML = productDBList[i].productName;
        
        document.getElementById("productDB#" + i).appendChild(newTitle);
        
        if (productDBList[i].rating != null) {
            var newRating = document.createElement("DIV");
            newRating.className = "ratings";
            newRating.id = "productDB_rating" + i;
            newRating.innerHTML = productDBList[i].rating;
            document.getElementById("productDB#" + i).appendChild(newRating);
        }
        
        if (productDBList[i].productPrice != null) {
            var newPrice = document.createElement("DIV");
            newPrice.id = "productDB_productPrice" + i;
            newPrice.className = "productPrice";
            newPrice.innerHTML = productDBList[i].productPrice;
            document.getElementById("productDB#" + i).appendChild(newPrice);
        }
        
        if (productDBList[i].discountedPercentage != null) {
            var newPerc = document.createElement("DIV");
            newPerc.id = "productDB_perc" + i;
            newPerc.className = "percs";
            newPerc.innerHTML = productDBList[i].discountedPercentage;
            document.getElementById("productDB#" + i).appendChild(newPerc);
        }
        
        if (productDBList[i].merchantName != null) {
            var newMerchant = document.createElement("DIV");
            newMerchant.id = "productDB_merchantName" + i;
            newMerchant.className = "merchantNames";
            newMerchant.innerHTML = productDBList[i].merchantName;
            document.getElementById("productDB#" + i).appendChild(newMerchant);
        }
        
        if (productDBList[i].size != null) {
            var newSize = document.createElement("DIV");
            newSize.id = "productDB_size" + i;
            newSize.className = "sizes";
            newSize.innerHTML = productDBList[i].size;
            document.getElementById("productDB#" + i).appendChild(newSize);
        }
        
        if (productDBList[i].colour != null) {
            var newColour = document.createElement("DIV");
            newColour.id = "productDB_colour" + i;
            newColour.className = "colour";
            newColour.innerHTML = productDBList[i].colour;
            document.getElementById("productDB#" + i).appendChild(newColour);
        }
        
        if (productDBList[i].brandName != null) {
            var newBrand = document.createElement("DIV");
            newBrand.id = "productDB_brandName" + i;
            newBrand.className = "brandNames";
            newBrand.innerHTML = productDBList[i].brandName;
            document.getElementById("productDB#" + i).appendChild(newBrand);
        }
        
        if (productDBList[i].features != null && productDBList[i].features != []) {
            var newFeatures = document.createElement("DIV");
            newFeatures.id = "productDB_features" + i;
            newFeatures.className = "descriptions";
            newFeatures.innerHTML = "<b>Features:</b><br>"
            for (var num = 0; num < productDBList[i].features.length; num++) {
                newFeatures.innerHTML += "<p>" + productDBList[i].features[num] + "</p>";
            }
            document.getElementById("productDB#" + i).appendChild(newFeatures);
        }
        
        var newDesc = document.createElement("DIV");
        newDesc.id = "productDB_desc" + i;
        newDesc.className = "descriptions";
        newDesc.innerHTML = productDBList[i].productDesc;

        document.getElementById("productDB#" + i).appendChild(newDesc);
        document.getElementById("productDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}