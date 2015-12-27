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
        newSelectBar.setAttribute("style", "width: 100%; min-height: 200px; margin-bottom: 20px; background: rgba(0, 0, 0, 0.05);");
        newSelectBar.id = "musicDB#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");

        document.getElementById("musicDB#" + i).appendChild(newSelectBar);

        var newImage = document.createElement("IMG");
        newImage.className = "images";
        var image_url = musicDBList[i].image;
        newImage.id = "musicDB_image" + i;
        if (image_url != null) {
            musicDBList[i].image = image_url;
            newImage.src = musicDBList[i].image;
            document.getElementById("musicDB#select#" + i).appendChild(newImage);
        }

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
        newDesc.id = "musicDB_desc" + i;
        newDesc.className = "descriptions";
        newDesc.innerHTML = details;

        document.getElementById("musicDB#" + i).appendChild(newDesc);
        document.getElementById("musicDB#select#" + i).setAttribute("onclick", "selectItem(this.id)");
    }
}