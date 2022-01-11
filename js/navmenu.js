var t = false;

function ToggleNav() {
    var element = document.getElementById("nav-list");
    var element2 = document.getElementById("nav");
    var toggler = document.querySelector(".sticky");
    element.classList.toggle("toggle-show");
    element2.classList.toggle("toggle-show");
    toggler.classList.toggle("drawer");
 }

 var oldPage;
 var gotPage = false;
 var resizeX;

 function Reader(){
    var navbar = document.getElementById("nav-list");
    navbar.addEventListener("mouseover", StorePage);
 }


function StorePage(){
    if(!gotPage){
    var currPage = document.location.pathname;
    if(currPage == "/index.html"){
       oldPage = 1;
    }
    if(currPage == "/blog/index.html"){
        oldPage = 2;
    }
    if(currPage == "/product/index.html"){
        oldPage = 3;
    }
    if(currPage == "/contacts/index.html"){
        oldPage = 4;
    }
    if(currPage == "/contributors/index.html"){
        oldPage = 5;
    }
    sessionStorage.setItem("oldPage", oldPage);
    gotPage = true;
    console.log('Got page' + oldPage)
}
}


function NavHighlight(){
    oldPage = sessionStorage.getItem("oldPage");
    var currPage = document.location.pathname;
    var liHighlight = document.getElementById("nav-list");
    var slider = document.getElementById("slider");

    var position = slider.getBoundingClientRect();
    var x = position.left;

    if(currPage == "/index.html"){
        var firstchild = liHighlight.childNodes[1];
        var li = firstchild.childNodes[1].childNodes[1];
        var page = 1;
        slider.style.width = "115px"
    }
    if(currPage == "/blog/index.html"){
        var firstchild = liHighlight.childNodes[3];
        var page = 2;
        slider.style.width = "100px"
    }
    if(currPage == "/product/index.html" || currPage.includes("/product")){
        var firstchild = liHighlight.childNodes[5];
        var page = 3;
    }
    if(currPage == "/contacts/index.html"){
        var firstchild = liHighlight.childNodes[7];
        var page = 4;
    }
    if(currPage == "/contributors/index.html"){
        var firstchild = liHighlight.childNodes[9];
        var page = 5;
        slider.style.width = "170px"
    }
    firstchild.classList.toggle("curr-page");
    var position = firstchild.getBoundingClientRect();
    var currx = position.left
    console.log( "curr-page:  x: " + currx );


    if(oldPage == null){
        oldPage = page;
    }

    if(page == 4){
        slider.style.opacity = '1';
    }

    if(page < oldPage){
        var diff = oldPage - page;
        if(diff == 1){
            slider.style.left = currx + 100 + "px"
            slider.style.transform = "translateX(-100px)"
        }
        if(diff == 2){
            slider.style.left = currx + 200 + "px"
            slider.style.transform = "translateX(-200px)"
        }
        if(diff == 3){
            slider.style.left = currx + 300 + "px"
            slider.style.transform = "translateX(-300px)"
        }
        if(diff == 4){
            slider.style.left = currx + 400 + "px"
            slider.style.transform = "translateX(-400px)"
        }

    }
    if(page > oldPage){
        var diff = page - oldPage;
        if(diff == 1){
            slider.style.left = currx - 100 + "px"
            slider.style.transform = "translateX(100px)"
        }
        if(diff == 2){
            slider.style.left = currx - 200 + "px"
            slider.style.transform = "translateX(200px)"
        }
        if(diff == 3){
            slider.style.left = currx - 300 + "px"
            slider.style.transform = "translateX(300px)"
        }
        if(diff == 4){
            slider.style.left = currx - 400 + "px"
            slider.style.transform = "translateX(400px)"
        }
    }
    if(page == oldPage){
        slider.style.left = currx + "px";
    }

    console.log( "page: " + page);
    console.log( "oldPage " + oldPage);
}


// Saving this for later use so i dont have to google again

// function GetCoords(){
//     var element = document.getElementById("slider");

//     var position = element.getBoundingClientRect();
//     var x = position.left;
//     var y = position.top;
//     console.log( "x: " + x + " y: " + y);
// }

// myInterval = setInterval(GetCoords, 100);

function reportWindowSize() {
    var currPage = document.location.pathname;
    var slider = document.querySelector("#slider");
    var x = document.querySelector('.curr-page').getBoundingClientRect().left 

    slider.style.transition = ".0s";
    slider.style.left = x + "px";
    slider.style.transform = "translateX(0)"
    console.log("curr-page resizeX: " + x)
  }
  
  window.onresize = reportWindowSize;

myInterval = setInterval(Reader, 1);
 


// This part of the script belongs to the footer generating function
// the following code adds a script to the <head></head> section that generates the footer on all pages
// this way no replication of the same code needs to be done manually
window.addEventListener('load', (event) => {
    var footerscript = document.createElement('script');
    footerscript.src = '/js/footer.js';
    document.head.appendChild(footerscript);
});


