function getArticles() {
    
    for (var i = 1; i < 5; i++) {
        document.getElementById("article_card_col_" + i).innerHTML = "";
    }
    var i, block = 1;
    for (i = 0; i < articleList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "article#" + i;
        
        document.getElementById("article_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "article#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'article_image" + i + "'></center>";

        document.getElementById("article#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("article_image" + i);
        newImage.className = "images";
        var image_url = articleList[i].image;
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "article_productName" + i;
        newTitle.href = articleList[i].productUrl;
        newTitle.innerHTML = articleList[i].productName;
        
        document.getElementById("article#" + i).appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "article_productDesc" + i;
        newDesc.innerHTML = articleList[i].textArea;
        
        document.getElementById("article#" + i).appendChild(newDesc);
        document.getElementById("article#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
    
    alert("Articles Loaded");
}