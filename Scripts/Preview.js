var selected_items_id = [];
var selected_items = [];
var selected_itemsCM = [];

function selectItem(element_id) {
    
    if (contentIdGlobal != '') {
    
        var proper_id = element_id.split("#")[0] + '#' + element_id.split("#")[2];
        var item_index = selected_items_id.indexOf(proper_id);
        if (item_index == -1) {

            if (selected_items_id.length == 20) {
                alert("Sorry! You can select only 20 items");
                return;
            }

            selected_items_id.push(proper_id);

            if (proper_id.indexOf("CM") == -1) {
                document.getElementById(proper_id).style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
                document.getElementById(proper_id).style.background = "rgba(0, 0, 0, 0.1)";
            }
        }

        else {

            for (var num = item_index; num < selected_items_id.length - 1; num++) {
                selected_items_id[num] = selected_items_id[num+1];
            }

            selected_items_id.pop();

            if (proper_id.indexOf("CM") == -1) {
                document.getElementById(proper_id).style.boxShadow = "-1px 1px 2px rgba(0, 0, 0, 0.1)";
                document.getElementById(proper_id).style.background = "rgba(256, 256, 256, 0.35)";
            } 
        }

        document.getElementById("selected_items_num").innerHTML = "Number of Selected Items: " + selected_items_id.length;
    }
    else {
        alert("Please choose a content-id first!");
    }
}

function hidePreview() {
    document.getElementById("preview_card_holder").remove();
    document.getElementById("preview").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("search_card_holder").style.opacity = 1;
    document.getElementById("searchDB_card_holder").style.opacity = 1;
}

