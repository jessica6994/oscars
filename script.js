//nav hover
var lis = document.getElementsByClassName("hoverlinks");
for(var i = 0 ; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
    this.classList.add("darkhover");
  });
  lis[i].addEventListener("mouseout", function(){
    this.classList.remove("darkhover");
  });
};

var body = document.querySelector("body");
