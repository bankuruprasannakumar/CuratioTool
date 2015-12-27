var lastfm;

function getMusic() {
    
    lastfm = new LastFM({
      apiKey    : 'b006efe6884290a414b43d4e2c4eee09',
      apiSecret : '91e6e5ef18a320fb574bb326384b6a1f'
    });
    
    var block = 1;
    musicList = JSON.parse('[]');
    var len;
    lastfm.track.search({track: search_query}, {success: function(tracks){
        var temp = tracks.results.trackmatches.track;
        len = temp.length;
        for (var i = 0; i < len; i++) {
            musicList.push({});
            musicList[i].contributor = temp[i].artist;
            musicList[i].contentType = "LISTEN";
            musicList[i].image = temp[i].image[3]['#text'];
            musicList[i].productUrl = temp[i].url;
            musicList[i].productName = temp[i].name;
            
            var newDesc = document.createElement("DIV");
            newDesc.id = "music_desc" + i;
            newDesc.className = "descriptions";
            
            musicList[i].contentType = "LISTEN";
            var newCard = document.createElement("DIV");
            newCard.className = "cards";
            newCard.id = "music#" + i;

            document.getElementById("music_card_col_" + block.toString()).appendChild(newCard);
            block++;
            if (block == 5) { block = 1; }
            
            var newSelectBar = document.createElement("DIV");
            newSelectBar.setAttribute("style", "width: 100%; min-height: 200px; margin-bottom: 20px; background: rgba(0, 0, 0, 0.05);");
            newSelectBar.id = "music#select#" + i;
            newSelectBar.setAttribute("onclick", "selectItem(this)");
            
            document.getElementById("music#" + i).appendChild(newSelectBar);
            
            var newImage = document.createElement("IMG");
            newImage.className = "images";
            var image_url = musicList[i].image;
            newImage.id = "music_image" + i;
            if (image_url != null) {
                musicList[i].image = image_url;
                newImage.src = image_url;
                document.getElementById("music#select#" + i).appendChild(newImage);
            }
                
            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.id = "music_productName" + i;
            newTitle.href = musicList[i].productUrl;
            newTitle.innerHTML = musicList[i].productName;

            document.getElementById("music#" + i).appendChild(newTitle);

            var newUser = document.createElement("DIV");
            newUser.innerHTML = musicList[i].contributor;
            newUser.setAttribute("style", "position: relative; float: right; font-size: 16px;")
            document.getElementById("music#" + i).appendChild(newUser);

            document.getElementById("music#" + i).appendChild(newDesc);


            document.getElementById("music#select#" + i).setAttribute("onclick", "selectItem(this.id)");
        }
    }});
    setTimeout(function() {
    var count = 0;
        var timer = setInterval(function(){
            if (len == 0) {clearInterval(timer); return;}
            if (count == len-1) {clearInterval(timer);}
            lastfm.artist.getInfo({artist: (musicList[count].contributor), track: (musicList[count].productName)}, {success: function(data){
                document.getElementById("music_desc" + count).innerHTML = data.artist.bio.summary;
                musicList[count].productDesc = data.artist.bio.summary;
                count++;
            }});
    }, 2000);
        
    }, 5000);
    
    SC.initialize({
        client_id: '62e275c5c1f0cfcdcd716484efdf0884'
    });

    var block = 1;
    var t;
    SC.get('/tracks', {q: search_query}).then(function(tracks) {
        t = tracks.length;
        for (var i = len; i < len + t; i++) {
            musicList.push({});
            musicList[i].productName = tracks[i-len].title;
            musicList[i].contributor = tracks[i-len].user.username;
            musicList[i].image = tracks[i-len].artwork_url;
            musicList[i].productUrl = tracks[i-len].permalink_url;
            musicList[i].productDesc = tracks[i-len].description;
            musicList[i].contentType = "LISTEN";

            var newCard = document.createElement("DIV");
            newCard.className = "cards";
            newCard.id = "music#" + i;

            document.getElementById("music_card_col_" + block.toString()).appendChild(newCard);
            block++;
            if (block == 5) { block = 1; }

            var newSelectBar = document.createElement("DIV");
            newSelectBar.setAttribute("style", "width: 100%; min-height: 200px; margin-bottom: 20px; background: rgba(0, 0, 0, 0.05);");
            newSelectBar.id = "music#select#" + i;
            newSelectBar.setAttribute("onclick", "selectItem(this)");

            document.getElementById("music#" + i).appendChild(newSelectBar);

            var newImage = document.createElement("IMG");
            newImage.className = "images";
            var image_url = musicList[i].image;
            newImage.id = "music_image" + i;
            if (image_url != null) {
                musicList[i].image = image_url.replace("large.jpg", "t500x500.jpg");
                newImage.src = musicList[i].image;
                document.getElementById("music#select#" + i).appendChild(newImage);
            }

            var newTitle = document.createElement("A");
            newTitle.target = "_blank";
            newTitle.className = "productNames";
            newTitle.id = "music_productName" + i;
            newTitle.href = musicList[i].productUrl;
            newTitle.innerHTML = musicList[i].productName;

            document.getElementById("music#" + i).appendChild(newTitle);

            var newUser = document.createElement("DIV");
            newUser.innerHTML = musicList[i].contributor;
            newUser.setAttribute("style", "position: relative; float: right; font-size: 16px;")
            document.getElementById("music#" + i).appendChild(newUser);

            var newDesc = document.createElement("DIV");
            newDesc.id = "music_desc" + i;
            newDesc.className = "descriptions";
            newDesc.innerHTML = musicList[i].productDesc;

            document.getElementById("music#" + i).appendChild(newDesc);
            document.getElementById("music#select#" + i).setAttribute("onclick", "selectItem(this.id)");
        }
    });
}