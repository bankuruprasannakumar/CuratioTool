function getMusicCM() {
    document.getElementById("musicCM").innerHTML = "";
    for (var i = 0; i < musicCMList.length; i++) {
        musicCMList[i].contentType = "LISTEN";
        var newCard = document.createElement("DIV");
        newCard.className = "cards";
        newCard.id = "musicCM#" + i;

        document.getElementById("musicCM").appendChild(newCard);

        var newSelectBar = document.createElement("DIV");
        newSelectBar.className = "selectImages";
        newSelectBar.id = "musicCM#select#" + i;
        newSelectBar.setAttribute("onclick", "selectItem(this)");
        newSelectBar.innerHTML = "<center><img id = 'musicCM_image" + i + "'></center>";

        document.getElementById("musicCM#" + i).appendChild(newSelectBar);

        var newImage = document.getElementById("musicCM_image" + i);
        newImage.className = "images";
        var image_url = musicCMList[i].image;
        newImage.src = image_url;

        var newTitle = document.createElement("A");
        newTitle.target = "_blank";
        newTitle.className = "productNames";
        newTitle.id = "musicCM_productName" + i;
        newTitle.href = musicCMList[i].productUrl;
        newTitle.innerHTML = musicCMList[i].productName;

        document.getElementById("musicCM#" + i).appendChild(newTitle);

        var newUser = document.createElement("DIV");
        newUser.innerHTML = musicCMList[i].contributor;
        newUser.setAttribute("style", "position: relative; float: right; font-size: 16px;")
        document.getElementById("musicCM#" + i).appendChild(newUser);

        var details = (musicCMList[i].productDesc);
        details = (details.substring(0, details.lastIndexOf(".") + 1));
        var newDesc = document.createElement("DIV");
        newDesc.id = "musicCM_productDesc" + i;
        newDesc.className = "details";
        newDesc.innerHTML = details;

        document.getElementById("musicCM#" + i).appendChild(newDesc);
    }
}