function ScoreQuiz(){
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
  ////////////////////////////////////
  var q2q = document.getElementById("q2q");
  var q2qText = q2q.innerHTML;
  
  var q2 = document.getElementById("q2");
  var q2UserAnswer = q2.value;
  var q2Answer = "Au Revoir";
  
  if(q2UserAnswer === q2Answer){
    var message = "Yes! " + q2Answer + " is French for " + q2qText;
    alert(message);
    TotalCorrect = TotalCorrect + 1;
  }
  else{
    var message = "No! " + q2Answer + " is French for " + q2qText;
    alert(message);
   
  }
  //////////////////////////////
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
  /////////////////////////////////
  var q4q = document.getElementById("q4q");
  var q4qText = q4q.innerHTML;
  
  var q4 = document.getElementById("q4");
  var q4UserAnswer = q4.value;
  var q4Answer = "Parlez vous anglais?";
  
  if(q4UserAnswer === q4Answer){
    var message = "Yes! " + q4Answer + " is French for " + q4qText;
    alert(message);
    TotalCorrect = TotalCorrect + 1;
  }
  else{
    var message = "No! " + q4Answer + " is French for " + q4qText;
    alert(message);
  }
  
//var message = "You got " + TotalCorrect + " out of 4 questions ";
 // alert(message);
  
  
  
  if(TotalQuestions === TotalCorrect){
    alert("Congratulations! You got 100%!")
   }
  else{
    var message = "You got " + TotalCorrect + " out of 4 questions ";
 alert(message);
  }
  
}
