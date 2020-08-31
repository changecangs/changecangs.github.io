function show(a) {
    var x = document.getElementById(a);
    x.style.display = "block";
  }

function hide(a) {
    var x = document.getElementById(a);
    x.style.display = "none";
}

function myProfile(){
    show("myProfile");
    hide("whatIDo");
    hide("contact")
}
function whatIDo(){
    hide("myProfile");
    show("whatIDo");
    hide("contact")
}
function contact(){
    hide("myProfile");
    hide("whatIDo");
    show("contact")
}