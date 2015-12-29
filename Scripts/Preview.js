var selected_items_id = [];
var selected_items = [];
var selected_itemsCM = [];

function selectItem(element_id) {
    
    if (contentIdGlobal != null) {
    
        var proper_id = element_id.split("#")[0] + '#' + element_id.split("#")[2];
        var item_index = selected_items_id.indexOf(proper_id);
        if (item_index == -1) {
            if (selected_items_id.length == 20) {
                alert("Sorry! You can select only 20 items");
                return;
            }

            selected_items_id.push(proper_id);

            if (proper_id.indexOf("CM") == -1) {
                document.getElementById(proper_id).style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 1)";
                document.getElementById(proper_id).style.background = "rgba(0, 0, 0, 0.1)";
            }
        }

        else {
            for (var num = item_index; num < selected_items_id.length - 1; num++) {
                selected_items_id[num] = selected_items_id[num+1];
            }

            selected_items_id.pop();

            if (proper_id.indexOf("CM") == -1) {
                document.getElementById(proper_id).style.boxShadow = "-1px 1px 2px rgba(0, 0, 0, 0.1)";
                document.getElementById(proper_id).style.background = "rgba(256, 256, 256, 0.35)";
            }
        }

        document.getElementById("selected_items_num").innerHTML = "Number of Selected Items: " + selected_items_id.length;
    }
    else {
        alert("Please choose a content-id first!");
    }
}

function hidePreview() {
    document.getElementById("preview_card_holder").remove();
    document.getElementById("preview").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("search_card_holder").style.opacity = 1;
    document.getElementById("searchDB_card_holder").style.opacity = 1;
}

function createPreview() {
    selected_items = [];
    var newCardHolder = document.createElement("DIV");
    newCardHolder.setAttribute("style", "width: 100%; position: absolute; top: 40px; height: calc(100% - 40px); overflow: scroll; background: rgba(211, 212, 229, 0.9);");
    newCardHolder.id = "preview_card_holder";
    
    document.getElementById("preview").appendChild(newCardHolder);
    
    for (var item_num = 0; item_num < selected_items_id.length; item_num++) {
        var newCard = document.createElement("DIV");
        newCard.id = "preview_card_" + item_num;
        newCard.className = "cards";
        newCard.setAttribute("style", "width: 22%; margin: 10px .5% 10px .5%; height: 400px; overflow: scroll;");
        
        document.getElementById("preview_card_holder").appendChild(newCard);
        var proper_id = selected_items_id[item_num].split("#");

        var newButton = document.createElement("BUTTON");
        newButton.className = "edit_buttons";
        newButton.setAttribute("style", "background-image: url('http://uxrepo.com/static/icon-sets/windows/png32/512/000000/delete-512-000000.png');")
        newButton.id = proper_id[0] + "#delete#" + item_num;
        newButton.setAttribute("onclick", "deleteElement(this.id)");

        document.getElementById("preview_card_" + item_num).appendChild(newButton);
        
        var newButton = document.createElement("BUTTON");
        newButton.className = "edit_buttons";
        newButton.id = proper_id[0] + "#edit#" + item_num;
        newButton.setAttribute("onclick", "editElement(this.id)");

        document.getElementById("preview_card_" + item_num).appendChild(newButton);

        var newOrderText = document.createElement("INPUT");
        newOrderText.type = "text";
        newOrderText.className = "edit_buttons";
        newOrderText.setAttribute("style", "padding: 0px; text-align: center; font-weight: 600; font-size: 18px; background-image: none; overflow: scroll; padding: 3px; white-space: nowrap;");
        newOrderText.id = proper_id[0] + "#order#" + item_num;
        newOrderText.setAttribute("value", (item_num+1).toString());

        document.getElementById("preview_card_" + item_num).appendChild(newOrderText);

        document.getElementById("preview_card_" + item_num).innerHTML += document.getElementById(selected_items_id[item_num]).innerHTML;
    }
    
    document.getElementById("preview").style.display = "block";
    document.getElementById("search_card_holder").style.opacity = .3;
    document.getElementById("searchDB_card_holder").style.opacity = .3;
    document.body.style.overflow = "hidden";
}

function orderPreview() {
    var order_items = [];
    for (var i = 0; i < selected_items_id.length; i++) {
        order_items.push("");
    }
    for (var i = 0; i < selected_items_id.length; i++) {
        var x = document.getElementById(selected_items_id[i].split("#")[0] + "#order#" + i).value;
        if (order_items[x-1] == "") {
            order_items[x-1] = selected_items_id[i];
        }
        else {
            order_items = selected_items_id;
            alert("Invalid Order!");
            break;
        }
    }
    selected_items_id = order_items;
    hidePreview();
    createPreview();
}

function uploadItems() {
    
    if (contentIdGlobal == null) {
        alert("Please Choose a Content Id first.");
    }
    else {
        var uploadData = JSON.parse('{"contentId":' + contentIdGlobal.toString() + '}');
        uploadData.products = selected_items;
        var xhr = new XMLHttpRequest();
        xhr.open("post", "http://appdemo.ops.ev1.inmobi.com:4020/uploadProducts", false);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                
                if (xhr.responseText == "true") {
                    alert("Successfully Uploaded");
                    createContentColumn();
                }
                else {
                    alert("Unable to upload contents!");
                }
            }
        }
        xhr.send(JSON.stringify(uploadData));
    }
}

function deleteElement(elem_id) {
    var proper_id = selected_items_id[elem_id.split("#")[2]].split("#");
    selectItem(proper_id[0] + "#delete#" + proper_id[1]);
    hidePreview();
    createPreview();
}
