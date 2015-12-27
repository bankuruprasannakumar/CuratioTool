var productCMList = [];
var articleCMList = [];
var appCMList = [];
var musicCMList = [];
var contentIdList = [];

function createContentColumn(){
    
    document.getElementById("content_id_bar").innerHTML = "";
    
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://appdemo.ops.ev1.inmobi.com:4020/getContent", false);
    xhr.send();
    
    contentIdList = JSON.parse(xhr.responseText);
    
    for (var i = 0; i < contentIdList.length; i++) {
        var newContentId = document.createElement("DIV");
        newContentId.className = "contentId";
        newContentId.id = "content#" + i;
        newContentId.setAttribute("onclick", "loadContent(this.id)");
        newContentId.innerHTML = "ContentId:" + contentIdList[i].contentId + "<div style = 'float: right; font-size: 15px; font-weight: 400; color: rgba(0, 0, 256, 0.7); margin-right: 5px;'>" + contentIdList[i].count + "</div>" + "<div class = 'contentDesc'>" + contentIdList[i].contentDesc +"</div>";
        if (contentIdList[i].count == 20) {
            newContentId.setAttribute("style", "background: rgba(200, 256, 200, 0.5);");
        }
        document.getElementById("content_id_bar").appendChild(newContentId);
    }
    
    if (contentIdGlobal != '') {
        for (var i = 0; i < contentIdList.length; i++) {
            if (contentIdList[i].contentId == contentIdGlobal) {
                loadContent("content#" + i);
                break;
            }
        }
    }
}

function loadContent(elem_id) {
    
    for (var i = 0; i < contentIdList.length; i++) {
        document.getElementById("content#" + i).className = "contentId";
    }
    
    document.getElementById(elem_id).className = "contentIdSelected";
    
    var content_id = contentIdList[parseInt(elem_id.split("#")[1])].contentId;
    var xhr = new XMLHttpRequest();
    xhr.open("post", "http://appdemo.ops.ev1.inmobi.com:4020/getContentProducts", true);
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            contentIdGlobal = content_id;
            
            var itemList = JSON.parse(xhr.responseText);

            while (selected_items_id.length != 0) {
                var t = selected_items_id[0].split("#");
                selectItem(t[0] + "#select#" + t[1]);
            }

            selected_items = [];
            selected_items_id = [];

            productCMList = itemList.productsForBuyIt;
            articleCMList = itemList.productsForReadIt;
            appCMList = itemList.productsForDownload;
            musicCMList = itemList.productsForListenIt;

            addCMItems();
            
            document.getElementById("contentId").value = contentIdGlobal;
        }
    }
    xhr.send(content_id);
}

function addCMItems() {
    for (var i = 0; i < productCMList.length; i++) {
        selectItem("productCM#select#" + i);
    }
    for (var i = 0; i < articleCMList.length; i++) {
        selectItem("articleCM#select#" + i);
    }
    for (var i = 0; i < appCMList.length; i++) {
        selectItem("appCM#select#" + i);
    }
    for (var i = 0; i < musicCMList.length; i++) {
        selectItem("musicCM#select#" + i);
    }
}