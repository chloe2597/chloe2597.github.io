function show1(){
  var bonjour = $("#bonjour")
  bonjour.fadeIn();
}
function hide1(){
  var bonjour = $("#bonjour")
  bonjour.fadeOut();
}
function show2(){
  var dogs = $("#dogs")
  dogs.FadeIn();
}
function hide2(){
  var dogs = $("#dogs")
  dogs.fadeOut();
}

function show3(){
  var cats = $("#cats")
  cats.fadeIn();
}
function hide3(){
  var cats = $("#cats")
  cats.fadeOut();
}


function showDogsHideCats(){
  var dogs = $("#dogs")
  dogs.fadeIn();

  var cats = $("#cats")
  cats.fadeOut();
}

function showCatsHideDogs(){
  var dogs = $("#dogs")
  dogs.fadeOut();

  var cats = $("#cats")
  cats.fadeIn();
}

function Animate(){
  var hi = $("#hello")
  $("#hello").animate({left:'500px'});
 }

function Animate1(){
  var hi = $("#hello")
  $("#hello").animate({left:'0'});
 }

function Animate2(){
  var hi = $("#hello")
  $("#hello").animate({top:'200px'});
 }
function Animate3(){
  var hi = $("#hello")
  $("#hello").animate({top:'100px'});
 }

function biggify(){
  var hi = $("#hello")
  hi.animate({width:'+=50px', height:'+=50px'});
 }
function smallify(){
  var hi = $("#hello")
  hi.animate({width:'-=50px', height:'-=50px'});
 }
