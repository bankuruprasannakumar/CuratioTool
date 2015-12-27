var articleDBList = itemsDB.;

function getDBArticles() {
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
        newTitle.className = "titles";
        newTitle.className = "articleDB_title" + i;
        newTitle.href = articleDBList[i].productUrl;
        newTitle.innerHTML = (articleDBList[i].title).replace('"', "'");
        
        document.getElementById("articleDB#" + i).appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "descriptions";
        newDesc.id = "articleDB_desc" + i;
        newDesc.innerHTML = (articleDBList[i].textArea).replace('"', "'");
        
        document.getElementById("articleDB#" + i).appendChild(newDesc);
        document.getElementById("articleDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}