function getMusicDB() {
    for (var i = 0; i < musicDBList.length; i++) {
        musicDBList[i].contentType = "LISTEN";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "musicDB#" + i;

        document.getElementById("musicDB_card_col_" + block.toString()).appendChild(newCard);
        block++;
        if (block == 5) { block = 1; }

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "musicDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'musicDB_image" + i + "'></center>";

        document.getElementById("musicDB#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("musicDB_image" + i);
        newImage.className = "images";
        var image_url = musicDBList[i].image;
        newImage.src = image_url;

        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "musicDB_productName" + i;
        newTitle.href = musicDBList[i].productUrl;
        newTitle.innerHTML = musicDBList[i].productName;

        document.getElementById("musicDB#" + i).appendChild(newTitle);

        var newUser = document.createElement("DIV");
        newUser.innerHTML = musicDBList[i].contributor;
        newUser.setAttribute("style", "position: relative; float: right; font-size: 16px;")
        document.getElementById("musicDB#" + i).appendChild(newUser);

        var details = (musicDBList[i].productDesc);
        details = (details.substring(0, details.lastIndexOf(".") + 1));
        var newDesc = document.createElement("DIV");
        newDesc.id = "musicDB_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = details;

        document.getElementById("musicDB#" + i).appendChild(newDesc);
        document.getElementById("musicDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}