function createPreview() {
    selected_items = [];
    var newCardHolder = document.createElement("DIV");
    newCardHolder.setAttribute("style", "width: 100%; position: absolute; top: 40px; height: calc(100% - 40px); overflow: scroll; background: rgba(211, 212, 229, 0.9);");
    newCardHolder.id = "preview_card_holder";
    
    document.getElementById("preview").appendChild(newCardHolder);
    
    for (var item_num = 0; item_num < selected_items_id.length; item_num++) {
        var newCard = document.createElement("DIV");
        newCard.id = "preview_card_" + item_num;
        newCard.className = "cards";
        newCard.setAttribute("style", "width: 22%; margin: 10px .5% 10px .5%; height: 400px; overflow: scroll;");
        
        document.getElementById("preview_card_holder").appendChild(newCard);
        var proper_id = selected_items_id[item_num].split("#");
        
        if (proper_id[0] == "article") {
            var article_num = parseInt(proper_id[1]);
            
            selected_items.push(articleList[article_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "article#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "article#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.setAttribute("style", "margin-bottom: 15px; min-height: 20px;")
            var image_url = articleList[article_num].image;
            if (image_url != "" || image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = articleList[article_num].productUrl;
            newTitle.innerHTML = (articleList[article_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (articleList[article_num].textArea);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "app") {
            var app_num = parseInt(proper_id[1]);
            
            selected_items.push(appList[app_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "app#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "app#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = appList[app_num].images[0];
            newImage.src = image_url;

            document.getElementById("preview_card_" + item_num).appendChild(newImage);

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = appList[app_num].productUrl;
            newTitle.innerHTML = (appList[app_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (appList[app_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "music") {
            var music_num = parseInt(proper_id[1]);
            
            selected_items.push(musicList[music_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "music#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "music#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = musicList[music_num].image;
            if (image_url != "" && image_url != null) {
                image_url = image_url.replace("large.jpg", "t500x500.jpg")
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = musicList[music_num].productUrl;
            newTitle.innerHTML = (musicList[music_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (musicList[music_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "product") {
            var product_num = parseInt(proper_id[1]);
            
            selected_items.push(productList[product_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "product#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "product#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = productList[product_num].images[0];
            if (image_url != "" && image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = productList[product_num].productUrl;
            newTitle.innerHTML = (productList[product_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (productList[product_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
    
    //#########################################################################################
    
    if (proper_id[0] == "articleCM") {
            var articleCM_num = parseInt(proper_id[1]);
            
            selected_items.push(articleCMList[articleCM_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "articleCM#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "articleCM#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.setAttribute("style", "margin-bottom: 15px; min-height: 20px;")
            var image_url = articleCMList[articleCM_num].image;
            if (image_url != "" || image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = articleCMList[articleCM_num].productUrl;
            newTitle.innerHTML = (articleCMList[articleCM_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (articleCMList[articleCM_num].textArea);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "appCM") {
            var appCM_num = parseInt(proper_id[1]);
            
            selected_items.push(appCMList[appCM_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "appCM#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "appCM#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = appCMList[appCM_num].images[0];
            newImage.src = image_url;

            document.getElementById("preview_card_" + item_num).appendChild(newImage);

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = appCMList[appCM_num].productUrl;
            newTitle.innerHTML = (appCMList[appCM_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (appCMList[appCM_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "musicCM") {
            var musicCM_num = parseInt(proper_id[1]);
            
            selected_items.push(musicCMList[musicCM_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "musicCM#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "musicCM#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = musicCMList[musicCM_num].image;
            if (image_url != "" && image_url != null) {
                image_url = image_url.replace("large.jpg", "t500x500.jpg")
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = musicCMList[musicCM_num].productUrl;
            newTitle.innerHTML = (musicCMList[musicCM_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (musicCMList[musicCM_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "productCM") {
            var productCM_num = parseInt(proper_id[1]);
            
            selected_items.push(productCMList[productCM_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "productCM#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "productCM#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = productCMList[productCM_num].images[0];
            if (image_url != "" && image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = productCMList[productCM_num].productUrl;
            newTitle.innerHTML = (productCMList[productCM_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (productCMList[productCM_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);

            var newPrice = document.createElement("DIV");
            newPrice.setAttribute("style", "font-size: 14px; background: none; position: absolute; top: 50px; left: 100px; width: 350px; border: solid 1px lightblue; border-radius: 2px; height: 21px; overflow: scroll; padding: 3px; white-space: nowrap;");
            newPrice.className = "descriptions";
            newPrice.innerHTML = (productCMList[productCM_num].productPrice);

            document.getElementById("preview_card_" + item_num).appendChild(newPrice);

            document.getElementById("preview_card_").innerHTML += "<span style = 'position: absolute; top: 50px; left: 550px; font-size: 15px;'><b>Price: </b></span>";
        }
        
    //###################################################################################

        if (proper_id[0] == "articleDB") {
            var articleDB_num = parseInt(proper_id[1]);
            
            selected_items.push(articleDBList[articleDB_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "articleDB#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "articleDB#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.setAttribute("style", "margin-bottom: 15px; min-height: 20px;")
            var image_url = articleDBList[articleDB_num].image;
            if (image_url != "" || image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
        }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = articleDBList[articleDB_num].productUrl;
            newTitle.innerHTML = (articleDBList[articleDB_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (articleDBList[articleDB_num].textArea);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "appDB") {
            var appDB_num = parseInt(proper_id[1]);
            
            selected_items.push(appDBList[appDB_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "appDB#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "appDB#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = appDBList[appDB_num].images[0];
            newImage.src = image_url;

            document.getElementById("preview_card_" + item_num).appendChild(newImage);

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = appDBList[appDB_num].productUrl;
            newTitle.innerHTML = (appDBList[appDB_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (appDBList[appDB_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "musicDB") {
            var musicDB_num = parseInt(proper_id[1]);
            
            selected_items.push(musicDBList[musicDB_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "musicDB#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "musicDB#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = musicDBList[musicDB_num].image;
            if (image_url != "" && image_url != null) {
                image_url = image_url.replace("large.jpg", "t500x500.jpg")
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = musicDBList[musicDB_num].productUrl;
            newTitle.innerHTML = (musicDBList[musicDB_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (musicDBList[musicDB_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
        
        if (proper_id[0] == "productDB") {
            var productDB_num = parseInt(proper_id[1]);
            
            selected_items.push(productDBList[productDB_num]);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.id = "productDB#edit#" + item_num;
            newButton.setAttribute("onclick", "editElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);

            var newButton = document.createElement("BUTTON");
            newButton.className = "edit_buttons";
            newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
            newButton.id = "productDB#delete#" + item_num;
            newButton.setAttribute("onclick", "deleteElement(this.id)");
            
            document.getElementById("preview_card_" + item_num).appendChild(newButton);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            newImage.style.marginBottom = "15px";
            var image_url = productDBList[productDB_num].images[0];
            if (image_url != "" && image_url != null) {
                newImage.src = image_url;
                document.getElementById("preview_card_" + item_num).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.href = productDBList[productDB_num].productUrl;
            newTitle.innerHTML = (productDBList[productDB_num].productName);

            document.getElementById("preview_card_" + item_num).appendChild(newTitle);

            var newDesc = document.createElement("DIV");
            newDesc.className = "descriptions";
            newDesc.innerHTML = (productDBList[productDB_num].productDesc);

            document.getElementById("preview_card_" + item_num).appendChild(newDesc);
        }
    }
    
    document.getElementById("preview").style.display = "block";
    document.getElementById("search_card_holder").style.opacity = .3;
    document.getElementById("searchDB_card_holder").style.opacity = .3;
    document.body.style.overflow = "hidden";
}

function uploadItems() {
    
    if (contentIdGlobal == null) {
        alert("Please Choose a Content Id first.");
    }
    else {
        var uploadData = JSON.parse('{"contentId":' + contentIdGlobal.toString() + '}');
        uploadData.products = selected_items;
        var xhr = new XMLHttpRequest();
        xhr.open("post", "http://192.168.0.105:4005/uploadProducts", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                if (xhr.responseText == "true") {
                    alert("Successfully Uploaded");
                    createContentColumn();
                    loadContent(contentIdGlobal.toString());
                }
                else {
                    alert("Unable to upload contents!");
                }
            }
        }
        xhr.send(JSON.stringify(uploadData));
    }
}

function deleteElement(elem_id) {
    var proper_id = selected_items_id[elem_id.split("#")[2]].split("#");
    selectItem(proper_id[0] + "#delete#" + proper_id[1]);
    hidePreview();
    createPreview();
}