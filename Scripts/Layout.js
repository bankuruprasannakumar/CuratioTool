function changeTab(x) {
    document.getElementById("card_holder_products").style.display = "none";
    document.getElementById("card_holder_articles").style.display = "none";
    document.getElementById("card_holder_apps").style.display = "none";
    document.getElementById("card_holder_music").style.display = "none";

    document.getElementById(x).style.display = "block";

    document.getElementById("card_holder_products_tab").className = "tab";
    document.getElementById("card_holder_articles_tab").className = "tab";
    document.getElementById("card_holder_apps_tab").className = "tab";
    document.getElementById("card_holder_music_tab").className = "tab";

    document.getElementById(x + "_tab").className = "selected_tab";
}

function changeTabDB(x) {
    document.getElementById("card_holder_productsDB").style.display = "none";
    document.getElementById("card_holder_articlesDB").style.display = "none";
    document.getElementById("card_holder_appsDB").style.display = "none";
    document.getElementById("card_holder_musicDB").style.display = "none";

    document.getElementById(x).style.display = "block";

    document.getElementById("card_holder_productsDB_tab").className = "tab";
    document.getElementById("card_holder_articlesDB_tab").className = "tab";
    document.getElementById("card_holder_appsDB_tab").className = "tab";
    document.getElementById("card_holder_musicDB_tab").className = "tab";

    document.getElementById(x + "_tab").className = "selected_tab";
}

function switchSearch() {
    var elem1 = document.getElementById("search_card_holder").style;
    var elem2 = document.getElementById("searchDB_card_holder").style;
    
    if (elem2.display == "none") {
        elem1.display = "none";
        elem2.display = "block";
    }
    else {
        elem2.display = "none";
        elem1.display = "block";
    }
}

function setCategory(val) {
    document.getElementById("category").value = val;
}