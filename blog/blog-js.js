
var currPage = document.location.href;

let Posts = ['posts1', 'posts2', 'posts3']
var nr;

function Page(){
    if(currPage.includes("pg")){
    nr = currPage.split('=')[1];
    }
    else{
        window.location = "?pg=1"
    }
    loadFile();
    console.log("pgnr: " + nr);
    var activeButton = document.querySelector(".p" + nr);
    activeButton.classList.add("active");
    if(nr <= 1){
        var PrevButton = document.querySelector(".page-item");
        PrevButton.classList.add("disabled")
    }
    if(nr >= 3){
        var NextButton = document.querySelector(".nextbtn");
        NextButton.classList.add("disabled")
    }
}
async function loadFile() {
    
    fetch('/blog/DataBase/' + Posts[nr - 1]+'.txt')
  .then(response => response.text())
  .then((data) => {
    var postData = data;
    for (let i = 0; i < 3; i++) {
        
        var postArray = postData.split("///");
    }
    for (let i = 0; i < 3; i++) {
        if(postArray[i].includes("###")){
            postData = postArray[i].replace(/###/, '<h3>');
            postArray[i] = postData.replace(/\/###/, '</h3>');
        }
        if(postArray[i].includes("##")){
            postData = postArray[i].replace(/##/, '<h2>');
            postArray[i] = postData.replace(/\/##/, '</h2>');
        }
        if(postArray[i].includes("#")){
            postData = postArray[i].replace(/#/, '<h1>');
            postArray[i] = postData.replace(/\/#/, '</h1>');
        }

    var post = document.querySelector(".blog-post-"+[i+1]);
    var expPost = document.querySelector(".blog-post-"+[i+1]+"-exp");
    post.innerHTML = postArray[i];
    noTitle = postArray[i].split(">")[3];
    
    expPost.innerHTML = noTitle;
    }

  })
}

function NextPage(){
    if(currPage.includes("pg")){
        nr = currPage.split('=')[1];
        page = parseInt(nr);
        window.location = "?pg=" + (page+1);
        }
}
function PrevPage(){
    if(currPage.includes("pg")){
        nr = currPage.split('=')[1];
        page = parseInt(nr);
        window.location = "?pg=" + (page-1);
        }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

async function Col(x, y){

    if(x == 1){
        cb1 = '#colbtn1'
        cb2 = '#colbtn2'
        var box = document.querySelector('#box1');
    }
    if(x == 2){
        cb1 = '#bp2-colbtn1'
        cb2 = '#bp2-colbtn2'
        var box = document.querySelector('#box2');
    }    
    if(x == 3){
        cb1 = '#bp3-colbtn1'
        cb2 = '#bp3-colbtn2'
        var box = document.querySelector('#box3');
    }
    var colbtn1 = document.querySelector(cb1);
    var colbtn2 = document.querySelector(cb2);

    colbtn2.classList.toggle("colbtnhide");
    colbtn1.classList.toggle("colbtnhide");
    box.classList.toggle("open");
    if(y == 2){
        colbtn1.style.opacity = 0;
        colbtn1.style.transition = "0.3s";
        await sleep(100);
        colbtn1.style.opacity = 1;
    }
}
// myInterval = setInterval(Page, 100);

function Scrolldown() {
    window.scrollTo({
        top: 100,
        behavior: 'smooth'
      });
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
}


setTimeout(function(){
    Scrolldown();
   }, 50);

setTimeout(function(){
    Scrolldown();
   }, 100);


   function ToggleScrollNav(){
       var scrollnav = document.querySelector("#bNav");

       var blogtext1 = document.querySelector(".blog-post-1");
       var blogtext1exp = document.querySelector(".blog-post-1-exp");
       var blogtext2 = document.querySelector(".blog-post-2");
       var blogtext2exp = document.querySelector(".blog-post-2-exp");
       var blogtext3 = document.querySelector(".blog-post-3");
       var blogtext3exp = document.querySelector(".blog-post-3-exp");

       blogtext1.classList.toggle("Text-Fade-Toggle");
       blogtext1exp.classList.toggle("Text-Fade-Toggle");
       blogtext2.classList.toggle("Text-Fade-Toggle");
       blogtext2exp.classList.toggle("Text-Fade-Toggle");
       blogtext3.classList.toggle("Text-Fade-Toggle");
       blogtext3exp.classList.toggle("Text-Fade-Toggle");
       scrollnav.classList.toggle("Scroll-Nav-Hide");
   }

