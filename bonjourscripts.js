function ScoreQuiz(){
  alert("in ScoreQuiz 3()");
  ///===============================
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
  
  
  
  
  //==================================
  }
  
