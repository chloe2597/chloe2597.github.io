function ScoreQuiz(){
  alert("in ScoreQuiz 3()");
  
  var TotalQuestions=4;
  var TotalCorrect=0;
  
  var q1q = document.getElementById("q1q");
  var q1qText = q1q.innerHTML;
 
  
  var q1 = document.getElementById("q1");
  var q1UserAnswer = q1.value;
  var q1Answer = "Bonjour";
  
  if(q1UserAnswer === q1Answer){
    var message = "Yes! " + q1Answer + " is French for " + q1qText;
    TotalCorrect = TotalCorrect + 1;
    alert(message);
  }
  else{
    var message = "No! " + q1Answer + " is French for " + q1qText;
    alert(message);
  }  

  
}
var q3q = document.getElementById("q3q");
  var q3qText = q3q.innerHTML;
  
  var q3 = document.getElementById("q3");
  var q3UserAnswer = q3.value;
  var q3Answer = "Je m'appelle";
  
  if(q3UserAnswer === q3Answer){
    var message = "Yes! " + q3Answer + " is French for " + q3qText;
    alert(message);
    TotalCorrect = TotalCorrect + 1;
  }
  else{
    var message = "No! " + q3Answer + " is French for " + q3qText;
    alert(message);
   
  }
  
