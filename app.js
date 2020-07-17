//preloader js
var load = document.querySelector(".load");
var main = document.querySelector(".main");
console.log("hello")
document.body.style.overflowY = "hidden";
window.load = loader();
function loader() {
    if(load){
      document.body.style.overflowY = "auto";
      load.style.display = "none";
      main.style.display = "block";
    }else{
        load.style.display = "none";
        main.style.display = "block";
    }
}

//preloader ends
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementById("myImg");
var img = document.getElementsByClassName("myimg");
var design = document.getElementsByClassName("design")
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var email = document.getElementsByClassName("email")
var submit = document.getElementsByClassName("submit");
var form = document.getElementsByClassName("form");
var forms = document.querySelector("#form")

for(i=0;i < img.length ; i++){
  img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    console.log(this.src);
    console.log("text")
    captionText.innerHTML = this.alt;
    for(i=0;i<design.length; i++){
      design[i].style.zIndex = -1;
     console.log("there")
    }
   
     
  }
 
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
    for(i=0;i<design.length; i++){
      design[i].style.zIndex = 99;
     console.log("there")
    }
  }
}