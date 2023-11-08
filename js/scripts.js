
var tabLinks = document.getElementsByClassName('tab_links');
var tabContents = document.getElementsByClassName('tab_contents');


function opentab(tabname){

    for(tabLink of tabLinks){
        tabLink.classList.remove('active_link');
    }

    for(tabContent of tabContents){
        tabContent.classList.remove('active_tabs');
    }

    event.currentTarget.classList.add('active_link');
    document.getElementById(tabname).classList.add('active_tabs');

}


// Small Device Navbar Menu Responsive
 var sideMenuBar = document.getElementById('sideMenu');

function openMenu(){
    sideMenuBar.style.right = "0px";
}

function closeMenu(){
    sideMenuBar.style.right = "-200px";
}