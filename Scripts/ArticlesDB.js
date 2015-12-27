function getArticlesDB() {
    var i, block = 1;
    for (i = 0; i < articleDBList.length; i++) {
        console.log(articleDBList[i]);
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "articleDB#" + i;
        
        document.getElementById("articleDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }
        
        var newSelectBar = document.createElement("DIV");
        newSelectBar.setAttribute("style", "width: 100%; min-height: 100px; margin-bottom: 20px; background: rgba(0, 0, 0, 0.05);");
        newSelectBar.id = "articleDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        document.getElementById("articleDB#" + i).appendChild(newSelectBar);
        
        var newImage = document.createElement("IMG");
        newImage.className = "images";
        newImage.id = "articleDB_image" + i;
        if (articleDBList[i].image != "") {
            newImage.src = articleDBList[i].image;
            document.getElementById("articleDB#select#" + i).appendChild(newImage);
        }
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "articleDB_productName" + i;
        newTitle.href = articleDBList[i].productUrl;
        newTitle.innerHTML = articleDBList[i].productName;
        
        document.getElementById("articleDB#" + i).appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "descriptions";
        newDesc.id = "articleDB_desc" + i;
        newDesc.innerHTML = articleDBList[i].textArea;
        
        document.getElementById("articleDB#" + i).appendChild(newDesc);
        document.getElementById("articleDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}