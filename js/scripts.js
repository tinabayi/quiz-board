$(document).ready(function(){
    $("#question form").submit(function(event) {
     
        var answer1Input = $("input:radio[name=question1]:checked").val();
        var answer2Input= $("input:radio[name=question2]:checked").val() ; 
         var answer3Input = $("input:radio[name=question3]:checked").val();
         var answer4Input = $("input:radio[name=question4]:checked").val();
         
           console.log(answer1Input, answer2Input,answer3Input,answer4Input);
           event.preventDefault();
    });

});