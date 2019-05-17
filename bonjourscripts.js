function ScoreQuiz(){
  alert("in ScoreQuiz 2()");
  
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
  
