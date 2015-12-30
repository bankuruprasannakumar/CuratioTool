function getArticlesDB() {
    var block = 1;
    for (var i = 0; i < articleDBList.length; i++) {
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "articleDB#" + i;
        
        document.getElementById("articleDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "articleDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'articleDB_image" + i + "'></center>";

        document.getElementById("articleDB#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("articleDB_image" + i);
        newImage.className = "images";
        var image_url = articleDBList[i].image;
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "articleDB_productName" + i;
        newTitle.href = articleDBList[i].productUrl;
        newTitle.innerHTML = articleDBList[i].productName;
        
        document.getElementById("articleDB#" + i).appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "articleDB_productDesc" + i;
        newDesc.innerHTML = articleDBList[i].textArea;
        
        document.getElementById("articleDB#" + i).appendChild(newDesc);
        document.getElementById("articleDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}