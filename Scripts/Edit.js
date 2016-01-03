var app_cover_images = [];
var appCM_cover_images = [];
var appDB_cover_images = [];
var countReviews = 0;
var countFeatures = 0;

function editElement(elem_id) {
    countReviews = 0;
    var newCardHolder = document.createElement("DIV");
    newCardHolder.setAttribute("style", "font-size: 14px; width: 100%; position: absolute; top: 40px; height: calc(100% - 40px); overflow: scroll; background: rgba(211, 212, 229, 0.9);");
    newCardHolder.id = "edit_card_holder";
    
    document.getElementById("edit").appendChild(newCardHolder);
    
    var proper_id = elem_id.split("#");
    var element = parseInt(((selected_items_id[parseInt(proper_id[2])]).split("#"))[1]);
    
    if (proper_id[0] == "article") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; max-height: 400px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "article_edit_productName_" + proper_id[2];
        newTitle.innerHTML = articleList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "article_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = articleList[element].textArea;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "article_edit_image_" + proper_id[2];
        newImage.src = articleList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "article_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", articleList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Article Text: </b></span>";
        
    }
    
    if (proper_id[0] == "app") {
        
        var newRating = document.createElement("DIV");
        newRating.contentEditable = "true";
        newRating.setAttribute("style", "position: absolute; top: 90px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRating.id = "app_edit_rating_" + proper_id[2];
        newRating.innerHTML = "";
        if (appList[element].rating != null) {
            newRating.innerHTML = appList[element].rating;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRating);
        
        var newPrice = document.createElement("DIV");
        newPrice.contentEditable = "true";
        newPrice.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newPrice.id = "app_edit_price_" + proper_id[2];
        newPrice.innerHTML = "";
        if (appList[element].productPrice != null) {
            newPrice.innerHTML = appList[element].productPrice;
        }
        
        document.getElementById("edit_card_holder").appendChild(newPrice);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 230px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 470px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "app_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = appList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "app_edit_image_" + proper_id[2];
        newImage.src = appList[element].images[1];
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        app_cover_images = [appList[element].images[1], appList[element].images[2], appList[element].images[3]];
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "app_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditCoverApps(this.id, 0)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "app_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", appList[element].images[0]);
        newArtwork.setAttribute("onchange", "changeEditImageApps(this.value, this.id, 0);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 206px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 14px;'><b>Rating: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Price: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span id = 'num_cover' style = 'position: absolute; top: 53px; left: 80px; font-size: 15px;'>1</span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 550px; font-size: 14px;'><b>Reviews: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 50px; font-size: 14px;'><b>Features: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 480px; overflow: scroll; position: relative; top: 770px; left: 600px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = appList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "app_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = appList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 1130px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "app_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 480px; overflow: scroll; position: relative; top: 770px; left: 600px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = appList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "app_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = appList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 600px; left: 480px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "app_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
    }
    
        if (proper_id[0] == "music") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "music_edit_productName_" + proper_id[2];
        newTitle.innerHTML = musicList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
            
        var newContributor = document.createElement("DIV");
        newContributor.contentEditable = "true";
        newContributor.setAttribute("style", "position: absolute; top: 160px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newContributor.id = "music_edit_contributor_" + proper_id[2];
        newContributor.innerHTML = musicList[element].contributor;
        
        document.getElementById("edit_card_holder").appendChild(newContributor);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 230px; left: 600px; width: 490px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "music_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = musicList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "music_edit_image_" + proper_id[2];
        newImage.src = musicList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "music_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", musicList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 15px;'><b>Contributor: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 206px; left: 550px; font-size: 14px;'><b>Description: </b></span>";
        
    }
    
    if (proper_id[0] == "product") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; max-height: 400px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "product_edit_productName_" + proper_id[2];
        newTitle.innerHTML = productList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newPrice = document.createElement("DIV");
        newPrice.contentEditable = "true";
        newPrice.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newPrice.id = "product_edit_price_" + proper_id[2];
        newPrice.innerHTML = "";
        if (productList[element].productPrice != null) {
            newPrice.innerHTML = productList[element].productPrice;
        }
        
        document.getElementById("edit_card_holder").appendChild(newPrice);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.contentEditable = "true";
        newMerchant.setAttribute("style", "position: absolute; top: 230px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMerchant.id = "product_edit_merchantName" + proper_id[2];
        newMerchant.innerHTML = "";
        if (productList[element].merchantName != null) {
            newMerchant.innerHTML = productList[element].merchantName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.contentEditable = "true";
        newSize.setAttribute("style", "position: absolute; top: 300px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newSize.id = "product_edit_size_" + proper_id[2];
        newSize.innerHTML = "";
        if (productList[element].size != null) {
            newSize.innerHTML = productList[element].size;
        }
        
        document.getElementById("edit_card_holder").appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.contentEditable = "true";
        newColor.setAttribute("style", "position: absolute; top: 370px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newColor.id = "product_edit_color_" + proper_id[2];
        newColor.innerHTML = "";
        if (productList[element].color != null) {
            newColor.innerHTML = productList[element].color;
        }
        
        document.getElementById("edit_card_holder").appendChild(newColor);
        
        var newRating = document.createElement("DIV");
        newRating.contentEditable = "true";
        newRating.setAttribute("style", "position: absolute; top: 440px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRating.id = "product_edit_rating_" + proper_id[2];
        newRating.innerHTML = "";
        if (productList[element].rating != null) {
            newRating.innerHTML = productList[element].rating;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRating);
        
        var newBrand = document.createElement("DIV");
        newBrand.contentEditable = "true";
        newBrand.setAttribute("style", "position: absolute; top: 510px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newBrand.id = "product_edit_brandName_" + proper_id[2];
        newBrand.innerHTML = "";
        if (productList[element].brandName != null) {
            newBrand.innerHTML = productList[element].brandName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.contentEditable = "true";
        newLocation.setAttribute("style", "position: absolute; top: 580px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newLocation.id = "product_edit_location_" + proper_id[2];
        newLocation.innerHTML = "";
        if (productList[element].location != null) {
            newLocation.innerHTML = productList[element].location;
        }
        
        document.getElementById("edit_card_holder").appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.contentEditable = "true";
        newCuisines.setAttribute("style", "position: absolute; top: 650px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newCuisines.id = "product_edit_cuisines_" + proper_id[2];
        newCuisines.innerHTML = "";
        if (productList[element].cuisines != null) {
            newCuisines.innerHTML = productList[element].cuisines;
        }
        
        document.getElementById("edit_card_holder").appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.contentEditable = "true";
        newMaterial.setAttribute("style", "position: absolute; top: 720px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMaterial.id = "product_edit_material_" + proper_id[2];
        newMaterial.innerHTML = "";
        if (productList[element].material != null) {
            newMaterial.innerHTML = productList[element].material;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.contentEditable = "true";
        newStyle.setAttribute("style", "position: absolute; top: 790px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newStyle.id = "product_edit_style_" + proper_id[2];
        newStyle.innerHTML = "";
        if (productList[element].style != null) {
            newStyle.innerHTML = productList[element].style;
        }
        
        document.getElementById("edit_card_holder").appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.contentEditable = "true";
        newRatio.setAttribute("style", "position: absolute; top: 860px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRatio.id = "product_edit_aspectRatio_" + proper_id[2];
        newRatio.innerHTML = "";
        if (productList[element].aspectRatio != null) {
            newRatio.innerHTML = productList[element].aspectRatio;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRatio);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 930px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 300px; overflow: scroll; padding: 5px;  text-align: left; margin-bottom: 50px;");
        newDesc.id = "product_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = productList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "product_edit_image_" + proper_id[2];
        newImage.src = productList[element].images[0];
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "product_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditImageProducts(0, this.id)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "product_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", productList[element].images[0]);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Product Name: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Price: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 206px; left: 550px; font-size: 14px;'><b>Merchant: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 276px; left: 550px; font-size: 14px;'><b>Size: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 346px; left: 550px; font-size: 14px;'><b>Color: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 416px; left: 550px; font-size: 14px;'><b>Rating: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 486px; left: 550px; font-size: 14px;'><b>Brand: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 556px; left: 550px; font-size: 14px;'><b>Location: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 626px; left: 550px; font-size: 14px;'><b>Cuisines: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 696px; left: 550px; font-size: 14px;'><b>Material: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 766px; left: 550px; font-size: 14px;'><b>Style: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 836px; left: 550px; font-size: 14px;'><b>Aspect Ratio: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 896px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        newReviewBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Reviews</b></span>";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = productList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "product_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = productList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "product_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        newFeatureBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Features</b></span>";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = productList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "product_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = productList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 650px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "product_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
        
    }
    
    //######################################################################################################################
    
        if (proper_id[0] == "articleCM") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "articleCM_edit_productName_" + proper_id[2];
        newTitle.innerHTML = articleCMList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "articleCM_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = articleCMList[element].textArea;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "articleCM_edit_image_" + proper_id[2];
        newImage.src = articleCMList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "articleCM_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", articleCMList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Article Text: </b></span>";
        
    }
    
    if (proper_id[0] == "appCM") {
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 90px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 470px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "appCM_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = appCMList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        app_cover_images = [appCMList[element].images[1], appCMList[element].images[2], appCMList[element].images[3]];
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "appCM_edit_image_" + proper_id[2];
        newImage.src = appCMList[element].images[1];
        console.log(app_cover_images);
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "appCM_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditCoverApps(this.id, 0)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "appCM_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", appCMList[element].images[1]);
        newArtwork.setAttribute("onchange", "changeEditImageApps(this.value, this.id, 0);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span id = 'num_cover' style = 'position: absolute; top: 53px; left: 80px; font-size: 15px;'>1</span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 550px; font-size: 14px;'><b>Reviews: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 50px; font-size: 14px;'><b>Features: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 480px; overflow: scroll; position: relative; top: 630px; left: 600px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = appCMList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "appCM_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = appCMList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 1120px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "appCM_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 330px; max-height: 400px; overflow: scroll; position: absolute; top: 630px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = appCMList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "appCM_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = appCMList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 600px; left: 480px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "appCM_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
        
    }
    
    if (proper_id[0] == "musicCM") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "musicCM_edit_productName_" + proper_id[2];
        newTitle.innerHTML = musicCMList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
            
        var newContributor = document.createElement("DIV");
        newContributor.contentEditable = "true";
        newContributor.setAttribute("style", "position: absolute; top: 160px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newContributor.id = "musicCM_edit_contributor_" + proper_id[2];
        newContributor.innerHTML = musicCMList[element].contributor;
        
        document.getElementById("edit_card_holder").appendChild(newContributor);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "musicCM_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = musicCMList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "musicCM_edit_image_" + proper_id[2];
        newImage.src = musicCMList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "musicCM_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", musicCMList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Description: </b></span>";
        
    }
    
    if (proper_id[0] == "productCM") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; max-height: 400px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "productCM_edit_productName_" + proper_id[2];
        newTitle.innerHTML = productCMList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newPrice = document.createElement("DIV");
        newPrice.contentEditable = "true";
        newPrice.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newPrice.id = "productCM_edit_price_" + proper_id[2];
        newPrice.innerHTML = "";
        if (productCMList[element].productPrice != null) {
            newPrice.innerHTML = productCMList[element].productPrice;
        }
        
        document.getElementById("edit_card_holder").appendChild(newPrice);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.contentEditable = "true";
        newMerchant.setAttribute("style", "position: absolute; top: 230px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMerchant.id = "productCM_edit_merchantName" + proper_id[2];
        newMerchant.innerHTML = "";
        if (productCMList[element].merchantName != null) {
            newMerchant.innerHTML = productCMList[element].merchantName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.contentEditable = "true";
        newSize.setAttribute("style", "position: absolute; top: 300px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newSize.id = "productCM_edit_size_" + proper_id[2];
        newSize.innerHTML = "";
        if (productCMList[element].size != null) {
            newSize.innerHTML = productCMList[element].size;
        }
        
        document.getElementById("edit_card_holder").appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.contentEditable = "true";
        newColor.setAttribute("style", "position: absolute; top: 370px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newColor.id = "productCM_edit_color_" + proper_id[2];
        newColor.innerHTML = "";
        if (productCMList[element].color != null) {
            newColor.innerHTML = productCMList[element].color;
        }
        
        document.getElementById("edit_card_holder").appendChild(newColor);
        
        var newRating = document.createElement("DIV");
        newRating.contentEditable = "true";
        newRating.setAttribute("style", "position: absolute; top: 440px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRating.id = "productCM_edit_rating_" + proper_id[2];
        newRating.innerHTML = "";
        if (productCMList[element].rating != null) {
            newRating.innerHTML = productCMList[element].rating;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRating);
        
        var newBrand = document.createElement("DIV");
        newBrand.contentEditable = "true";
        newBrand.setAttribute("style", "position: absolute; top: 510px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newBrand.id = "productCM_edit_brandName_" + proper_id[2];
        newBrand.innerHTML = "";
        if (productCMList[element].brandName != null) {
            newBrand.innerHTML = productCMList[element].brandName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.contentEditable = "true";
        newLocation.setAttribute("style", "position: absolute; top: 580px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newLocation.id = "productCM_edit_location_" + proper_id[2];
        newLocation.innerHTML = "";
        if (productCMList[element].location != null) {
            newLocation.innerHTML = productCMList[element].location;
        }
        
        document.getElementById("edit_card_holder").appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.contentEditable = "true";
        newCuisines.setAttribute("style", "position: absolute; top: 650px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newCuisines.id = "productCM_edit_cuisines_" + proper_id[2];
        newCuisines.innerHTML = "";
        if (productCMList[element].cuisines != null) {
            newCuisines.innerHTML = productCMList[element].cuisines;
        }
        
        document.getElementById("edit_card_holder").appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.contentEditable = "true";
        newMaterial.setAttribute("style", "position: absolute; top: 720px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMaterial.id = "productCM_edit_material_" + proper_id[2];
        newMaterial.innerHTML = "";
        if (productCMList[element].material != null) {
            newMaterial.innerHTML = productCMList[element].material;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.contentEditable = "true";
        newStyle.setAttribute("style", "position: absolute; top: 790px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newStyle.id = "productCM_edit_style_" + proper_id[2];
        newStyle.innerHTML = "";
        if (productCMList[element].style != null) {
            newStyle.innerHTML = productCMList[element].style;
        }
        
        document.getElementById("edit_card_holder").appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.contentEditable = "true";
        newRatio.setAttribute("style", "position: absolute; top: 860px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRatio.id = "productCM_edit_aspectRatio_" + proper_id[2];
        newRatio.innerHTML = "";
        if (productCMList[element].aspectRatio != null) {
            newRatio.innerHTML = productCMList[element].aspectRatio;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRatio);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 930px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 300px; overflow: scroll; padding: 5px;  text-align: left; margin-bottom: 50px;");
        newDesc.id = "productCM_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = productCMList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "productCM_edit_image_" + proper_id[2];
        newImage.src = productCMList[element].images[0];
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "productCM_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditImageProducts(0, this.id)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "productCM_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", productCMList[element].images[0]);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Product Name: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Price: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 206px; left: 550px; font-size: 14px;'><b>Merchant: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 276px; left: 550px; font-size: 14px;'><b>Size: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 346px; left: 550px; font-size: 14px;'><b>Color: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 416px; left: 550px; font-size: 14px;'><b>Rating: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 486px; left: 550px; font-size: 14px;'><b>Brand: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 556px; left: 550px; font-size: 14px;'><b>Location: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 626px; left: 550px; font-size: 14px;'><b>Cuisines: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 696px; left: 550px; font-size: 14px;'><b>Material: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 766px; left: 550px; font-size: 14px;'><b>Style: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 836px; left: 550px; font-size: 14px;'><b>Aspect Ratio: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 896px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        newReviewBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Reviews</b></span>";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = productCMList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "productCM_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = productCMList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "productCM_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        newFeatureBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Features</b></span>";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = productCMList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "productCM_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = productCMList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 650px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "productCM_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
        
    }
    //##########################################################################################################################
    
    if (proper_id[0] == "articleDB") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "articleDB_edit_productName_" + proper_id[2];
        newTitle.innerHTML = articleDBList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "articleDB_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = articleDBList[element].textArea;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "articleDB_edit_image_" + proper_id[2];
        newImage.src = articleDBList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "articleDB_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", articleDBList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Article Text: </b></span>";
        
    }
    
    if (proper_id[0] == "appDB") {
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 90px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 470px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "appDB_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = appDBList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        app_cover_images = [appDBList[element].images[1], appDBList[element].images[2], appDBList[element].images[3]];
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "appDB_edit_image_" + proper_id[2];
        newImage.src = appDBList[element].images[1];
        console.log(app_cover_images);
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "appDB_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditCoverApps(this.id, 0)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "appDB_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", appDBList[element].images[1]);
        newArtwork.setAttribute("onchange", "changeEditImageApps(this.value, this.id, 0);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span id = 'num_cover' style = 'position: absolute; top: 53px; left: 80px; font-size: 15px;'>1</span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 550px; font-size: 14px;'><b>Reviews: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 600px; left: 50px; font-size: 14px;'><b>Features: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 480px; overflow: scroll; position: relative; top: 630px; left: 600px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = appDBList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "appDB_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = appDBList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 1120px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "appDB_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 330px; max-height: 400px; overflow: scroll; position: absolute; top: 630px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = appDBList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "appDB_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = appDBList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 600px; left: 480px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "appDB_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
        
    }
    
    if (proper_id[0] == "musicDB") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "musicDB_edit_productName_" + proper_id[2];
        newTitle.innerHTML = musicDBList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
            
        var newContributor = document.createElement("DIV");
        newContributor.contentEditable = "true";
        newContributor.setAttribute("style", "position: absolute; top: 160px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; height: 14px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newContributor.id = "musicDB_edit_contributor_" + proper_id[2];
        newContributor.innerHTML = musicDBList[element].contributor;
        
        document.getElementById("edit_card_holder").appendChild(newContributor);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newDesc.id = "musicDB_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = musicDBList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "musicDB_edit_image_" + proper_id[2];
        newImage.src = musicDBList[element].image;
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "musicDB_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", musicDBList[element].image);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Title: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Description: </b></span>";
        
    }
    
    if (proper_id[0] == "productDB") {
        var newTitle = document.createElement("DIV");
        newTitle.contentEditable = "true";
        newTitle.setAttribute("style", "position: absolute; top: 90px; left: 600px; border: solid 1px lightblue; text-align: justify; border-radius: 2px; max-height: 400px; width: 500px; overflow-x: scroll; padding: 5px; white-space: nowrap;");
        newTitle.id = "productDB_edit_productName_" + proper_id[2];
        newTitle.innerHTML = productDBList[element].productName;
        
        document.getElementById("edit_card_holder").appendChild(newTitle);
        
        var newPrice = document.createElement("DIV");
        newPrice.contentEditable = "true";
        newPrice.setAttribute("style", "position: absolute; top: 160px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newPrice.id = "productDB_edit_price_" + proper_id[2];
        newPrice.innerHTML = "";
        if (productDBList[element].productPrice != null) {
            newPrice.innerHTML = productDBList[element].productPrice;
        }
        
        document.getElementById("edit_card_holder").appendChild(newPrice);
        
        var newMerchant = document.createElement("DIV");
        newMerchant.contentEditable = "true";
        newMerchant.setAttribute("style", "position: absolute; top: 230px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMerchant.id = "productDB_edit_merchantName" + proper_id[2];
        newMerchant.innerHTML = "";
        if (productDBList[element].merchantName != null) {
            newMerchant.innerHTML = productDBList[element].merchantName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMerchant);
        
        var newSize = document.createElement("DIV");
        newSize.contentEditable = "true";
        newSize.setAttribute("style", "position: absolute; top: 300px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newSize.id = "productDB_edit_size_" + proper_id[2];
        newSize.innerHTML = "";
        if (productDBList[element].size != null) {
            newSize.innerHTML = productDBList[element].size;
        }
        
        document.getElementById("edit_card_holder").appendChild(newSize);
        
        var newColor = document.createElement("DIV");
        newColor.contentEditable = "true";
        newColor.setAttribute("style", "position: absolute; top: 370px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newColor.id = "productDB_edit_color_" + proper_id[2];
        newColor.innerHTML = "";
        if (productDBList[element].color != null) {
            newColor.innerHTML = productDBList[element].color;
        }
        
        document.getElementById("edit_card_holder").appendChild(newColor);
        
        var newRating = document.createElement("DIV");
        newRating.contentEditable = "true";
        newRating.setAttribute("style", "position: absolute; top: 440px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRating.id = "productDB_edit_rating_" + proper_id[2];
        newRating.innerHTML = "";
        if (productDBList[element].rating != null) {
            newRating.innerHTML = productDBList[element].rating;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRating);
        
        var newBrand = document.createElement("DIV");
        newBrand.contentEditable = "true";
        newBrand.setAttribute("style", "position: absolute; top: 510px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newBrand.id = "productDB_edit_brandName_" + proper_id[2];
        newBrand.innerHTML = "";
        if (productDBList[element].brandName != null) {
            newBrand.innerHTML = productDBList[element].brandName;
        }
        
        document.getElementById("edit_card_holder").appendChild(newBrand);
        
        var newLocation = document.createElement("DIV");
        newLocation.contentEditable = "true";
        newLocation.setAttribute("style", "position: absolute; top: 580px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newLocation.id = "productDB_edit_location_" + proper_id[2];
        newLocation.innerHTML = "";
        if (productDBList[element].location != null) {
            newLocation.innerHTML = productDBList[element].location;
        }
        
        document.getElementById("edit_card_holder").appendChild(newLocation);
        
        var newCuisines = document.createElement("DIV");
        newCuisines.contentEditable = "true";
        newCuisines.setAttribute("style", "position: absolute; top: 650px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newCuisines.id = "productDB_edit_cuisines_" + proper_id[2];
        newCuisines.innerHTML = "";
        if (productDBList[element].cuisines != null) {
            newCuisines.innerHTML = productDBList[element].cuisines;
        }
        
        document.getElementById("edit_card_holder").appendChild(newCuisines);
        
        var newMaterial = document.createElement("DIV");
        newMaterial.contentEditable = "true";
        newMaterial.setAttribute("style", "position: absolute; top: 720px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newMaterial.id = "productDB_edit_material_" + proper_id[2];
        newMaterial.innerHTML = "";
        if (productDBList[element].material != null) {
            newMaterial.innerHTML = productDBList[element].material;
        }
        
        document.getElementById("edit_card_holder").appendChild(newMaterial);
        
        var newStyle = document.createElement("DIV");
        newStyle.contentEditable = "true";
        newStyle.setAttribute("style", "position: absolute; top: 790px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newStyle.id = "productDB_edit_style_" + proper_id[2];
        newStyle.innerHTML = "";
        if (productDBList[element].style != null) {
            newStyle.innerHTML = productDBList[element].style;
        }
        
        document.getElementById("edit_card_holder").appendChild(newStyle);
        
        var newRatio = document.createElement("DIV");
        newRatio.contentEditable = "true";
        newRatio.setAttribute("style", "position: absolute; top: 860px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 400px; overflow: scroll; padding: 5px;  text-align: left;");
        newRatio.id = "productDB_edit_aspectRatio_" + proper_id[2];
        newRatio.innerHTML = "";
        if (productDBList[element].aspectRatio != null) {
            newRatio.innerHTML = productDBList[element].aspectRatio;
        }
        
        document.getElementById("edit_card_holder").appendChild(newRatio);
        
        var newDesc = document.createElement("DIV");
        newDesc.contentEditable = "true";
        newDesc.setAttribute("style", "position: absolute; top: 930px; left: 600px; width: 500px; border: solid 1px lightblue; border-radius: 2px; max-height: 300px; overflow: scroll; padding: 5px;  text-align: left; margin-bottom: 50px;");
        newDesc.id = "productDB_edit_productDesc_" + proper_id[2];
        newDesc.innerHTML = productDBList[element].productDesc;
        
        document.getElementById("edit_card_holder").appendChild(newDesc);
        
        var newImage = document.createElement("IMG");
        newImage.setAttribute("style", "position: absolute; top: 90px; left: 100px;");
        newImage.width = "350";
        newImage.id = "productDB_edit_image_" + proper_id[2];
        newImage.src = productDBList[element].images[0];
        
        document.getElementById("edit_card_holder").appendChild(newImage);
        
        var newArrow = document.createElement("BUTTON");
        newArrow.className = "edit_buttons";
        newArrow.setAttribute("style", "position: absolute; left: 480px; top: 50px; height: 30px; width: 30px; background: url('http://www.myiconfinder.com/uploads/iconsets/7e81c2f3697b91ee17fe6ed6348c232a-Arrow.png'); background-size: 100%;");
        newArrow.id = "productDB_edit_arrow_" + proper_id[2];
        newArrow.setAttribute("onclick", "changeEditImageProducts(0, this.id)");
        
        document.getElementById("edit_card_holder").appendChild(newArrow);
        
        var newArtwork = document.createElement("INPUT");
        newArtwork.type = "text";
        newArtwork.setAttribute("style", "max-height: 400px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
        newArtwork.id = "productDB_edit_artwork_" + proper_id[2];
        newArtwork.setAttribute("value", productDBList[element].images[0]);
        newArtwork.setAttribute("onchange", "changeEditImage(this.value, this.id);");
        
        document.getElementById("edit_card_holder").appendChild(newArtwork);
        
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 66px; left: 550px; font-size: 15px;'><b>Product Name: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 136px; left: 550px; font-size: 14px;'><b>Price: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 206px; left: 550px; font-size: 14px;'><b>Merchant: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 276px; left: 550px; font-size: 14px;'><b>Size: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 346px; left: 550px; font-size: 14px;'><b>Color: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 416px; left: 550px; font-size: 14px;'><b>Rating: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 486px; left: 550px; font-size: 14px;'><b>Brand: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 556px; left: 550px; font-size: 14px;'><b>Location: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 626px; left: 550px; font-size: 14px;'><b>Cuisines: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 696px; left: 550px; font-size: 14px;'><b>Material: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 766px; left: 550px; font-size: 14px;'><b>Style: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 836px; left: 550px; font-size: 14px;'><b>Aspect Ratio: </b></span>";
        document.getElementById("edit_card_holder").innerHTML += "<span style = 'position: absolute; top: 896px; left: 550px; font-size: 14px;'><b>Details: </b></span>";
        
        var newReviewBox = document.createElement("DIV");
        newReviewBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newReviewBox.id = "edit_card_holder_review";
        newReviewBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Reviews</b></span>";
        document.getElementById("edit_card_holder").appendChild(newReviewBox);
        
        countReviews = productDBList[element].reviews.length;
        for (var i = 0; i < countReviews; i++) {
            var newReview = document.createElement("DIV");
            newReview.id = "productDB_edit_review" + proper_id[2] + "_" + i;
            newReview.contentEditable = "true";
            newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newReview.innerHTML = productDBList[element].reviews[i];
            
            document.getElementById("edit_card_holder_review").appendChild(newReview);
        }
        
        var addReviewButton = document.createElement("BUTTON");
        addReviewButton.className = "edit_buttons";
        addReviewButton.setAttribute("style", "top: 600px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addReviewButton.id = "productDB_edit_review_add_" + proper_id[2];
        addReviewButton.setAttribute("onclick", "addReview(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addReviewButton);
        
        var newFeatureBox = document.createElement("DIV");
        newFeatureBox.setAttribute("style", "width: 330px; overflow: scroll; position: relative; top: 600px; left: 100px; background: rgba(0, 0, 0, 0.05); padding: 20px; padding-bottom: 0px; margin-bottom: 30px;");
        newFeatureBox.id = "edit_card_holder_feature";
        newFeatureBox.innerHTML = "<span style = 'position: relative; top: -10px; font-size: 14px;'><b>Features</b></span>";
        document.getElementById("edit_card_holder").appendChild(newFeatureBox);
        
        countFeatures = productDBList[element].features.length;
        for (var i = 0; i < countFeatures; i++) {
            var newFeature = document.createElement("DIV");
            newFeature.id = "productDB_edit_feature" + proper_id[2] + "_" + i;
            newFeature.contentEditable = "true";
            newFeature.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
            newFeature.innerHTML = productDBList[element].features[i];
            
            document.getElementById("edit_card_holder_feature").appendChild(newFeature);
        }
        
        var addFeatureButton = document.createElement("BUTTON");
        addFeatureButton.className = "edit_buttons";
        addFeatureButton.setAttribute("style", "top: 650px; left: 470px; position: absolute; background-image: url('https://guildlist.googlecode.com/hg/src/images/new/add.png')");
        addFeatureButton.id = "productDB_edit_review_add_" + proper_id[2];
        addFeatureButton.setAttribute("onclick", "addFeature(this.id, " + element + ")");
        document.getElementById("edit_card_holder").appendChild(addFeatureButton);
        
    }
    
    document.getElementById("edit_save").setAttribute("onclick", "saveEdit('" + elem_id + "')");
    document.getElementById("edit").style.display = "block";
    
    hidePreview();
    document.body.style.overflow = "hidden";
    document.getElementById("search_card_holder").style.opacity = .3;
    document.getElementById("searchDB_card_holder").style.opacity = .3;
}

function addReview(rev_id, element) {
    var newReview = document.createElement("DIV");
    newReview.id = rev_id.split("_")[0] + "_edit_review" + rev_id.split("_")[4] + "_" + countReviews;
    newReview.contentEditable = "true";
    newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
    newReview.innerHTML = "";

    document.getElementById("edit_card_holder_review").appendChild(newReview);
    countReviews += 1;
}

function addFeature(rev_id, element) {
    var newReview = document.createElement("DIV");
    newReview.id = rev_id.split("_")[0] + "_edit_feature" + rev_id.split("_")[4] + "_" + countFeatures;
    newReview.contentEditable = "true";
    newReview.setAttribute("style", "position: relative; margin-bottom: 20px; width: 100%; max-height: 80px; border: solid 1px lightblue; border-radius: 2px; overflow: scroll; padding: 5px; left: -5px; background: rgba(256, 256, 256, 0.2); text-align: left;");
    newReview.innerHTML = "";

    document.getElementById("edit_card_holder_feature").appendChild(newReview);
    countFeatures += 1;
}

function changeEditImage(image_url, artwork_id) {
    var elem_id = parseInt(selected_items_id[parseInt(artwork_id.split("_")[3])].split("#")[1]);
    document.getElementById(artwork_id.split("_")[0] + "_edit_image_" + artwork_id.split("_")[3]).src = image_url;
}

function changeEditImageProducts(num_image, product_id) {
    elem_id = parseInt(selected_items_id[(parseInt(product_id.split("_")[3]))].split("#")[1]);
    var list;
    if (product_id.split("_")[0] == "product") {
        list = productList[elem_id].images;
    }
    if (product_id.split("_")[0] == "productCM") {
        list = productCMList[elem_id].images;
    }
    if (product_id.split("_")[0] == "productDB") {
        list = productDBList[elem_id].images;
    }
    num_image = (num_image+1) % (list.length - 1);
    document.getElementById(product_id.split("_")[0] + "_edit_artwork_" + product_id.split("_")[3]).setAttribute.value = list[num_image];
    document.getElementById(product_id.split("_")[0] + "_edit_image_" + product_id.split("_")[3]).src = list[num_image];
    document.getElementById(product_id.split("_")[0] + "_edit_arrow_" + product_id.split("_")[3]).setAttribute("onclick", "changeEditImageProducts(" + num_image + ", this.id)");
}

function changeEditImageApps(image_url, artwork_id, cover_num) {
    document.getElementById(artwork_id.split("_")[0] + "_edit_image_" + artwork_id.split("_")[3]).src = image_url;
    app_cover_images[cover_num] = image_url;
}

function changeEditCoverApps(product_id, cover_num) {
    var num_image = (cover_num+1) % 3;
    elem_id = parseInt(selected_items_id[(parseInt(product_id.split("_")[3]))].split("#")[1]);
    document.getElementById(product_id.split("_")[0] + "_edit_artwork_" + product_id.split("_")[3]).value = app_cover_images[num_image];
    document.getElementById(product_id.split("_")[0] + "_edit_image_" + product_id.split("_")[3]).src = app_cover_images[num_image];
    document.getElementById(product_id.split("_")[0] + "_edit_artwork_" + product_id.split("_")[3]).setAttribute("onchange", "changeEditImageApps(this.value, this.id, " + (num_image).toString() + ")");
    document.getElementById(product_id.split("_")[0] + "_edit_arrow_" + product_id.split("_")[3]).setAttribute("onclick", "changeEditCoverApps(this.id, " + (num_image).toString() + ")");
    document.getElementById("num_cover").innerHTML = (num_image + 1).toString();
}

function saveEdit(elem_id) {
        var proper_id = elem_id.split("#");
        var elem_num = selected_items_id[proper_id[2]].split("#")[1];
        var item_num = proper_id[2];
        if (proper_id[0] == "article") {
            articleList[elem_num].productName = document.getElementById("article_edit_productName_" + item_num).innerHTML;
            articleList[elem_num].image = document.getElementById("article_edit_artwork_" + item_num).value;
            articleList[elem_num].textArea = document.getElementById("article_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("article_productName" + elem_num).innerHTML = articleList[elem_num].productName;
            document.getElementById("article_image" + elem_num).src = articleList[elem_num].image;
            document.getElementById("article_productDesc" + elem_num).innerHTML = articleList[elem_num].textArea;
        }
        if (proper_id[0] == "app") {
            appList[elem_num].images[1] = app_cover_images[0];
            appList[elem_num].images[2] = app_cover_images[1];
            appList[elem_num].images[3] = app_cover_images[2];
            appList[elem_num].productDesc = document.getElementById("app_edit_productDesc_" + item_num).innerHTML;
            appList[elem_num].reviews = [];
            for (var i = 0; i < countReviews; i++) {
                appList[elem_num].reviews.push(document.getElementById("app_edit_review" + item_num + "_" + i).innerHTML);
            }
            getApps();
        }
        if (proper_id[0] == "music") {
            musicList[elem_num].productName = document.getElementById("music_edit_productName_" + item_num).innerHTML;
            musicList[elem_num].image = document.getElementById("music_edit_artwork_" + item_num).value;
            musicList[elem_num].productDesc = document.getElementById("music_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("music_productName" + elem_num).innerHTML = musicList[elem_num].productName;
            document.getElementById("music_image" + elem_num).src = musicList[elem_num].image;
            document.getElementById("music_productDesc" + elem_num).innerHTML = "<b>Details: </b><br><br>" + musicList[elem_num].productDesc;
        }
        if (proper_id[0] == "product") {
            productList[elem_num].productName = document.getElementById("product_edit_productName_" + item_num).innerHTML;
            productList[elem_num].images[0] = document.getElementById("product_edit_artwork_" + item_num).value;
            productList[elem_num].productDesc = document.getElementById("product_edit_productDesc_" + item_num).innerHTML;
            productList[elem_num].productPrice = document.getElementById("product_edit_price_" + item_num).innerHTML;
            productList[elem_num].merchantName = document.getElementById("product_edit_merchantName" + item_num).innerHTML;
            productList[elem_num].size = document.getElementById("product_edit_size_" + item_num).innerHTML;
            productList[elem_num].color = document.getElementById("product_edit_color_" + item_num).innerHTML;
            productList[elem_num].rating = document.getElementById("product_edit_rating_" + item_num).innerHTML;
            productList[elem_num].brandName = document.getElementById("product_edit_brandName_" + item_num).innerHTML;
            productList[elem_num].material = document.getElementById("product_edit_material_" + item_num).innerHTML;
            productList[elem_num].location = document.getElementById("product_edit_location_" + item_num).innerHTML;
            productList[elem_num].cuisines = document.getElementById("product_edit_cuisines_" + item_num).innerHTML;
            productList[elem_num].reviews = [];
            productList[elem_num].features = [];
            for (var i = 0; i < countReviews; i++) {
                var x = document.getElementById("product_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productList[elem_num].reviews.push(x);
                }
            }
            for (var i = 0; i < countFeatures; i++) {
                var x = document.getElementById("product_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productList[elem_num].reviews.push(x);
                }
            }
            
            getProducts();
        }
        if (proper_id[0] == "articleCM") {
            articleCMList[elem_num].productName = document.getElementById("articleCM_edit_productName_" + item_num).innerHTML;
            articleCMList[elem_num].image = document.getElementById("articleCM_edit_artwork_" + item_num).value;
            articleCMList[elem_num].textArea = document.getElementById("articleCM_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("articleCM_productName" + elem_num).innerHTML = articleCMList[elem_num].productName;
            document.getElementById("articleCM_image" + elem_num).src = articleCMList[elem_num].image;
            document.getElementById("articleCM_productDesc" + elem_num).innerHTML = articleCMList[elem_num].textArea;
        }
        if (proper_id[0] == "appCM") {
            appCMList[elem_num].images[1] = app_cover_images[0];
            appCMList[elem_num].images[2] = app_cover_images[1];
            appCMList[elem_num].images[3] = app_cover_images[2];
            appCMList[elem_num].productDesc = document.getElementById("appCM_edit_productDesc_" + item_num).innerHTML;
            appCMList[elem_num].reviews = [];
            for (var i = 0; i < countReviews; i++) {
                var x = document.getElementById("appCM_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    appCMList[elem_num].reviews.push(x);
                }
            }
            for (var i = 0; i < countFeatures; i++) {
                var x = document.getElementById("appCM_edit_feature" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    appCMList[elem_num].features.push(x);
                }
            }
            getAppsCM();
        }
        if (proper_id[0] == "musicCM") {
            musicCMList[elem_num].productName = document.getElementById("musicCM_edit_productName_" + item_num).innerHTML;
            musicCMList[elem_num].image = document.getElementById("musicCM_edit_artwork_" + item_num).value;
            musicCMList[elem_num].productDesc = document.getElementById("musicCM_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("musicCM_productName" + elem_num).innerHTML = musicCMList[elem_num].productName;
            document.getElementById("musicCM_image" + elem_num).src = musicCMList[elem_num].image;
            document.getElementById("musicCM_productDesc" + elem_num).innerHTML = "<b>Details: </b><br><br>" + musicCMList[elem_num].productDesc;
        }
        if (proper_id[0] == "productCM") {
            productCMList[elem_num].productName = document.getElementById("productCM_edit_productName_" + item_num).innerHTML;
            productCMList[elem_num].images[0] = document.getElementById("productCM_edit_artwork_" + item_num).value;
            productCMList[elem_num].productDesc = document.getElementById("productCM_edit_productDesc_" + item_num).innerHTML;
            productCMList[elem_num].productPrice = document.getElementById("productCM_edit_price_" + item_num).innerHTML;
            productCMList[elem_num].merchantName = document.getElementById("productCM_edit_merchantName" + item_num).innerHTML;
            productCMList[elem_num].size = document.getElementById("productCM_edit_size_" + item_num).innerHTML;
            productCMList[elem_num].color = document.getElementById("productCM_edit_color_" + item_num).innerHTML;
            productCMList[elem_num].rating = document.getElementById("productCM_edit_rating_" + item_num).innerHTML;
            productCMList[elem_num].brandName = document.getElementById("productCM_edit_brandName_" + item_num).innerHTML;
            productCMList[elem_num].material = document.getElementById("productCM_edit_material_" + item_num).innerHTML;
            productCMList[elem_num].location = document.getElementById("productCM_edit_location_" + item_num).innerHTML;
            productCMList[elem_num].cuisines = document.getElementById("productCM_edit_cuisines_" + item_num).innerHTML;
            productCMList[elem_num].reviews = [];
            productCMList[elem_num].features = [];
            for (var i = 0; i < countReviews; i++) {
                var x = document.getElementById("productCM_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productCMList[elem_num].reviews.push(x);
                }
            }
            for (var i = 0; i < countFeatures; i++) {
                var x = document.getElementById("productCM_edit_feature" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productCMList[elem_num].features.push(x);
                }
            }
            
            getProductsCM();
        }
        if (proper_id[0] == "articleDB") {
            articleDBList[elem_num].productName = document.getElementById("articleDB_edit_productName_" + item_num).innerHTML;
            articleDBList[elem_num].image = document.getElementById("articleDB_edit_artwork_" + item_num).value;
            articleDBList[elem_num].textArea = document.getElementById("articleDB_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("articleDB_productName" + elem_num).innerHTML = articleDBList[elem_num].productName;
            document.getElementById("articleDB_image" + elem_num).src = articleDBList[elem_num].image;
            document.getElementById("articleDB_productDesc" + elem_num).innerHTML = articleDBList[elem_num].textArea;
        }
        if (proper_id[0] == "appDB") {
            appDBList[elem_num].images[1] = app_cover_images[0];
            appDBList[elem_num].images[2] = app_cover_images[1];
            appDBList[elem_num].images[3] = app_cover_images[2];
            appDBList[elem_num].productDesc = document.getElementById("appDB_edit_productDesc_" + item_num).innerHTML;
            appDBList[elem_num].reviews = [];
            appDBList[elem_num].features = [];
            
            for (var i = 0; i < countReviews; i++) {
                var x = document.getElementById("appDB_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    appDBList[elem_num].reviews.push(x);
                }
            }
            for (var i = 0; i < countFeatures; i++) {
                var x = document.getElementById("appDB_edit_feature" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    appDBList[elem_num].features.push(x);
                }
            }
            getAppsDB();
        }
        if (proper_id[0] == "musicDB") {
            musicDBList[elem_num].productName = document.getElementById("musicDB_edit_productName_" + item_num).innerHTML;
            musicDBList[elem_num].image = document.getElementById("musicDB_edit_artwork_" + item_num).value;
            musicDBList[elem_num].productDesc = document.getElementById("musicDB_edit_productDesc_" + item_num).innerHTML;
            
            document.getElementById("musicDB_productName" + elem_num).innerHTML = musicDBList[elem_num].productName;
            document.getElementById("musicDB_image" + elem_num).src = musicDBList[elem_num].image;
            document.getElementById("musicDB_productDesc" + elem_num).innerHTML = "<b>Details: </b><br><br>" + musicDBList[elem_num].productDesc;
        }
        if (proper_id[0] == "productDB") {
            productDBList[elem_num].productName = document.getElementById("productDB_edit_productName_" + item_num).innerHTML;
            productDBList[elem_num].images[0] = document.getElementById("productDB_edit_artwork_" + item_num).value;
            productDBList[elem_num].productDesc = document.getElementById("productDB_edit_productDesc_" + item_num).innerHTML;
            productDBList[elem_num].productPrice = document.getElementById("productDB_edit_price_" + item_num).innerHTML;
            productDBList[elem_num].merchantName = document.getElementById("productDB_edit_merchantName" + item_num).innerHTML;
            productDBList[elem_num].size = document.getElementById("productDB_edit_size_" + item_num).innerHTML;
            productDBList[elem_num].color = document.getElementById("productDB_edit_color_" + item_num).innerHTML;
            productDBList[elem_num].rating = document.getElementById("productDB_edit_rating_" + item_num).innerHTML;
            productDBList[elem_num].brandName = document.getElementById("productDB_edit_brandName_" + item_num).innerHTML;
            productDBList[elem_num].material = document.getElementById("productDB_edit_material_" + item_num).innerHTML;
            productDBList[elem_num].location = document.getElementById("productDB_edit_location_" + item_num).innerHTML;
            productDBList[elem_num].cuisines = document.getElementById("productDB_edit_cuisines_" + item_num).innerHTML;
            productDBList[elem_num].reviews = [];
            productDBList[elem_num].features = [];
            for (var i = 0; i < countReviews; i++) {
                var x = document.getElementById("productDB_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productDBList[elem_num].reviews.push(x);
                }
            }
            for (var i = 0; i < countFeatures; i++) {
                var x = document.getElementById("productDB_edit_review" + item_num + "_" + i).innerHTML;
                if (x != "") {
                    productDBList[elem_num].reviews.push(x);
                }
            }
            
            getProductsDB();
        }
    
    createPreview();
    
    document.getElementById("edit_card_holder").remove();
    document.getElementById("edit").style.display = "none";
}

function cancelEdit() {
    createPreview();
    document.getElementById("edit_card_holder").remove();
    document.getElementById("edit").style.display = "none";
}