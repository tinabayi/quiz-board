//User input
$(document).ready(function() {
  $("#question form").submit(function(event) {

 var questions=["question1","question2","question2","question4"];
    //Business logic
    var score = 0;
    questions.forEach(function(question){
        var userInput=$("input:radio[name=" + question + "]:checked").val();
    if (userInput === "right") {
      score += 10;
    }
    
    });
    
    
    
    
    $(".mark").text(score);
    $("#points").show();
    event.preventDefault();


});

});
