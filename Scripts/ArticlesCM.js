function getArticlesCM() {
    var i, block = 1;
    for (i = 0; i < articleCMList.length; i++) {
        console.log(articleCMList[i]);
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "articleCM#" + i;
        
        document.getElementById("articleCM").appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "articleCM#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'articleCM_image" + i + "'></center>";

        document.getElementById("articleCM#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("articleCM_image" + i);
        newImage.className = "images";
        var image_url = articleCMList[i].image;
        newImage.src = image_url;
        
        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "articleCM_productName" + i;
        newTitle.href = articleCMList[i].productUrl;
        newTitle.innerHTML = articleCMList[i].productName;
        
        document.getElementById("articleCM#" + i).appendChild(newTitle);
        
        var newDesc = document.createElement("DIV");
        newDesc.className = "details";
        newDesc.id = "articleCM_productDesc" + i;
        newDesc.innerHTML = articleCMList[i].textArea;
        
        document.getElementById("articleCM#" + i).appendChild(newDesc);
    }
}