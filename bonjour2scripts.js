function clickIt()
{
  var firstName= document.getElementById('firstName');
  var myBanner= document.getElementById("myBanner");
  myBanner.innerHTML=  firstName.value;
  //alert(firtName.value);
}
function what(){
  var pets = document.getElementById("pets");
  if(pets.value === 'cats'){
  
  alert("buy scratch post;")  
  }
  else if(pets.value ==='dogs'){
  alert("buy chew toys")  
  }
  else if(pets.value === 'bunnys'){
    alert("buy carrots")
  }
  
}

function what2(){
  var pets = document.getElementById("pets2");
  
  switch (pets.value){
    case "cats":
      alert("buy scratch post");
      break;
    case "dogs":
      alert("buy chew toys");
      break;
    case "bunnys":
      alert("buy carrotts");
      break;
  }
}
  
 function favPresidentClicked(){
   
   var favoritePresdient = document.getElementById('favoritePresident');
   
   switch (favoritePresdient.value) {
     case "Washington":
      alert ("He was the first president!      ");
      break;
    case "Lincoln":
      alert("He was the 16th president!");
      break;
   
   default :
     alert("Thats interesting!"); 
   }
  
 } 

function favFoodClicked() {
  var favoriteFood = document.getElementById('favoriteFood');
  
  var myDiv1 = document.getElementById('myDiv1');
  var i;
  
  for (i=0; i < 5; i++){
      myDiv1.innerHTML = myDiv1.innerHTML + favoriteFood.value + '<br>';
    }
}
